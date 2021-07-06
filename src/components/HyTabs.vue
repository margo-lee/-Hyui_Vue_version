<script>
import { onMounted } from "@vue/runtime-core";
import $ from "jquery";
export default {
  setup() {
    onMounted(() => {
      /*-----------------------------------*/
      ///////////////// 變數 ////////////////
      /*-----------------------------------*/
      var _window = $(window),
        ww = _window.outerWidth(),
        wh = _window.height(),
        wwNormal = 1400,
        wwMedium = 992,
        wwSmall = 768,
        wwxs = 576;
      /*-----------------------------------*/
      ////////////////多組Tab////////////////
      /*-----------------------------------*/
      var tab_headerHeight = Math.floor($(".header").outerHeight(true));
      var resizeTimer1;
      const resizeFn = () => {
        _window.resize(function() {
          clearTimeout(resizeTimer1);
          resizeTimer1 = setTimeout(function() {
            ww = _window.outerWidth();
            tabSet();
          }, 50);
        });
      };
      resizeFn();
      function tabSet() {
        $(".tabs").each(function() {
          var _tab = $(this),
            _tabItem = _tab.find(".tabItem"),
            _tabContent = _tab.find(".tabContent"),
            tabwidth = _tab.width(),
            tabItemHeight = _tabItem.outerHeight(),
            tabContentHeight = _tab
              .find(".active")
              .next()
              .innerHeight(),
            tiGap = 0,
            tabItemLength = _tabItem.length,
            tabItemWidth;
          _tab
            .find(".active")
            .next(".tabContent")
            .show();
          if (ww >= wwSmall) {
            _tabContent.css("top", tabItemHeight);
            _tab.height(tabContentHeight + tabItemHeight);
            tabItemWidth =
              (tabwidth - (tabItemLength - 1) * tiGap) / tabItemLength;
          } else {
            _tab.css("height", "auto");
            _tabItem
              .css("margin-left", 0)
              .last()
              .css("position", "relative");
          }
          _tabItem.focus(tabs); //改button後，前面改_tabItem
          _tabItem.click(tabs); //改button後，前面改_tabItem
          function tabs(e) {
            var _tabItemNow = $(this), //改button後，原來$(this).parent(),改$(this)
              tvp = _tab.offset().top,
              tabIndex = _tabItemNow.index() / 2,
              scollDistance = tvp + tabItemHeight * tabIndex - tab_headerHeight;
            _tabItem.removeClass("active");
            _tabItemNow.addClass("active");
            if (ww <= wwSmall) {
              _tabItem
                .not(".active")
                .next()
                .slideUp();
              _tabItemNow.next().slideDown();
              $("html,body")
                .stop(true, false)
                .animate({ scrollTop: scollDistance });
            } else {
              _tabItem
                .not(".active")
                .next()
                .hide();
              _tabItemNow.next().show();
              tabContentHeight = _tabItemNow.next().innerHeight();
              _tab.height(tabContentHeight + tabItemHeight);
            }
            e.preventDefault();
          }
        });
      }
      $(".tabs>.tabItem:first-child>a").trigger("click");
      tabSet();
    });
  },
};
</script>
<template>
  <div class="tabSet">
    <section class="tabs example-1">
      <h2 class="tabItem active"><a href="#">第一個頁籤</a></h2>
      <!--選到的頁籤項目-->
      <div class="tabContent">
        <ul>
          <li>
            <a href="#">1第一則消息消息消息消息消息消息</a
            ><time>107-01-01</time>
          </li>
          <li><a href="#">第二則消息</a><time>107-01-01</time></li>
          <li><a href="#">第三則消息</a><time>107-01-01</time></li>
          <li><a href="#">第四則消息</a><time>107-01-01</time></li>
          <li><a href="#">第五則消息</a><time>107-01-01</time></li>
        </ul>
        <div class="more"><a href="#">更多</a></div>
      </div>
      <h2 class="tabItem"><a href="#">第二個頁籤</a></h2>
      <div class="tabContent">
        <ul>
          <li><a href="#">2第一則消息</a><time>107-01-01</time></li>
          <li><a href="#">第二則消息</a><time>107-01-01</time></li>
          <li><a href="#">第三則消息</a><time>107-01-01</time></li>
          <li><a href="#">第四則消息</a><time>107-01-01</time></li>
          <li><a href="#">第五則消息</a><time>107-01-01</time></li>
        </ul>
        <div class="more"><a href="#">更多</a></div>
      </div>
      <h2 class="tabItem"><a href="#">第三個頁籤</a></h2>
      <div class="tabContent">
        <ul>
          <li><a href="#">3第一則消息</a><time>107-01-01</time></li>
          <li><a href="#">第二則消息</a><time>107-01-01</time></li>
          <li><a href="#">第三則消息</a><time>107-01-01</time></li>
          <li><a href="#">第四則消息</a><time>107-01-01</time></li>
          <li><a href="#">第五則消息</a><time>107-01-01</time></li>
        </ul>
        <div class="more"><a href="#">更多</a></div>
      </div>
      <h2 class="tabItem"><a href="#">第四個頁籤</a></h2>
      <div class="tabContent">
        <ul>
          <li><a href="#">4第一則消息</a><time>107-01-01</time></li>
          <li><a href="#">第二則消息</a><time>107-01-01</time></li>
          <li><a href="#">第三則消息</a><time>107-01-01</time></li>
          <li><a href="#">第四則消息</a><time>107-01-01</time></li>
          <li><a href="#">第五則消息</a><time>107-01-01</time></li>
        </ul>
        <div class="more"><a href="#">更多</a></div>
      </div>
    </section>
  </div>
</template>

<style lang="scss"></style>
