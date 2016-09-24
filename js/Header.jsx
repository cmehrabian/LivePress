const React = require('react')
const { func, bool, string } = React.PropTypes
const { Link } = require('react-router')
const { connector } = require('./Store')

const Header = React.createClass({
  propTypes : {
    searchTerm : string,
    setSearchTerm: func
  },
  handleSearchTermEvent(e) {
    this.props.setSearchTerm(e.target.value)
  },
  handleGetPostsEvent(e) {
    this.props.getPosts()
  },
  render() {
    let rightNav;
    rightNav = <input type='text' className='search-input' placeholder='search'
                value={this.props.searchTerm} onChange={this.handleSearchTermEvent} />
    return (
      <nav className="navbar navbar-light bg-faded">
        <ul className="nav navbar-nav flex-center">
          <li className="nav-item">
          <Link to="/"><h4>LiveWord</h4></Link>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/About">About</Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Settings</a>
          </li>
          <li>
            {rightNav}
          </li>
          <li>
            <button className="btn btn-success" onClick={this.handleGetPostsEvent}>GO Dummy Content</button>
          </li>
        </ul>
      </nav>
    )
  }
})

module.exports = connector(Header)
