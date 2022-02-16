import React from "react";
import { Header } from "./styles/Header.styled";

export default ({ children }) => (
  <>
   <Header>
       <h2>Scrollable Lists of Netflixs Repositories </h2>
    </Header>
    <div>{children}</div>
  </>
);
