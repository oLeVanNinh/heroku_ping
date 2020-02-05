import React from "react"
import PropTypes from "prop-types"

export class SiteInput extends React.Component {
  constructor(props) {
    super(props);
    this.state
  }

  render() {
    return(
      <form>
        <label className="form-group">
          <input className="form-control" />
          <button className="btn">Add</button>
        </label>
      </form>
    )
  }
}
