import { LayoutProp } from "../../types/Types";
import Header from "../header/header";

const Layout: React.FC<LayoutProp> = ({ children }) => {
  return (
    <div className="">
      <Header />
      <main>{children}</main>
      <footer></footer>
    </div>
  );
};
export default Layout;
