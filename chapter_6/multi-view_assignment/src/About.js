import React from 'react';
import { Router, Route, browserHistory, Link } from 'react-router';



class About extends React.Component {
    render() {
        return (

            <div>
                <nav className="navbar navbar-default navbar-fixed-top">
                    <div className="container1">
                        <ul>
                            <button type="button" className="btn btn-default navbar-btn"><Link to="/">Home</Link></button>
                            <button type="button" className="btn btn-default navbar-btn"><Link to="/about">About</Link></button>
                        </ul>
                    </div>
                </nav>
            <div className='container'>
                <h1 className="text-center">A Brief Introduction To Cujo</h1>

                <p className='cujo'>
                    ONCE UPON A TIME, not so long ago, a monster came to the small town of Castle Rock, Maine. He killed. a waitress named Alma
                    Frechette in 1970; a woman named Pauline Toothaker and a junior high school student named Cheryl Moody in 1971; a pretty girl
                    named Carol Dunbarger in 1974; a teacher named Etta Ringgold in the fall of 1975; finally, a grade-schooler named Mary Kate
                    Hendrasen in the early winter of that same year.               
                    He was not werewolf, vampire, ghoul, or unnameable creature from the enchanted forest or from the snowy wastes; he was only a cop
                    named Frank Dodd with mental and sexual problems. A good man named John Smith uncovered his name by a kind of magic, but
                    before he could be captured - perhaps it was just as well - Frank Dodd killed himself.
                    There was some shock, of course, but mostly there was rejoicing in that small town, rejoicing because the monster which had haunted
                    so many dreams was dead, dead at last. A town's nightmares were buried in Frank Dodd's grave.
               </p>
               <p className='cujo'>
                    Yet even in this enlightened age, when so many parents are aware of the psychological damage they may do to their children, surely
                    there was one parent somewhere in Castle Rock - or perhaps one grandmother - who quieted the kids by telling them that Frank Dodd
                    would get them if they didn't watch out, if they weren't good. And surely a hush fell as children looked toward their dark windows and
                    thought of Frank Dodd in his shiny black vinyl raincoat, Frank Dodd who had choked ... and choked ... and choked.               
                    He's out there, I can bear the grandmother whispering as the wind whistles down the chimney pipe and snuffles around the old pot lid
                    crammed in the stove hole. He's out there, and if you're not good, it may be his face you see looking in your bedroom window after
                    everyone in the house is asleep except you; it may be his smiling face you see peeking at you from the closet in the middle of the night,
                    the STOP sign he held up when he crossed the little children in one band, the razor he used to kill himself in the other ... so shbb,
                    children ... shhhh ... shhhh              
                    But for most, the ending was the ending. There were nightmares to be sure, and children who lay wakeful to be sure, and the empty
                    Dodd house (for his mother had a stroke shortly afterwards and died) quickly gained a reputation as a haunted house and was avoided;
                    but these were passing phenomena - the perhaps unavoidable side effects of a chain of senseless murders.
                    But time passed. Five years of time.
               </p>
               <p className='cujo'>
                    The monster was gone, the monster was dead. Frank Dodd moldered inside his coffin.
                    Except that the monster never dies. Werewolf, vampire, ghoul, unnameable creature from the wastes. The monster never dies.
                    It came to Castle Rock again in the summer of 1980.
                </p>

                <img src="Cujo2.jpg" />
            </div>
        </div>
        )
    }
}

export default About;