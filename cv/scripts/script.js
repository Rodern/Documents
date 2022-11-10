$(document).ready((event)=>{
    let inlineMenu = $('.inline-menu')
    let menuOffset = inlineMenu.offset().top
    $(document).scroll((event)=>{
        if(inlineMenu.offset().top < scrollY){
            inlineMenu.css('position', 'fixed')
        } else
        if(scrollY < menuOffset)
            inlineMenu.css('position', 'static')
    })
})