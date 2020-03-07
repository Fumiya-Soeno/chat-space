$(function(){
  function buildHTML(message){
    if ( message.image ) {
      var html =
      `
      <div class="main-chat__message-list__message">
        <div class="main-chat__message-list__message__upper">
          <div class="main-chat__message-list__message__upper__user">
            ${message.user_name}
          </div>
          <div class="main-chat__message-list__message__upper__date">
            ${message.created_at}
          </div>
        </div>
        <div class="main-chat__message-list__message__main">
          <div class="main-chat__message-list__message__main__contents">
            ${message.content}
          </div>
        </div>
        <img src=${message.image} >
      </div>`
      return html;
    } else {
      var html =
      `
      <div class="main-chat__message-list__message">
        <div class="main-chat__message-list__message__upper">
          <div class="main-chat__message-list__message__upper__user">
            ${message.user_name}
          </div>
          <div class="main-chat__message-list__message__upper__date">
            ${message.created_at}
          </div>
        </div>
        <div class="main-chat__message-list__message__main">
          <div class="main-chat__message-list__message__main__contents">
            ${message.content}
          </div>
        </div>
      </div>`
      return html;
    };
  }
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.main-chat__message-list').append(html);
      $('.main-chat__message-list').animate({ scrollTop: $('.main-chat__message-list')[0].scrollHeight});
      $('.main-chat__message-form__new-message__input-area__send-btn').prop('disabled', false);
      $('form')[0].reset();
    })

  });
});