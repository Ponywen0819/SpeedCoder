import { useType } from "./context";
import Button from "react-bootstrap/Button";
import BootstrapModal from "react-bootstrap/Modal";

const get_correct = (): number => {
  const {
    input: { buffer, finish },
    doc: { doc },
    timer: { sec },
  } = useType();

  if (!finish) return 0;
  let res = 0;
  const processed = doc.replace(/\n( )*/g, "\n");
  buffer.split("").map((val, index) => {
    if (val === processed[index]) res++;
  });
  return res;
};

const get_pr = (number: number) => {
  const {
    input: { max },
    timer: { sec },
  } = useType();

  return Math.round((1 - (max! - number) / max!) * 100);
};

export const Modal = () => {
  const {
    input: { finish },
    timer: { sec },
    reset,
  } = useType();

  const corr = get_correct();

  return (
    <BootstrapModal show={finish} onHide={reset} size="sm" centered>
      <BootstrapModal.Header closeButton>
        <BootstrapModal.Title className="flex-grow-1 text-center">
          Score
        </BootstrapModal.Title>
      </BootstrapModal.Header>
      <BootstrapModal.Body>
        <p className="text-center">恭喜你完成此練習!</p>
        <p className="text-center">總耗費時間 {sec} 秒</p>
        <p className="text-center">每分鐘的正確字數為 {corr} 個字</p>
        <p className="text-center">你贏過 {get_pr(corr)}% 的人類</p>
      </BootstrapModal.Body>
      <BootstrapModal.Footer className="justify-content-center">
        <Button variant="secondary" onClick={reset}>
          確認
        </Button>
      </BootstrapModal.Footer>
    </BootstrapModal>
  );
};
