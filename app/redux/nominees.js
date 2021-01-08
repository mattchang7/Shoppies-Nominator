import axios from 'axios'

// ACTION CONSTANTS
const GOT_NOMINEES = 'GOT_NOMINEES'
const ADDED_NOMINEE = 'ADDED_NOMINEE'
const REMOVED_NOMINEE = 'REMOVED_NOMINEE'

// ACTION CREATORS
export const gotNominees = (nominees) => ({
  type: GOT_NOMINEES,
  nominees
})
export const addedNominee = (nominee) => ({
  type: ADDED_NOMINEE,
  nominee
})
export const removedNominee = (nominee) => ({
  type: REMOVED_NOMINEE,
  nominee
})

// THUNK CREATORS
export const getNominees = () => async (dispatch) => {
  try {
    const { data: nominees } = await axios.get('/api/nominees')
    dispatch(gotNominees(nominees))
  } catch (err) {
    console.error(err)
  }
}
export const addNominee = (nominee) => async (dispatch) => {
  try {
    const { data: newNominee } = await axios.post('/api/nominees', nominee)
    dispatch(addedNominee(newNominee))
  } catch (err) {
    console.error(err)
  }
}
export const removeNominee = (nomineeId) => async (dispatch) => {
  try {
    await axios.delete(`/api/nominees/${nomineeId}`)
    dispatch(removedNominee(nomineeId))
  } catch (err) {
    console.error(err)
  }
}

export default function nomineesReducer(state = [], action) {
  switch (action.type) {
    case GOT_NOMINEES:
      return action.nominees
    case ADDED_NOMINEE:
      return [...state, action.nominee]
    case REMOVED_NOMINEE:
      return state.filter(nominee => nominee.id !== action.nomineeId)
    default:
      return [...state]
  }
}
