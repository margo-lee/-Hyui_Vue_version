<script>
export default {};
</script>
<template>
  <div class="breadcrumb">
    <ul>
      <li><a href="#">首頁</a></li>
      <li><a href="#">節點</a></li>
      <li>節點</li>
    </ul>
  </div>
</template>
<style lang="scss">
.breadcrumb {
  border-bottom: 1px solid #eee;
  padding: 0.1em 0em 0.1em;
  font-size: 0.813em;
  margin: 0px auto 5px;
  ul {
    @include li-reset;
    li {
      display: inline-block;
      margin: 0px 0.1em 0.1em 0px;
      &:before {
        @extend %slash;
      }
      &:first-child:before {
        content: "";
        display: inline-block;
        color: #666;
        margin-left: 0;
        padding: 0;
      }
    }
  }
  a {
    @include aSetting_nocolor;
  }
}
</style>
