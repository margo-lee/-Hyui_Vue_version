

<script>
export default {

}
</script>
<template>
  <div class="btn_grp">
    <a class="btn">按鈕</a>
    <a class="btn btn-blue">按鈕</a>
    <a class="btn btn-green">按鈕</a>
    <a class="btn btn-orange">按鈕</a>
    <a class="btn btn-yellow">按鈕</a>
    <a class="btn btn-purple">按鈕</a>
    <a class="btn btn-red">按鈕</a>
</div>
<!-- <div class="btn_grp">
    <a href="#" class="btn" role="button">按鈕</a>
    <button type="button" class="btn">按鈕</button>
    <input type="button" class="btn" value="Input 按鈕">
    <input type="submit" class="btn" value="Submit 按鈕">
</div> -->
<!-- 
<div class="btn_grp">
    <a class="btn btn-xl">按鈕</a>
    <a class="btn btn-lg">按鈕</a>
    <a class="btn">按鈕</a>
    <a class="btn btn-sm">按鈕</a>
    <a class="btn btn-xs">按鈕</a>
</div> -->
</template>
<style lang="scss" >
// 按鈕設定
$btn-font-color:$color-word;
$btn-border:darken($color-word, 5);
$btn-padding:.5em 1.5em;
$btn-radius:.2em;
// 按鈕外框
.btn_grp {
    text-align: center;
    padding: 1em 0;
}

// 按鈕的共用設定
@mixin btn_setting($btn-bg:#f5f5f5, $btn-font-color:$btn-font-color) {
    background-color: $btn-bg;
    border: 1px solid darken($btn-bg, 15);
    color: $btn-font-color;
    text-shadow:1px 1px 1px RGBA(0,0,0,.3);
    @include border-radius($btn-radius);
    @include gradient(lighten($btn-bg, 5), darken($btn-bg, 15), vertical);
    &:hover, &:focus {
        background-color: darken($btn-bg, 10); // Old browsers
        border: 1px solid darken($btn-bg, 20) !important;
        cursor: pointer;
        color: #FFF;
        outline:none;
        @include gradient(lighten($btn-bg, 10), darken($btn-bg, 18), vertical);
    }
    &.active {
        background: lighten($btn-bg, 5);
        cursor: pointer;
    }
}
// 按鈕預設陰影
%btn {
    font-size: $font-size;
    touch-action: manipulation;
    background-image: none; //修正firefox
    display: inline-block;
    text-align: center;
    vertical-align: middle;
    text-decoration: none;
    white-space: nowrap;
    line-height: normal;
    width: auto;
    padding: $btn-padding;
    min-width: 4em;
    margin: .25em .1em;
    
    i {
        margin-right: .3em;
        margin-left: .3em;
    }
}
// 按鈕基本樣式
.btn {
    @extend %btn;
    @include box-sizing;
    @include btn_setting;
    text-shadow:none;
    &:hover,
    &:focus {
        color: $btn-font-color;
        outline: none;
    }
}
//按鈕顏色
//@include btn_setting(按鈕顏色,字的顏色);
.btn-green {
    @extend %btn;
    @include btn_setting($color-green, #FFF);
}
.btn-blue {
    @extend %btn;
    @include btn_setting($color-blue, #FFF);
}
.btn-yellow {
    @extend %btn;
    @include btn_setting(lighten($color-yellow, 5), #FFF);
}
.btn-orange {
    @extend %btn;
    @include btn_setting(lighten($color-orange, 10), #FFF);
}
.btn-red {
    @extend %btn;
    @include btn_setting($color-red, #FFF);
}
.btn-purple {
    @extend %btn;
    @include btn_setting(lighten($color-purple, 5), #FFF);
}
.btn-submit {
    @extend %btn;
    @include btn_setting(lighten($primaryColor, 5), #FFF);
}
.btn-reset {
    @extend %btn;
    color:lighten($color-word,15);
}
.btn-primary {
    @extend .btn-orange;
}
// 按鈕大小
.btn-xl {
    font-size: $font-size * 1.5; //24px
}
.btn-lg {
    font-size: $font-size * 1.25; //20px
}
.btn-sm {
    font-size: $font-size * .938; //15px
}
.btn-xs {
    font-size: $font-size * .75; //12px
}

</style>