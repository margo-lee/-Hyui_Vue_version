<script>
export default {};
</script>
<template>
  <div class="pagination">
    <form action="" class="form_inline">
      <div class="total">
        共<span>308</span>筆資料，第<span>1/18</span>頁，每頁顯示
        <select name="" id="">
          <option value="">10</option>
          <option value="">20</option>
          <option value="">30</option>
          <option value="">40</option>
        </select>
        筆，
        <input type="button" class="btn" value="確定" />
      </div>
    </form>
    <ul class="page">
      <li class="first"><a href="#" title="第一頁">第一頁 </a></li>
      <li class="prev"><a href="#" title="回上一頁">回上一頁 </a></li>
      <li class="active"><a href="#">1</a></li>
      <li><a href="#">2</a></li>
      <li><a href="#">3</a></li>
      <li><a href="#">4</a></li>
      <li><a href="#">5</a></li>
      <li><a href="#">6</a></li>
      <li><a href="#">7</a></li>
      <li><a href="#">8</a></li>
      <li><a href="#">9</a></li>
      <li><a href="#">10</a></li>
      <li class="next"><a href="#" title="下一頁">下一頁 </a></li>
      <li class="last"><a href="#" title="最後一頁">最後一頁 </a></li>
    </ul>
  </div>
  <!-- <div class="pagination">
    <div class="total"> 共<span>308</span>筆資料，第<span>1/18</span>頁，</div>
    <div class="items">每頁顯示 <a href="#">20</a> <a href="#">40</a> <a href="#">60</a> 筆 </div>
    <ul class="page">
        <li class="first"><a href="#" title="第一頁">第一頁</a></li>
        <li class="prev"><a href="#" title="回上一頁">回上一頁 </a></li>
        <li class="active"><a href="#">1</a></li>
        <li class="xs_hidden"><a href="#">2</a></li>
        <li class="xs_hidden"><a href="#">3</a></li>
        <li class="xs_hidden"><a href="#">4</a></li>
        <li class="xs_hidden"><a href="#">5</a></li>
        <li class="next"><a href="#" title="下一頁">下一頁</a></li>
        <li class="last"><a href="#" title="最後一頁">最後一頁</a></li>
    </ul>
</div> -->
</template>

<style lang="scss">
.pagination {
  margin: 0.5em auto;
  padding: 0;
  display: block;
  text-align: center;
  font-size: 0.938em;
  @extend %clearfix; // outline: 1px solid red;
  span {
    color: $primaryColor;
    margin: 0px 0.5em;
  }
  .page {
    margin: 10px 0;
    padding: 0;
    display: block;
    li {
      display: inline-block;
      min-width: 40px;
      height: 40px;
      margin-bottom: 5px;
      list-style: none;
      @include box-sizing();
      a {
        border-radius: 5px;
        padding: 6px 10px;
        font-weight: 700;
        display: block;
        white-space: nowrap;
        font-size: 1em;
        color: $color-word;
        @include gradient(#f7f7f7, #eaeaea, vertical);
        border: #ccc solid 1px;
        &:hover,
        &:focus {
          background: $primaryColor;
          color: #fff !important;
          border: $primaryColor solid 1px;
        }
      }
      &.active {
        a {
          color: #fff !important;
          background: $form-focus;
          border: darken($form-focus, 5) solid 1px;
        }
      }
      %arrow {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        width: 6px;
        height: 6px;
        margin-top: -4px;
        border: 2px solid #666;
        border-left: none;
        border-bottom: none;
      }
      &.first,
      &.prev,
      &.next,
      &.last {
        a {
          text-indent: -9999px;
          position: relative;
          &:hover,
          &:focus {
            &:before,
            &:after {
              border: 2px solid #fff;
              border-left: none;
              border-bottom: none;
            }
          }
        }
      }
      &.first {
        a:before {
          @extend %arrow;
          margin-left: -6px;
          transform: rotate(-135deg);
        }
        a:after {
          @extend %arrow;
          margin-left: 0px;
          transform: rotate(-135deg);
        }
      }
      &.prev {
        a:before {
          @extend %arrow;
          margin-left: -2px;
          transform: rotate(-135deg);
        }
      }
      &.next {
        a:before {
          @extend %arrow;
          margin-left: -6px;
          transform: rotate(45deg);
        }
      }
      &.last {
        a:before {
          @extend %arrow;
          margin-left: -3px;
          transform: rotate(45deg);
        }
        a:after {
          @extend %arrow;
          margin-left: -9px;
          transform: rotate(45deg);
        }
      }
    }
  }
  .total {
    padding: 0em;
    display: inline-block;
    vertical-align: middle;
    select {
      margin: 0px 0.5em;
      @include screen("mobile") {
        margin: 0px;
      }
    }
    input[type="button"] {
      @include gradient(#f7f7f7, #eaeaea, vertical);
      border: 1px solid #ccc;
      color: #222;
      padding: 0.4em 1em !important;
      min-width: 3em;
      display: inline-block;
      vertical-align: middle;
      box-shadow: none;
      text-shadow: none;
      &:hover,
      &:focus {
        color: #fff !important;
        background: $form-focus;
        border: darken($form-focus, 5) solid 1px;
        box-shadow: none !important;
      }
    }
  }
  .items {
    display: inline-block;
    vertical-align: middle;

    a {
      padding: 0 5px;
      color: $primaryColor;
      text-decoration: none;
    }
  }
}
@include screen("mobile") {
  .pagination .total select.form-control {
    margin: 0px 0px;
    text-align: center;
  }
}
</style>
