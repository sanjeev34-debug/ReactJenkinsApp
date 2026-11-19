import "./App.css";

function App() {
  return (
    <div>
      <h1>React Application Using Jenkins</h1>
      <h2>My First React Application</h2>
      <p>
        This application is created using React
        and Vite.
      </p>
      <button onClick={() => alert("Jenkins CI is working!")}>
        Click Me
      </button>
    </div>
  );
}

export default App;