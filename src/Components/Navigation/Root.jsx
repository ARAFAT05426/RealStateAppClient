import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Footer from "../Pages/Footer";
const Root = () => {
  return (
    <main>
      <Nav></Nav>
      <section className="min-h-[calc(100vh-64px)]">
        <Outlet></Outlet>
      </section>
      <Footer></Footer>
    </main>
  );
};

export default Root;
