const cards = [{
    imgSrc: 'images/square1.jpg',
    title: 'Card 1'
}, {
    imgSrc: 'images/square2.jpg',
    title: 'Card 2'
}, {
    imgSrc: 'images/square3.jpg',
    title: 'Card 3'
}, {
    imgSrc: 'images/square4.jpg',
    title: 'Card 4'
}, {
    imgSrc: 'images/square5.jpg',
    title: 'Card 5'
}, {
    imgSrc: 'images/square6.jpg',
    title: 'Card 6'
}]

class App extends React.Component {
    render() {
        /* START WRITING YOUR CODE HERE */


        //  const cards = this.props.cards;
        
        let cardsJSX = [];
        for(let i=0; i < cards.length; i++) {
            
           cardsJSX.push(< Card image={cards[i].imgSrc} title={cards[i].title}/>)

        }
        return (

            <div className='container'>
                <h1>BrainStaGram</h1>
                 <div className="row">
                        {cardsJSX}
                </div>

            
            
            </div>
        )
      
}
};

class Card extends React.Component {
    render() {
        /* START WRITING YOUR CODE HERE */

       
         return (
         
        <div className="col s4">
            <div className="card">
                <div className="card-image">
                    <img src={this.props.image}/>
                    <span className="card-title">{this.props.title}</span>
                </div>
                <div className="card-content">
                    <p>Powering the next generation of creators. Build your skills in business, design &amp; technology.</p>
                </div>
            </div>
        </div>
         )}

};
ReactDOM.render(< App />, document.getElementById('app'));