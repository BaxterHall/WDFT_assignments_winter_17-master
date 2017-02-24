import React from 'react';

class Add extends React.Component {
    constructor() {
        super(); 
    this.state = { text: ""
    }
    this.newTodo = this.newTodo.bind(this);
    this.handeChange = this.handleChange.bind(this);
}
    handleChange(e){
        this.setState({
            text: e.target.value
        })

    }
    newTodo(event){
        event.preventDefault();
        this.props.addTodo(this.refs.addTodo.value);
        this.refs.addTodo.value = "";

        this.setState({
            value: " "
        } )
    }
    render() {
        

        return (

            <form onSubmit={this.newTodo}>
                <div className="input-group">
                    <span className="input-group-btn">
                        <button className="btn btn-primary" type="submit" >Add</button>
                    </span>
                    <input onChange={this.handleChange} className="form-control" type="text" placeholder="add a todo" ref="addTodo" value={this.state.text} />
                </div>
            </form>


        )


    }

};
export default Add;