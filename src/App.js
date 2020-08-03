import React, {Component} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import 'tachyons';
import Scroll from './Scroll';
import './App.css';

class App extends Component {

    constructor () {
        super()
        this.state = {
            "robots" : [],
            "searchfield" : '',
        }
    }

    componentDidMount () {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(user => this.setState( { robots: user } ));
    }

    onSearchchange = (event) => {
        this.setState({searchfield : event.target.value})
    }

    render(){
        const filteredRobots = this.state.robots.filter((robot) => {
            return(
                robot.name.toLocaleLowerCase().includes(this.state.searchfield.toLocaleLowerCase())
            )
        })
        return (
            <div className="tc">
                <h1>ROBOFRIENDS</h1>
                <SearchBox searchChange={this.onSearchchange}/>
                <Scroll>
                    <CardList robots={filteredRobots}/>
                </Scroll>
            </div>
        )
    }
}
export default App;