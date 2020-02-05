import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons'

export class UrlBar extends React.Component {
  render() {
    return (
      <div className="bar">
        <div className="url-bar">{ this.props.url }</div>
        <div className="btn edit">
          <FontAwesomeIcon icon={faEdit} />
        </div>
        <div className="btn delete">
          <FontAwesomeIcon icon={faTrash} />
        </div>
      </div>
    )
  }
}
