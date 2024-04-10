import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Footer from "../Pages/Footer";
const Root = () => {
  return (
    <main>
      <Nav></Nav>
      <section className="">
        <Outlet></Outlet>
      </section>
      <Footer></Footer>
    </main>
  );
};

export default Root;
