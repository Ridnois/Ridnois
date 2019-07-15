import { Prop } from '../../../utils'
import scss from './nav-bar.scss';

export class NavBar extends HTMLElement {
    @Prop() public isAuth: boolean;
    constructor() {
        super();
    }

    public render(): string {
        return `${this.cssStyle} ${this.template}
        `
    }

    public connectedCallback() {
        this.refresh();
    }
    public attributeChangedCallback(): void {
        this.refresh();
    }

    public refresh() {
        this.innerHTML = this.render();
    }

    get template(): string {
        return `
            <div class="nav-bar">
                navbar
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