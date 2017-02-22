/* Carousel Review
Great job on this assignment. Using the disabled attribute is a great way to complete these assignment.  When you're making websites you often have to think 
of the user experience.  In this case disabling the button is the best option UX-wise as it's clear to the user that they've reached the end of the carousel.
Nice structuring of your App, looks good!
*/

/* List of image urls ------------------------------
'http://imgur.com/9itd49u.png'
'http://imgur.com/n19BXfZ.png'
'http://imgur.com/VBwQmzA.png'
'http://imgur.com/nawDxVv.png'
-------------------------------------------------- */

const imagesArray = [
	'http://imgur.com/9itd49u.png',
	'http://imgur.com/n19BXfZ.png',
	'http://imgur.com/VBwQmzA.png',
	'http://imgur.com/nawDxVv.png',
];
// console.log(images[2])

class App extends React.Component {
	constructor() {
		super();
		this.state = { currentImage: 0 };
		// this.setState({currentImage: 4});
		this.nextBtn = this.nextBtn.bind(this)
		this.prevBtn = this.prevBtn.bind(this)

		
	};

	nextBtn() {
		this.setState({
			currentImage: this.state.currentImage + 1
		})
		// if (this.state.currentImage === 3) {
		// 	this.setState({ currentImage: this.state.currentImage = 0 })
		// }
	};

	prevBtn() {
		this.setState({
			currentImage: this.state.currentImage - 1
		})
		// if (this.state.currentImage === 0) {
		// 	this.setState({ currentImage: this.state.currentImage = 1 })
		// };
	};




	render() {
		

		return (
			<div>
				<h1>Calvin Carousel</h1>
				<div>
					<button onClick={this.prevBtn} disabled={this.state.currentImage == 0}>Previous</button>
					<span>{this.state.currentImage + 1} of 4</span>
					<button onClick={this.nextBtn} disabled={this.state.currentImage == 3}>Next</button>
				</div>
				<div>

					<img src={imagesArray[this.state.currentImage]} />
				</div>
			</div>
		)
	}
}	



ReactDOM.render(<App images={imagesArray} />, document.getElementById('app'));