import "./App.css";
import { useState } from "react";
import styled from "styled-components";

import Form from "./components/form";
import Members from "./components/members";

const initialFormValues = {
  username: "",
  email: "",
  role: "",
};

const teamMembers = [
  {
    username: "shariq",
    email: "shariq@lambda.com",
    role: "engineer",
  },
];

// stlyed components
const StyledApp = styled.div`
  text-align: center;
  height: 100vh;
  width: 100vw;
`;

function App() {
  const [formValues, setformValues] = useState(initialFormValues);
  const [members, setMembers] = useState(teamMembers);

  const updateForm = (inputName, inputValue) => {
    setformValues({ ...formValues, [inputName]: inputValue });
  };
  const submitForm = (event) => {
    const newMember = {
      username: formValues.username,
      email: formValues.email,
      role: formValues.role,
    };

    if (!newMember.username || !newMember.email || !newMember.role) {
      return;
    }

    setMembers([...members, newMember]);
    console.log(members);
  };

  return (
    <StyledApp>
      <div className="container">
        <h1>Team Builder</h1>

        {/* component for form functionality #2*/}
        <Form values={teamMembers} update={updateForm} submit={submitForm} />

        {/* component to map array of members and display #1 */}
        <Members teamMembers={members} />
      </div>
    </StyledApp>
  );
}

export default App;
