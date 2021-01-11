import React from 'react'
import { connect } from 'react-redux'
import { getNominees, addNominee, removeNominee } from '../redux/nominees'

const Results = ({ results, nominees, getNominees, addNominee, removeNominee }) => {
    const nominate = async (movie) => {
        await addNominee(movie)
        await getNominees()
    }
    const unnominate = async (movieId) => {
        await removeNominee(movieId)
        await getNominees()
    }
    return (
        <div>
        {
            results.length ? (
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
                <div />
            )
        }
        </div>
    )
}

const mapState = state => ({
    results: state.results,
    nominees: state.nominees
})

const mapDispatch = dispatch => ({
    getNominees: () => dispatch(getNominees()),
    addNominee: (nominee) => dispatch(addNominee(nominee)),
    removeNominee: (nomineeId) => dispatch(removeNominee(nomineeId))
})

export default connect(mapState, mapDispatch)(Results)
