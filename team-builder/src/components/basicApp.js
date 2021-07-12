import { useState } from "react";

const teamMembers = [
  // some possible roles could be backend engineer, frontend engineer, designer, etc
  {
    name: "shariq",
    email: "shariqali2195@gmail.com",
    role: "student",
  },
  {
    name: "keiran",
    email: "keiransemail@lambda.com",
    role: "instructor",
  },
];

const intialFormValues = {
  name: "",
  email: "",
  role: "",
};

function SuperSimple() {
  const [members, setMembers] = useState(teamMembers);
  const [formValues, setFormValues] = useState(intialFormValues);

  const change = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const submit = (event) => {
    event.preventDefault();
    const newMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role.trim(),
    };
    setMembers([...members, newMember]);
    setFormValues(intialFormValues);
  };

  return (
    <div className="container">
      <h1>Simple Form</h1>

      {members.map((member) => {
        return (
          <div key={member.name}>
            {member.name ? member.name : "UNDEFINED"} with email {member.email ? member.email : "UNDEFINED"} is a {member.role ? member.role : "UNDEFINED"}
          </div>
        );
      })}

      <form onSubmit={submit}>
        {/* text input forms */}
        <input type="text" name="name" value={formValues.name} onChange={change} placeholder="enter name" />
        <input type="email" name="email" value={formValues.email} onChange={change} placeholder="enter email" />

        {/* dropdown */}
        <label>
          Role
          <select name="role" value={formValues.role} onChange={change}>
            <option value="">Select Role</option>
            <option value="instructor">Instructor</option>
            <option value="tech lead">TL</option>
            <option value="student">Student</option>
          </select>
        </label>

        <button>Submit</button>
      </form>
    </div>
  );
}
// const [teamMembers, setTeamMembers] = useState(initialTeamMembers);

export default function BasicApp() {
  return <SuperSimple />;
}
