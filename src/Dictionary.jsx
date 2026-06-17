import { useState } from "react";
import axios from "axios";
import Results from "./Results";

function Dictionary() {
  const [keyword, setKeyword] = useState("kangaroo");
  const [definition, setDefinition] = useState(null);
  const [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setDefinition(response.data[0]);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
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

          <div className="hint mb-4">
            Suggested words: kangaroo, lizard, sunset, beach, eucalyptus
          </div>

          <Results definition={definition} />
        </div>
      </section>
    );
  } else {
    load();
  }
}

export default Dictionary;
