import React from "react"

export class SiteInput extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const props = this.props;
    return(
      <form>
        <label className="form-group">
          <input className="form-control" onChange={props.handleUrlInPut} onPaste={props.handleUrlInPut} value={props.url} />
          <button className="btn" type="button" onClick={props.handleAddUrl}>Add</button>
        </label>
      </form>
    )
  }
}
