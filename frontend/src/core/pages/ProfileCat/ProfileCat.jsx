import "./ProfileCat.css";
import { Header } from "../../components/Header/Header";
import { NavBar } from "../../components/NavBar/NavBar";

export const ProfileCat = () => {
  return (
    <main className="ProfileCatContainer">
      <Header />
      <p>Perfil de michi</p>
      <NavBar />
    </main>
  );
};
