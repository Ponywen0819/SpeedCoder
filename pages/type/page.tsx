import { Keyboard } from "./component/keybord";
import { Penal } from "./component/penal";
import { Score } from "./component/score";
import { Setting } from "./component/setting";

import "@/scss/page/type.scss";

export const Component = () => {
  return (
    <div className="max-width d-flex">
      <aside className="sz-aside sp-aside">
        <Score />
      </aside>
      <main>
        <Penal />
        <Keyboard />
      </main>
      <aside className="sz-aside sp-aside">
        <Setting />
      </aside>
    </div>
  );
};
