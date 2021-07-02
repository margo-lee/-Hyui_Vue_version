

<script>
export default {

}
</script>
<template> 
<div class="breadcrumb">
    <ul>
        <li><a href="#">首頁</a></li>
        <li><a href="#">節點</a></li>
        <li>節點</li>
        <div class="test">測試</div>
    </ul>
</div>
</template>
<style lang="scss">
.breadcrumb {
    border-bottom: 1px solid #EEE;
    padding: .1em 0em .1em;
    font-size: .813em;
    margin: 0px auto 5px;
    ul {
        @include li-reset;
        li {
            display: inline-block;
            margin: 0px .1em .1em 0px;
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