<script>
import $ from "jquery";
import { onMounted } from "@vue/runtime-core";

export default {
  setup() {
    onMounted(() => {
      //無障礙切換slick箭頭語系
      if ($("html")[0].hasAttribute("labg")) {
        var weblang = $("html").attr("lang");
        if (weblang.substring(0, 2) == "zh") {
          $(".slick-prev").attr("title", "上一筆");
          $(".slick-next").attr("title", "下一筆");
        } else if (weblang.substring(0, 2) !== "zh") {
          $(".slick-prev").attr("title", "previous");
          $(".slick-next").attr("title", "next");
        }
      }
      /*-----------------------------------*/
      //////// 語言模組 無障礙遊走設定  ////////
      /*-----------------------------------*/
      $(".language")
        .find("ul")
        .hide();
      var openLang = $(".language").children("a");
      openLang.off().click(function(e) {
        $(this)
          .next("ul")
          .stop(true, true)
          .slideToggle();
        e.preventDefault();
      });
      openLang.keyup(function() {
        $(this)
          .next("ul")
          .stop(true, true)
          .slideDown();
      });
      $(".language")
        .find("ul li:last>a")
        .focusout(function() {
          $(".language")
            .find("ul")
            .hide();
        });
      $(document).on("touchend click", function(e) {
        var target = e.target;
        if (!$(target).is(".language a")) {
          $(".language")
            .find("ul")
            .hide();
        }
      });
    });
  },
};
</script>
<template>
  <div class="language">
    <a href="#">語言選擇</a>
    <ul>
      <li><a href="#">繁體中文</a></li>
      <li><a href="#">简体中文</a></li>
      <li><a href="#">ENGLISH</a></li>
    </ul>
  </div>
</template>
<style></style>
