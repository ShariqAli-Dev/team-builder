import styled from "styled-components";

const StyledForm = styled.div`
  .form-label {
    font-size: 2rem;
    text-align: left;
    font-size: 1.8rem;
  }

  .form-inputs {
    border: 2px solid #444444;
    margin-left: 80%;
    margin-right: 20%;
    padding: 1%;
    font-size: 1rem;
  }

  .buttons {
    display: flex;
    justify-content: center;
  }
  button {
    padding: 1%;
    border-radius: 10px;
    margin: 2%;
    font-size: 1.5rem;
    border: grey 2px solid;
  }
`;

export default function Form(props) {
  const { values, update, submit } = props;

  const onChange = (event) => {
    const { name, value } = event.target;
    // console.log(name, value);
    update(name, value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    submit();
  };

  return (
    <StyledForm>
      <form onSubmit={onSubmit}>
        <div className="form-pairs">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input id="username" className="form-inputs" type="text" name="username" onChange={onChange} value={values.username} placeholder="type your username" />
        </div>

        <div className="form-pairs">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input id="email" className="form-inputs" type="email" name="email" onChange={onChange} value={values.email} placeholder="type your email" />
        </div>

        <div className="form-pairs">
          <label htmlFor="role" className="form-label">
            Role
          </label>
          <select id="role" className="form-inputs" name="role" value={values.roles} onChange={onChange}>
            <option value="">Select Role</option>
            <option value="backend engineer">Backend Engineer</option>
            <option value="frondtend engineer">Frontend Engineer</option>
            <option value="designer">UX Designer</option>
          </select>
        </div>

        <div className="buttons">
          <button>Submit</button>
        </div>
      </form>
    </StyledForm>
  );
}
