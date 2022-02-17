import React, {useState} from "react";
import { Button } from "../styles/Button.styled";

const initialState = { userName: "", commit: "" } 
export default function CommitForm({ addCommit }) {
    const [ { userName, commit }, setCommit] = useState( initialState );

    const clearState = () => {
    setCommit({ ...initialState });
    };
        
    const handleInputChange = (e)=> {
        const { name, value } = e.target;
        setCommit(prevState => ({ ...prevState, [name]: value }));
      }

    const handleSubmit = e => {
        e.preventDefault();
        if (!{ userName, commit }) return;
        addCommit({...{ userName, commit }});
        clearState();
    };

    return (
        <>
            <h2>Add commit here:</h2>
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                name= "userName"
                value={userName}
                placeholder= "Insert your name ..."
                onChange={handleInputChange}
                />
                <textarea  name= "commit"
                value={commit}
                placeholder= "Add your commit ..."
                onChange={handleInputChange} rows="3" cols="50"></textarea>
                {/* <input
                type="textarea"
                name= "commit"
                placeholder= "Add your commit ..."
                onChange={handleInputChange}
                /> */}
                <Button>Submit Commit</Button>
            </form>
        </>
    );
  }

