$(document).ready(function() {
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

    $('.lst-textbox').children('.txt-textarea').on('input', function() {
        if ($(this).val() != "")
            $(this).parent().siblings('.lst-items').addClass('active')
        else
            $(this).parent().siblings('.lst-items').removeClass('active')
    })

    $.fn.list = function(json, key) {
        let list = this
        let format =
        `
        <div class="item">
            <input type="radio" class="item-radio" id="$i" name="catalogue">
            <label for="$i">$value</label>
        </div>
        ` 
        let content = ''
        
        $.getJSON(json, function(jd) {
            for(i=0; i<jd.length; i++) {
                format = format.replaceAll('$i', `${i}`)
                format = format.replaceAll('$value', `${jd[i][key]}`)

                content += format

                format = format.replaceAll(`${i}`, '$i')
                format = format.replaceAll(`${jd[i][key]}`, '$value')
            }
            list.find('.lst-items').append(content)
        })
    }

    $.fn.custList = function(format, json, ...keys) {
        let list = this
        let content = ''
        let values = [...keys]
        let format_copy = format

        $.getJSON(json, function(jd) {
            for(i=0; i<jd.length; i++) {
                format = format.replaceAll('$i', `${i}`)
                for (j=0; j<values.length; j++) {
                    format = format.replaceAll(`$value${j}`, `${jd[i][keys[j]]}`)
                }
                content += format
                format = format_copy
            }
            list.find('.lst-items').append(content)
        })
    }

    var json_classes = '../jsons/classes.json'
    var json_items = '../jsons/items.json'
        
    $('.lst_classes').list(json_classes, 'class')
    $('#lst_items').list(json_items, 'item')
    $('#searchList_items').list(json_items, 'item')    

    format = 
    `
    <div class="item">
        <input type="radio" class="item-radio" id="$i" name="catalogue">
        <div>
            <label for="$i" class="city">$value0</label>
            <label for="$i" class="code" style="float: right; color: #BDBDBD;">$value1</label>
        </div>
        <div>
            <label for="$i" class="name" style="font-size: 12px;">$value2</label>
        </div>
    </div>
    `
    var json_airports = '../jsons/airports.json'
    $('.lst_airports').custList(format, json_airports, 'city', 'iata_code', 'name')


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
            
            // Clear filter keyword
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




    // $.getJSON('airports.json', function(jd) {
    //     var content = ""
    //     for(let i=0; i<jd.length; i++) {
    //         content += 
    //             `
    //             <div class="item">
    //                 <input type="radio" class="item-radio" id="item${i}" name="catalogue">
    //                 <div>
    //                     <label for="item${i}" class="city">${jd[i].city}</label>
    //                     <label for="item${i}" class="code" style="float: right; color: #BDBDBD;">${jd[i].iata_code}</label>
    //                 </div>
    //                 <div>
    //                     <label for="item${i}" class="name" style="font-size: 12px;">${jd[i].name}</label>
    //                 </div>
    //             </div>
    //             `
    //     }
    //     $('.lst-items').parent('.lst.airports').children('.lst-items').append(content)
    // })

    $('.lst.airports').children('.lst-items').on('click', '.item', function() {
        $(this)
            .parent('.lst-items')
            .siblings('.lst-textbox')
            .children('.txt-textarea')
            .val(`${$(this).find('.city').text()}, ${$(this).find('.code').text()}`)
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

    // Highlights for airport search
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

    $.fn.numPicker = function() {
        x = 0
        this.find('.num-plus').click(function() {
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
    }

    $('.num').numPicker()
    $('.drp-selector').daterangepicker()




    $('.lst.countries').children('.lst-items').on('click', '.item', function() {
        $(this)
            .parent('.lst-items')
            .siblings('.lst-textbox')
            .children('.txt-textarea')
            .val(`${$(this).find('.city').text()}, ${$(this).find('.code').text()}`)
    })

    $('.lst.countries').find('.txt-textarea').on('keyup', function() {
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

    // Highlight for countries (telephone)
    $('.lst.countries').find('.txt-textarea').on('keyup change', function() {
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
})