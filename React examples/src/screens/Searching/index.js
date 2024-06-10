import React, { useEffect, useState } from "react";

function debounce(cb, delay) {
    let timer;
      return function(...args) {
         clearTimeout(timer)
          timer=setTimeout(() => {
              cb.apply(this, args)
          }, delay);
      }
    };

const SearchingInput = () => {
  const [users, setUsers] = useState([]);
  const [searchedUsers, setSearchedUsers] = useState([]);
  useEffect(() => {
    async function fetchUsers() {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await res.json();
        console.log({ users });
        setUsers(users);
      } catch (error) {
        console.error(error);
        setUsers([]);
      }
    }
    fetchUsers();
  }, []);

  const handleChange = (e) => {
    const val = e.target.value;
    !!val ? handleSearch(val) : setSearchedUsers([])
    
  };

  const handleSearch = debounce((val) => {
    const filtered_users = users.filter(user => user.name.includes(val))
    setSearchedUsers(filtered_users)
  }, 1000)

  return (
    <>
      <input type="text" onKeyUp={handleChange} />

      {searchedUsers.length ? (
        <div>
          <h1>All Searched Users</h1>
          {searchedUsers.map((user, index) => {
            return <div key={user.id}>{user.name}</div>;
          })}
        </div>
      ) : (
        ""
      )}

      {users.length ? (
        <div>
          <h1>All Users</h1>
          {users.map((user, index) => {
            return <div key={user.id}>{user.name}</div>;
          })}
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default SearchingInput;
