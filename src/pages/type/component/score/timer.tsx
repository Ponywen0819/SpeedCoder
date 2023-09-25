import { Button } from "antd";
import { ReloadOutlined } from "@ant-design/icons";

import { useType } from "../context";

const format = (value: number) => {
  return `${value < 10 ? "0" : ""}${value}`;
};

export const Timer = () => {
  const {
    timer: { sec },
    reset,
  } = useType();

  return (
    <div className="info-container timer-container  ">
      {`${format(Math.round(sec / 60) % 60)}:${format(sec % 60)}`}
      <Button
        shape="circle"
        className="reset-btn-color "
        icon={<ReloadOutlined className="reset-icon-color" />}
        onClick={() => reset()}
      />
    </div>
  );
};
