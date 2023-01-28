import "./Card.css";
type ClassProps = {
  className: string;
  children: JSX.Element[];
};
const Card: React.FC<ClassProps> = (props) => {
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
};

export default Card;
