$(document).ready(() => {
    $(".rippleBtn-hover").mousemove(function(event) {
        const x = event.pageX - this.offsetLeft
        const y = event.pageY - this.offsetTop

        this.style.setProperty('--x', x + 'px')
        this.style.setProperty('--y', y + 'px')
    })

    $(".rippleBtn-click").click(function(event) {
        const diameter = Math.max(this.clientWidth, this.clientHeight)
        const radius = diameter / 2

        const circle = document.createElement("span")

        circle.style.width = circle.style.height = `${diameter}px`
        circle.style.left = `${event.clientX - this.offsetLeft - radius}px`
        circle.style.top = `${event.clientY - this.offsetTop - radius}px`
        circle.classList.add("ripple")

        const ripple = this.getElementsByClassName("ripple")[0]

        if (this.children.length > 4) {
            ripple.remove()
        }

        this.appendChild(circle)
    })

    var deg = 0
    $('#btn-switch').click(function() {
        $('#icon-switch').css('transform', 'rotate('+(deg+=180)+'deg)')
    })

    $('.lst-selected').click(function() {
        $(this).siblings('.lst-items').toggleClass('active')
    })

    $('.lst-textbox').children('.txt-textarea').focus(function() {
        $(this).parent().siblings('.lst-items').addClass('active')
    })

    $.getJSON('classes.json', function(jd) {
        var content = ""
        for(let i=0; i<jd.classes.length; i++) {
            content += 
                `
                <div class="item">
                    <input type="radio" class="item-radio" id="item${i}" name="catalogue">
                    <label for="item${i}">${jd.classes[i]}</label>
                </div>
                `
        }
        $('.lst-items').parent('.lst.default').children('.lst-items').append(content)
    })


    // Handles the selected item from drop-down list
    $('.lst-items').on('click', '.item', function() {
        if 
        ($(this)
            .parent('.lst-items')
            .siblings('.lst-textbox')
            .hasClass('txt')
        ) {   // Handles search list
            // Display selected item in the search list
            $(this)
                .parent('.lst-items')
                .siblings('.lst-textbox')
                .children('.txt-textarea')
                .val($(this).children('label').text())
            
            // Cancel highlight
            $(this)
                .parent('.lst-items')
                .children('.item')
                .unhighlight()
            
            $(this)
                .parent('.lst-items')
                .children('.item')
                .filter(function() {
                    $(this).toggle(true)
                })
        }
        else {
            $(this)
                .parent()
                .siblings('.lst-selected')
                .text($(this).children('label').text())
        }
        $(this).parent('.lst-items').removeClass('active')
    })

    // Handles the filter search
    $('.lst-textbox').children('.txt-textarea').on('keyup', function() {
        var value = $(this).val().toLowerCase();
        $(this)
            .parent('.lst-textbox')
            .siblings('.lst-items')
            .children('.item')
            .filter(function() {
                $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
            })
    })
    
    // Highlight keyword of the filter search
    $('.lst-textbox').children('.txt-textarea').on('keyup change', function() {
        var keyword = $(this).val()
        var items = $(this)
            .parent('.lst-textbox')
            .siblings('.lst-items')
            .children('.item')
            .children('label')
        items.unhighlight(keyword)
        items.highlight(keyword)
    })




    $.getJSON('airports.json', function(jd) {
        var content = ""
        for(let i=0; i<jd.length; i++) {
            content += 
                `
                <div class="item">
                    <input type="radio" class="item-radio" id="item${i}" name="catalogue">
                    <div>
                        <label for="item${i}" class="city">${jd[i].city}</label>
                        <label for="item${i}" class="code" style="float: right; color: #BDBDBD;">${jd[i].iata_code}</label>
                    </div>
                    <div>
                        <label for="item${i}" class="name" style="font-size: 12px;">${jd[i].name}</label>
                    </div>
                </div>
                `
        }
        $('.lst-items').parent('.lst.airports').children('.lst-items').append(content)
    })

    $('.lst.airports').children('.lst-items').on('click', '.item', function() {
        $(this)
            .parent('.lst-items')
            .siblings('.lst-textbox')
            .children('.txt-textarea')
            .val(`${$(this).children().children('.city').text()}, ${$(this).children().children('.code').text()}`)
    })

    $('.lst.airports').find('.txt-textarea').on('keyup', function() {
        var value = $(this).val().toLowerCase();
        $(this)
            .parent('.lst-textbox')
            .siblings('.lst-items')
            .children('.item')
            .filter(function() {
                $(this).toggle(
                    $(this).find('.city').text().toLowerCase().indexOf(value) > -1 ||
                    $(this).find('.code').text().toLowerCase().indexOf(value) > -1 ||
                    $(this).find('.name').text().toLowerCase().indexOf(value) > -1
                )
            })
    })

    $('.lst.airports').find('.txt-textarea').on('keyup change', function() {
        var keyword = $(this).val()
        var city = $(this)
            .parent('.lst-textbox')
            .siblings('.lst-items')
            .find('.city')
        var code = $(this)
            .parent('.lst-textbox')
            .siblings('.lst-items')
            .find('.code')
        var name = $(this)
            .parent('.lst-textbox')
            .siblings('.lst-items')
            .find('.name')
        
        city.unhighlight(keyword)
        code.unhighlight(keyword)
        name.unhighlight(keyword)

        city.highlight(keyword)
        code.highlight(keyword)
        name.highlight(keyword)
    })

    var drp = $('.drp-selector').daterangepicker()

    let x = 0
    $('.num-plus').click(function() {
        x++
        $('.num-value').text(x)
    })

    $('.num-minus').click(function() {
        if (x <= 0)
            x = 0
        else
            x--
        $('.num-value').text(x)
    })
})