import React from 'react';
import { Nominees, Results, SearchForm } from './components'
import { connect } from 'react-redux'
import { getNominees } from './redux/nominees'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

toast.configure()

class App extends React.Component {
    async componentDidMount() {
        await this.props.getNominees()
        if (this.props.nominees.length === 5) toast('You have selected five nominees')
    }
    render() {
        return (
            <div className='container' >
                <div className='header'>
                    <h1 id='title'>THE SHOPPIES NOMINATIONS</h1>
                    <p>SEARCH TO ADD UP TO FIVE NOMINEES</p>
                </div>
                    <SearchForm/>
                    <div className='box'>
                    <Results/>
                    <Nominees/>
                    </div>
            </div>
        )
    }
}

const mapState = state => ({
    nominees: state.nominees
})

const mapDispatch = dispatch => ({
    getNominees: () => dispatch(getNominees())
})

export default connect(mapState, mapDispatch)(App)
