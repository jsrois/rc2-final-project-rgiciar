import "./ProfileCat.css";
import { Header } from "../../components/Header/Header";
import { NavBar } from "../../components/NavBar/NavBar";
import { InfoCat } from "../../components/InfoCat/InfoCat";

export const ProfileCat = () => {
  return (
    <main className="profileCatContainer">
      <Header />
      <InfoCat />
      <NavBar />
    </main>
  );
};
