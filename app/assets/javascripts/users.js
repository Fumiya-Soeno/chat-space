$(function(){
  function buildHTML(user){
    if ( user != ""){
      var html = 
      `
      <div class="chat-group-user clearfix">
        <p class="chat-group-user__name">${user.name}</p>
        <div class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${user.id}" data-user-name="${user.name}">追加</div>
      </div>
      `
      return html;
    } else {
      var html =
      `
      <div class="chat-group-user clearfix">
        <p class="chat-group-user__name">ユーザーが見つかりません</p>
      </div>
      `;
      return html;
    }
  }
  $("#user-search-field").on("keyup", function(){
    var input = $("#user-search-field").val();
    var url = "/users";
    $.ajax({
      type: "GET",
      url: url,
      data: { keyword: input },
      dataType: 'json'
    })
    .done(function(users) {
      $("#user-search-result").empty();
      users.forEach(user=>{
        html = buildHTML(user);
        console.log(html);
        $('#user-search-result').append(html);
      })
    })
    .fail(function() {
      alert("ユーザー検索に失敗しました");
    });
  })
});