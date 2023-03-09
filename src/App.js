import React, { useEffect } from "react";
import Flow from "./components/Flow.jsx";
import { initializeJsonSchema } from "./util/schema.js";

const App = () => {
  useEffect(() => {
    initializeJsonSchema();
  }, []);
  return <Flow />;
};

export default App;
