import { useType } from "../context";
import { Hands } from "./finger";
import { KeyboardLayout } from "./layout";

export const Keyboard = () => {
  const { keyboard } = useType();

  return (
    <div>
      {keyboard?.visible && (
        <div>
          <KeyboardLayout />
          <Hands />
        </div>
      )}
    </div>
  );
};
