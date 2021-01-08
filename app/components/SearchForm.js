import React, { useState } from 'react'
import { connect } from 'react-redux'
import { getResults } from '../redux/results'

const SearchForm = (props) => {
    let [ searchTerm, updateSearchTerm ] = useState('')
    const handleChange = (e) => {
        updateSearchTerm(e.target.value)
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        await props.getResults(searchTerm)
    }
    return (
        <form className='searchBar' onSubmit={handleSubmit} >
            <input
                id='searchBox'
                type="text"
                onChange={handleChange}
                value={searchTerm}
            />
            <button id='searchButton' type='submit'>SEARCH</button>
        </form>
    )
}

const mapDispatch = (dispatch) => ({
    getResults: (searchTerm) => dispatch(getResults(searchTerm))
})

export default connect(null, mapDispatch)(SearchForm)
