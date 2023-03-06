import React from "react";

export default function Form() {
  return (
    <div>
      <form>
        <div className="form-group">
          <label className="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          ></input>
          <small id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div class="form-group">
          <label className="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          ></input>
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          ></input>
          <label className="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </div>
  );
}
