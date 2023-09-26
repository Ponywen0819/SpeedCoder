import { useType } from "../context";
import { Hands } from "./finger";
import { Keyboard } from "./board";

export const Input = () => {
  const { keyboard } = useType();

  return (
    <div>
      {keyboard?.visible && (
        <div>
          <Keyboard />
          <Hands />
        </div>
      )}
    </div>
  );
};
