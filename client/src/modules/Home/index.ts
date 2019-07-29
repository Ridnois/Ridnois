import { Prop } from '../../utils'
import scss from './style.scss';
import { BaseButton } from '../components/Forms/BaseButton';
export class HomeBox extends HTMLElement {
    @Prop() public randomPhrase: string;
    @Prop() public payLoad: string;
    public resp: string;
    constructor(){
        super();
        this.resp= 'Take a look';
    }

    public render(): string {
        return `${this.cssStyle} ${this.template}
        `
    }

    public connectedCallback() {
        this.refresh();
    }

    static get observedAttributes(): string[] {
        return ['random-phrase', 'pay-load'];
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
                <h2 class="home-box__random-phrase">${this.randomPhrase}</h2>
                <input type="text" placeholder="${this.resp}">
            </div>
        `
    }
    get cssStyle(): string {
        return `
        <link href="https://fonts.googleapis.com/css?family=Lobster|Roboto&display=swap" rel="stylesheet">
        <style>
            ${scss}
        </style>
        `
    }
}