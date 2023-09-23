import { useType } from "../../context";
import { useEffect, useState } from "react";
import type { LayoutList } from "./type";

interface KeyProp {
  value: string | string[];
}

interface LineProp {
  layout: LayoutList;
}
const Key = ({ value }: KeyProp) => {
  if (typeof value === "string") {
    return (
      <li className="key-nm text-key">
        <p className="text-key">{value}</p>
      </li>
    );
  } else {
    return (
      <li className="key-nm">
        {value.map((val) => (
          <p className="text-key">{val}</p>
        ))}
      </li>
    );
  }
};

const FirstLine = ({ layout }: LineProp) => {
  return (
    <>
      {layout.slice(0, 13).map((value) => (
        <Key value={value} />
      ))}
      <li className="text-key key-db">Backspace</li>
    </>
  );
};

const SecondLine = ({ layout }: LineProp) => {
  return (
    <>
      <li className="text-key key-oh">Tab</li>
      {layout.slice(13, 25).map((value) => (
        <Key value={value} />
      ))}
      <li className="key-oh">
        <p className="text-key ">|</p>
        <p className="text-key ">\</p>
      </li>
    </>
  );
};

const ThirdLine = ({ layout }: LineProp) => {
  return (
    <>
      <li className="text-key key-otq">Caps Lock</li>
      {layout.slice(25, 36).map((value) => (
        <Key value={value} />
      ))}
      <li className="text-key key-tq">Enter</li>
    </>
  );
};

const ForthLine = ({ layout }: LineProp) => {
  return (
    <>
      <li className="text-key key-tq">Shift</li>
      {layout.slice(36).map((value) => (
        <Key value={value} />
      ))}
      <li className="text-key key-ttq">Shift</li>
    </>
  );
};

const FifthLine = () => {
  return (
    <>
      <li className="text-key key-oq">Ctrl</li>
      <li className="text-key key-oq">Win</li>
      <li className="text-key key-oq">Alt</li>
      <li className="text-key key-space"></li>
      <li className="text-key key-oq">Alt</li>
      <li className="text-key key-oq">Win</li>
      <li className="text-key key-oq">Menu</li>
      <li className="text-key key-oq">Ctl</li>
    </>
  );
};

import type { LayoutModule } from "./type";

export const KeyboardLayout = () => {
  const type_context = useType();
  const [type, setType] = useState<LayoutList | null>(null);

  useEffect(() => {
    const name = type_context?.layout;
    if (name === "qwerty") {
      import("./qwerty").then((module: LayoutModule) => {
        const layout = module.default;
        setType(layout);
      });
    }
  }, []);

  return (
    type && (
      <ul className="d-flex flex-wrap sz-keyboard">
        <FirstLine layout={type} />
        <SecondLine layout={type} />
        <ThirdLine layout={type} />
        <ForthLine layout={type} />
        <FifthLine />
      </ul>
    )
  );
};
