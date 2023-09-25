import { useType } from "./context";
import Button from "react-bootstrap/Button";
import BootstrapModal from "react-bootstrap/Modal";

export const Modal = () => {
  const {
    input: { finish },
    timer: { sec },
    reset,
  } = useType();
  return (
    <BootstrapModal show={finish} onHide={reset} centered>
      <BootstrapModal.Header closeButton>
        <BootstrapModal.Title>Score</BootstrapModal.Title>
      </BootstrapModal.Header>
      <BootstrapModal.Body>
        <p>恭喜你完成此練習!</p>
        <p>總耗費時間 {sec} 秒</p>
        <p>每分鐘的平均字數為</p>
        <p>你贏過 的人類</p>
      </BootstrapModal.Body>
      <BootstrapModal.Footer>
        <Button variant="secondary" onClick={reset}>
          確認
        </Button>
      </BootstrapModal.Footer>
    </BootstrapModal>
  );
};
