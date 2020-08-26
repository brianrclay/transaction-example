var x = $('.code-editor.request').offset().left;
var y = $('.code-editor.request').offset().top;
var bodyHeight = $('.code-editor.response .code-body').height();
var responseHeight = $('.code-editor.response').height();

$('.action.run').click(function () {
  $(this).children('span').text('Running');
  $(this).children('.loader').css('display', 'block');
  $(this).children('.play-icon').css('display', 'none');
  $('.code-editor.request li').css({
    'opacity': 0.5,
  });
  //Set Response body height
  $('.code-editor.response .code-body').css({
    'height': '300px',
  });

  //Hide request
  setTimeout(() => {
    $('.code-editor.request').css({
      'top': y,
      'opacity': 0,
      'visibility': 'hidden',
      'pointer-events': 'none',
    });
  }, 1300);
  
  //Show Response
  setTimeout(() => {
    $('.code-editor.response').css({
      'opacity': 1,
      'visibility': 'visible',
      'pointer-events': 'auto',
      'position': 'relative'
    });
    //Update Response body height
    $('.code-editor.response .code-body').css({
      'height': bodyHeight,
    });
    $('.code-editor.request').css({
      'position': 'absolute'
    });
  }, 1600);

})