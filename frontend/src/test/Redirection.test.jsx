import { fireEvent, render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { BrowserRouter } from "react-router-dom";
import { Login } from "../core/pages/Login/Login";
import { MainMenu } from "../core/components/MainMenu/MainMenu";
import { NavBar } from "../core/components/NavBar/NavBar";



test("El botón Sign in me redirige a la página de inicio al hacer clic", () => {
    render(
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      );

    fireEvent.click(screen.getByText(/Sign in/));

    expect(window.location.pathname).toBe('/home');

});



test("El botón Veterinary Section de HOME me redirige a la página de la sección de veterinary Section", () => {
  render(
      <BrowserRouter>
        <MainMenu />
      </BrowserRouter>
    );

  fireEvent.click(screen.getByText(/Veterinary Section/));

  expect(window.location.pathname).toBe('/veterinary');

});



test("El botón izquierdo de usuario del NAVEGADOR inferior me redirige a la página de perfil usuario", () => {
  render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    );

  fireEvent.click(screen.getByTestId("myprofile-button"));

  expect(window.location.pathname).toBe('/myprofile');

});



test("El botón derecho de gato del NAVEGADOR inferior me redirige a la página de datos de mi gato", () => {
  render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    );

  fireEvent.click(screen.getByTestId("catprofile-button"));

  expect(window.location.pathname).toBe('/catprofile');

});



test("El botón central del NAVEGADOR inferior me redirige a la página de home", () => {
  render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    );

  fireEvent.click(screen.getByTestId("home-button"));

  expect(window.location.pathname).toBe('/home');

});