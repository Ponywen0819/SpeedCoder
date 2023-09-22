import { Link } from "react-router-dom";
import "@/scss/component/opt-card.scss";

interface OptCardProp {
  name: string;
}

export const OptCard = ({ name }: OptCardProp) => {
  return (
    <div className="sz-opt-card">
      <Link className="text-opt-link " to={`/type/${name.toLocaleLowerCase()}`}>
        {name}
      </Link>
    </div>
  );
};
