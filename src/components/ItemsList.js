import React, { useState, useEffect } from "react";
import axios from "axios";
import { StyledItem } from "./styles/Item.styled";
import { Card } from "./styles/Card.styled";
import { Button } from "./styles/Button.styled";
import { NavLink } from "react-router-dom";

export default function ItemsList() {
  const [items, setItems] = useState([]);

  const netflixRepositoriesURL = "https://api.github.com/orgs/Netflix/repos";

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(netflixRepositoriesURL);
      setItems(request.data);
    };
    fetchData();
  }, []);

  return items
    .sort((a, b) => (a.stargazers_count > b.stargazers_count ? -1 : 1))
    .map((item) => (
      <Card key={item.id}>
        <StyledItem>
          <h2>Repo name: {item.name} </h2>
          <h5>Language: {item.language}</h5>
          <p>
            <span>Description:</span> {item.description}{" "}
          </p>
          <p>
            <span>Star Count:</span> {item.stargazers_count}{" "}
          </p>
          <p>
            <span>Fork Count:</span> {item.forks_count}{" "}
          </p>
          <p>
            <span>Date Created:</span> {item.created_at.slice(0, 10)}{" "}
          </p>
          <NavLink to={`/items/${item.name}`}>
            <Button bg="#333" color="#eee">
              Recent commit
            </Button>
          </NavLink>
        </StyledItem>
      </Card>
    ));
}
