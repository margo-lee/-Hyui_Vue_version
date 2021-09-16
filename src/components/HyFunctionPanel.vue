<script>
import HyFunction from "@/components/HyFunction.vue";
import HyShare from "@/components/HyShare.vue";
import HyFontSize from "@/components/HyFontSize.vue";
export default {
  components: {
    HyFunction,
    HyShare,
    HyFontSize,
  },
};
</script>
<template>
  <div class="function_panel">
    <div class="publish_time">
      <span>發布日期：</span><time>2019-01-01</time>
    </div>
    <!-- 文字大小 -->
    <HyFontSize />
    <!-- function功能區塊 -->
    <HyFunction />
    <!-- 社群分享 -->
    <HyShare />
  </div>
</template>
<style lang="scss">
// 放進function_panel樣式
// .function_panel {
//   .share {
//     .shareButton {
//       &:before {
//         content: "";
//         position: absolute;
//         width: 60%;
//         height: 60%;
//         top: 20%;
//         left: 20%;
//         background: url(~@/assets/images/basic/icon_share.png) no-repeat center
//           center !important;
//         background-size: 24px !important;
//       }
//       text-indent: -9999px;
//       &:hover,
//       &:focus {
//         &:before {
//           filter: invert(100%);
//         }
//       }
//     }
//   }
//   .function {
//     height: 40px;
//     margin: 0;
//     ul {
//       li {
//         width: 40px;
//         height: 40px;
//         font-size: 1em;
//         float: left;
//         display: block;
//         margin: 0 0.2em;
//         a {
//           display: block;
//           @include box-sizing;
//           width: 40px;
//           height: 40px;
//           text-align: center;
//           line-height: 40px;
//           border-radius: 50%;
//           background: #f1f1f1;
//           text-indent: -9999px;
//           position: relative;
//           &:hover,
//           &:focus {
//             background: $aHover;
//             color: #fff;
//             &:before {
//               filter: invert(100%);
//             }
//           }
//           &:before {
//             content: "";
//             position: absolute;
//             width: 60%;
//             height: 60%;
//             top: 20%;
//             left: 20%;
//           }
//         }
//         &.back {
//           a:before {
//             background: url(~@/assets/images/basic/icon_back.png) no-repeat
//               center center;
//             background-size: 100%;
//           }
//         }
//         &.print {
//           a:before {
//             background: url(~@/assets/images/basic/icon_printer.png) no-repeat
//               center center;
//             background-size: 100%;
//           }
//           @include screen("mobile") {
//             display: none;
//           }
//         }
//         &.forward {
//           a:before {
//             background: url(~@/assets/images/basic/icon_forward.png) no-repeat
//               center center;
//             background-size: 100%;
//           }
//         }
//       }
//     }
//   }
// }
</style>
