import axios from "axios";
import React, { useEffect } from "react";

const About = ({ name }) => {
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const res = await axios.post("http://localhost:5002/products", {
      name: "LEO",
      no: 5,
    });
    console.log(res.data);
  };

  return <div>About {name}</div>;
};

export default About;
