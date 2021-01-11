import React from 'react'
import { connect } from 'react-redux'
import { getNominees, addNominee, removeNominee } from '../redux/nominees'

const Card = ({ nominees, type, fetchNominees, appendNominee, deleteNominee, imdbID, Title, Year, Poster}) => {
    const nominate = async (movie) => {
        await appendNominee(movie)
        await fetchNominees()
    }
    const unnominate = async (e, movieId) => {
        e.preventDefault()
        await deleteNominee(movieId)
        await fetchNominees()
    }
    return (
        <li key={imdbID}>
            <img src={Poster} className='poster' />
            <div className='movieContent'>
                <h4 className='movieContent'>{Title}</h4>
                <p className='movieContent'>{Year}</p>
                {
                    type === 'result' ? (
                        nominees.map(nominee => nominee.imdbID).includes(imdbID) ? (
                            <button type='submit' onClick={(e) => unnominate(e, imdbID)}><h4>Remove Nomination</h4></button>
                        ) : ( nominees.length === 5 ? (
                                <div />
                            ) : (
                                <button type='submit' onClick={() => nominate({ imdbID, Poster, Title, Year })}><h4>Nominate</h4></button>
                            )
                        )
                    ) : (
                        <button type='submit' onClick={(e) => unnominate(e, imdbID)}><h4>Remove Nomination</h4></button>
                    )
                }
            </div>
        </li>
    )
}

const mapState = state => ({
    nominees: state.nominees
})

const mapDispatch = dispatch => ({
    fetchNominees: () => dispatch(getNominees()),
    appendNominee: (nominee) => dispatch(addNominee(nominee)),
    deleteNominee: (nomineeId) => dispatch(removeNominee(nomineeId))
})

export default connect(mapState, mapDispatch)(Card)