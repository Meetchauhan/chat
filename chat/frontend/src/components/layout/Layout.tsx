import { LayoutProp } from "../../types/Types";
// import Footer from "../footer/Footer";
import Header from "../header/header";
import InstallAppButton from "../installAppButton/InstallAppButton";

const Layout: React.FC<LayoutProp> = ({ children }) => {
  return (
    <div className="">
      <InstallAppButton />
      <Header />
      <main>{children}</main>
     
      {/* <Footer /> */}
    </div>
  );
};
export default Layout;
