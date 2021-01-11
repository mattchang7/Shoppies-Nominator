import React from 'react'
import { connect } from 'react-redux'
import { getNominees, removeNominee } from '../redux/nominees'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

toast.configure()

const Nominees = ({ results, nominees, fetchNominees, deleteNominee }) => {
    const handleClick = async (e, nomineeId) => {
        e.preventDefault()
        await deleteNominee(nomineeId)
        await fetchNominees()
    }
    if (nominees.length === 5) {
        toast('')
    }
    return (
        <div>
            {
                (results.length > 0 || nominees.length > 0) ? (
                    <div className='nominees'>
                        <h1>Nominees</h1>
                        <ul>
                        {
                            nominees.map(nominee => (
                                <li key={nominee.imdbID}>
                                    <img src={nominee.Poster} className='poster' />
                                    <div className='movieContent'>
                                        <h4 className='movieContent'>{nominee.Title}</h4>
                                        <p className='movieContent'>{nominee.Year}</p>
                                        <button type='submit' onClick={(e) => handleClick(e, nominee.imdbID)}><h4>Remove Nomination</h4></button>
                                    </div>
                                </li>
                            ))
                        }
                        </ul>
                    </div>
                ) : (
                    <div/>
                )
            }
        </div>
    )
}

const mapState = state => ({
    nominees: state.nominees,
    results: state.results
})

const mapDispatch = dispatch => ({
    fetchNominees: () => dispatch(getNominees()),
    deleteNominee: (nomineeId) => dispatch(removeNominee(nomineeId))
})

export default connect(mapState, mapDispatch)(Nominees)
