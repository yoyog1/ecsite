$(function () {
    

    let $thumbs=$('.thumb img');
    let $tops=$('.top img');
    $thumbs.hover(function(){
        
        $tops.hide();
        $tops.eq($thumbs.index($(this))).show();

    })
    
})