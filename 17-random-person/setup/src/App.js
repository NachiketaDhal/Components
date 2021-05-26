import React, { useState, useEffect } from "react";
import {
  FaEnvelopeOpen,
  FaUser,
  FaCalendarTimes,
  FaMap,
  FaPhone,
  FaLock,
} from "react-icons/fa";
const url = "https://randomuser.me/api/";
const defaultImage = "https://randomuser.me/api/portraits/men/75.jpg";

function App() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});
  const [title, setTitle] = useState("name");
  const [value, setValue] = useState("Random Person");

  const fetchUser = async () => {
    setLoading(true);
    const fetchedUser = await fetch(url);
    const fetchedUserJSON = await fetchedUser.json();
    // console.log(fetchedUserJSON.results[0]);

    const person = fetchedUserJSON.results[0];

    const { email, phone } = person;
    const {
      picture: { large },
    } = person;
    const { first, last } = person.name;
    const { age } = person.dob;
    const { number, name } = person.location.street;
    const { password } = person.login;

    const newPerson = {
      image: large,
      name: `${first} ${last}`,
      email,
      age,
      street: `${number} ${name}`,
      phone,
      password,
    };
    setUser(newPerson);
    setLoading(false);
    setTitle("name");
    setValue(newPerson.name);
  };

  const handleMouseOver = (e) => {
    if (e.target.classList.contains("icon")) {
      setTitle(e.target.dataset.label);
      setValue(user[e.target.dataset.label]);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <main>
      <div className="block bcg-black"></div>
      <div className="block">
        <div>
          <div className="container">
            <img src={(!user && defaultImage) || user.image} alt="user" />
            <p className="user-title">My {title} is </p>
            <p className="user-value">{value}</p>
            <div className="values-list">
              <button
                className="icon"
                data-label="name"
                onMouseOver={handleMouseOver}
              >
                <FaUser />
              </button>
              <button
                className="icon"
                data-label="email"
                onMouseOver={handleMouseOver}
              >
                <FaEnvelopeOpen />
              </button>
              <button
                className="icon"
                data-label="age"
                onMouseOver={handleMouseOver}
              >
                <FaCalendarTimes />
              </button>
              <button
                className="icon"
                data-label="street"
                onMouseOver={handleMouseOver}
              >
                <FaMap />
              </button>
              <button
                className="icon"
                data-label="phone"
                onMouseOver={handleMouseOver}
              >
                <FaPhone />
              </button>
              <button
                className="icon"
                data-label="password"
                onMouseOver={handleMouseOver}
              >
                <FaLock />
              </button>
            </div>
            <button className="btn" onClick={fetchUser}>{`${
              loading ? "Loading..." : "Random User"
            }`}</button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
