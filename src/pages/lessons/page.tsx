import { OptCard } from "./component/opt_card";

export const Component = () => {
  return (
    <div className="max-width">
      <h1 className="fs-3 text-center">
        Improve your Typing with these Open Source Programs
      </h1>
      <h2 className="fs-6 text-center">Choose language you want to type</h2>
      <div className="opt-card-container">
        <OptCard name="C" />
        <OptCard name="C++" />
        <OptCard name="C#" />
        <OptCard name="GO" />
        <OptCard name="Java" />
        <OptCard name="JavaScript" />
        <OptCard name="Python" />
        <OptCard name="R" />
      </div>
    </div>
  );
};
