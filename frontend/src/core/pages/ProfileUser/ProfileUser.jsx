import "./ProfileUser.css";
import { Header } from "../../components/Header/Header";
import { NavBar } from "../../components/NavBar/NavBar";

export const ProfileUser = () => {
  return (
    <main className="ProfileUserContainer">
      <Header />
      <p>Perfil de usuario</p>
      <NavBar />
    </main>
  );
};
