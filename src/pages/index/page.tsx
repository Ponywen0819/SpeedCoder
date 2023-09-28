import Button from "react-bootstrap/Button";
import { LinkContainer } from "react-router-bootstrap";

export function Component() {
  return (
    <>
      <h1 className="text-center mb-5 fs-2">
        Online Typing Practice for Programmers
      </h1>
      <div className="d-flex justify-content-center">
        <img src={"/screenshot.png"} width={560} />
        <div className="ps-5 pe-5 d-flex flex-column">
          <p>Support languages</p>
          <ul>
            <li>C</li>
            <li>C++</li>
            <li>C#</li>
            <li>Go</li>
            <li>Java</li>
            <li>JavaScript</li>
            <li>Python</li>
            <li>R</li>
          </ul>
          <LinkContainer to={"/lesson"}>
            <Button>Try it</Button>
          </LinkContainer>
        </div>
      </div>
      <h2 className="text-center mt-5 mb-5 fs-4">
        Don't Just be a Coder, be a SpeedCoder!
      </h2>
    </>
  );
}
