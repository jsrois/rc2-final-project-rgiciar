import "./ProfileUser.css";
import { Header } from "../../components/Header/Header";
import { NavBar } from "../../components/NavBar/NavBar";
import { InfoUser } from "../../components/InfoUser/InfoUser";

export const ProfileUser = () => {
  return (
    <main className="profileUserContainer">
      <Header />
      <InfoUser />
      <NavBar />
    </main>
  );
};