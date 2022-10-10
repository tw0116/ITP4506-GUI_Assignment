class HeaderIndex extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = 
        `
        <header>
            <div id="logo">
                <span id="logo-ive">ive</span>
                <span id="logo-airline">Airline</span>
            </div>
            <nav>
                <ul>
                    <li><a href="">Offers</a></li>
                    <li><a href="">Manage</a></li>
                    <li><a href="">Experience</a></li>
                    <li><a href="">Memebership</a></li>
                </ul>
            </nav>
            <div>
                <button class="btn-style1">Login</button>
                <button class="btn-style2">Register</button>
            </div>
        </header>
        `
    }
}

class HeaderDefault extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = 
        `
        <header>
            <div id="logo">
                <span id="logo-ive">ive</span>
                <span id="logo-airline">Airline</span>
            </div>
        </header>
        `
    }
}

customElements.define('header-index', HeaderIndex)
customElements.define('header-default', HeaderDefault)