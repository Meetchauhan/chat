import { LayoutProp } from "../../types/Types";
// import Footer from "../footer/Footer";
import Header from "../header/header";

const Layout: React.FC<LayoutProp> = ({ children }) => {
  return (
    <div className="">
      <Header />
      <main>{children}</main>
     
      {/* <Footer /> */}
    </div>
  );
};
export default Layout;
