/* Todo Assignment Review
Great job on this assignment! Looks like you got a lot of the diving deeper segments done as well.  To help with the readability of your code, try not to 
have a ton of blank lines everywhere.  It may help when you're writing your code, but when you're finished make sure you clean up all the blank space. Nice job 
with all your uses of ternary's, as you can see they're very powerful when you use state/props to add or remove classes from elements.  You've used map for one 
segment of your filtering by all/active/complete, but if you want to challenge yourself, try using filter/map or reduce instead of running a regular loop and pushing
your <Todo /> into a new array.
*/

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			todos: [
				{ text: 'learn angular', done: false, id: 1 },
				{ text: 'write the content for the next module', done: false, id: 2 },
				{ text: 'buy cheese', done: true, id: 3 },
				{ text: 'buy milk', done: true, id: 4 }
			],
			status: "all"
		}
		this.clickHandleV2 = this.clickHandleV2.bind(this);
		this.addTodo = this.addTodo.bind(this);
		this.statusChange = this.statusChange.bind(this);
		this.clearComplete = this.clearComplete.bind(this);
	}
	clickHandleV2(id) {
		const newTodos = this.state.todos.map((todos) => {
			if (todos.id == id) {
				return { text: todos.text, done: !todos.done, id: todos.id };
			} else {
				return todos;
			}
		})
		this.setState({ todos: newTodos });
	}
	addTodo(val) {
		event.preventDefault();
		// console.log(val)

		const todo = { text: val, done: false, id: this.state.todos.length + 1 };
		const newState = this.state.todos;
		newState.push(todo);
		// console.log(event)
		this.setState({ todos: newState });
		event.target.addTodo.value = "";
	}
	statusChange(event) {
		event.target.value;
		this.setState({ status: event.target.value });
	}
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
				<h1 className="text-center">todos</h1>
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
class Todo extends React.Component {
	render() {
		return (
			<li className="list-group-item">
				<input id={this.props.id} type="checkbox" checked={this.props.done} value={this.props.done ? "completed" : "active"} onChange={() => { this.props.clickHandleV2(this.props.id) }} />
				<label className={this.props.done ? "done" : ""}>{this.props.text}</label>
			</li>
		)
	}
}
class Add extends React.Component {
	render() {
		return (
			<form onSubmit={() => { this.props.addTodo(this.refs.addTodo.value) }}>
				<div className="input-group">
					<span className="input-group-btn">
						<button className="btn btn-primary" type="submit" >Add</button>
					</span>
					<input className="form-control" type="text" placeholder="add a todo" ref="addTodo" name="addTodo" />
				</div>
			</form>
		)
	}
};
ReactDOM.render(<App />, document.getElementById('app'));