const React = require('react')
const Header = require('./Header')
const { hashHistory } = require('react-router')


const Landing = React.createClass({
  getInitialState() {
    return {
      searchTerm: ''
    }
  },
  handleSearch(event) {
    this.setState({
      searchTerm: event.target.value
    })
  },
  render() {
    return (
      <div>
        <Header />
        <h1>Landing</h1>
        <form>
          <input className="" type="text" placeholder="search endpoint" value={this.state.searchTerm} onChange={this.handleSearch} />
        </form>
      </div>
    )
  }
})

module.exports = Landing
