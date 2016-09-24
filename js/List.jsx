const React = require('react')
const ListEntry = require('./ListEntry')
const { connector } = require('./Store')


const List = React.createClass({
  render() {
    return (
      <div>
        {this.props.data.map(function(listEntry) {
          console.log(listEntry)
          return (<ListEntry key={listEntry.id} data={listEntry} />);
        })}
      </div>

    )
  }
})

module.exports = connector(List)
