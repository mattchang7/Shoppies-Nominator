import React from 'react';
import { Nominees, Results, SearchForm } from './components'
import { connect } from 'react-redux'
import { getNominees } from './redux/nominees'

class App extends React.Component {
    async componentDidMount() {
        await this.props.getNominees()
    }
    render() {
        return (
            <div className='container' >
                <div className='header'>
                    <h1>Welcome to the Shoppies</h1>
                </div>
                <div className='body'>
                    <SearchForm/>
                    <div className='box'>
                    <Nominees/>
                    <Results/>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatch = dispatch => ({
    getNominees: () => dispatch(getNominees())
})

export default connect(null, mapDispatch)(App)
