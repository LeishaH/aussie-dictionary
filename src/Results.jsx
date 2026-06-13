import Meaning from "./Meaning";

function Results({ definition }) {
  if (!definition) {
    return null;
  }

  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <h2 className="card-title">{definition.word}</h2>

        {definition.phonetic && (
          <p className="card-text">
            <strong>Phonetic:</strong> {definition.phonetic}
          </p>
        )}

        {definition.meanings.map((meaning, index) => (
          <Meaning meaning={meaning} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Results;
