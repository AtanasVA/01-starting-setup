import express from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const app = express();
const port = 4000;
app.use(express.json());
app.get("/", async (_, res) => {
    const expenses = await prisma.expense.findMany();
    console.log(expenses);
    res.status(200).send(expenses);
});
app.post("/", async (req, res) => {
    const expense = await prisma.expense.create({
        data: {
            ...req.body,
            date: new Date(req.body.date),
        },
    });
    console.log(expense);
    res.status(201).send(expense);
});
app.delete("/:id", async (req, res) => {
    const { id } = req.params;
    await prisma.expense.delete({
        where: {
            id: id,
        },
    });
    res.status(200).send("The record has been deleted successfully.");
});
app.listen(port, () => console.log(`Running on port ${port}`));
//# sourceMappingURL=index.js.map