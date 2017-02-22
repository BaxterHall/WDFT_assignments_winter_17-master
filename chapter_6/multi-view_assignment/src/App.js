import React from 'react';
import Add from './Add';
import Todo from './Todo';


class App extends React.Component {
	constructor() {
		super();
		this.state = {
			todos: localStorage.todos ? JSON.parse(localStorage.todos) : [],
			status: "all"
		}
		this.clickHandleV2 = this.clickHandleV2.bind(this);
		this.addTodo = this.addTodo.bind(this);
		this.statusChange = this.statusChange.bind(this);
		this.clearComplete = this.clearComplete.bind(this);




	};
	clickHandleV2(id) {
		const newTodos = this.state.todos.map((todos) => {

			if (todos.id === id) {
				return { text: todos.text, done: !todos.done, id: todos.id }
			} else {
				return todos
			}

		})
		this.setState({ todos: newTodos })
	};

	addTodo(val) {
		
		event.preventDefault();
	

		// console.log(val)

		const todo = { text: val, done: false, id: this.state.todos.length + 1 }

		const newState = this.state.todos;

		newState.push(todo);

		// console.log(event)
		

		this.setState({ todos: newState });
		event.target.addTodo.value = "";

	};
	componentDidUpdate() {
		localStorage.todos = JSON.stringify(this.state.todos)
	};
	

	statusChange(event) {

		event.target.value;

		this.setState({ status: event.target.value });
	};
	

	clearComplete(event) {

		let notCompleted = this.state.todos.filter(function (todos) {
			if (!todos.done) return todos;
		});

		this.setState({
			todos: notCompleted
		});

		
	};
	render() {
		


		const todos = this.state.todos;
		let arrayOfThings = [];
		if (this.state.status === "all") {

			arrayOfThings = todos.map((element) => {
				return <Todo
					key={element.text}
					text={element.text}
					done={element.done}
					clickHandleV2={this.clickHandleV2}
					id={element.id}
				/>


			})
		}
		else if (this.state.status === "complete") {
			arrayOfThings = [];
			for (let i = 0; i < this.state.todos.length; i++) {
				if (this.state.todos[i].done === true) {
					arrayOfThings.push(<Todo
						text={this.state.todos[i].text}
						done={this.state.todos[i].done}
						clickHandleV2={this.clickHandleV2}
						id={this.state.todos[i].id} />)
				}
			}
		}

		else if (this.state.status === "active") {
			arrayOfThings = [];
			for (let i = 0; i < this.state.todos.length; i++) {
				if (this.state.todos[i].done === false) {
					arrayOfThings.push(<Todo
						text={this.state.todos[i].text}
						done={this.state.todos[i].done}
						clickHandleV2={this.clickHandleV2}
						id={this.state.todos[i].id} />)

				}
			}
		};


		return (
			<div className="container">
				<h1 className="text-center">Get This Shit Done Yo!!!</h1>

				<Add addTodo={this.addTodo} />

				<ul className="list-group">
					{arrayOfThings}

				</ul>





				<select value={this.state.status} onChange={this.statusChange}>
					<option value="all">all</option>
					<option value="active">active</option>
					<option value="complete">complete</option>
				</select>

				<button className="pull-right btn btn-default" onClick={this.clearComplete}>Clear Complete</button>


			</div>

		)
	}
};





export default App;

