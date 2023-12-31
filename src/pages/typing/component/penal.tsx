import { ArrowReturnLeft } from "react-bootstrap-icons";
import { useEffect } from "react";
import type { ReactNode } from "react";
import { useType } from "../context";

const Text = ({ val, id }: { val: string; id: number }) => {
  const {
    input: { buffer, index },
  } = useType();

  const is_new_line = val == "\n";
  const is_current = id == index;
  const is_wrong =
    id < 0 ? false : buffer.length - 1 < id ? false : buffer[id] != val;
  const is_correct = buffer.length - 1 < id ? false : buffer[id] == val;

  return (
    <span
      className={`${is_new_line ? "break_word" : ""} ${
        is_current ? "current" : ""
      } ${is_wrong ? "wrong" : ""} ${is_correct ? "correct" : ""} sz-one-word `}
      id={`${id}`}>
      {is_new_line ? (
        <>
          <ArrowReturnLeft />
          {val}
        </>
      ) : (
        val
      )}
    </span>
  );
};

const generateText = (
  data: string
): { max: number; components: ReactNode[] } => {
  let index = 0;
  let include = true;

  const components = [];
  for (const text of data.split("")) {
    if (text === " " && !include) {
      components.push(<Text id={-1} val={text} />);
    } else {
      components.push(<Text id={index} val={text} />);
      index++;
      include = text !== "\n";
    }
  }

  return { max: index, components };
};

export const Penal = () => {
  const {
    input: { init, finish, index },
    doc: { doc },
  } = useType();

  useEffect(() => {
    document.getElementById(`${index}`)?.scrollIntoView({
      behavior: "auto",
      block: "center",
    });
    console.log(document.getElementById(`${index}`));
  }, [finish, index]);

  if (!doc) return;

  const { max, components } = generateText(doc);
  init(max);
  return (
    <div className={`penal-container ${finish ? "penal-disable " : ""}`}>
      {components}
    </div>
  );
};
