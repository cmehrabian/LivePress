const React = require('react')
const ReactDOM = require('react-dom')
const Layout = require('./Layout')
const Landing = require('./Landing')
const About = require('./About')
const { Router, Route, IndexRoute, hashHistory } = require('react-router')

const App = React.createClass({
  render () {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Layout}>
          <IndexRoute component={Landing} />
          <Route path="/About" component={About} />
        </Route>
      </Router>
    )
  }
})

ReactDOM.render(<App />, document.getElementById('app'))
