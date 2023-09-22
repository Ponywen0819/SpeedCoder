import { Link } from "react-router-dom";
import "@/scss/component/opt-card.scss";

interface OptCardProp {
  name: string;
}

const translate = (name: string): string => {
  if (name === "python") return "py";
  if (name === "c#") return "cs";
  if (name === "c++") return "cpp";
  if (name === "javascript") return "js";
  return name;
};

export const OptCard = ({ name }: OptCardProp) => {
  return (
    <div className="sz-opt-card">
      <Link
        className="text-opt-link "
        to={`/type/${translate(name.toLocaleLowerCase())}`}>
        {name}
      </Link>
    </div>
  );
};
