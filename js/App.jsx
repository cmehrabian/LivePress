const React = require('react')
const ReactDOM = require('react-dom')
const Layout = require('./Layout')
const Landing = require('./Landing')
const About = require('./About')
const { Router, Route, IndexRoute, hashHistory } = require('react-router')
const { store } = require('./Store')
const { Provider } = require('react-redux')

const App = React.createClass({
  render () {
    return (
      <Provider store={store}>
        <Router history={hashHistory}>
          <Route path="/" component={Layout}>
            <IndexRoute component={Landing} />
            <Route path="/About" component={About} />
          </Route>
        </Router>
      </Provider>
    )
  }
})

ReactDOM.render(<App />, document.getElementById('app'))
