import React from "react";

const Form = props => (
  <form>
    <div className="form-group">
      <label htmlFor="sport">
        <strong>Sport</strong>
      </label>
      <input
        className="form-control"
        id="topic"
        type="text"
        value={props.q}
        placeholder="Soccer"
        name="q"
        onChange={props.handleInputChange}
        required
      />
      <label htmlFor="start-year">
        <strong>Location</strong>
      </label>
      <input
        className="form-control"
        id="start-year"
        type="number"
        value={props.start_year}
        placeholder="Swope Park, Kansas City"
        name="start_year"
        onChange={props.handleInputChange}
        required
      />
      <label htmlFor="end-year">
        <strong># of players</strong>
      </label>
      <input
        className="form-control"
        id="end-year"
        type="number"
        value={props.end_year}
        placeholder="5"
        name="end_year"
        onChange={props.handleInputChange}
        required
      />
    </div>
    <div className="pull-right">
      <button
        onClick={props.handleFormSubmit}
        type="submit"
        className="btn btn-lg btn-danger"
      >
        Submit
      </button>
    </div>
  </form>
);

export default Form;
