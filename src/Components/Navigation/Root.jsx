import { Outlet } from "react-router-dom";
import Nav from "./Nav";
const Root = () => {
  return (
    <div>
      <Nav></Nav>
      <section className="min-h-[calc(100vh-64px)]">
      <Outlet></Outlet>
      </section>
    </div>
  );
};

export default Root;
