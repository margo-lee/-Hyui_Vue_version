

<script>
export default {

}
</script>
<template>  
<div class="function_panel">
    <div class="publish_time">
        <span>發布日期：</span><time>2019-01-01</time>
    </div>
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
    <!-- function功能區塊 -->
    <div class="function">
        <ul>
            <li class="back"><a href="javascript:history.back()">回上一頁</a></li>
            <li class="print"><a href="#">友善列印</a></li>
            <li class="forward"><a href="#">轉寄友人</a></li>
            </ul>
    </div>
    <!-- 社群分享 -->
    <div class="share">
        <ul>
            <li><a href="#"><img src="~@/assets/images/basic/icon_facebook.png" alt="facebook"></a></li>
            <li><a href="#"><img src="~@/assets/images/basic/icon_twitter.png" alt="twitter"></a></li>
            <li><a href="#"><img src="~@/assets/images/basic/icon_line.png" alt="line"></a></li>
            <li><a href="#"><img src="~@/assets/images/basic/icon_youtube.png" alt="youtube"></a></li>
            <li><a href="#"><img src="~@/assets/images/basic/icon_googleplus.png" alt="google plus"></a></li>
            <li><a href="#"><img src="~@/assets/images/basic/icon_instagram.png" alt="instagram"></a></li>
            <li><a href="#"><img src="~@/assets/images/basic/icon_linkedin.png" alt="LinkedIn"></a></li>
            <li><a href="#"><img src="~@/assets/images/basic/icon_rss.png" alt="RSS"></a></li>
        </ul>
    </div>
</div>
</template>
<style lang="scss">
// 放進function_panel樣式
.function_panel {
    .share {
        .shareButton {
            &:before {
                content: "";
                position: absolute;
                width: 60%;
                height: 60%;
                top: 20%;
                left: 20%;
                background: url(~@/assets/images/basic/icon_share.png) no-repeat center center  !important;
                background-size: 24px !important;
            }
            text-indent:-9999px;
            &:hover,
            &:focus {
                &:before {
                    filter: invert(100%);
                }
            }
        }
    }
    .function {
        height: 40px;
        margin: 0;
        ul {
            li {
                width: 40px;
                height: 40px;
                font-size: 1em;
                float: left;
                display: block;
                margin: 0 .2em;
                a {
                    display: block;
                    @include box-sizing;
                    width: 40px;
                    height: 40px;
                    text-align: center;
                    line-height: 40px;
                    border-radius: 50%;
                    background: #F1F1F1;
                    text-indent: -9999px;
                    position: relative;
                    &:hover,
                    &:focus {
                        background: $aHover;
                        color: #FFF;
                        &:before {
                            filter: invert(100%);
                        }
                    }
                    &:before {
                        content: "";
                        position: absolute;
                        width: 60%;
                        height: 60%;
                        top: 20%;
                        left: 20%;
                    }
                }
                &.back {
                    a:before {
                        background: url(~@/assets/images/basic/icon_back.png) no-repeat center center;
                        background-size: 100%;
                    }
                }
                &.print {
                    a:before {
                        background: url(~@/assets/images/basic/icon_printer.png) no-repeat center center;
                        background-size: 100%;
                    }
                    @include screen('mobile') {
                        display: none;
                    }
                }
                &.forward {
                    a:before {
                        background: url(~@/assets/images/basic/icon_forward.png) no-repeat center center;
                        background-size: 100%;
                    }
                }
            }
        }
    }
}
</style>