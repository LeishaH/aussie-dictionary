import { useState } from "react";
import axios from "axios";
import Results from "./Results";

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

        <Results definition={definition} />
      </div>
    </section>
  );
}

export default Dictionary;
