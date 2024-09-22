import "./App.css";
import Filter from "./components/filter/Filter";
import UserList from "./components/userList/UserList";

function App() {
  return (
    <div className="container">
      <Filter />
      <UserList />
    </div>
  );
}

export default App;
