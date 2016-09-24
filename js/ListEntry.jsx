const React = require('react')

const ListEntry = React.createClass({
  render() {
    return (
      <div>
        <h1>{this.props.data.title.rendered} : TYPE: {this.props.data.type}</h1>
        <a href={"https://wp.resumebucket.com/"+this.props.data.slug}>{"https://wp.resumebucket.com/"+this.props.data.slug}</a>
        <div className="excerpt">
          <small>Published on: {this.props.data.date}</small>
          <p>{this.props.data.excerpt.rendered}</p>
        </div>
      </div>
    )
  }
})

module.exports = ListEntry
