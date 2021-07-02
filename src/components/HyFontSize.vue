<script>
export default {

}
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
    .cp {
    &.small_size {
        font-size: .938em;
    }
    &.large_size {
        font-size: 1.125em;
    }
}
.font_size {
    overflow: hidden;
    display: inline-block;
    text-align: center;
    span {
        display: inline-block;
        vertical-align: middle;
        font-size: .938em;
        color: #666;
    }
    ul {
        display: inline-block;
        vertical-align: middle;
        @include li-reset;
        li {
            width: 40px;
            height: 40px;
            font-size: 1em;
            float: left;
            display: block;
            margin: 0 .2em;
            a {
                display: block;
                text-align: center;
                line-height: 40px;
                border-radius: 50%;
                background: #F1F1F1;
                color: #333;
                &:hover, &:focus {
                    background: $aHover;
                    color: #FFF;
                }
                &.active {
                    background: #F1F1F1;
                    &:hover, &:focus {
                        background: $aHover;
                        color: #FFF;
                    }
                }
                &.small {
                    font-size: .938em;
                }
                &.large {
                    font-size: 1.125em;
                }
            }
        }
    }
    @include screen('mobile') {
        display: none;
    }
}
</style>