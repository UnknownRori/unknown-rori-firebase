import ProjectItemProps from "../types/ProjectItemProps";

import UnknownRoriPHP from "../asset/image/projects/php-framework.webp";
import TicTacToe from "../asset/image/projects/tic-tac-toe.webp";
import Calculator from "../asset/image/projects/basic-calculator.webp";
import PianoTiles from "../asset/image/projects/piano-tiles.webp";
import PersonalPortfolio from "../asset/image/projects/portfolio.webp";
import FakeECommerceApp from "../asset/image/projects/fake-e-commerce-web-app.webp";

export default [
    { id: 1, title: 'UnknownRori-PHP', link: "https://github.com/UnknownRori/UnknownRori-PHP", image: UnknownRoriPHP, description: "A custom non production web application framework inspired by Laravel." },
    { id: 2, title: 'Tic Tac Toe', link: "https://unknownrori.github.io/tic-tac-toe/", image: TicTacToe, description: "A customizable size, victory condition and shipped with my very first AI tic tac toe written using Typescript." },
    { id: 3, title: 'Simple Calculator', link: "https://unknownrori.github.io/basic-online-calculator/", image: Calculator, description: "A simple calculator written in vanilla Javascript." },
    { id: 4, title: 'Piano Tiles', link: "https://unknownrori.github.io/piano-tiles/", image: PianoTiles, description: "A rhythmic piano game written in Typescript" },
    { id: 5, title: 'Personal Portfolio', link: "https://unknownrori-firebase.web.app/", image: PersonalPortfolio, description: "That's the page you viewing right now" },
    { id: 6, title: 'Fake E-Commerce', link: "https://github.com/UnknownRori/fake-e-commerce-laravel-app", image: FakeECommerceApp, description: "A simple commerce web app." },
] as ProjectItemProps[];