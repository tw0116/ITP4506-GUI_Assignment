class HeaderDefault extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = 
        `
        <header>
            <div id="logo">
                <span id="logo-ive">ive</span>
                <span id="logo-airline">Airline</span></div>
            <nav>
                <ul>
                    <li><a href="">Offers</a></li>
                    <li><a href="">Manage</a></li>
                    <li><a href="">Experience</a></li>
                    <li><a href="">Memebership</a></li>
                </ul>
            </nav>
            <div>
                <button id="btn_login">Login</button>
                <button id="btn_register">Register</button>
            </div>
        </header>
        `
    }
}

customElements.define('header-default', HeaderDefault)