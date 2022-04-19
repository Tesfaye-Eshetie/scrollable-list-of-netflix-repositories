import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "./styles/Button.styled";
import { Header } from "./styles/Header.styled";

export default function Layout({ children }) {
  return(
    <>
      <Header>
        <h1>Scrollable Lists of Netflixs Repositories </h1>
        <NavLink to={"/"}>
          <Button>Home</Button>
        </NavLink>
      </Header>
      <div>{children}</div>
    </>
  )
}
