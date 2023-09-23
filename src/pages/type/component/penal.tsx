import { useState, useEffect } from "react";
import { ArrowReturnLeft } from "react-bootstrap-icons";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.text());

const Text = ({ val }: { val: string }) => {
  if (val === "\r") {
  } else if (val === "\n") {
    return (
      <span className="sz-one-word break_word">
        <ArrowReturnLeft />
        {val}
      </span>
    );
  }
  return <span className="sz-one-word current">{val}</span>;
};

const generateText = (data: string | undefined) => {
  if (!data) return;
  let index = 0;
  let include = false;
};

export const Penal = () => {
  const { data } = useSWR("/example/example.cpp", fetcher);

  return (
    <div className="penal-container">
      {data
        ?.replace(/\r\n/, "\n")
        .split("")
        .map((val) => (
          <Text val={val} />
        ))}
    </div>
  );
};
