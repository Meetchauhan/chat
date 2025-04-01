import { LayoutProp } from "../../types/Types";
// import Footer from "../footer/Footer";
import Header from "../header/header";
import InstallAppButton from "../installAppButton/InstallAppButton";

const Layout: React.FC<LayoutProp> = ({ children }) => {
  return (
    <div className="">
      <Header />
      <main>{children}</main>
      <InstallAppButton />
      {/* <Footer /> */}
    </div>
  );
};
export default Layout;
