import { QWER } from "./keyboard_layout";
import { useType } from "./context";
import "@/scss/component/keyboard.scss";

interface KeyProp {
  value: string | string[];
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

const FirstLine = () => {
  return (
    <>
      {QWER.slice(0, 13).map((value) => (
        <Key value={value} />
      ))}
      <li className="text-key key-db">Backspace</li>
    </>
  );
};

const SecondLine = () => {
  return (
    <>
      <li className="text-key key-oh">Tab</li>
      {QWER.slice(13, 25).map((value) => (
        <Key value={value} />
      ))}
      <li className="key-oh">
        <p className="text-key ">|</p>
        <p className="text-key ">\</p>
      </li>
    </>
  );
};

const ThirdLine = () => {
  return (
    <>
      <li className="text-key key-otq">Caps Lock</li>
      {QWER.slice(25, 36).map((value) => (
        <Key value={value} />
      ))}
      <li className="text-key key-tq">Enter</li>
    </>
  );
};

const ForthLine = () => {
  return (
    <>
      <li className="text-key key-tq">Shift</li>
      {QWER.slice(36).map((value) => (
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
const Layout = () => {
  return (
    <ul className="d-flex flex-wrap sz-keyboard">
      <FirstLine />
      <SecondLine />
      <ThirdLine />
      <ForthLine />
      <FifthLine />
    </ul>
  );
};

export const Keyboard = () => {
  const type_context = useType();

  return <div>{type_context?.enable_keyboard && <Layout />}</div>;
};
