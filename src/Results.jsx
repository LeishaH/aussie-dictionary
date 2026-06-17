import Phonetic from "./Phonetic";
import Meaning from "./Meaning";

function Results({ definition }) {
  if (!definition) {
    return <p className="text-center">Loading...</p>;
  }

  let phonetic = definition.phonetics.find(function (phonetic) {
    return phonetic.audio;
  });

  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <h2 className="card-title">{definition.word}</h2>

        {phonetic && <Phonetic phonetic={phonetic} />}

        {definition.meanings.map((meaning, index) => (
          <Meaning meaning={meaning} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Results;
