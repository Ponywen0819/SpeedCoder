import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import BootstrapCard from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

interface OptCardProp {
  name: string;
}

const translate = (name: string): string => {
  if (name === "python") return "py";
  if (name === "c#") return "cs";
  if (name === "c++") return "cpp";
  if (name === "javascript") return "js";
  return name;
};

export const Card = ({ name }: OptCardProp) => {
  return (
    <Col>
      <LinkContainer to={`/type/${translate(name.toLocaleLowerCase())}`}>
        <BootstrapCard as={Button}>
          <BootstrapCard.Body className="text-center">
            {name}
          </BootstrapCard.Body>
        </BootstrapCard>
      </LinkContainer>
    </Col>
  );
};
