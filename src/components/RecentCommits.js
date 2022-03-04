import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card } from './styles/Card.styled';
import { useParams } from 'react-router-dom';
import Form from './form';


export default function RecentCommits() {
    const [commits, setCommits] = useState([]);

    const {name} = useParams();
    const baseURL = `https://api.github.com/repos/Netflix/${name}/commits`;

    useEffect(() => {
     const fetchData = async()=> {
       const request = await axios.get(baseURL);
       setCommits(request.data);
      }
     fetchData();
   }, [baseURL]);

 
  return (
    <Card>
      {commits.map((commit, index) => 
      index === 0 && 
        <Form key={index} title={name} 
              committer={commit.commit.committer.name} 
              message={commit.commit.message} 
              date={(commit.commit.committer.date.slice(0, 10))} 
        />
      )}
    </Card>
  )
}
