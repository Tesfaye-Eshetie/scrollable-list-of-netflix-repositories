import React, {useState} from "react";

export default function ({addCommit}) {
  
    const [values, setValue] = useState([
        {commitTitle: ""},
        {committerName: ""},
        {commitMessage: ""},
        {date: Date.now()}
    ]);
  
    const handleSubmit = e => {
      e.preventDefault();
      if (!values) return;
      addCommit(values);
      setValue("");
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <p>You can add commit here:</p>
        <input
          type="text"
          value={values.committerName}
          placeholder= "Insert name ..."
          onChange={e => setValue(e.target.value.committerName)}
        />
        <br/>
        <input
          type="textarea"
          value={values.commitMessage}
          placeholder= "Add Commit ..."
          onChange={e => setValue(e.target.value.commitMessage)}
        />
      </form>
    );
  }

 

    