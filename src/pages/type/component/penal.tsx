import { ArrowReturnLeft } from "react-bootstrap-icons";
import type { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { useType } from "./context";
import useSWR from "swr";

const fetcher = (url: string) =>
  fetch(url)
    .then((res) => res.text())
    .then((text) => text.replace(/\r\n/g, "\n"));

const Text = ({ val, id }: { val: string; id: number }) => {
  const {
    input: { buffer, index },
  } = useType();

  const is_new_line = val == "\n";
  const is_current = id == index;
  const is_wrong = buffer.length - 1 < id ? false : buffer[id] != val;
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
): { index: number; components: ReactNode[] } => {
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

  return { index, components };
};

export const Penal = () => {
  const { pathname } = useLocation();
  const { data } = useSWR(
    `/example/example.${pathname.split("/")[2]}`,
    fetcher
  );

  const {
    input: { init },
  } = useType();

  if (!data) return;

  const { index, components } = generateText(data);
  init(index);
  return <div className="penal-container">{components}</div>;
};
