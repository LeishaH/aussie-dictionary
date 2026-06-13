import { useState } from "react";
import axios from "axios";

function Dictionary() {
  const [keyword, setKeyword] = useState("");
  const [definition, setDefinition] = useState(null);

  function handleResponse(response) {
    setDefinition(response.data[0]);
  }

  function handleSubmit(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <section className="row justify-content-center">
      <div className="col-md-8 col-lg-6">
        <form className="mb-4" onSubmit={handleSubmit}>
          <input
            type="search"
            className="form-control"
            placeholder="Search for a word, e.g. kangaroo"
            value={keyword}
            onChange={handleKeywordChange}
          />
        </form>

        {definition && (
          <div className="card shadow-sm">
            <div className="card-body">
              <h2 className="card-title">{definition.word}</h2>

              <p className="card-text">
                <strong>Definition:</strong>{" "}
                {definition.meanings[0].definitions[0].definition}
              </p>

              {definition.meanings[0].partOfSpeech && (
                <p className="card-text">
                  <strong>Part of speech:</strong>{" "}
                  {definition.meanings[0].partOfSpeech}
                </p>
              )}

              {definition.phonetic && (
                <p className="card-text">
                  <strong>Phonetic:</strong> {definition.phonetic}
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Dictionary;
