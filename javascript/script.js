$(document).ready(function() {
  $('.dropdown-button').hover(
    function() {
      $(this).find('.dropdown-menu').stop(true, true).slideDown(); // 鼠标进入时下拉菜单展开
    }, 
    function() {
      $(this).find('.dropdown-menu').stop(true, true).slideUp();   // 鼠标离开时下拉菜单收起
    }
  );
});
