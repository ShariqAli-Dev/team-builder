import "./App.css";
import { useState } from "react";
import Form from "./components/form";

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
      {" "}
      <h1>Team Builder</h1>
    </div>
  );
}

export default App;
