import axios from "axios";
import React, { useState } from "react";

const Dictionary = () => {
  const [word, setWord] = useState("");
  const [meaning, setMeaning] = useState("");

  const fetchData = async () => {
    const res = await axios.get(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${process.env.API_KEY}`
    );
    console.log(res);
    setMeaning(res?.data[0]?.meanings[0]?.definitions[0]?.definition);
  };

  console.log(process.env.API_KEY);

  return (
    <div>
      <input
        type="text"
        placeholder="Search here..."
        onChange={(e) => {
          setWord(e.target.value);
        }}
      />
      <button onClick={() => fetchData()}>search</button>

      <h5>{meaning}</h5>
    </div>
  );
};

export default Dictionary;
