import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { StyledItem } from './styles/Item.styled';
import { Button } from './styles/Button.styled';
import { Card } from './styles/Card.styled';
import { useParams, NavLink } from 'react-router-dom';


export default function RecentCommits() {
    const [commits, setCommits] = useState([]);

    const {name} = useParams();
    const baseURL = `https://api.github.com/repos/Netflix/${name}/commits`;

    useEffect(() => {
     const fetchData = async()=> {

       const request = await axios.get(baseURL);
       setCommits(request.data);
       console.log(request);
       return request;
       
     }
     fetchData();
   }, [baseURL]);

 
  return (
    <>
      <Card>
        <NavLink to={`/items`}>
          <Button bg='#ff0099' color='#fff'>Back to List</Button>
        </NavLink>
        {commits.map((commit, index) => 
        index === 0 && 
          <StyledItem key={index}>
            <div>
              <h1>Commit Title: {name} </h1>
              <h3>Committer username: {commit.commit.committer.name}</h3>
              <p><span>Commit hash:</span> {commit.commit.message} </p>
              <p><span>Date Created:</span> {(commit.commit.committer.date.slice(0, 10))} </p>
              <br/>
            </div>
          </StyledItem>
          )}
        </Card>
    </>
      
  )
}
