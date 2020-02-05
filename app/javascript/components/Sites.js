import React from "react"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { UrlBar } from './UrlBar';
import { SiteInput } from './SiteInput'

class Sites extends React.Component {
  render () {
    const sites = this.props.sites
    return (
      <React.Fragment>
        <div className="container">
        <SiteInput />
        {sites.length > 0 && sites.map((site) =>
          <UrlBar url={site.url} />
        )}
        </div>
      </React.Fragment>
    );
  }
}

Sites.propTypes = {
  sites: PropTypes.array
};
export default Sites
