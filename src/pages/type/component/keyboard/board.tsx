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

const valInKeys = (val: string, keys: string[], group: number): boolean => {
  if (!val) false;
  if (val == " " && keys[0] == "") return true;
  if (
    /[!@#$%^&*()__+QWERTYUIOP{}ASDFGHJKL:"ZXCVBNM<>?]/.test(val) &&
    keys[0] == "Shift" &&
    group === 1
  )
    return true;

  if (val == "\n" && keys[0] === "Enter") return true;
  return keys.indexOf(val.toUpperCase()) >= 0;
};

const Key = ({ keys, group, width }: keyboard_key_setting) => {
  const { active_group, current } = useType();
  return (
    <li
      className={`text-key ${width2class(width)} ${
        active_group[group] ? "key-active" : ""
      } ${valInKeys(current, keys, group) ? "key-focus" : ""}`}>
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
