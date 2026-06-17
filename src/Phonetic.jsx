function Phonetic({ phonetic }) {
  return (
    <div className="Phonetic mb-3">
      {phonetic.text && (
        <p className="card-text">
          <strong>Phonetic:</strong> {phonetic.text}
        </p>
      )}

      {phonetic.audio && (
        <audio controls src={phonetic.audio}>
          Your browser does not support the audio element.
        </audio>
      )}
    </div>
  );
}

export default Phonetic;
