

<script>
export default {

}
</script>
<template>
  
<!-- tag 文章標籤 -->
<div class="tag">
    <ul>
        <li><a href="#">文章標籤1</a></li>
        <li><a href="#">文章標籤2</a></li>
        <li><a href="#">文章標籤3</a></li>
        <li><a href="#">文章標籤4</a></li>
        <li><a href="#">文章標籤5</a></li>
    </ul>
</div>
</template>
<style lang="scss"> 
// 文章標籤
    div.tag{
        @extend %clearfix;
        padding: .5em 0;
        margin-bottom: .5em;
        &:before{
            display:inline-block;
            content:"";
            width:16px;
            height: 16px;
            position:relative;
            top:.2em;
            background:url(~@/assets/images/basic/icon_tag.png) no-repeat center center;
            background-size:16px;
        }
        ul{
            display:inline-block;
            @include li-reset;
            li{
                display:inline-block;
                margin: 0 .2em .2em 0;
                a{
                    display:block;
                    font-size:.813em;
                    @include aSetting_nocolor;
                    border-radius:4px;
                    border:1px solid #DDD;
                    padding:.2em .5em;
                }
            }
        }
    }
</style>