<script>
export default {};
</script>
<template>
  <!-- function功能區塊 -->
  <div class="function">
    <ul>
      <li class="back icon_back"><a href="#">回上一頁</a></li>
      <li class="print icon_print"><a href="#">友善列印</a></li>
      <li class="forward icon_forward"><a href="#">轉寄友人</a></li>
    </ul>
  </div>
</template>
<style lang="scss">
$function_color: #888;
//可自訂顏色，或是自帶既有變數，但請注意背景色與字的對比度
//icon基本設定
// %function_before {
//     vertical-align: middle;
//     content: "";
//     width: 1.2em;
//     height: 1.2em;
//     margin-right: .2em;
//     display: inline-block;
// }
// div.function {
//     @include box-sizing;
//     @extend %clearfix;
//     margin: .5em 0;
//     ul {
//         @include li-reset;
//         li {
//             display: block;
//             float: left;
//             margin: 0 3px 3px 0;
//             button,
//             a {
//                 font-size: .813em;
//                 display: block;
//                 padding: .2em 1em;
//                 background: $function_color;
//                 border-color: $function_color;
//                 color: #FFF;
//                 border-radius: 4px;
//                 &:hover,
//                 &:focus {
//                     background: darken($aHover, 0);
//                     border-color: darken($aHover, 0);
//                 }
//             }
//             // 回上一頁
//             &.icon_back {
//                 a:before {
//                     @extend %function_before;
//                     background: url(~@/assets/images/basic/icon_back.svg) no-repeat center center;
//                     background-size: cover;
//                 }
//             }
//             // 友善列印
//             &.icon_print {
//                 a:before {
//                     @extend %function_before;
//                     background: url(~@/assets/images/basic/icon_print.svg) no-repeat center center;
//                     background-size: cover;
//                 }
//             }
//             // 轉寄友人
//             &.icon_forward {
//                 a:before {
//                     @extend %function_before;
//                     background: url(~@/assets/images/basic/icon_forward.svg) no-repeat center center;
//                     background-size: cover;
//                 }
//             }
//         }
//     }
// }
// // 放進function_panel樣式
// .function_panel {
//     .share {
//         .shareButton {
//             &:before {
//                 content: "";
//                 position: absolute;
//                 width: 60%;
//                 height: 60%;
//                 top: 20%;
//                 left: 20%;
//                 background: url(~@/assets/images/basic/icon_share.png) no-repeat center center  !important;
//                 background-size: 24px !important;
//             }
//             text-indent:-9999px;
//             &:hover,
//             &:focus {
//                 &:before {
//                     filter: invert(100%);
//                 }
//             }
//         }
//     }
//     .function {
//         height: 40px;
//         margin: 0;
//         ul {
//             li {
//                 width: 40px;
//                 height: 40px;
//                 font-size: 1em;
//                 float: left;
//                 display: block;
//                 margin: 0 .2em;
//                 a {
//                     display: block;
//                     @include box-sizing;
//                     width: 40px;
//                     height: 40px;
//                     text-align: center;
//                     line-height: 40px;
//                     border-radius: 50%;
//                     background: #F1F1F1;
//                     text-indent: -9999px;
//                     position: relative;
//                     &:hover,
//                     &:focus {
//                         background: $aHover;
//                         color: #FFF;
//                         &:before {
//                             filter: invert(100%);
//                         }
//                     }
//                     &:before {
//                         content: "";
//                         position: absolute;
//                         width: 60%;
//                         height: 60%;
//                         top: 20%;
//                         left: 20%;
//                     }
//                 }
//                 &.back {
//                     a:before {
//                         background: url(~@/assets/images/basic/icon_back.png) no-repeat center center;
//                         background-size: 100%;
//                     }
//                 }
//                 &.print {
//                     a:before {
//                         background: url(~@/assets/images/basic/icon_printer.png) no-repeat center center;
//                         background-size: 100%;
//                     }
//                     @include screen('mobile') {
//                         display: none;
//                     }
//                 }
//                 &.forward {
//                     a:before {
//                         background: url(~@/assets/images/basic/icon_forward.png) no-repeat center center;
//                         background-size: 100%;
//                     }
//                 }
//             }
//         }
//     }
// }
</style>
