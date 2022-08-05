import "./Card.css";

type Props = {
  className: string;
  children: React.ReactNode;
};

function Card(props: Props) {
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
}

export default Card;
