import "./App.css";

function App() {
  return (
    <main className="container py-5">
      <section className="text-center mb-5">
        <img
          src="/app-logo.png"
          alt="Aussie Dictionary logo"
          className="img-fluid mb-4 app-logo"
        />

        <h1 className="display-4 fw-bold">Aussie Dictionary</h1>
        <p className="lead">Search Australian English words and phrases.</p>
      </section>

      <section className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <form className="mb-4">
            <input
              type="search"
              className="form-control"
              placeholder="Search for a word, e.g. arvo"
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
    </main>
  );
}

export default App;
