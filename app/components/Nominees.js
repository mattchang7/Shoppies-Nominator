import React from 'react'
import { connect } from 'react-redux'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Card } from './'

toast.configure()

const Nominees = ({ results, nominees }) => {
    return (
        <div>
            {
                (results.length > 0 || nominees.length > 0) ? (
                    <div className='nominees'>
                        <h1>Nominees</h1>
                        <ul>
                        {
                            nominees.map(nominee => (
                                <Card type='nominee' imdbID={nominee.imdbID} Title={nominee.Title} Year={nominee.Year} Poster={nominee.Poster} />
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

export default connect(mapState)(Nominees)
