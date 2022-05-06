import { Route, useParams } from "react-router-dom";
import "./styles.scss";

interface Props {
  mesage: string;
}

export function Header(props: Props) {
  return (
    <header>
      <div className="text">
        <p>{props.mesage}</p>
      </div>
      <div className="divider"></div>
    </header>
  );
}
