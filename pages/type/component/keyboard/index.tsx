import { useType } from "../context";
import { Hands } from "./finger";
import { KeyboardLayout } from "./layout";
import "@/scss/component/keyboard.scss";

export const Keyboard = () => {
  const type_context = useType();

  return (
    <div>
      {type_context?.enable_keyboard && (
        <div>
          <KeyboardLayout />
          <Hands />
        </div>
      )}
    </div>
  );
};
