import React from "react";
import User from "./User";

export default function UserList({ list }) {
  return (
    <ul className="list">
      {list.map((user) => {
        const { id, name } = user;
        return <User key={id} name={name} />;
      })}
    </ul>
  );
}
