import React from 'react'
import { connect } from 'react-redux';
import CardList from '../components/CardList'
import Searchbox from '../components/Searchbox'
import './App.css'
import Scroll from '../components/Scroll'
import ErrorBoundry from '../components/ErrorBoundry';


import { setSearchField } from '../actions'

const mapStateToProps = state => {
    return {
        searchField: state.searchField
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value))
    }
}


class App extends React.Component {
    constructor() {
        super()
        this.state = {
            robots: [],
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(result => this.setState({ robots: result }))
    }

    render() {
        const { searchField, onSearchChange } = this.props;

        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        })
        if (this.state.robots.length === 0) {
            return <h1>Loading,Wait a few more minutes </h1>
        } else {
            return (
                <div className='pa2 tc ma3 ' >
                    <h1 className='f1'>Contacts</h1>
                    <Searchbox SearchChange={onSearchChange} />
                    <Scroll>
                        <ErrorBoundry >
                            <CardList robots={filteredRobots} />
                        </ErrorBoundry>
                    </Scroll>
                </div >
            )
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);