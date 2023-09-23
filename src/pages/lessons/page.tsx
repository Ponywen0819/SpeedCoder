import { Card } from "./component/card";

import Row from "react-bootstrap/Row";

export const Component = () => {
  return (
    <div className="max-width">
      <h1 className="fs-3 text-center">
        Improve your Typing with these Open Source Programs
      </h1>
      <h2 className="fs-6 text-center">Choose language you want to type</h2>
      <div className="p-4">
        <Row xs={1} md={3} className="g-4">
          <Card name="C" />
          <Card name="C++" />
          <Card name="C#" />
          <Card name="GO" />
          <Card name="Java" />
          <Card name="JavaScript" />
          <Card name="Python" />
          <Card name="R" />
        </Row>
      </div>
    </div>
  );
};
