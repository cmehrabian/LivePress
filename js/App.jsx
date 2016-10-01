const React = require('react')
const Layout = require('./Layout')
const Landing = require('./Landing')
const About = require('./About')
const { Router, Route, IndexRoute, browserHistory } = require('react-router')

const { store } = require('./Store')
const { Provider } = require('react-redux')

const myRoutes = (props) => (
  <Route path="/" component={Layout}>
    <IndexRoute component={Landing} />
    <Route path="/About" component={About} />
  </Route>
)



const App = React.createClass({
  render () {
    return (
      <Provider store={store}>
        <Router history={browserHistory}>
          {myRoutes()}
        </Router>
      </Provider>
    )
  }
})

App.Routes = myRoutes
module.exports = App
