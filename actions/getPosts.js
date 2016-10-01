const axios = require('axios')

const getPosts = () => {
  const request = axios.get('https://wp.resumebucket.com/wp-json/wp/v2/posts')

  // with thunk, function can be returned in this action
  return (dispatch) => {
    request.then((response) =>  {
      console.log(response)
    })
  }
}

module.exports = getPosts
