function Meaning({ meaning }) {
  return (
    <div className="mb-4">
      <h3 className="h5">{meaning.partOfSpeech}</h3>

      {meaning.definitions.map((definition, index) => (
        <div key={index} className="mb-3">
          <p className="card-text mb-1">{definition.definition}</p>

          {definition.example && (
            <p className="card-text text-muted">
              <em>{definition.example}</em>
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

export default Meaning;
