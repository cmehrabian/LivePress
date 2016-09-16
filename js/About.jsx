const React = require('react')
const Header = require('./Header')

const About = React.createClass({
  render() {
    return (
      <div>
        <Header />
        <h4>Access your WordPress sites data through an easy-to-use HTTP REST API.</h4>
        <p>
          WordPress is moving towards becoming a fully-fledged application framework, and we need new APIs.
          This project was born to create an easy-to-use, easy-to-understand and well-tested framework for creating these APIs,
          plus creating APIs for core.
        </p>
        <p>
          This plugin provides an easy to use REST API, available via HTTP.
          Grab your site’s data in simple JSON format, including users, posts,
          taxonomies and more. Retrieving or updating data is as simple as sending a HTTP request.
        </p>
        <p>
          Want to get your site’s posts? Simply send a GET request to /wp-json/wp/v2/posts.
          Update user with ID 4? Send a POST request to /wp-json/wp/v2/users/4.
          Get all posts with the search term “awesome”? GET /wp-json/wp/v2/posts?search=awesome. It’s that easy.
        </p>
        <p>
          The API exposes a simple yet easy interface to WP Query, the posts API,
          post meta API, users API, revisions API and many more.
          Chances are, if you can do it with WordPress, WP API will let you do it.
        </p>
      </div>
    )
  }
})

module.exports = About
