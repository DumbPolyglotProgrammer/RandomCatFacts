import axios from 'axios';

class Model {

    async getTrivia() {
        const result = await axios("http://numbersapi.com/random/trivia?json")
        return result.data.text;
    }

}

export default Model;