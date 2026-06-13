import "./App.css";
import Dictionary from "./Dictionary";

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

      <Dictionary />

      <footer className="text-center mt-5 small">
        This project was coded by{" "}
        <a href="https://github.com/LeishaH" target="_blank" rel="noreferrer">
          Leisha Henry
        </a>{" "}
        and is{" "}
        <a
          href="https://github.com/LeishaH/aussie-dictionary"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced on GitHub
        </a>{" "}
        and{" "}
        <a
          href="https://aussie-dictionary.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          hosted on Netlify
        </a>
        .
      </footer>
    </main>
  );
}

export default App;
