import styled from "styled-components";

const StyledMembers = styled.div`
  h2 {
    font-size: 2.75rem;
    text-align: center;
    color: #da0037;
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 600;
  }

  h4 {
    font-size: 1rem;
    font-weight: 600;
  }

  span {
    font-weight: normal;
  }

  .member {
    width: 75%;
    border: solid #444444 2px;
    margin: 10px auto;
    text-align: center;
    border-radius: 50px;
  }
`;

export default function Members(props) {
  const { teamMembers } = props;

  return (
    <StyledMembers>
      <h2>Members</h2>
      <div className="members-container">
        {teamMembers.map((member) => {
          return (
            <div key={member.username} className="member">
              <h3>{member.username}</h3>
              <h4>
                Email: <span>{member.email}</span>
              </h4>
              <h4>
                Role: <span>{member.role}</span>
              </h4>
            </div>
          );
        })}
      </div>
    </StyledMembers>
  );
}
