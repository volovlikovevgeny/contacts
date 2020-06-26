import React from 'react'
import CardList from '../components/CardList'
// import { robots } from '../components/robots'
import Searchbox from '../components/Searchbox'
import './App.css'
import Scroll from '../components/Scroll'
import ErrorBoundry from '../components/ErrorBoundry'



class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            //Api
            robots: [],
            //robots
            // robots: robots,
            searchfield: ''
        }

    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(result => this.setState({ robots: result }))
    }


    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }


    render() {
        // const {robots,searchfield} = this.state
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        if (this.state.robots.length === 0) {
            return <h1>Loading,Wait a few more minutes </h1>
        } else {
            return (
                <div className='pa2 tc ma3 ' >
                    <h1 className='f1'  >Contacts</h1>
                    <Searchbox SearchChange={this.onSearchChange} />
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

export default App