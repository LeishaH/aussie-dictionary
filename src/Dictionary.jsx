import { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

function Dictionary() {
  const [keyword, setKeyword] = useState("kangaroo");
  const [definition, setDefinition] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    setDefinition(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);

    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=3`;

    axios
      .get(pexelsApiUrl, {
        headers: {
          Authorization: import.meta.env.VITE_PEXELS_API_KEY,
        },
      })
      .then(handlePexelsResponse);
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
          <Photos photos={photos} />
        </div>
      </section>
    );
  } else {
    load();
  }
}

export default Dictionary;
