import React, {Fragment, Component} from 'react';
import CardList from '../components/CardList';
// import {robots} from './robots';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
import ErrorBoundry from '../components/ErrorBoundry';

class App extends Component{

	constructor(){
		super();
		this.state = {
			robots:[],
			searchfield: ""
		}
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => this.setState({robots: users}));
	}

	onSearchChange = (event) => {
		this.setState({searchfield: event.target.value});
	}

	render(){
		const robots = this.state.robots; 
		const filterRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
		});

		 return (!robots.length) ?
		 	 <h1>Loading</h1> :	
		 	(
			 	<Fragment>
				 	<div className="tc">
					 	<h1 className="f1">Robot friends</h1>
					 	<SearchBox searchChange={this.onSearchChange}/>
					 	<Scroll>
					 		<ErrorBoundry>
					 			<CardList robots={filterRobots}/>
					 		</ErrorBoundry>
					 	</Scroll>
					</div>
			 	</Fragment>
 			);
		 
			 	
			
		
		
	}
 
}

export default App;