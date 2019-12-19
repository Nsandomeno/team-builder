import React, {useState} from 'react';

import './App.css';
import MemberForm from "./MemberForm.js";
import MemberCard from "./MemberCard.js";



function App() {

  const [memCards, setMemCards] = useState([
    {
      name: "Nick",
      email: "me@Nick.com",
      role: "Full-Stack Web Developer"
    }
  ]);

const addNewMember = mem => {
  const newMember = {
    name: mem.name,
    email: mem.email,
    role: mem.role
  }
  setMemCards([...memCards, newMember])
};


  return(
    <div className="App">
        <h1>Our Members</h1>
        <MemberForm addNewMember={addNewMember} />
        <MemberCard memCards={memCards} />
    </div>
  );
}

export default App;
