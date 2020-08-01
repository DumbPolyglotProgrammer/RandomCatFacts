// css
import '../style.css';

class View {

    constructor() {
        this.factTextHtmlElement = document.getElementById('fact-text');
    }

    showFact(fact) {
        this.factTextHtmlElement.textContent = fact;
    }

}

export default View;