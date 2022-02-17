import React, {useState} from "react";
import { Button } from "../styles/Button.styled";

export default function CommitForm({ addTodo }) {
    const [commit, setCommit] = useState(
        { 
            userName: "",
            commit: "" 
        }      
      );
  
    const handleInputChange = (e)=> {
        setCommit({ ...commit, [e.target.name]: e.target.value });
      }

    const handleSubmit = e => {
        e.preventDefault();
        if (!commit) return;
        addTodo({...commit});
        setCommit({ userName: "",
        commit: ""  });
    };

    return (
        <>
            <h2>Add commit here:</h2>
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                name= "userName"
                placeholder= "Insert your name ..."
                onChange={handleInputChange}
                />
                <input
                type="textarea"
                name= "commit"
                placeholder= "Add your commit ..."
                onChange={handleInputChange}
                />
                <Button>Submit Commit</Button>
            </form>
        </>
    );
  }

