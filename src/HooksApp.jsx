// import ContadorComponent from "./components/ContadorComponent";

import { useState } from "react";

const HooksApp = () => {
  const [formState, setFormState] = useState({
    username: "Felipe Coll",
    useremail: "lalla@gmail.com",
    userpassword: "123456",
  });

  const { username, useremail, userpassword } = formState;

  const onInputChange = ({ target }) => {
    console.log(target.name);
    console.log(target.value);
  };

  return (
    <form>
      <div className="mb-3">
        <label className="form-label">Usuario</label>
        <input
          type="text"
          className="form-control"
          name="username"
          value={username}
          onChange={onInputChange}
        />
        <label className="form-label">Correo Electronico</label>
        <input
          type="email"
          className="form-control"
          name="useremail"
          value={useremail}
          onChange={onInputChange}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Password</label>
        <input
          type="password"
          className="form-control"
          name="userpassword"
          value={userpassword}
          onChange={onInputChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default HooksApp;
