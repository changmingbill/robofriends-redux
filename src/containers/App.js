import React, {Fragment, Component} from 'react';
import {connect} from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
import ErrorBoundry from '../components/ErrorBoundry';
import {setSearchfield, requestRobots} from './actions';

const mapStateToProps = (state) =>{//reducer's state object save into props via connect
	return {
		// searchField: state.searchField, //only single reducer use state.searchField
		searchField: state.searchRobots.searchField,
		robots: state.requestRobots.robots,
		isPending: state.requestRobots.isPending,
		error: state.requestRobots.error
	}
}

const mapDispatchToProps = (disPatch) => {//disPatch action function as parameter into reducer function
	//and save into props
	return {
		onSearchChange: (event) => disPatch(setSearchfield(event.target.value)),
		onRequestRobots: () => disPatch(requestRobots())
	}
}

class App extends Component{
	componentDidMount(){
		this.props.onRequestRobots();
	}

	// onSearchChange = (event) => {
	// 	this.setState({searchfield: event.target.value});
	// }

	render(){
		// const { robots } = this.state; 
		const { searchField, onSearchChange, robots, isPending} = this.props;
		const filterRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchField.toLowerCase())
		});

		 return isPending ?
		 	 <h1>Loading</h1> :	
		 	(
			 	<Fragment>
				 	<div className="tc">
					 	<h1 className="f1">Robot friends</h1>
					 	<SearchBox searchChange={onSearchChange}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(App);