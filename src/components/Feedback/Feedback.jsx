const Feedback = ({ count }) => {
  return (
    <ul>
      {Object.entries(count).map(([key, value]) => (
        <li key={key}>
          {key} : {value}
        </li>
      ))}
    </ul>
  );
};
export default Feedback;
