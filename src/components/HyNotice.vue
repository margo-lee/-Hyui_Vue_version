<script>
import $ from "jquery";
import { onMounted } from "@vue/runtime-core";
export default {
  setup() {
    onMounted(() => {
      /*-----------------------------------*/
      //////////// notice訊息區塊 ////////////
      /*-----------------------------------*/
      $('[class*="notice"] a.close').click(function(e) {
        $(this)
          .parent('[class*="notice"]')
          .hide();
        e.preventDefault();
      });
    });
  },
};
</script>
<template>
  <div class="notice">
    這是一般提醒訊息區塊
    <a href="#" class="close"
      ><img src="@/assets/images/basic/icon_close.svg" alt=""
    /></a>
  </div>
  <div class="notice_info">
    這是一般提醒訊息區塊
    <a href="#" class="close"
      ><img src="@/assets/images/basic/icon_close.svg" alt=""
    /></a>
  </div>
  <div class="notice_success">
    您已經成功登入
    <a href="#" class="close"
      ><img src="@/assets/images/basic/icon_close.svg" alt=""
    /></a>
  </div>
  <div class="notice_warning">
    這似乎不是一個正常的Email格式
    <a href="#" class="close"
      ><img src="@/assets/images/basic/icon_close.svg" alt=""
    /></a>
  </div>
  <div class="notice_error">
    您輸入的帳號密碼有誤！
    <a href="#" class="close"
      ><img src="@/assets/images/basic/icon_close.svg" alt=""
    /></a>
  </div>
</template>

<style lang="scss">
//https://isabelcastillo.com/error-info-messages-css
// *[class^="notice"] {
//     padding: .4em 2.5em;
//     display: block;
//     font-size: .938em;
//     margin: .2em 0;
//     position: relative;
//     color: #666;
//     background-color: #f2f2f2;
//     position: relative;
//     @include box-sizing;
//     border-radius: 4px;
//     border: none;
//     &:before {
//         position: absolute;
//         top: .7em;
//         left: .8em;
//         display: block;
//         // vertical-align: middle;
//         width: 15px;
//         height: 15px;
//         content: "";
//         img {
//             width: 100%;
//         }
//     }
//     a.close {
//         position: absolute;
//         width: 12px;
//         height: 12px;
//         top: .8em;
//         right: 1em;
//         display: block;
//         @include opacity(.5);
//         &:hover, &:focus {
//             @include opacity(1);
//         }
//         img {
//             display: block;
//             width: 12px;
//             height: 12px;
//             margin: 0;
//         }
//     }
// }
// *[class*="notice_info"] {
//     color: #00529B;
//     background-color: #BDE5F8;
//     &:before {
//         background: url(~@/assets/images/basic/icon_info.svg) no-repeat center center;
//         background-size: 15px;
//     }
// }
// *[class*="notice_success"] {
//     color: #4F8A10;
//     background-color: #DFF2BF;
//     &:before {
//         background: url(~@/assets/images/basic/icon_success.svg) no-repeat center center;
//         background-size: 15px;
//     }
// }
// *[class*="notice_warning"] {
//     color: #CE5605;
//     background-color: #FEEFB3;
//     &:before {
//         background: url(~@/assets/images/basic/icon_warning.svg) no-repeat center center;
//         background-size: 15px;
//     }
// }
// *[class*="notice_error"] {
//     color: #D8000C;
//     background-color: #FFD2D2;
//     &:before {
//         background: url(~@/assets/images/basic/icon_error.svg) no-repeat center center;
//         background-size: 15px;
//     }
// }
</style>
