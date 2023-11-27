$(document).ready(function(){
    $('.tab-menu li').click(function(){
        $('.tab-item > div').hide()
        let idx = $(this).index()
        $('.tab-item > div').eq(idx).show()

        $('.tab-menu li').removeClass('on')
        $(this).addClass('on')
    })

    $(window).scroll(function(){
        if($(this).scrollTop() >=300){
            $('.top').fadeIn(300)
        }else{
            $('.top').fadeOut(300)
        }
    })
    $('.top').click(function(e){
        e.preventDefault();
        $('html, body').stop().animate({
            scrollTop : 0
        }, 300)
    })
})