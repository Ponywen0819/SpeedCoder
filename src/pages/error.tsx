import { useRouteError } from "react-router-dom";
import { WarningOutlined } from "@ant-design/icons";
import { Footer } from "@/component/footer";
import { Header } from "@/component/header";

export const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="min-height d-flex flex-column">
      <Header />
      <main className="sz-error-content abs-center ">
        <WarningOutlined className="sz-error-icon" />
        <h1>{`${error.status} :(`}</h1>
      </main>
      <Footer />
    </div>
  );
};
