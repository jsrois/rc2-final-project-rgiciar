import "./Home.css";
import { Header } from "../../components/Header/Header";
import { MainMenu } from "../../components/MainMenu/MainMenu";
import { NavBar } from "../../components/NavBar/NavBar";

export const Home = () => {
  return (
    <main className="homeContainer">
      <Header />
      <MainMenu />
      <NavBar />
    </main>
  )
}
