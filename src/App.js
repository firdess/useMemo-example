import { useState, useMemo } from "react";
import UserList from "./components/UserList";
import "./styles.css";
import { users } from "./users";

export default function App() {
  const [input, setInput] = useState("");
  const [userList, setUserList] = useState("");

  const onChange = (e) => {
    setInput(e.target.value);
  };

  const clickSearch = () => {
    setUserList(input);
  };
  const filteredUsers = useMemo(
    () =>
      users.filter((user) => {
        console.log("Filter function is runnig ...");
        return user.name.toLowerCase().includes(userList.toLowerCase());
      }),
    [userList]
  );

  return (
    <div className="App">
      <div>
        <input type="text" onChange={onChange} />
        <button className="btn" onClick={clickSearch}>
          Search
        </button>
      </div>
      <UserList list={filteredUsers} />
    </div>
  );
}
