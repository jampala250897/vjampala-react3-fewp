import React from "react";
import TaskManager from "./components/TaskManager";
import UserContext from "./context/UserContext";

const App = () => {
  const user = { name: "Vineeth Kumar Jampal", id: 1 }; // Simulated user data
  return (
    <UserContext.Provider value={user}>
      <TaskManager />
    </UserContext.Provider>
  );
};

export default App;
