import React from "react";
import { useParams } from "react-router-dom";

function NewPage() {
  // Get the name from the route parameter
  const { name } = useParams();

  return (
    <div>
      <h1>Hello bro</h1>
      <p>Name: {name}</p>
    </div>
  );
}

export default NewPage;
