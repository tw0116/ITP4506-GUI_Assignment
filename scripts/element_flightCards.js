class Flight_1Stop extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = 
        `
        <div class="flight-card">
            <div class="flight-info">
                <div class="section-top"> <!-- Stops & total hours of flight(s) -->
                    Two-stops - 00hrs 00mins
                </div>

                <div class="section-bottom"> 
                    <div class="block-info">
                        <div>
                            <span class="airport">HKG</span>
                            <span class="time">${this.getAttribute('depart-time')}</span>
                        </div>
                        <div class="location">Hong Kong</div>
                        <div class="date">${this.getAttribute('depart-date')}</div>
                    </div>

                    <div class="block-flightline">
                        <div class="os-circle"></div>
                        <div class="os-layover">
                            <div class="layover-airport">${this.getAttribute('layout-airport')}</div>
                            <div class="layover-time">${this.getAttribute('layout-time')}</div>
                        </div>
                    </div>
                    
                    <div class="block-info">
                        <div>
                            <span class="airport">JFK</span>
                            <span class="time">${this.getAttribute('arrive-time')}</span>
                        </div>
                        <div class="location">New York</div>
                        <div class="date">${this.getAttribute('arrive-date')}</div>
                    </div>
        
                    <div class="block-info_2">
                        <div class="flight">
                            <span class="flight-logo">
                                <span class="flight-logo_ive">ive</span>
                                <span class="flight-logo_airline">Airline</span>
                            </span>
                            <span class="dot"></span>
                            <span class="flight-num">RM237</span>
                        </div>
                        <div class="flight">
                            <span class="flight-logo">
                                <span class="flight-logo_thei">the</span>
                                &nbsp;
                                <span class="flight-logo_airways">Airways</span>
                            </span>
                            <span class="dot"></span>
                            <span class="flight-num">TY234</span>
                        </div>
                        <a class="btn-details">> Show details</a>
                    </div>
                </div>
            </div>
            <div class="flight-class">
                <div class="section-top class_1">
                    Economy
                </div>
                <div class="section-bottom">
                    <div>From</div>
                    <div>
                        <span class="currency">HKD</span>
                        <span class="price">${this.getAttribute('class1-price')}</span>
                    </div>
                </div>
            </div>

            <div class="flight-class">
                <div class="section-top class_2">
                    Premium Economy
                </div>
                <div class="section-bottom">
                    <div>From</div>
                    <div>
                        <span class="currency">HKD</span>
                        <span class="price">${this.getAttribute('class2-price')}</span>
                    </div>
                </div>
            </div>

            <div class="flight-class"> 
                <div class="section-top class_3">
                    Bussiness
                </div>
                <div class="section-bottom">
                    <div>From</div>
                    <div>
                        <span class="currency">HKD</span>
                        <span class="price">${this.getAttribute('class3-price')}</span>
                    </div>
                </div>
            </div>

            <div class="flight-class">
                <div class="section-top class_4">
                    First
                </div>
                <div class="section-bottom">
                    <div>From</div>
                    <div>
                        <span class="currency">HKD</span>
                        <span class="price">${this.getAttribute('class4-price')}</span>
                    </div>
                </div>
            </div>
        </div>
        `
    }
}

class Flight_2Stops extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = 
        `
        <div class="flight-card">
            <div class="flight-info">
                <div class="section-top"> <!-- Stops & total hours of flight(s) -->
                    Two-stops - 00hrs 00mins
                </div>

                <div class="section-bottom"> 
                    <div class="block-info">
                        <div>
                            <span class="airport">HKG</span>
                            <span class="time">${this.getAttribute('depart-time')}</span>
                        </div>
                        <div class="location">Hong Kong</div>
                        <div class="date">${this.getAttribute('depart-date')}</div>
                    </div>

                    <div class="block-flightline">
                        <div class="ts-circle1"></div>
                        <div class="ts-circle2"></div>
                        <div class="ts-layover1">
                            <div class="layover-airport">${this.getAttribute('layout-airport1')}</div>
                            <div class="layover-time">${this.getAttribute('layout-time1')}</div>
                        </div>
                        <div class="ts-layover2">
                            <div class="layover-airport">${this.getAttribute('layout-airport2')}</div>
                            <div class="layover-time">${this.getAttribute('layout-time2')}</div>
                        </div>
                    </div>
                    
                    <div class="block-info">
                        <div>
                            <span class="airport">JFK</span>
                            <span class="time">${this.getAttribute('arrive-time')}</span>
                        </div>
                        <div class="location">New York</div>
                        <div class="date">${this.getAttribute('arrive-date')}</div>
                    </div>
        
                    <div class="block-info_2">
                        <div class="flight">
                            <span class="flight-logo">
                                <span class="flight-logo_ive">ive</span>
                                <span class="flight-logo_airline">Airline</span>
                            </span>
                            <span class="dot"></span>
                            <span class="flight-num">RM237</span>
                        </div>
                        <div class="flight">
                            <span class="flight-logo">
                                <span class="flight-logo_thei">the</span>
                                &nbsp;
                                <span class="flight-logo_airways">Airways</span>
                            </span>
                            <span class="dot"></span>
                            <span class="flight-num">TY234</span>
                        </div>
                        <a class="btn-details">> Show details</a>
                    </div>
                </div>
            </div>
            <div class="flight-class">
                <div class="section-top class_1">
                    Economy
                </div>
                <div class="section-bottom">
                    <div>From</div>
                    <div>
                        <span class="currency">HKD</span>
                        <span class="price">${this.getAttribute('class1-price')}</span>
                    </div>
                </div>
            </div>

            <div class="flight-class">
                <div class="section-top class_2">
                    Premium Economy
                </div>
                <div class="section-bottom">
                    <div>From</div>
                    <div>
                        <span class="currency">HKD</span>
                        <span class="price">${this.getAttribute('class2-price')}</span>
                    </div>
                </div>
            </div>

            <div class="flight-class"> 
                <div class="section-top class_3">
                    Bussiness
                </div>
                <div class="section-bottom">
                    <div>From</div>
                    <div>
                        <span class="currency">HKD</span>
                        <span class="price">${this.getAttribute('class3-price')}</span>
                    </div>
                </div>
            </div>

            <div class="flight-class">
                <div class="section-top class_4">
                    First
                </div>
                <div class="section-bottom">
                    <div>From</div>
                    <div>
                        <span class="currency">HKD</span>
                        <span class="price">${this.getAttribute('class4-price')}</span>
                    </div>
                </div>
            </div>
        </div>
        `
    }
}

customElements.define('flight-1stop', Flight_1Stop)
customElements.define('flight-2stops', Flight_2Stops)