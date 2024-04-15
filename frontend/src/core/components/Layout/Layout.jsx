import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import { NavBar } from "../NavBar/NavBar";

export const Layout = () => {
  return (
    <div className="layoutContainer">
      <Header />
      <div className="contentPage">
        <Outlet /> 
      </div>
      <NavBar />
    </div>
  );
};
