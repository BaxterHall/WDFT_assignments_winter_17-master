import React from 'react';
import { Router, Route, browserHistory, Link } from 'react-router';

class About extends React.Component {
    render() {
        return (
            <div className='container'>
                <nav className="navbar navbar-default navbar-fixed-top">
                    <div className="container1">
                        <ul>
                            <button type="button" className="btn btn-default navbar-btn"><Link to="/">Home</Link></button>
                            <button type="button" className="btn btn-default navbar-btn"><Link to="/about">About</Link></button>
                        </ul>
                    </div>
                </nav>
                <div className='header'>
                    <h1 className="text-center">A Brief Summary Of Stephen Kings' Pet Semetary</h1>
                </div>
                <div className='image'>
                    <img src="Pet-Future.jpg" />
                </div>
                <p className='pet'>
                    The Creed family moves from Chicago to the small town of Ludlow, Maine. They end up befriending their elderly neighbor, Jud Crandell, who takes them to the isolated pet cemetery (misspelled "Sematary") behind the Creeds' new home.
                    </p>
                <p className='pet'>
                    Later, Louis Creed is working at the University of Maine when a young student named Victor Pascow is brought in with severe injuries from a car accident. The young man dies, but not before warning Louis (by name) of the pet cemetery. That night, in what is seemingly a dream, Victor visits Louis, warning him about the burial ground beyond the pet cemetery. Louis wakes up to find his feet covered in dirt.
                    </p>
                <p className='pet'>
                    Church, a cat owned by Louis' daughter Ellie, is killed by a truck on the road in front of their house while Rachel, Ellie and Gage are in Chicago. Jud takes Louis to an ancient Micmac Indian burial ground, the "real cemetery", to bury the cat. Louis asks if a person was ever buried in the grounds. Jud replies, "Christ on His throne, no. And whoever would?" Church comes back that night, but an evil shell of himself, attacking Louis and smelling of death. Sometime later, Louis' young son Gage is killed by a truck on the same road. Louis considers burying Gage in the burial grounds. Jud tries to dissuade him from doing so, telling him about a young man from town, Timmy Baterman, who died in service during World War II. Timmy's father, Bill, placed his son's corpse into the Micmac burial ground, only to have it reanimate and terrify the townsfolk. Jud and three of his friends tried burning down the house with the son in it, but Bill was attacked by Timmy and they both perished in the fire.
                    </p>
                <p className='pet'>
                    Rachel begs Louis to go with her and Ellie to Chicago, but he declines. Louis heads to the cemetery Gage is buried in, intending to exhume his son's body. He is met at the graveyard by Pascow, who warns him not to proceed. On the flight, Ellie has a nightmare, stating that "Paxcow" warned her that Louis is going to do something really bad, and that he is trying to help because Louis tried to save his life. Rachel realizes who her daughter is talking about and calls Jud after Louis does not answer the phone. She asks if he has seen Louis, and then tells him she is returning. Jud warns her not to, but she has already hung up.
                        </p>
                <p className='pet'>
                    Louis takes his son's corpse to the Micmac burial ground. Pascow's spirit unsuccessfully tries to stop Louis. Louis returns home, exhausted from his activities. Gage later arrives and enters his father's room, removing a scalpel from one of his bags. Gage enters Jud's house and kills Jud while Church watches. Rachel arrives home, hearing something that sounds like her late sister, Zelda, calling her name, then Gage's laughter. Rachel enters Jud's house and finds Gage in an upstairs bedroom. Gage tells her he brought her something and shows her Louis' scalpel. Rachel hugs her son in disbelief and is murdered. Louis wakes up to find Gage's muddy footprints on the floor, his doctor's bag open and his scalpel gone. He receives a call from Gage saying, "Come play with me daddy! First I played with Jud, and then I played with mommy. We had an awful good time. Now I want to play wiff yewww."
                    </p>
                <p className='pet'>
                    Preparing shots of morphine, Louis heads to Jud's house, running into Church once more. He distracts the cat with a raw steak, then kills him with a shot of morphine. He heads into the house, once more taunted by Gage. Louis searches the house only to have Rachel's corpse fall from the attic, hanged by her neck. Gage attacks his father, but Louis injects the boy with a morphine shot, killing him. Louis soaks the house in kerosene and sets it on fire, carrying his wife's body out. Pascow watches, and tells Louis he is sorry, and not to bury Rachel in the same place. Louis replies that he waited too long with Gage, and that it will work with his wife because she just died. Louis walks through Pascow, who vanishes screaming.
                        </p>
                <p className='pet'>
                    At home, Louis plays solitaire while he waits. At midnight, Rachel comes through the kitchen door. She coos "Darling..." and the two embrace kissing as it is revealed that her face is ravaged and oozing cranial fluid. Rachel reaches for a steak knife on the kitchen table. The screen blacks out as Rachel stabs him while Louis screams.
                     </p>

                <div className="video">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/F3J0iwwsq-w?autoplay=1&controls=0&loop=1&disablekb=1" frameborder="0"></iframe>
                </div>
            </div>
        )
    }
}
export default About;