import { Prop } from '../../utils'
import scss from './style.scss';
export class HomeBox extends HTMLElement {
    @Prop() public randomPhrase: string;
    constructor(){
        super();
    }

    public render(): string {
        return `${this.cssStyle} ${this.template}
        `
    }

    public connectedCallback() {
        this.refresh();
    }

    static get observedAttributes(): string[] {
        return ['random-phrase'];
    }

    public attributeChangedCallback(): void {
        this.refresh();
    }

    public refresh() {
        this.innerHTML = this.render();
    }

    get template(): string {
        return `
            <div class="home-box">
                <h1 class="home-box__logo">Ridnois</h1>
                <h4 class="home-box__random-phrase">${this.randomPhrase}</h4>
            </div>
        `
    }
    get cssStyle(): string {
        return `
        <link href="https://fonts.googleapis.com/css?family=Lobster|Roboto&display=swap" rel="stylesheet">
        <style>
            .home-box__logo {
                color: crimson;
            }
            ${scss}
        </style>
        `
    }
}