import Content from "../content";
import Footer from "../footer";
import Header from "../header";
import Sidebar from "../sidebar";
import "./mainframe.scss";

function Mainframe() {
  return (
    <>
      <Header></Header>
      <Sidebar></Sidebar>
      <Content></Content>
      <Footer></Footer>
    </>
  );
}
export default Mainframe;
