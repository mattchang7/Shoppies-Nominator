import React from 'react'
import { connect } from 'react-redux'
import { getNominees, removeNominee } from '../redux/nominees'

const Nominees = ({ nominees, getNominees, removeNominee }) => {
    const deleteNominee = async (nomineeId) => {
        await removeNominee(nomineeId)
        await getNominees()
    }
    return (
        <div>
        {
            nominees.length ? (
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
                                    <button type='submit' onClick={() => deleteNominee(nominee.imdbID)}><h4>Remove Nomination</h4></button>
                                </div>
                            </li>
                        ))
                    }
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
    nominees: state.nominees
})

const mapDispatch = dispatch => ({
    getNominees: () => dispatch(getNominees()),
    removeNominee: (nomineeId) => dispatch(removeNominee(nomineeId))
})

export default connect(mapState, mapDispatch)(Nominees)
