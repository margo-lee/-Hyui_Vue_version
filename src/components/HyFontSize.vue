<script>
import $ from "jquery";
import { onMounted } from "@vue/runtime-core";
export default {
  setup() {
    onMounted(() => {
      /*------------------------------------*/
      /////////////字型大小 font-size//////////
      /*------------------------------------*/
      $(".font_size")
        .find(".small")
        .click(function(e) {
          $(this)
            .parent("li")
            .siblings("li")
            .find("a")
            .removeClass("active");
          $(".innerpage")
            .removeClass("large_size")
            .addClass("small_size");
          $(this).addClass("active");
          e.preventDefault();
          createCookie("FontSize", "small", 356);
        });
      $(".font_size")
        .find(".medium")
        .click(function(e) {
          $(this)
            .parent("li")
            .siblings("li")
            .find("a")
            .removeClass("active");
          $(".innerpage").removeClass("large_size small_size");
          $(this).addClass("active");
          e.preventDefault();
          createCookie("FontSize", "medium", 356);
        });
      $(".font_size")
        .find(".large")
        .click(function(e) {
          $(this)
            .parent("li")
            .siblings("li")
            .find("a")
            .removeClass("active");
          $(".innerpage")
            .removeClass("small_size")
            .addClass("large_size");
          $(this).addClass("active");
          e.preventDefault();
          createCookie("FontSize", "large", 356);
        });

      function createCookie(name, value, days) {
        if (days) {
          var date = new Date();
          date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
          var expires = "; expires=" + date.toGMTString();
        } else expires = "";
        document.cookie = name + "=" + value + expires + "; path=/";
      }

      function readCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(";");
        for (var i = 0; i < ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0) == " ") c = c.substring(1, c.length);
          if (c.indexOf(nameEQ) == 0)
            return c.substring(nameEQ.length, c.length);
        }
        return null;
      }
      window.onload = function(e) {
        var cookie = readCookie("FontSize");
        if (cookie == "small") {
          $(".font_size")
            .find(".small")
            .parent("li")
            .siblings("li")
            .find("a")
            .removeClass("active");
          $(".innerpage")
            .removeClass("large_size medium_size")
            .addClass("small_size");
          $(".font_size")
            .find(".small")
            .addClass("active");
          e.preventDefault();
        } else {
          if (cookie == "large") {
            $(".font_size")
              .find(".large")
              .parent("li")
              .siblings("li")
              .find("a")
              .removeClass("active");
            $(".innerpage")
              .removeClass("small_size medium_size")
              .addClass("large_size");
            $(".font_size")
              .find(".large")
              .addClass("active");
            e.preventDefault();
          } else {
            $(".font_size")
              .find(".medium")
              .parent("li")
              .siblings("li")
              .find("a")
              .removeClass("active");
            $(".innerpage").removeClass("large_size small_size");
            $(".font_size")
              .find(".medium")
              .addClass("active");
            e.preventDefault();
          }
        }
      };
    });
  },
};
</script>
<template>
  <!-- 文字大小 -->
  <div class="font_size">
    <span>字型大小：</span>
    <!-- 英文用<span>font-size：</span> -->
    <ul>
      <li><a href="#" class="small">小</a></li>
      <li><a href="#" class="medium">中</a></li>
      <li><a href="#" class="large">大</a></li>
    </ul>
  </div>
</template>
<style lang="scss">
// .cp {
//   &.small_size {
//     font-size: 0.938em;
//   }
//   &.large_size {
//     font-size: 1.125em;
//   }
// }
// .font_size {
//   overflow: hidden;
//   display: inline-block;
//   text-align: center;
//   span {
//     display: inline-block;
//     vertical-align: middle;
//     font-size: 0.938em;
//     color: #666;
//   }
//   ul {
//     display: inline-block;
//     vertical-align: middle;
//     @include li-reset;
//     li {
//       width: 40px;
//       height: 40px;
//       font-size: 1em;
//       float: left;
//       display: block;
//       margin: 0 0.2em;
//       a {
//         display: block;
//         text-align: center;
//         line-height: 40px;
//         border-radius: 50%;
//         background: #f1f1f1;
//         color: #333;
//         &:hover,
//         &:focus {
//           background: $aHover;
//           color: #fff;
//         }
//         &.active {
//           background: #f1f1f1;
//           &:hover,
//           &:focus {
//             background: $aHover;
//             color: #fff;
//           }
//         }
//         &.small {
//           font-size: 0.938em;
//         }
//         &.large {
//           font-size: 1.125em;
//         }
//       }
//     }
//   }
//   @include screen("mobile") {
//     display: none;
//   }
// }
</style>
