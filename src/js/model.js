import axios from 'axios';

class Model {

    async getFact() {
        const result = await axios("https://catfact.ninja/fact")
        return result.data.fact;
    }

}

export default Model;