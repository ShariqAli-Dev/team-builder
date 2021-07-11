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
    <div className="form-container">
      <form onSubmit={onSubmit}>
        <div className="form-inputs">
          <label>
            Username
            <input type="text" name="username" onChange={onChange} value={values.username} placeholder="type your username" />
          </label>
          <br />

          <label>
            Email
            <input type="email" name="email" onChange={onChange} value={values.email} placeholder="type your email" />
          </label>
          <br />

          <label>
            Role
            <select name="role" value={values.roles} onChange={onChange}>
              <option value="">Select Role</option>
              <option value="backend engineer">Backend Engineer</option>
              <option value="frontend engineer">Frontend Engineer</option>
              <option value="designer">UX Designer</option>
            </select>
          </label>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}
