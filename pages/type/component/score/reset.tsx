import { Button } from "antd";
import { ReloadOutlined } from "@ant-design/icons";

export const Reset = () => {
  return (
    <Button
      shape="circle"
      className="reset-btn-color "
      icon={<ReloadOutlined className="reset-icon-color" />}
    />
  );
};
