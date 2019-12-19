import React, {useState} from 'react';



const MemberForm = props => { 
    const [teamMember, setTeamMember] = useState({
name: '',
email: '',
role: ''
});

//console.log("This is our teamMember", teamMember);

const handleChanges = event => {
    setTeamMember({...teamMember, [event.target.name]: event.target.value});
    console.log("This is event.target.name", event.target.name);
    console.log("This is event.target.value: ",event.target.value);
}

const submitForm = event => {
    event.preventDefault();
    props.addNewMember(teamMember);
    setTeamMember({
        name:'',
        email:'',
        role:''
        });
};



    return(
        <form onSubmit={submitForm}>
            <label htmlFor="name">Name: </label>
            <input
            id="name"
            type="text"
            placeholder="Name"
            name="name"
            onChange={handleChanges}
            value={teamMember.name}
            />
            <label htmlFor="email">Email: </label>
            <input 
            id="email"
            type="text"
            placeholder="email"
            name="email"
            onChange={handleChanges}
            value={teamMember.email}
            />
            <label htmlFor="role">Role: </label>
            <input
            id="role"
            type="text"
            placeholder="Role"
            name="role"
            onChange={handleChanges}
            value={teamMember.role}
            />

            <button type="submit">Add Team Member</button>
        </form>
    );
}

export default MemberForm;