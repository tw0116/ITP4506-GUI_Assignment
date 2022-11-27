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
                    <li><a href="04-additionalFunction/merch.html">Merch</a></li>
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
                <ul style="margin: auto 0 auto 0">
                    <li><a href="">Offers</a></li>
                    <li><a href="">Manage</a></li>
                    <li><a href="">Experience</a></li>
                    <li><a href="">Memebership</a></li>
                </ul>
            </nav>

            <div class="nav-item dropdown no-arrow"> 

                <a class="dropdown-toggle nav-link" aria-expanded="false" data-bs-toggle="dropdown" 
                    style="
                        display: flex; 
                        align-items: center;
                    "
                >
                    <img 
                        class="border rounded-circle img-profile" 
                        src="assets/img/avatars/avatar4.jpeg"
                        style="margin: 8px;" 
                        width="32" 
                        height="32"
                    >
                    <div class="d-none d-lg-inline me-2 text-gray-600 small">
                        <div>Sophia Lillis</div>
                        <div>User</div>
                    </div>   
                </a>

                <div class="dropdown-menu shadow dropdown-menu-end animated--grow-in">

                    <a class="dropdown-item" href="#">
                        <i class="fas fa-user fa-sm fa-fw me-2 text-gray-400"></i>
                        &nbsp;Profile
                    </a>

                    <a class="dropdown-item" href="#">
                        <i class="fas fa-cogs fa-sm fa-fw me-2 text-gray-400"></i>
                        &nbsp;Settings
                    </a>

                    <a class="dropdown-item" href="#">
                        <i class="fas fa-list fa-sm fa-fw me-2 text-gray-400"></i>
                        &nbsp;Activity log
                    </a>

                    <div class="dropdown-divider"></div>

                    <a class="dropdown-item" href="/index.html">
                        <i class="fas fa-sign-out-alt fa-sm fa-fw me-2 text-gray-400"></i>
                        &nbsp;Logout
                    </a>
                </div>
            </div>
        </header>
        `
    }
}

customElements.define('header-index', HeaderIndex)
customElements.define('header-default', HeaderDefault)
customElements.define('header-user', HeaderUser)