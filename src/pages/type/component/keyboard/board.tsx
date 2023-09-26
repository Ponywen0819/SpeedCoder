import { useType } from "../context";
import type { keyboard_key_setting } from "../context/keyboard/index";

const width2class = (width: number): string => {
  if (width === 1) {
    return "key-nm";
  }
  if (width === 1.25) {
    return "key-oq ";
  }

  if (width === 1.5) {
    return "key-oh";
  }

  if (width === 1.75) {
    return "key-otq";
  }

  if (width === 2) {
    return "key-db";
  }

  if (width === 2.25) {
    return "key-tq";
  }

  if (width === 2.75) {
    return "key-ttq";
  }

  if (width === 6.25) {
    return "key-space";
  }
  return "";
};

const Key = ({ keys, group, width }: keyboard_key_setting) => {
  const { active_group } = useType();
  return (
    <li
      className={`text-key ${width2class(width)} ${
        active_group[group] ? "key-active" : ""
      }`}>
      {keys.map((v) => (
        <p className="text-key" key={v}>
          {v}
        </p>
      ))}
    </li>
  );
};

export const Keyboard = () => {
  const {
    keyboard: { layout },
  } = useType();

  return (
    <ul className="sz-keyboard d-flex flex-wrap">
      {layout.map((v, i) => (
        <Key key={i} {...v} />
      ))}
    </ul>
  );
};
