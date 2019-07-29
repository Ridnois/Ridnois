import { HomeBox } from './modules/Home';
import { BaseButton } from './modules/components/Forms/BaseButton';
import { NavBar } from './modules/components/NavBar';

window.customElements.define('base-button', BaseButton)
window.customElements.define('home-box', HomeBox);
window.customElements.define('nav-bar', NavBar);