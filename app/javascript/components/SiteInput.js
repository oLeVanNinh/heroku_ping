import React from "react"
import PropTypes from "prop-types"

export class SiteInput extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const props = this.props;
    return(
      <form>
        <label className="form-group">
          <input className="form-control" onChange={props.handleUrlInPut} onPaste={props.handleUrlInPut} />
          <button className="btn" type="button" onClick={props.handleAddUrl}>Add</button>
        </label>
      </form>
    )
  }
}
