import { Input } from "./component/keyboard";
import { Penal } from "./component/penal";
import { Score } from "./component/score";
// import { Setting } from "./component/setting";
import { Providers } from "./component/context";
import { Modal } from "./component/modal";

export const Component = () => {
  return (
    <div className="type-main">
      <Providers>
        <Score />
        <main className="flex-grow-1 p-3">
          <Penal />
          <Input />
        </main>
        {/* <Setting /> */}
        <Modal />
      </Providers>
    </div>
  );
};
