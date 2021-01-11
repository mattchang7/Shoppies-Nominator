import React from 'react'
import { connect } from 'react-redux'
import { getNominees, addNominee, removeNominee } from '../redux/nominees'
import { motion } from 'framer-motion'

const buttonVariants = {
    'initial': { scale: 1 },
    'hover': { scale: 1.1 }
}

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
        <motion.li
            key={imdbID} 
            className='card'
            initial={{ scale: 0.1, y: '-20vh', opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            transition={{ type: 'spring', duration: 0.1, stiffness: 30 }}
        >
            <img src={Poster} className='poster' />
            <div className='movieContentBox'>
                <h4 className='movieContent'>{Title}</h4>
                <p className='movieContent'>{Year}</p>
                {
                    type === 'result' ? (
                        nominees.map(nominee => nominee.imdbID).includes(imdbID) ? (
                            <motion.button 
                                className='movieContent nominateButton' 
                                type='submit' 
                                onClick={(e) => unnominate(e, imdbID)}
                                variants={buttonVariants}
                                initial='initial'
                                whileHover='hover'
                            >
                                <h4>Remove Nomination</h4>
                            </motion.button>
                        ) : ( nominees.length === 5 ? (
                                <div />
                            ) : (
                                <motion.button 
                                    className='movieContent nominateButton' 
                                    type='submit' 
                                    onClick={() => nominate({ imdbID, Poster, Title, Year })}
                                    variants={buttonVariants}
                                    initial='initial'
                                    whileHover='hover'
                                >
                                    <h4>Nominate</h4>
                                </motion.button>
                            )
                        )
                    ) : (
                        <motion.button 
                            className='movieContent nominateButton' 
                            type='submit' 
                            onClick={(e) => unnominate(e, imdbID)}
                            variants={buttonVariants}
                            initial='initial'
                            whileHover='hover'
                        >
                            <h4>Remove Nomination</h4>
                        </motion.button>
                    )
                }
            </div>
        </motion.li>
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