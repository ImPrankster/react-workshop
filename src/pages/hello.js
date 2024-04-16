import { useState } from "react";

const HelloPage = () => {
  const [text, setText] = useState("");
  const [received, setReceived] = useState({
    code: null,
    msg: null,
    error: null,
  });

  return (
    <main className="main-container">
      <h1>Hello Page</h1>
      {received.msg && (
        <div className="bg-green-700 text-white p-2 m-2">
          <p>{received.code} Received:</p>
          <p>{received.msg}</p>
        </div>
      )}
      {received.error && (
        <div className="bg-red-700 text-white p-2 m-2">
          <p>{received.code} Error:</p>
          <p>{received.error}</p>
        </div>
      )}
      <div className="input-group">
        <input
          type="text"
          placeholder="Send a greeting"
          onChange={(event) => {
            setText(event.target.value);
          }}
        />
        <button>Say hello</button>
      </div>
    </main>
  );
};

export default HelloPage;
