import axios from 'axios'

// ACTION CONSTANTS
const GOT_RESULTS = 'GOT_RESULTS'

// ACTION CREATORS
export const gotResults = (results) => ({
  type: GOT_RESULTS,
  results
})

// THUNK CREATORS
export const getResults = (searchTerm) => async (dispatch) => {
  try {
    const { data: results } = await axios.get(`http://www.omdbapi.com/?i=tt3896198&apikey=1badd84a&type=movie&s=${searchTerm.split(' ').join('+')}`)
    console.log('RESULTS FROM OMDB -->', results.Search)
    dispatch(gotResults(results.Search))
  } catch (err) {
    console.error(err)
  }
}

// Take a look at app/redux/index.js to see where this reducer is
// added to the Redux store with combineReducers
export default function resultsReducer(state = [], action) {
  switch (action.type) {
    case GOT_RESULTS:
      return action.results
    default:
      return [...state]
  }
}
