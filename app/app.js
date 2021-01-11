import React from 'react';
import { Nominees, Results, SearchForm, Notification } from './components'
import { connect } from 'react-redux'
import { getNominees } from './redux/nominees'

class App extends React.Component {
    async componentDidMount() {
        await this.props.getNominees()
    }
    render() {
        return (
            <div className='container' >
                {
                    (this.props.nominees.length === 5) ? (<Notification />) : (<div />)
                }
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
