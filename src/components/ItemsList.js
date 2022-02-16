import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { StyledItem } from './styles/Item.styled';
import { Card } from './styles/Card.styled';
import { NavLink } from "react-router-dom";

export default function ItemsList() {
   const [items, setItems] = useState([]);

   const netflixRepositoriesURL = "https://api.github.com/orgs/Netflix/repos";

   useEffect(() => {
    const fetchData = async()=> {
      const request = await axios.get(netflixRepositoriesURL);
      setItems(request.data);
      console.log(request);
      return request;
      
    }
    fetchData();
  }, []);

  let myItems;
  return (
    myItems = [].concat(items)
    .sort((a, b) => a.stargazers_count > b.stargazers_count ? 1 : -1)
      .map(item=>   
        <Card>
          <StyledItem key={item.id} >
            <NavLink to={`/items/${item.name}`}>
              <h2>Repo name: {item.name} </h2>
              <h5>Language: {item.language}</h5>
              <p>Description: {item.description} </p>
              <p>Star Count: {item.stargazers_count} </p>
              <p>Fork Count: {item.forks_count} </p>
              <p>Date Created: {item.created_at} </p>
            </NavLink>
          </StyledItem>
        </Card>
      )
  )
}
