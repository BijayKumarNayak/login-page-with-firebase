import React, { useState } from "react";
import "./App.css";

function App() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  let name, value;
  const getdata = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  const postdata = async (e) => {
    e.preventDefault();
    const { name, email, phone, message } = user;
    const res = await fetch(
      "https://reactcontactform-211bd-default-rtdb.firebaseio.com/reactform.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          message,
        }),
      }
    );
    if (res) {
      setUser({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    }
  };

  return (
    <div className="main">
      <div className="form">
        <form action="" method="POST">
          <div className="content">
            <p>Name</p>
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={getdata}
              placeholder="Enter Your Name"
              required
            />
          </div>
          <div className="content">
            <p>Email</p>
            <input
              name="email"
              type="email"
              value={user.email}
              onChange={getdata}
              placeholder="Enter Your Email"
              required
            />
          </div>
          <div className="content">
            <p>Phone</p>
            <input
              name="phone"
              type="number"
              value={user.phone}
              onChange={getdata}
              placeholder="Enter Your Phone Number"
              required
            />
          </div>
          <div className="content">
            <p>Your message</p>
            <textarea
              name="message"
              value={user.message}
              onChange={getdata}
              placeholder="Enter Your Message"
              required
            ></textarea>
          </div>
        </form>
        <button onClick={postdata}>Submmit</button>
      </div>
    </div>
  );
}

export default App;
