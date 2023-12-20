import useForm from "../hooks/useForm";

const FormularioComponent = () => {
  const initialForm = {
    userName: "",
    email: "",
    password: "",
  };

  const { formState, onInputChange } = useForm(initialForm);

  const { userName, email, password } = formState;

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(formState);
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="mb-3">
        <label className="form-label">Usuario</label>
        <input
          type="text"
          className="form-control"
          name="userName"
          value={userName}
          onChange={onInputChange}
        />
        <label className="form-label">Correo Electronico</label>
        <input
          type="email"
          className="form-control"
          name="email"
          value={email}
          onChange={onInputChange}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Password</label>
        <input
          type="password"
          className="form-control"
          name="password"
          value={password}
          onChange={onInputChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default FormularioComponent;
