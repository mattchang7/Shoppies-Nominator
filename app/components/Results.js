import React from 'react'
import { connect } from 'react-redux'
import { Card } from './'

const Results = ({ results, nominees }) => {
    return (
        <div>
            {
                (results.length > 0 || nominees.length > 0) ? (
                    <div className='results'>
                        <h1>Results</h1>
                        <ul>
                        { results.map(result => 
                            <Card type='result' imdbID={result.imdbID} Title={result.Title} Year={result.Year} Poster={result.Poster} />
                        )}
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

export default connect(mapState)(Results)
