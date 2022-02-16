import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "./styles/Button.styled";
import { Header } from "./styles/Header.styled";

export default function Layout({ children }) {
  return(
    <>
    <Header>
        <NavLink to={"/"}>
          <Button>Home</Button>
        </NavLink>
        <h2>Scrollable Lists of Netflixs Repositories </h2>
      </Header>
      <div>{children}</div>
    </>
  )
}
