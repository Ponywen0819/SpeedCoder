import { Input } from "./component/keyboard";
import { Penal } from "./component/penal";
import { Score } from "./component/score";
// import { Setting } from "./component/setting";
import { Providers } from "./component/context";
import { Modal } from "./component/modal";

export const Component = () => {
  return (
    <Providers>
      <div className="type-main w-fit m-auto">
        <Score />
        <main className="p-3 ">
          <Penal />
          <Input />
        </main>
        {/* <Setting /> */}
        <Modal />
      </div>
    </Providers>
  );
};
