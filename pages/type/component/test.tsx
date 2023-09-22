import useSWR from "swr";
export const Test = () => {
  const { data: code } = useSWR(`/example/example.cs`);

  return <div></div>;
};
