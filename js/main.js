$(document).ready((e)=>{
    $('main').fadeIn(1200).ready((e)=>{
        $('main').css('display', 'flex')
    })
    let moreBtn = $('.more-btn')
    moreBtn.click((e) => {
        if(location.hash == ''){
            location.href = location.href + '#content'
            return
        }
        location.href =  location.href.replace('#content', '#content')
        moreBtn.blur()
    })
})