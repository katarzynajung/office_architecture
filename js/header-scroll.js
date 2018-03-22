$(window).on('scroll', function(){
  if($(window).scrollTop()){
    $('#header .navbar').css({
      'background-color':'#FFFFFF',
    });
  } else {
    $('#header .navbar').css({
      'background-color':'transparent',
    });
  }
})
