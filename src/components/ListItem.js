import React from "react";
import { Link } from "gatsby";

const ListItem = (props) => {
  const item = props.link ? (
    <Link className="text-blue-primary" to={props.link}>
      {props.text}
    </Link>
  ) : (
    <p>{props.text}</p>
  );
  return <li>{item}</li>;
};

export default ListItem;
