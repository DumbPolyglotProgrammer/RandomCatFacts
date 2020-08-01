import View from './view';
import Model from './model';

const view = new View();
const model = new Model();

model.getTrivia().then(trivia => view.showTrivia(trivia));