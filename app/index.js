import {addToDom} from "./helpers"; // named import syntax
import add from "./add"; // default import syntax
import SuperPerson from "./person";

addToDom("<hr>");

const John = new SuperPerson("John", "Find it Man!");
const Kara = new SuperPerson("Kara", "It wasn't me Woman");
addToDom(John.speak("Hello"));
addToDom(Kara.speak("How are you?"));

addToDom(Kara.xRay());

addToDom(John.sayHeroName());