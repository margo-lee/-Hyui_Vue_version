<script>
import $ from "jquery";
import { onMounted } from "@vue/runtime-core";
export default {
  setup() {
    onMounted(() => {
      $(function() {
        /*-----------------------------------*/
        /////////// 無障礙快捷鍵盤組合  //////////
        /*-----------------------------------*/
        $(document).on("keydown", function(e) {
          // alt+S 查詢
          if (e.altKey && e.keyCode == 83) {
            $("html, body").animate({ scrollTop: 0 }, 200, "easeOutExpo");
            $(".search")
              .find('input[type="text"]')
              .focus();
          }
          // alt+U header
          if (e.altKey && e.keyCode == 85) {
            $("html, body").animate({ scrollTop: 0 }, 200, "easeOutExpo");
            $("header")
              .find(".accesskey")
              .focus();
          }
          // alt+C 主要內容區
          if (e.altKey && e.keyCode == 67) {
            $("html, body")
              .stop(true, true)
              .animate(
                {
                  scrollTop:
                    $(".main")
                      .find(".accesskey")
                      .offset().top - 70,
                },
                800,
                "easeOutExpo"
              );
            $(".main")
              .find(".accesskey")
              .focus();
          }
          // alt+B footer
          if (e.altKey && e.keyCode == 90) {
            $("html, body")
              .stop(true, true)
              .animate(
                {
                  scrollTop: $("footer")
                    .find(".accesskey")
                    .offset().top,
                },
                800,
                "easeOutExpo"
              );
            $("footer")
              .find(".accesskey")
              .focus();
          }
        });
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
        // 無障礙錨點切換語系，更改accesskey的title名稱
        var weblang = $("html").attr("lang");
        if (weblang.substring(0, 2) == "zh") {
          $("header")
            .find(".accesskey")
            .attr("title", "上方功能區塊");
          $(".main")
            .find(".accesskey")
            .attr("title", "中央內容區塊");
          $("footer")
            .find(".accesskey")
            .attr("title", "下方功能區塊");
          $(".search")
            .find(".accesskey")
            .attr("title", "關鍵字搜尋：文章關鍵字搜尋");
        } else if (weblang.substring(0, 2) !== "zh") {
          $("header")
            .find(".accesskey")
            .attr("title", "header");
          $(".main")
            .find(".accesskey")
            .attr("title", "content");
          $("footer")
            .find(".accesskey")
            .attr("title", "footer");
          $(".search")
            .find(".accesskey")
            .attr("title", "search");
        }
        /*------------------------------------*/
        /////gotoCenter on focus跳到 content/////
        /*------------------------------------*/
        $("a.goCenter").keydown(function(e) {
          if (e.which == 13) {
            $("#aC").focus();
            $("html, body")
              .stop(true, true)
              .animate(
                {
                  scrollTop: $(".main")
                    .find(".accesskey")
                    .offset().top,
                },
                800,
                "easeOutExpo"
              );
          }
        });
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
          //alert('cookie='+cookie);
          if (cookie == "small") {
            //$('.font_size').find('.small').click();
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
              //$('.font_size').find('.large').click();
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
              //這裡是預設宣告
              //$('.font_size').find('.medium').click();
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
    });
  },
};
</script>
<template>
  <!-- header Start -->
  <header class="header">
    <div class="container">
      <a
        class="accesskey"
        href="#aU"
        id="aU"
        accesskey="U"
        title="網站標題"
        tabindex="2"
        >:::</a
      >
      <!-- navigation Start -->
      <nav class="navigation have_language" role="navigation" aria-label="Site">
        <!-- 新增div navlist -->
        <div class="navlist">
          <ul>
            <li><a href="#">回首頁</a></li>
            <li><a href="#">網站導覽</a></li>
            <li><a href="#">English</a></li>
            <li><a href="#">常見問答</a></li>
          </ul>
        </div>
        <!-- font_size -->
        <div class="font_size">
          <span>字型大小：</span>
          <!-- 英文用<span>font-size：</span> -->
          <ul>
            <li><a href="#" class="small">小</a></li>
            <li><a href="#" class="medium">中</a></li>
            <li><a href="#" class="large">大</a></li>
          </ul>
        </div>
        <!-- language -->
        <div class="language">
          <a href="#">語言選擇</a>
          <ul>
            <li><a href="#">繁體中文</a></li>
            <li><a href="#">简体中文</a></li>
            <li><a href="#">ENGLISH</a></li>
          </ul>
        </div>
      </nav>
      <!-- navigation End -->
      <h1>
        <router-link to="/">
          <img src="~@/assets/images/logo.png" alt="網站標題" />
        </router-link>
      </h1>
      <!-- Search Start -->
      <div class="search" role="search">
        <div class="form_grp">
          <label for="mustSameAsId">搜尋</label>
          <input
            name="username"
            id="mustSameAsId"
            type="text"
            placeholder="請輸入文字"
            accesskey="S"
            title="請輸入文字"
            aria-label="搜尋網站內容"
          />
          <input name="" type="submit" value="查詢" class="btn btn-search" />
        </div>
        <div class="btn_grp">
          <input name="" type="submit" value="進階搜尋" class="btn" />
        </div>
        <div class="keywordHot">
          <ul>
            <li><a href="#">熱門熱門</a></li>
            <li><a href="#">查詢</a></li>
            <li><a href="#">字詞三</a></li>
          </ul>
        </div>
      </div>
      <!-- Search End -->
      <!-- menu Start -->
      <nav class="menu" role="navigation" aria-label="About page">
        <ul>
          <li>
            <!-- <a href="#">第一層選單</a> -->
            <router-link to="/np_template">第一層選單</router-link>
            <ul>
              <li><a href="#">第二層選單</a></li>
              <li><a href="#">第二層選單</a></li>
              <li><a href="#">第二層選單</a></li>
              <li><a href="#">第二層選單</a></li>
            </ul>
          </li>
          <li><router-link to="/lp_template">第一層選單</router-link></li>
          <!-- <li><a href="http://www.google.com">第一層有連結</a></li> -->
          <li>
            <router-link to="/lp_table_template">第一層選單</router-link>
            <!-- <a href="http://www.google.com">第一層有連結</a> -->
            <ul>
              <li><a href="http://www.google.com">第二層有連結</a></li>
              <li><a href="#">第二層選單</a></li>
              <li><a href="#">第二層選單</a></li>
              <li><a href="#">第二層選單</a></li>
              <li><a href="#">第二層選單</a></li>
              <li><a href="#">第二層選單</a></li>
              <li><a href="#">第二層選單</a></li>
              <li><a href="#">第二層選單</a></li>
            </ul>
          </li>
          <li>
            <router-link to="/Qp_template">第一層選單</router-link>
            <ul>
              <li><a href="#">第二層選單</a></li>
              <li><a href="#">第二層選單</a></li>
              <li>
                <a href="http://www.google.com">第二層有連結</a>
                <ul>
                  <li>
                    <a href="http://www.google.com">第三層選單有下層</a>
                    <ul>
                      <li><a href="#">第四層選單</a></li>
                      <li><a href="#">第四層選單</a></li>
                    </ul>
                  </li>
                  <li>
                    <a href="http://www.google.com">第三層選單有連結</a>
                  </li>
                  <li><a href="#">第三層選單</a></li>
                </ul>
              </li>
              <li><a href="#">第二層選單</a></li>
            </ul>
          </li>
          <li>
            <router-link to="/lp_album_template">第一層選單</router-link>
            <!-- <a href="#">第一層選單</a> -->
            <ul>
              <li><a href="#">第二層選單</a></li>
              <li><a href="#">第二層選單</a></li>
              <li><a href="#">第二層選單</a></li>
              <li><a href="#">第二層選單</a></li>
            </ul>
          </li>
          <li>
            <a href="#">第一層選單</a>
            <ul>
              <li><a href="#">第二層選單</a></li>
              <li><a href="#">第二層選單</a></li>
              <li><a href="#">第二層選單</a></li>
              <li><a href="#">第二層選單</a></li>
            </ul>
          </li>
        </ul>
      </nav>
      <!-- menu End -->
    </div>
  </header>
  <!-- header End -->
</template>

<style lang="scss">
// //header
.header {
  position: relative;
  z-index: 99;
  box-shadow: 0px 2px 5px RGBA(0, 0, 0, 0.3);
  @extend %clearfix;
  @include screen("mobile") {
    position: fixed;
    width: 100%;
  }
  // 虛擬底色 - navigation bg
  // &:before {
  //     content: "";
  //     width: 100%;
  //     height: 2.4em;
  //     background: #F2F2F2;
  //     position: absolute;
  //     top: 0;
  //     left: 0;
  //     @include screen('mobile') {
  //         display: none;
  //     }
  // }
  // mobile btn for extend
  %mobileCtrlBtn {
    width: 60px !important;
    height: 60px !important;
    position: absolute;
    top: 0px;
    display: block;
    font-size: 0em;
    padding: 15px;
    margin: 0;
    min-width: auto;
    min-height: auto;
    background: transparent;
    border: none;
    box-shadow: none;
    box-sizing: border-box;
    @include screen("mobile") {
      display: block !important;
    }
  }
  > .container {
    max-width: $container-max;
    overflow: visible;
    position: relative; // menu
    .sidebarCtrl {
      display: none;
      left: 0px;
      @extend %mobileCtrlBtn;
      span {
        position: absolute;
        background: $primaryColor;
        width: 50%;
        height: 3px;
        top: 20px;
        left: 50%;
        margin-left: -25%;
        display: block;
        &:nth-child(2) {
          top: 28px;
        }
        &:nth-child(3) {
          top: 36px;
        }
      }
    }
    // search
    .searchCtrl {
      display: none;
      right: 0px;
      font-size: 0em;
      @extend %mobileCtrlBtn;
      &:before {
        width: 40px;
        height: 40px;
        background: url(~@/assets/images/basic/icon_search.png) no-repeat center
          center;
        background-size: 28px;
        opacity: 0.6;
        content: "";
        position: absolute;
        top: 10px;
        left: 10px;
        display: block;
      }
    }
  }
  h1 {
    float: left;
    width: 300px;
    height: 75px;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    a {
      display: inline-block;
    }
    img {
      display: block;
      max-width: 300px;
      max-height: 75px;
    }
    @include screen("mobile") {
      padding: 2px 60px;
      width: 100%;
      text-align: center;
      height: 60px;
      img {
        width: auto;
        height: auto;
        max-height: 54px;
        margin: 0px auto;
        transform: scale(0.8);
      }
    }
  }
  // 導覽列
  .navigation {
    @include screen("mobile") {
      display: none;
    }
    &.have_language {
      padding-right: 160px;
    }
    @extend %clearfix;
    overflow: hidden;
    // width: 100%;
    // margin-bottom: .5em;
    box-sizing: border-box;
    display: flex;
    //shuya 1090826
    .navlist {
      flex: 1 1 auto;
      margin: 0.1em 0.5em 0 0;
      ul {
        padding: 0;
        margin: 0;
        font-size: 0.875em;
        list-style: none;
        display: flex;
        justify-content: flex-end;
      }
      li {
        flex: 0 0 auto;

        a {
          display: block;
          padding: 0.5em;
          text-decoration: none;
          @include aSetting_nocolor;
        }
      }
    }

    .language {
      position: absolute;
      right: 15px;
      top: 0.35em;
      font-size: 0.75em;
    }
  }
}
//search
.search {
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  vertical-align: top;
  font-size: 0.938em;
  margin: 1em 0.5em;
  box-sizing: border-box;

  @include screen("mobile") {
    display: none;
  }
  label {
    font-size: 0em;
  }
  .form_grp {
    flex: 0 0 auto;
    margin: 0;
    input {
      margin: 0 0 0 0.5em;
      padding: 0.2em;
      box-shadow: none;
      width: auto;

      &[type="submit"] {
        min-width: auto;
        padding: 0.2em 0.8em;
      }
      //   &:focus {
      //     box-shadow: 0 0px 0px 2px $aFocus;
      //   }
    }
  }
  .btn_grp {
    flex: 0 0 auto;
    padding: 0 0.5em 0;
    margin: 0;
    input,
    input[type="submit"] {
      min-width: auto;
      padding: 0.2em 0.8em;
      margin: 0;
    }
  }
  .keywordHot {
    flex: 1 1 100%;
    ul {
      font-size: 0.813em;
      line-height: 1.65em;
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: flex-end;
      list-style-type: none;
      li {
        margin: 0;
        padding: 0.5em;
        flex: 0 0 auto;
      }
      a {
        @include aSetting_nocolor;
      }
    }
  }
  // m_search
  &.m_search {
    width: 100% !important;
    max-width: 100% !important;
    min-width: auto;
    padding: 0.8em 0.3em;
    display: block;
    height: auto;
    position: fixed;
    top: 60px;
    left: 0;
    z-index: 98;
    background: #333;
    display: none;
    margin: 0;

    label {
      font-size: 0em;
      line-height: 0;
    }
    .form_grp {
      display: flex;

      label {
        display: none;
        flex: 0 0 0%;
      }
      input {
        margin: 0.5em;
        padding: 0.5em;
        flex: 1 1 50%;

        &[type="submit"] {
          flex: 0 1 15%;
          margin: 0.5em;
        }
      }
    }
    .btn_grp {
      flex: 1 1 auto;
      padding: 0.5em;
      margin-top: 0.5em;
      border-top: dotted 1px #999;

      box-sizing: border-box;
      input {
        width: 100% !important;
        padding: 0.6em 0.5em !important;
        margin: 0;
      }
    }
    .keywordHot {
      @extend %clearfix;
      ul {
        justify-content: flex-start;
      }
      a {
        color: #fff;
        &:hover,
        &:focus {
          color: $primaryColor;
        }
      }
    }
  }
}

// header fix
.header.fixed {
  position: fixed;
  width: 100%;
  right: 0;
  top: 0;
  box-shadow: rgba(0, 0, 0, 0.5) 0 0 25px;
  background: rgba(0, 0, 0, 0.75);
  z-index: 999;
  @include screen("mobile") {
    background: #fff;
  }
  .menu {
    > ul {
      > li {
        > a {
          color: #fff;
        }
      }
    }
  }
  .megamenu {
    > ul {
      > li {
        > a {
          color: #fff;
        }
      }
    }
  }
}
</style>
