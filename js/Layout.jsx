const React = require('react')
const { element } = React.PropTypes

const Layout = (props) => (
  <div className='container'>
    {props.children}
  </div>
)

Layout.propTypes = {
  children: element.isRequired
}

module.exports = Layout
