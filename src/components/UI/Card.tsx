import "./Card.css";
type classProps = {
  className: string;
  children: JSX.Element[];
};
const Card: React.FC<classProps> = (props) => {
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
};

export default Card;
