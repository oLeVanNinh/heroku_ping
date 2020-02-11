import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons'

export class UrlBar extends React.Component {
  render() {
    const { id, url, handleDeleteUrl } = this.props;
    return (
      <div className="bar">
        <div className="url-bar">{ url }</div>
        <div className="btn edit">
          <FontAwesomeIcon icon={faEdit} />
        </div>
        <div className="btn delete"  value={id} onClick={handleDeleteUrl}>
          <FontAwesomeIcon icon={faTrash} />
        </div>
      </div>
    )
  }
}
