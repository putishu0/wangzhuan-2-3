$(function(){
    function shuaxin(){
        var msg=['197290381','xf2729817438'];
        var img=['11.png','12.png'];
        var index = Math.floor((Math.random()*msg.length)); 
        var i = Math.floor((Math.random()*img.length)); 
        $('.qiehuan').text(msg[index])
        $('.img').attr("src", 'img/'+img[i]);
    }
    shuaxin();
})
