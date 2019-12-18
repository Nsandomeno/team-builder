import React, {useState} from 'react';



const MemberForm = props => {
const [teamMember, setTeamMember] = useState({
name: "",
email: "",
role: ""
})

const handleChanges = event => {
    setTeamMember({...teamMember, [e.target.name]: e.target.value});
    console.log(e.target.name);
}



    return(
        <form>
            <label htmlFor="memName">Name: </label>
            <input
            id="memName"
            type="text"
            placeholder="Name"
            name="nameEntry"
            //onChange
            // value={teamMember.nameEntry}
            />
            <label htmlFor="memEmail">Email: </label>
            <input 
            id="memEmail"
            type="text"
            placeholder="Email"
            name="emailEntry"
            //onChange
            // value={teamMember.emailEntry}
            />
            <label htmlFor="memRole">Role: </label>
            <input
            id="memRole"
            type="text"
            placeholder="Role"
            name="roleEntry"
            //onChange
            // value={teamMember.roleEntry}
            />

            
        </form>
    );
}

export default MemberForm;