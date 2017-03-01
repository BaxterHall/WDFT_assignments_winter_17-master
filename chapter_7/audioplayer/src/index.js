import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import App from './App';
import SongsList from './components/SongsList';
import SongDetails from './components/SongDetails';
import './index.css';

function Song(source, title, description, id, img) {
  this.source = source;
  this.title = title;
  this.description = description;
  this.id = id;
  this.img = img;
}

const songs = [
  new Song('/upstep.mp3', 'All Star', '"All Star" is a song by American rock band Smash Mouth. It was released on May 4, 1999 as the second single from their album Astro Lounge, and is one of the groups most successful songs, peaking at No. 4 on the Billboard Hot 100. In addition to Mystery Men, it was heavily used in the Shrek franchise to promote the series, especially the first film during the opening credits, while introducing the character Shrek. Devotion towards the song has been considered a factor in the Internets obsession towards the series and titular character. Tempo: 104bpm', 0, '/allstar.jpg'),
  new Song('/olympian.mp3', 'Kryptonite', "That song seems like it's really just kind of like asking a question. Its question is kind of a strange one. It's not just asking, “If I fall down, will you be there for me?” Because it's easy to be there for someone when they're down. But it's not always easy to be there for somebody when they're doing good. And that's the question it's asking. It's like, “If I go crazy, will you still call me Superman?” It's asking, “If I'm down, will you still be there for me?” But at the same time, “If I'm alive and well, will you be there holding my hand?” That's kind of asking, “If I'm doing good, will you be there for me? Will you not be jealous of me?” That's the basic question that song's asking, and maybe throughout the years of singing that song, I might have come up with more meanings for it than it actually might have originally had. Tempo: 99bpm", 1, '/kryptonite.jpg'),
  new Song('/transmission.mp3', 'Smooth', '"Smooth" was originally conceived by Shur as a song called "Room 17". The lyrics were stripped off and the track was given to Rob Thomas, who re-wrote the lyrics and melody and re-titled it "Smooth", then recorded the song as a demo to play for Santana. After hearing the song, Santana decided to have Rob Thomas record the final version. Matt Serletic (who produced Matchbox Twentys debut album Yourself or Someone Like You) produced the song and it was released from Santanas album Supernatural.Rob Thomas wrote "Smooth" for his wife, Marisol Maldonado. He stated in interviews that the lyric "My Spanish Harlem Mona Lisa" was inspired by the 1972 Elton John song "Mona Lisas and Mad Hatters", which includes references to the 1961 Ben E. King song "Spanish Harlem" Tempo: 116bpm', 2,'/smooth.jpg')
]

ReactDOM.render((
  <Router history={browserHistory}>
    <Route songs={songs} path="/" component={App}>
      <IndexRoute component={SongsList} />
      <Route path="songs" component={SongsList} />
      <Route path="songs/:id" component={SongDetails} />
    </Route>
  </Router>
),document.getElementById('root'));
