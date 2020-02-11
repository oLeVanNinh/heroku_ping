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
    this.handleDeleteUrl = this.handleDeleteUrl.bind(this);
  }

  componentDidMount() {
    const csrfToken = document.querySelector('[name=csrf-token]').content
    axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken
  }

  handleUrlInPut(event) {
    this.setState({ url: event.target.value });
  }

  handleAddUrl() {
    const url = this.state.url;
    const urlPattern = /(https?:\/\/)?([\w\-])+\.{1}([a-zA-Z]{2,63})([\/\w-]*)*\/?\??([^#\n\r]*)?#?([^\n\r]*)/g

    if (!!url.match(urlPattern)) {
      axios.post('/sites',{ url: url }).then(res => {
        const sites = this.state.sites;
        const url = '';
        sites.unshift(res.data.site);
        this.setState({sites, url});
      })
      .catch(err => console.log(err));
    }
  }

  handleDeleteUrl(event) {
    const urlId = event.target.getAttribute('value');
    if (urlId) {
      axios.delete('/sites', { data: { id: urlId }}).then(res => {
        const sites = this.state.sites.filter((site => site.id !== Number(urlId)));
        this.setState({sites});
      })
      .catch(err => console.log(err));
    }
  }

  render () {
    const { sites } = this.state
    return (
      <React.Fragment>
        <div className="container">
        <SiteInput handleUrlInPut={this.handleUrlInPut} handleAddUrl={this.handleAddUrl} url={this.state.url} />
        {sites.length > 0 && sites.map((site) =>
          <UrlBar id={site.id} url={site.url} key={site.id} handleDeleteUrl={this.handleDeleteUrl} />
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
