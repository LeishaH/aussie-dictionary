function Synonyms({ synonyms }) {
  if (!synonyms || synonyms.length === 0) {
    return null;
  }

  return (
    <div>
      <strong>Synonyms:</strong>{" "}
      {synonyms.map((synonym, index) => (
        <span key={index}>{synonym} </span>
      ))}
    </div>
  );
}

export default Synonyms;
