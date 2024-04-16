import { useState } from "react";

const RandomPage = () => {
  const [event, setEvent] = useState("");
  return (
    <main className="main-container">
      <h1>Random Page</h1>
      <h2 className="text-center">Random Event:</h2>
      <p>{event}</p>
      <button>Get Random Event</button>
    </main>
  );
};

export default RandomPage;
