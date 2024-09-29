import "./App.css";
import { useState } from "react";
import { useCallback, useMemo } from "react";
import UserList from "./components/userList/UserList";
import Filter from "./components/filter/Filter";
import { users } from "./user";

function App() {
  console.log("Rendering App");

  function filterUsers(filter) {
    console.log(`run filter users with '${filter}'`);

    return users.filter((elem) =>
      elem.name.toLowerCase().includes(filter.toLowerCase())
    );
  }

  const [filter, setFilter] = useState("");
  const memoFilterUsers = useCallback(filterUsers, []);

  const filteredUsers = useMemo(
    () => memoFilterUsers(filter),
    [filter, memoFilterUsers]
  );

  return (
    <div className="container">
      <Filter setFilter={setFilter} />
      <UserList users={filteredUsers} />
    </div>
  );
}

export default App;
