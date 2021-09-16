<script>
import $ from "jquery";
import { onMounted, ref } from "@vue/runtime-core";

export default {
  setup() {
    const openList = ref(true);
    const openLang = () => {
      openList.value = !openList.value;
    };
    onMounted(() => {
      $(document).on("touchend click", function(e) {
        var target = e.target;
        if (!$(target).is(".language a")) {
          openList.value = true;
        }
      });
      /*-----------------------------------*/
      //////// 語言模組 無障礙遊走設定  ////////
      /*-----------------------------------*/
      // $(".language")
      //   .find("ul")
      //   .hide();
      // var openLang = $(".language").children("a");
      // openLang.off().click(function(e) {
      //   $(this)
      //     .next("ul")
      //     .stop(true, true)
      //     .slideToggle();
      //   e.preventDefault();
      // });
      // openLang.keyup(function() {
      //   $(this)
      //     .next("ul")
      //     .stop(true, true)
      //     .slideDown();
      // });
      // $(".language")
      //   .find("ul li:last>a")
      //   .focusout(function() {
      //     $(".language")
      //       .find("ul")
      //       .hide();
      //   });
      // $(document).on("touchend click", function(e) {
      //   var target = e.target;
      //   if (!$(target).is(".language a")) {
      //       $(".language")
      //         .find("ul")
      //         .hide();
      //   }
      // });
    });
    return {
      openList,
      openLang,
    };
  },
};
</script>
<template>
  <div class="language">
    <a @click.prevent="openLang" @keyup.prevent="openLang" href="#">語言選擇</a>
    <ul :class="{ close: openList }">
      <li><a href="#">繁體中文</a></li>
      <li><a href="#">简体中文</a></li>
      <li><a @focusout.prevent="openLang" href="#">ENGLISH</a></li>
    </ul>
  </div>
</template>
<style lang="scss" soped>
.language {
  ul {
    transition: all 0.5s;
    max-height: 140px;
    overflow: hidden;
    display: block;
  }
  .close {
    max-height: 0;
    transition: all 0.5s;
    overflow: hidden;
  }
}
</style>
