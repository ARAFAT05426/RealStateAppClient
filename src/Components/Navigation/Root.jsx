import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Footer from "../Pages/Footer";
import { ToastContainer } from "react-toastify";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
const Root = () => {
  return (
    <main>
      <Nav></Nav>
      <section className="">
        <ToastContainer></ToastContainer>
        <Outlet></Outlet>
      </section>
      <Footer></Footer>
    </main>
  );
};

export default Root;
