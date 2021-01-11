import React from 'react'
import { connect } from 'react-redux'
import { getNominees, addNominee, removeNominee } from '../redux/nominees'

const Results = ({ results, nominees, fetchNominees, appendNominee, deleteNominee }) => {
    const nominate = async (movie) => {
        await appendNominee(movie)
        await fetchNominees()
    }
    const unnominate = async (movieId) => {
        await deleteNominee(movieId)
        await fetchNominees()
    }
    return (
        <div>
            {
                (results.length > 0 || nominees.length > 0) ? (
                    <div className='results'>
                        <h1>Results</h1>
                        <ul>
                        { results.map(({ imdbID, Poster, Title, Year }) => {
                            return (
                            <li key={imdbID}>
                                <img src={Poster} className='poster' />
                                <div className='movieContent'>
                                    <h4 className='movieContent'>{Title}</h4>
                                    <p className='movieContent'>{Year}</p>
                                    {
                                        nominees.map(nominee => nominee.imdbID).includes(imdbID) ? (
                                            <button type='submit' onClick={() => unnominate(imdbID)}><h4>Remove Nomination</h4></button>
                                        ) : (
                                            <button type='submit' onClick={() => nominate({ imdbID, Poster, Title, Year })}><h4>Nominate</h4></button>
                                        )
                                    }
                                </div>
                            </li>
                        )})}
                        </ul>
                    </div>
                ) : (
                    <div/>
            )}
        </div>
    )
}

const mapState = state => ({
    results: state.results,
    nominees: state.nominees
})

const mapDispatch = dispatch => ({
    fetchNominees: () => dispatch(getNominees()),
    appendNominee: (nominee) => dispatch(addNominee(nominee)),
    deleteNominee: (nomineeId) => dispatch(removeNominee(nomineeId))
})

export default connect(mapState, mapDispatch)(Results)
