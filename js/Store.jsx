const redux = require('redux')
const reactRedux = require('react-redux')
const axios = require('axios')
const {data} = require('../public/data')

const SET_SEARCH_TERM = 'setSearchTerm'
const GET_POSTS = 'getPosts'

const initialState = {
  searchTerm: '',
  data: []
}

const rootReducer = (state=initialState, action) => {
  switch(action.type) {
    case SET_SEARCH_TERM:
      return reduceSearchTerm(state, action)
    case GET_POSTS:
      return reduceGetPosts(state, action)
    default:
      return state
  }
}


const reduceSearchTerm = (state, action) => {
  const newState = {}
  Object.assign(newState, state, {searchTerm: action.value})
  return newState
}

const reduceGetPosts = (state, action) => {
  const newState = {}
  // Wont work with http-server + webpack, causing error in get Request have to make it an express app
  // ****
  // axios.get('https://wp.resumebucket.com/wp-json/wp/v2/posts')
  // .then(function (response) {
  //   return response
  // })
  // .catch(function (error) {
  //   console.log(error);
  // });

  // For now, passing in 2 post : dummy data
  Object.assign(newState, state, {data : data})
  return newState
}

const store = redux.createStore(rootReducer)

const mapStatetoProps = (state) => {
  return {
    searchTerm: state.searchTerm,
    data: state.data
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setSearchTerm: (searchTerm) => {
      dispatch({
        type: SET_SEARCH_TERM,
        value: searchTerm
      })
    },
    getPosts: (data) => {
      dispatch({
        type: GET_POSTS,
        value: data
      })
    }
  }
}

const connector = reactRedux.connect(mapStatetoProps, mapDispatchToProps)

module.exports = { connector, store }
