import React from "react"
import PropTypes from "prop-types"
import axios from "axios"
import { UrlBar } from './UrlBar';
import { SiteInput } from './SiteInput'


class Sites extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sites: this.props.sites,
      url: ''
    };

    this.handleUrlInPut = this.handleUrlInPut.bind(this);
    this.handleAddUrl = this.handleAddUrl.bind(this);
  }

  handleUrlInPut(event) {
    this.setState({ url: event.target.value });
    console.log(this.state);
  }

  handleAddUrl() {
    const csrfToken = document.querySelector('[name=csrf-token]').content
    axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken
    const url = this.state.url;
    const urlPattern = /(https?:\/\/)?([\w\-])+\.{1}([a-zA-Z]{2,63})([\/\w-]*)*\/?\??([^#\n\r]*)?#?([^\n\r]*)/g

    if (!!url.match(urlPattern)) {
      axios.post('/sites',{url: url}).then(res => {
        const sites = this.state.sites;
        const url = '';
        sites.push(res.data.site);
        this.setState({sites, url});
      })
      .catch(err => console.log(err));
    }
  }

  render () {
    const sites = this.props.sites
    return (
      <React.Fragment>
        <div className="container">
        <SiteInput handleUrlInPut={this.handleUrlInPut} handleAddUrl={this.handleAddUrl} url={this.state.url} />
        {sites.length > 0 && sites.map((site, index) =>
          <UrlBar url={site.url} key={index} />
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
