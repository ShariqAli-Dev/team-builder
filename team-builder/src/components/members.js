export default function Members(props) {
  const { teamMembers } = props;

  return (
    <div className="members-container">
      {teamMembers.map((member) => {
        return (
          <div key={member.username} className="member">
            <h2>{member.username}</h2>
            <h3>Email: {member.email}</h3>
            <h3>Role: {member.role}</h3>
          </div>
        );
      })}
    </div>
  );
}
