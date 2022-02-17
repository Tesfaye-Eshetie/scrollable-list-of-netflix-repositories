import React, {useState} from "react";
import { Card } from '../styles/Card.styled';
import CommitForm from "./CommitForm";

export default function Form({title}) {
  const [commits, setCommits] = useState(
    { 
        userName: "",
        commit: "" 
    }      
  );

  const addTodos = ({userName, commit}) => {
    const newCommits = {...commits, userName, commit};
    setCommits(newCommits);
  };
  let { userName, commit } = commits;
  return (
    < Card >
        {
            userName && commit &&
            <div>
                <h1>Commit Title: {title} </h1>
                <h3>Committer username: {userName}</h3>
                <p><span>Commit hash:</span> {commit} </p>
                <p><span>Date Created:</span> {new Date().toISOString().slice(0, 10)} </p>
            </div>
        }
        <CommitForm addTodo={addTodos} />
    </Card>
  );
}

