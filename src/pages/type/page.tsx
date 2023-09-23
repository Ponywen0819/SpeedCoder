import { Keyboard } from "./component/keyboard";
import { Penal } from "./component/penal";
import { Score } from "./component/score";
import { Setting } from "./component/setting";
import { TypeProvider } from "./component/context";

export const Component = () => {
  return (
    <div className="type-main">
      <TypeProvider>
        <Score />
        <main className="flex-grow-1 p-3">
          <Penal />
          <Keyboard />
        </main>
        <Setting />
      </TypeProvider>
    </div>
  );
};
