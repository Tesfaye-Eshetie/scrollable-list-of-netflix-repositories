import React, {useState} from "react";
import { StyledItem } from "../styles/Item.styled";
import CommitForm from "./CommitForm";

export default function Form({title, committer, message, date}) {
  const [commits, setCommits] = useState(
    { 
        userName: "",
        commit: "" 
    }      
  );
    
  const addCommit = ({userName, commit}) => {
    const newCommits = {...commits, userName, commit};
    setCommits(newCommits);
  };
  let { userName, commit } = commits;
  return (
    <>
      {
          (userName && commit &&
          <StyledItem>
              <h2>Commit Title: {title} </h2>
              <h3>Committer username: {userName}</h3>
              <p><span>Commit hash:</span> {commit} </p>
              <p><span>Date Created:</span> {new Date().toISOString().slice(0, 10)} </p>
          </StyledItem>) ||
          (<StyledItem>
            <h2>Commit Title: {title} </h2>
            <h3>Committer username: {committer}</h3>
            <p><span>Commit hash:</span> {message} </p>
            <p><span>Date Created:</span> {date} </p>
            <br/>
        </StyledItem>)
      }
      <StyledItem>
        <CommitForm addCommit={addCommit} />
      </StyledItem>
    </>
  );
}

