import { useNavigate, useLocation } from "react-router-dom";
import type { ChangeEvent } from "react";

export const Language = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const language = location.pathname.split("/")[2];
  console.log(language);

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    navigate(`/type/${value}`);
  };

  return (
    <div className="info-container ">
      <p className="label">當前語言</p>
      <select className="language-select" onChange={onChange} value={language}>
        <option className="language-option" value={"c"}>
          C
        </option>
        <option className="language-option" value={"cpp"}>
          C++
        </option>
        <option className="language-option" value={"cs"}>
          C#
        </option>
        <option className="language-option" value={"go"}>
          GO
        </option>
        <option className="language-option" value={"java"}>
          Java
        </option>
        <option className="language-option" value={"js"}>
          JavaScript
        </option>
        <option className="language-option" value={"py"}>
          Python
        </option>
        <option className="language-option" value={"r"}>
          R
        </option>
      </select>
    </div>
  );
};
