$(document).ready(function(){

    // motsvarar document.getElementById / document.getElementByClassName / document.getElementByTagName

    // innertext
    $('#div-id').text('Detta är texten jag vill lägga in id')
    $('.div-class').text('Detta är texten jag vill lägga in via class')
    $('div').text('Detta är texten jag vill lägga in via div')

    // innerHTML
    $('#div-id').html('<h3>Detta är texten jag vill lägga in id</h3>')
    $('.div-class').html('<h3>Detta är texten jag vill lägga in via class</h3>')
    $('div').html('<h3>Detta är texten jag vill lägga in via div</h3>')

    // classList
    $('.div-class').addClass('text-blue')
    $('.div-class').removeClass('text-blue')


    // // style
    $('.div-class').css('color','red')


    // addEventListener
    $('#btnClick').click(() => {
        // $('#div-id').hide()
        $('#div-id').toggle()
    })

}) 