
/*タイトル*/
function TypingAnime() {
  $('.Typing').each(function () {
    var elemPos = $(this).offset().top - 50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    var thisChild = "";
    if (scroll >= elemPos - windowHeight) {
      thisChild = $(this).children(); //spanタグを取得
      //spanタグの要素の１つ１つ処理を追加
      thisChild.each(function (i) {
        var time = 100;
        //時差で表示する為にdelayを指定しその時間後にfadeInで表示させる
        $(this).delay(time * i).fadeIn(time);
      });
    } else {
      thisChild = $(this).children();
      thisChild.each(function () {
        $(this).stop(); //delay処理を止める
        $(this).css("display", "none"); //spanタグ非表示
      });
    }
  });
}

$(window).on('load', function () {
  //spanタグを追加する
  var element = $(".TextTyping");
  element.each(function () {
    var text = $(this).html();
    var textbox = "";
    text.split('').forEach(function (t) {
      if (t !== " ") {
        textbox += '<span>' + t + '</span>';
      } else {
        textbox += t;
      }
    });
    $(this).html(textbox);

  });

  TextTypingAnime();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面が読み込まれたらすぐに動かしたい場合の記述


/*ギャラリー*/
$(function () {
    $(".grid img").on("click", function () {
      // メイン画像に切り替えるimgのsrc取得
      img = $(this).attr("src");
      // currentクラス付け替え(枠線などを変えたい時に)
      $(".grid li").removeClass("current");
      $(this).parent().addClass("current");
      // fadeOutできたらsrc変更してfadeIn
      $(".js-item-1 img").fadeOut(500, function () {
        $(".js-item-1 img")
          .attr("src", img)
          .on("load", function () {
            $(this).fadeIn(500);
          });
      });
    });
  });




