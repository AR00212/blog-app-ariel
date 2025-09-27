import React from "react";
import "../styles/UserFilter.css";

function UserFilter({ setUserId }) {
  return (
    <select
      className="user-filter"
      onChange={(e) => setUserId(e.target.value)}
    >
      <option value="">Todos los usuarios</option>
      {Array.from({ length: 10 }).map((_, i) => (
        <option key={i+1} value={i+1}>Usuario {i+1}</option>
      ))}
    </select>
  );
}

export default UserFilter;
