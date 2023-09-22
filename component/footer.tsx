import type { FC } from "react";
import "@/scss/component/footer.scss";

export const Footer: FC = () => {
  return (
    <div className="bg-footer sz-footer shadow-t mt-auto text-footer">
      {"Just incomplete copy of "}
      <a className="link-footer" href="https://www.speedcoder.net/">
        SpeedCoder
      </a>
    </div>
  );
};
