<script>
import $ from "jquery";
import { onMounted } from "@vue/runtime-core";
export default {
  setup() {
    onMounted(() => {
      /*-----------------------------------*/
      /////////// category active  //////////
      /*-----------------------------------*/
      $(".category")
        .find("a")
        .off()
        .click(function(event) {
          event.preventDefault();
          $(this)
            .parent("li")
            .siblings()
            .find("a")
            .removeClass("active");
          $(this).addClass("active");
        });
    });
  },
};
</script>
<template>
  <div class="category">
    <ul>
      <li><a href="#">標籤1</a></li>
      <li><a href="#">標籤2</a></li>
      <li><a href="#">標籤3</a></li>
      <li><a href="#">標籤4</a></li>
      <li><a href="#">標籤5</a></li>
      <li><a href="#">標籤6</a></li>
      <li><a href="#">標籤7</a></li>
      <li><a href="#">標籤8</a></li>
    </ul>
  </div>
</template>

<style lang="scss">
.category {
  @extend %clearfix;
  text-align: left;
  margin: 1em auto;
  ul {
    @include li-reset;
    li {
      margin: 0px 3px 3px 0px;
      display: block;
      float: left;
    }
  }
  a {
    @include gradient(#fff, #ddd, vertical);
    border: 1px solid #ccc;
    padding: 0.4em 1em;
    display: block;
    color: #333;
    @include box-sizing();
    border-radius: 4px;
    &:hover,
    &:focus {
      color: #fff;
      @include gradient(
        darken($primaryColor, 0),
        darken($primaryColor, 15),
        vertical
      );
      border: 1px solid darken($primaryColor, 15);
      box-shadow: none;
    }
    &.active {
      color: #fff;
      @include gradient(
        darken($primaryColor, 0),
        darken($primaryColor, 15),
        vertical
      );
    }
    span {
      font-size: 0.813em;
      &:before {
        content: "(";
        display: inline-block;
      }
      &:after {
        content: ")";
        display: inline-block;
      }
    }
  }
}
</style>
