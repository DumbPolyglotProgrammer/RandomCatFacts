// css
import './style.css';

class View {

    constructor() {
        this.triviaTextHtmlElement = document.getElementById('trivia-text');
    }

    showTrivia(trivia) {
        this.triviaTextHtmlElement.textContent = trivia;
    }

}

export default View;