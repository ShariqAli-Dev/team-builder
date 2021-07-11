import "./App.css";
import { useState } from "react";

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

function App() {
  const [formValues, setformValues] = useState(initialFormValues);
  const [members, setMembers] = useState(teamMembers);

  const update = (event) => {};
  const submit = (event) => {};

  return (
    <div className="container">
      <h1>Team Builder</h1>

      {/* component for form functionality #2*/}
      <Form values={teamMembers} update={update} submit={submit} />

      {/* component to map array of members and display #1 */}
      <Members teamMembers={teamMembers} />
    </div>
  );
}

export default App;
