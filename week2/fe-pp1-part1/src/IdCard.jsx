const IdCard = ({ picture, firstName, lastName, gender, birth, height }) => (
  <div
    style={{
      border: "2px solid black",
      padding: "10px",
      margin: "10px 0",
      display: "flex",
      gap: "10px"
    }}
  >
    <img src={picture} alt={`${firstName} ${lastName}`} />
    <ul>
      <li><span>First Name:</span> {firstName}</li>
      <li>Last Name: {lastName}</li>
      <li>Gender: {gender}</li>
      <li>Birth: {birth.toDateString()}</li>
      <li>Height: {height}cm</li>
    </ul>
  </div>
);

export default IdCard;
