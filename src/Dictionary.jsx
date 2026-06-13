import { useState } from "react";

function Dictionary() {
  const [keyword, setKeyword] = useState("");

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);
  }

  return (
    <section className="row justify-content-center">
      <div className="col-md-8 col-lg-6">
        <form className="mb-4" onSubmit={handleSubmit}>
          <input
            type="search"
            className="form-control"
            placeholder="Search for a word, e.g. arvo"
            value={keyword}
            onChange={handleKeywordChange}
          />
        </form>

        <div className="card shadow-sm">
          <div className="card-body">
            <h2 className="card-title">arvo</h2>

            <p className="card-text">
              <strong>Meaning:</strong> afternoon
            </p>

            <p className="card-text">
              <strong>Example:</strong> I'll call you this arvo.
            </p>

            <p className="card-text">
              <strong>Standard English:</strong> afternoon
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Dictionary;
