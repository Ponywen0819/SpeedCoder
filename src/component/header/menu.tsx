import { Dropdown, Button } from "antd";
import type { MenuProps } from "antd";
import { UserOutlined } from "@ant-design/icons";

const items: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com">
        1st menu item
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com">
        2nd menu item
      </a>
    ),
  },
  {
    key: "3",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com">
        3rd menu item
      </a>
    ),
  },
];

export const Menu = () => {
  return (
    <Dropdown
      menu={{ items }}
      placement="bottomRight"
      className="ms-auto mt-auto mb-auto">
      <Button className="p-0 sz-icon-btn">
        <UserOutlined className="sz-icon" />
      </Button>
    </Dropdown>
  );
};
