
// CSS
import './style.css';

import axios from 'axios'

axios("http://numbersapi.com/random/trivia?json")
    .then(result => {
        const trivia = result.data.text;
        document.getElementById('text').textContent = trivia;
    })
