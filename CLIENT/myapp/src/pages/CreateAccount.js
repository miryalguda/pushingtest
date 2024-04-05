import React from "react";
import { UserContext } from "../LoginApp2";
import "bootstrap/dist/css/bootstrap.min.css";

import { useNavigate, Link } from "react-router-dom";
import "../index.css";

function Card(props) {
  function classes() {
    const bg = props.bgcolor ? " bg- " + props.bgcolor : " ";
    const txt = props.txtcolor ? " text-" + props.txtcolor : " text -white ";
    return "card mt-5 bg-warning col-md-5 mx-auto w-4 " + bg + txt;
  }

  return (
    <div
      className={classes()}
      style={{
        backgroundImage: "linear-gradient(79deg, #3ff0de , #7b83f5, #cd59f3 )",
        marginTop: "5rem",
        maxWidth: "36rem",
        maxHeight: "36rem",
        border: "2px solid grey",
        boxShadow: "2px 3px 3px 2px  #803300 ",
      }}
    >
      <div className="card-header " style={{ fontSize: "2vw" }}>
        {props.header}
      </div>
      <div className="card-body">
        {props.title && <h5 className="card-title"> {props.title} </h5>}
        {props.text && <p className="card-text"> {props.text} </p>}
        {props.body}
        {props.status && <div id="createStatus"> {props.status} </div>}
      </div>
    </div>
  );
}

function CreateAccount() {
  const navigate = useNavigate();
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState("");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const ctx = React.useContext(UserContext);

  function validate(field, label) {
    if (!field) {
      window.alert("Please  fill out all fields!");
      setStatus("Error:" + label);
      setTimeout(() => setStatus("", 3000));
      return false;
    }
    return true;
  }

  function clearForm() {
    setName("");
    setEmail("");
    setPassword("");
    setShow(true);
  }

  function handleCreate() {
    console.log(name, email, password);
    if (!validate(name, "name")) return;

    if (!validate(email, "email")) return;
    if (!validate(password, "password")) return;
    ctx.users.push({ name, email, password });
    setShow(false);
  }

  return (
    <>
      <button
        className="btn btn-lg btn-block  bg-success text-center text-white p-2 mt-5"
        onClick={() => navigate("/Accounts4")}
      >
        Accounts page
      </button>

      <div
        className="text-center "
        style={{ marginTop: "5rem", color: "yellow" }}
      >
        {" "}
        <h2>Welcome to Register your Account</h2>
      </div>

      <Card
        bgcolor="warning"
        header="Create Account"
        status={status}
        body={
          show ? (
            <>
              Name <br />
              <div className="col-auto">
                <span className="form-text" style={{ color: "yellow" }}>
                  Must be 6-10 characters long.
                </span>
              </div>
              <input
                type="input"
                className="form-control"
                id="name"
                placeholder="Enter Name"
                maxLength={10}
                minLength={6}
                value={name}
                onChange={(e) => setName(e.currentTarget.value)}
                name="name"
                required
              />{" "}
              <br />
              <div className="invalid-feedback">Please fill out this field</div>
              Email address <br />
              <input
                type="input"
                className="form-control"
                id="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.currentTarget.value)}
                name="email"
                required
              />{" "}
              <br />
              <div className="invalid-feedback">Please fill out this field</div>
              Password <br />
              <div className="col-auto">
                <span className="form-text" style={{ color: "yellow" }}>
                  Must be 8-12 characters long.
                </span>
              </div>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter password"
                maxLength={12}
                minLength={8}
                value={password}
                onChange={(e) => setPassword(e.currentTarget.value)}
                name="password"
                required
              />{" "}
              <br />
              <div className="invalid-feedback">Please fill out this field</div>
              <div className="form-check mb-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="myCheck"
                  name="remember"
                  required
                />
                <label className="form-check-label" for="myCheck">
                  I agree all terms and policy.
                </label>
                <div className="valid-feedback">Valid.</div>
                <div className="invalid-feedback">
                  Check this checkbox to continue.
                </div>
              </div>
              <button
                type="submit"
                className="btn btn-light"
                onClick={handleCreate}
              >
                Create Account
              </button>
            </>
          ) : (
            <>
              <h5>Success</h5>
              <button
                type="submit"
                className="btn btn-light"
                onClick={clearForm}
              >
                Add another Account
              </button>
            </>
          )
        }
      />
    </>
  );
}

export default CreateAccount;
