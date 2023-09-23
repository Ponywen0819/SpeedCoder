import { Keyboard } from "./component/keyboard";
import { Penal } from "./component/penal";
import { Score } from "./component/score";
import { Setting } from "./component/setting";
import { TypeProvider } from "./component/context";

import "@/scss/page/type.scss";

export const Component = () => {
  return (
    <div className="max-width d-flex">
      <TypeProvider>
        <aside className="sz-aside sp-aside">
          <Score />
        </aside>
        <main className="sz-main">
          <Penal />
          <Keyboard />
        </main>
        <aside className="sz-aside sp-aside">
          <Setting />
        </aside>
      </TypeProvider>
    </div>
  );
};
