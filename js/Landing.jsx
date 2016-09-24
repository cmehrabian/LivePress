const React = require('react')
const Header = require('./Header')
const List = require('./List')
const { hashHistory } = require('react-router')
const { connector } = require('./Store')

const Landing = React.createClass({
  render() {
    return (
      <div>
        <Header />
        <h1>Landing</h1>
        <List />
        <form>
          {/*<input className="" type="text" placeholder="search endpoint" value={this.props.searchTerm} onChange={this.handleSearchTermEvent} />*/}
        </form>
      </div>
    )
  }
})

module.exports = connector(Landing)
