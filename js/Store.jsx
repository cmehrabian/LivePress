const redux = require('redux')
const reactRedux = require('react-redux')
const {data}  = require('../public/data')

const SET_SEARCH_TERM = 'setSearchTerm'
const initialState = {
  seachTerm: '',
  data
}

const rootReducer = (state, action) => {
  console.log("state: ", state, "action: ", action)
  state = state || initialState
  switch(action.type) {
    case SET_SEARCH_TERM:
      return reduceSearchTerm(state, action)
    default:
      return state
  }
}

const reduceSearchTerm = (state, action) => {
  const newState = {}
  Object.assign(newState, state, {searchTerm: action.value})
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
    }
  }
}

const connector = reactRedux.connect(mapStatetoProps, mapDispatchToProps)

module.exports = { connector, store }
