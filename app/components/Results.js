import React from 'react'
import { connect } from 'react-redux'

const Results = ({ results }) => {
    return (
        <div>
        {
            results.length ? (
                <div className='results'>
                    <h1>Results</h1>
                    <ul>
                    { results.length !== 0 && results.map(({ imdbID, Poster, Title, Year }) => (
                        <li key={imdbID}>
                            <img src={Poster} />
                            <h4>{Title}</h4>
                            <p>{Year}</p>
                        </li>
                    ))}
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
    results: state.results
})

export default connect(mapState)(Results)
