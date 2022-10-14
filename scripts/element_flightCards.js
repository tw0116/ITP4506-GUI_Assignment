class Flight_1Stop extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = 
        `
        <div class="flight-card">
            <div class="flight-info">
                <div class="section-top"> <!-- Stops & total hours of flight(s) -->
                    One-stop - ${this.getAttribute('total-time')}
                </div>

                <div class="section-bottom"> 
                    <div class="block-info">
                        <div>
                            <span class="airport">${this.getAttribute('depart-airport-code')}</span>
                            <span class="time">${this.getAttribute('depart-time')}</span>
                        </div>
                        <div class="location">${this.getAttribute('depart-location')}</div>
                        <div class="date">${this.getAttribute('depart-date')}</div>
                    </div>

                    <div class="block-flightline">
                        <div class="os-circle"></div>
                        <div class="os-layover">
                            <div class="layover-airport">${this.getAttribute('layout-airport-code')}</div>
                            <div class="layover-time">${this.getAttribute('layout-period')}</div>
                        </div>
                    </div>
                    
                    <div class="block-info">
                        <div>
                            <span class="airport">${this.getAttribute('arrive-airport-code')}</span>
                            <span class="time">${this.getAttribute('arrive-time')}</span>
                        </div>
                        <div class="location">${this.getAttribute('arrive-location')}</div>
                        <div class="date">${this.getAttribute('arrive-date')}</div>
                    </div>
        
                    <div class="block-info_2">
                        <div class="flight">
                            <span class="flight-logo">
                                <span class="flight-logo_ive">ive</span>
                                <span class="flight-logo_airline">Airline</span>
                            </span>
                            <span class="dot"></span>
                            <span class="flight-num">${this.getAttribute('flight-code1')}</span>
                        </div>
                        <div class="flight">
                            <span class="flight-logo">
                                <span class="flight-logo_ive">ive</span>
                                <span class="flight-logo_airline">Airline</span>
                            </span>
                            <span class="dot"></span>
                            <span class="flight-num">${this.getAttribute('flight-code2')}</span>
                        </div>
                        <a class="btn-moreDetails">> More details</a>
                    </div>
                </div>
            </div>

            <div class="flight-details">
                <div class="block-details" style="border-bottom: 1px var(--color-base3) solid;">
                    <div>
                        <div class="section-top">
                            One-stop - ${this.getAttribute('total-time')}
                        </div>
                    </div>
                    
                    <div class="section-bottom">
                        <div class="block-info">
                            <div>
                                <span class="airport">${this.getAttribute('depart-airport-code')}</span>
                                <span class="time">${this.getAttribute('depart-time')}</span>
                            </div>
                            <div class="location">${this.getAttribute('depart-location')}</div>
                            <div class="date">${this.getAttribute('depart-date')}</div>
                            <div class="airport-name">${this.getAttribute('depart-airport-name')}</div>
                        </div>

                        <div class="block-flightline">
                            <div class="airplane-icon"></div>
                        </div>

                        <div class="block-info">
                            <div>
                                <span class="airport">${this.getAttribute('layout-airport-code')}</span>
                                <span class="time">${this.getAttribute('layout-time1')}</span>
                            </div>
                            <div class="location">${this.getAttribute('layout-location')}</div>
                            <div class="date">${this.getAttribute('depart-date')}</div>
                            <div class="airport-name">${this.getAttribute('layout-airport-name')}</div>
                        </div>

                        <div class="block-info_2">
                            <div class="flight">
                                <span class="flight-logo">
                                    <span class="flight-logo_ive">ive</span>
                                    <span class="flight-logo_airline">Airline</span>
                                </span>
                                <span class="dot"></span>
                                <span class="flight-num">${this.getAttribute('flight-code1')}</span>
                            </div>
                            <div class="airplane-model">Airbus A350-1000</div>
                        </div>
                    </div>
                </div>

                <div class="block-details">
                    <div>
                        <div class="section-top">
                            <span class="layover-title  ">Layover - ${this.getAttribute('layout-period')}</span>
                        </div>
                    </div>
                    
                    <div class="section-bottom">
                        <div class="block-info">
                            <div>
                                <span class="airport">${this.getAttribute('layout-airport-code')}</span>
                                <span class="time">${this.getAttribute('layout-time2')}</span>
                            </div>
                            <div class="location">${this.getAttribute('layout-location')}</div>
                            <div class="date">${this.getAttribute('arrive-date')}</div>
                            <div class="airport-name">${this.getAttribute('layout-airport-name')}</div>
                        </div>

                        <div class="block-flightline">
                            <div class="airplane-icon"></div>
                        </div>

                        <div class="block-info">
                            <div>
                                <span class="airport">${this.getAttribute('arrive-airport-code')}</span>
                                <span class="time">${this.getAttribute('arrive-time')}</span>
                            </div>
                            <div class="location">${this.getAttribute('arrive-location')}</div>
                            <div class="date">${this.getAttribute('arrive-date')}</div>
                            <div class="airport-name">${this.getAttribute('arrive-airport-name')}</div>
                        </div>

                        <div class="block-info_2">
                            <div class="flight">
                                <span class="flight-logo">
                                    <span class="flight-logo_ive">ive</span>
                                    <span class="flight-logo_airline">Airline</span>
                                </span>
                                <span class="dot"></span>
                                <span class="flight-num">${this.getAttribute('flight-code2')}</span>
                            </div>
                            <div class="airplane-model">Airbus A350-1000</div>
                            <a class="btn-lessDetails">> Less details</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="flight-class">
                <div class="section-top ${this.getAttribute('class1-class')}">
                    ${this.getAttribute('class1-name')}
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
                <div class="section-top ${this.getAttribute('class2-class')}">
                    ${this.getAttribute('class2-name')}
                </div>
                <div class="section-bottom">
                    <div>From</div>
                    <div>
                        <span class="currency">HKD</span>
                        <span class="price">${this.getAttribute('class2-price')}</span>
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
                    Two-stops - ${this.getAttribute('total-time')}
                </div>

                <div class="section-bottom"> 
                    <div class="block-info">
                        <div>
                            <span class="airport">${this.getAttribute('depart-airport-code')}</span>
                            <span class="time">${this.getAttribute('depart-time')}</span>
                        </div>
                        <div class="location">${this.getAttribute('depart-location')}</div>
                        <div class="date">${this.getAttribute('depart-date')}</div>
                    </div>

                    <div class="block-flightline">
                        <div class="ts-circle1"></div>
                        <div class="ts-circle2"></div>
                        <div class="ts-layover1">
                            <div class="layover-airport">${this.getAttribute('layout1-airport-code')}</div>
                            <div class="layover-time">${this.getAttribute('layout1-period')}</div>
                        </div>
                        <div class="ts-layover2">
                            <div class="layover-airport">${this.getAttribute('layout2-airport-code')}</div>
                            <div class="layover-time">${this.getAttribute('layout2-period')}</div>
                        </div>
                    </div>
                    
                    <div class="block-info">
                        <div>
                            <span class="airport">${this.getAttribute('arrive-airport-code')}</span>
                            <span class="time">${this.getAttribute('arrive-time')}</span>
                        </div>
                        <div class="location">${this.getAttribute('arrive-location')}</div>
                        <div class="date">${this.getAttribute('arrive-date')}</div>
                    </div>
        
                    <div class="block-info_2">
                        <div class="flight">
                            <span class="flight-logo">
                                <span class="flight-logo_ive">ive</span>
                                <span class="flight-logo_airline">Airline</span>
                            </span>
                            <span class="dot"></span>
                            <span class="flight-num">${this.getAttribute('flight-code1')}</span>
                        </div>
                        <div class="flight">
                            <span class="flight-logo">
                                <span class="flight-logo_thei">the</span>
                                &nbsp;
                                <span class="flight-logo_airways">Airways</span>
                            </span>
                            <span class="dot"></span>
                            <span class="flight-num">${this.getAttribute('flight-code2')}</span>
                        </div>
                        <a class="btn-moreDetails">> More details</a>
                    </div>
                </div>
            </div>

            <div class="flight-details">
                <div class="block-details" style="border-bottom: 1px var(--color-base3) solid;">
                    <div>
                        <div class="section-top">
                            One-stop - ${this.getAttribute('total-time')}
                        </div>
                    </div>
                    
                    <div class="section-bottom">
                        <div class="block-info">
                            <div>
                                <span class="airport">${this.getAttribute('depart-airport-code')}</span>
                                <span class="time">${this.getAttribute('depart-time')}</span>
                            </div>
                            <div class="location">${this.getAttribute('depart-location')}</div>
                            <div class="date">${this.getAttribute('depart-date')}</div>
                            <div class="airport-name">${this.getAttribute('depart-airport-name')}</div>
                        </div>

                        <div class="block-flightline">
                            <div class="airplane-icon"></div>
                        </div>

                        <div class="block-info">
                            <div>
                                <span class="airport">${this.getAttribute('layout1-airport-code')}</span>
                                <span class="time">${this.getAttribute('layout1-time1')}</span>
                            </div>
                            <div class="location">${this.getAttribute('layout1-location')}</div>
                            <div class="date">${this.getAttribute('depart-date')}</div>
                            <div class="airport-name">${this.getAttribute('layout1-airport-name')}</div>
                        </div>

                        <div class="block-info_2">
                            <div class="flight">
                                <span class="flight-logo">
                                    <span class="flight-logo_ive">ive</span>
                                    <span class="flight-logo_airline">Airline</span>
                                </span>
                                <span class="dot"></span>
                                <span class="flight-num">${this.getAttribute('flight-code1')}</span>
                            </div>
                            <div class="airplane-model">Airbus A350-1000</div>
                        </div>
                    </div>
                </div>

                <div class="block-details" style="border-bottom: 1px var(--color-base3) solid;">
                    <div>
                        <div class="section-top">
                            <span class="layover-title">Layover - ${this.getAttribute('layout1-period')}</span>
                        </div>
                    </div>
                    
                    <div class="section-bottom">
                        <div class="block-info">
                            <div>
                                <span class="airport">${this.getAttribute('layout1-airport-code')}</span>
                                <span class="time">${this.getAttribute('layout1-time2')}</span>
                            </div>
                            <div class="location">${this.getAttribute('layout1-location')}</div>
                            <div class="date">${this.getAttribute('depart-date')}</div>
                            <div class="airport-name">${this.getAttribute('layout1-airport-name')}</div>
                        </div>

                        <div class="block-flightline">
                            <div class="airplane-icon"></div>
                        </div>

                        <div class="block-info">
                            <div>
                                <span class="airport">${this.getAttribute('layout2-airport-code')}</span>
                                <span class="time">${this.getAttribute('layout2-time1')}</span>
                            </div>
                            <div class="location">${this.getAttribute('layout2-location')}</div>
                            <div class="date">${this.getAttribute('arrive-date')}</div>
                            <div class="airport-name">${this.getAttribute('layout2-airport-name')}</div>
                        </div>

                        <div class="block-info_2">
                            <div class="flight">
                                <span class="flight-logo">
                                    <span class="flight-logo_thei">the</span>
                                    &nbsp;
                                    <span class="flight-logo_airways">Airways</span>
                                </span>
                                <span class="dot"></span>
                                <span class="flight-num">${this.getAttribute('flight-code2')}</span>
                            </div>
                            <div class="airplane-model">Boeing 777-300ER</div>
                        </div>
                    </div>
                </div>

                <div class="block-details">
                    <div>
                        <div class="section-top">
                            <span class="layover-title">Layover - ${this.getAttribute('layout2-period')}</span>
                        </div>
                    </div>
                    
                    <div class="section-bottom">
                        <div class="block-info">
                            <div>
                                <span class="airport">${this.getAttribute('layout2-airport-code')}</span>
                                <span class="time">${this.getAttribute('layout2-time2')}</span>
                            </div>
                            <div class="location">${this.getAttribute('layout2-location')}</div>
                            <div class="date">${this.getAttribute('arrive-date')}</div>
                            <div class="airport-name">${this.getAttribute('layout2-airport-name')}</div>
                        </div>

                        <div class="block-flightline">
                            <div class="airplane-icon"></div>
                        </div>

                        <div class="block-info">
                            <div>
                                <span class="airport">${this.getAttribute('arrive-airport-code')}</span>
                                <span class="time">${this.getAttribute('arrive-time')}</span>
                            </div>
                            <div class="location">${this.getAttribute('arrive-location')}</div>
                            <div class="date">${this.getAttribute('arrive-date')}</div>
                            <div class="airport-name">${this.getAttribute('arrive-airport-name')}</div>
                        </div>

                        <div class="block-info_2">
                            <div class="flight">
                                <span class="flight-logo">
                                    <span class="flight-logo_thei">the</span>
                                    &nbsp;
                                    <span class="flight-logo_airways">Airways</span>
                                </span>
                                <span class="dot"></span>
                                <span class="flight-num">${this.getAttribute('flight-code2')}</span>
                            </div>
                            <div class="airplane-model">Boeing 777-300ER</div>
                            <a class="btn-lessDetails">> Less details</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="flight-class">
                <div class="section-top ${this.getAttribute('class1-class')}">
                    ${this.getAttribute('class1-name')}
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
                <div class="section-top ${this.getAttribute('class2-class')}">
                    ${this.getAttribute('class2-name')}
                </div>
                <div class="section-bottom">
                    <div>From</div>
                    <div>
                        <span class="currency">HKD</span>
                        <span class="price">${this.getAttribute('class2-price')}</span>
                    </div>
                </div>
            </div>
        </div>
        `
    }
}

customElements.define('flight-1stop', Flight_1Stop)
customElements.define('flight-2stops', Flight_2Stops)