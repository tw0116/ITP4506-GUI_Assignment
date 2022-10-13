class HeaderIndex extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = 
        `
        <header>
            <a href="/" id="logo">
                <span id="logo-ive">ive</span>
                <span id="logo-airline">Airline</span>
            </a>
            <nav>
                <ul>
                    <li><a href="">Offers</a></li>
                    <li><a href="">Manage</a></li>
                    <li><a href="">Experience</a></li>
                    <li><a href="">Memebership</a></li>
                </ul>
            </nav>
            <div>
                <button id="btn-login" class="btn-style1" onclick="location.href='/01-register&login/login.html';">Login</button>
                <button id="btn-register" class="btn-style2" onclick="location.href='/01-register&login/register.html';">Register</button>
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
            <a href="/" id="logo">
                <span id="logo-ive">ive</span>
                <span id="logo-airline">Airline</span>
            </a>
        </header>
        `
    }
}

class HeaderUser extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = 
        `
        <header>
            <a href="/" id="logo">
                <span id="logo-ive">ive</span>
                <span id="logo-airline">Airline</span>
            </a>
            <nav>
                <ul>
                    <li><a href="">Offers</a></li>
                    <li><a href="">Manage</a></li>
                    <li><a href="">Experience</a></li>
                    <li><a href="">Memebership</a></li>
                </ul>
            </nav>
            <div>
                <div>
                    <div>Thomas Wong</div>
                    <div>User</div>
                </div>
            </div>
        </header>
        `
    }
}

customElements.define('header-index', HeaderIndex)
customElements.define('header-default', HeaderDefault)
customElements.define('header-user', HeaderUser)