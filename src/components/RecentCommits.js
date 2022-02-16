import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { StyledItem } from './styles/Item.styled';
import { Card } from './styles/Card.styled';
import { useParams } from 'react-router-dom';
import InputCommit from './InputCommit';


export default function RecentCommits({}) {
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
   }, []);

   const addCommits = values => {
    const newCommits = [...commits, { values}];
    setCommits(newCommits);
  };
  return (
    <>
      <Card>
        {commits.map((commit, index) => 
        index === 0 && 
          <StyledItem key={index}>
            <div>
              <h1>Commit Title: {name} </h1>
              <h3>Committer username: {commit.commit.committer.name}</h3>
              <p>Commit hash: {commit.commit.message} </p>
              <p>Date Created: {commit.commit.committer.date} </p>
            </div>
            <InputCommit addCommit={addCommits}/>
          </StyledItem>
          )}
        </Card>
    </>
      
  )
}
