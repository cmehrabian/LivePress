const React = require('react')
const { Link } = require('react-router')

const Header = React.createClass({
  render() {
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
        </ul>
      </nav>
    )
  }
})

module.exports = Header
