<script>
export default {};
</script>
<template>
  <!-- file download 檔案下載 -->
  <div class="file_download">
    <h3>檔案下載</h3>
    <ul>
      <li>
        <span>檔案名稱</span>
        <a href="xxxx.doc">檔案名稱.doc</a>
        <a href="xxxx.docx">檔案名稱.docx</a>
        <a href="xxxx.odt">檔案名稱.odt</a>
      </li>
      <li>
        <span>檔案名稱</span>
        <a href="xxxx.xls">檔案名稱.xls</a>
        <a href="xxxx.xlsx">檔案名稱.xlsx</a>
        <a href="xxxx.csv">檔案名稱.csv</a>
        <a href="xxxx.ods">檔案名稱.ods</a>
      </li>
      <li>
        <span>檔案名稱</span>
        <a href="xxxx.ppt">檔案名稱.ppt</a>
        <a href="xxxx.pptx">檔案名稱.pptx</a>
        <a href="xxxx.odp">檔案名稱.odp</a>
        <a href="xxxx.pdf">檔案名稱.odp</a>
      </li>
      <li>
        <span>檔案名稱</span>
        <a href="xxxx.zip">檔案名稱.zip</a>
        <a href="xxxx.txt">檔案名稱.txt</a>
        <a href="xxxx.mov">檔案名稱.mov</a>
        <a href="xxxx.mp3">檔案名稱.mp3</a>
        <a href="xxxx.jpg">檔案名稱.jpg</a>
        <a href="xxxx.wmv">檔案名稱.wmv</a>
        <a href="xxxx.mp4">檔案名稱.mp4</a>
        <a href="xxxx.xxxxx">檔案名稱.mp4</a>
      </li>
    </ul>
  </div>
</template>
<style lang="scss">
// 檔案下載
// .file_download {
//     width: 100%;
//     margin: 0 auto;
//     @include clearfix();
//     h3 {
//         font-size: 1.5em;
//         padding: 12px 0px 15px 0px;
//         margin: 0.5em 0px 0.2em;
//         border-bottom: 1px solid $primaryColor;
//     }
//     ul {
//         counter-reset: counter;
//         list-style-type: none;
//         padding: 0;
//         margin-left: 1em;
//         @media screen and (max-width: 767px) {
//             margin-left: 0;
//         }
//     }
//     li {
//         position: relative;
//         margin-bottom: 10px;
//         padding-left: 1em;
//         border-bottom: 1px solid #EEE;
//         clear: both;
//         overflow: hidden;
//         padding-bottom: .5em;
//         span {
//             @include screen('mobile') {
//                 display: block;
//                 margin-bottom: .2em;
//             }
//         }
//         &:before {
//             position: absolute; // outline: 1px solid red;
//             top: .8em;
//             left: .2em;
//             text-align: right;
//             width: 30px;
//             width: 6px;
//             height: 6px;
//             border-radius: 50%;
//             background: #999;
//             content: "";
//             // counter-increment: counter;
//             // content: counters(counter, ".") " . ";
//             // display:none;
//         }
//         .update,
//         .file_view {
//             font-size: .813em;
//             color: #AAA;
//             width: 120px;
//             padding-left: 35px;
//             float: none;
//             margin-top: 5px;
//             @media screen and (max-width: 767px) {
//                 display: inline-block;
//                 float: none;
//                 width: auto;
//                 margin-top: 0;
//             }
//             @include screen('xs_mobile') {
//                 display: none;
//             }
//         }
//         .update {
//             width: 150px;
//             @media screen and (max-width: 767px) {
//                 margin-left: 5px;
//             }
//         }
//         a {
//             // padding: .2em 0px .2em 65px;
//             padding: 0px;
//             position: relative;
//             height: auto;
//             line-height: 20px;
//             display: inline-block;
//             vertical-align: middle;
//             margin: 0px .2em;
//             min-width: 32px;
//             text-align: center;
//             text-indent: -9999px;
//             height: 34px;
//             @include text-overflow;
//             @include box-sizing;
//             margin-bottom: .1em;
//             @include screen('mobile') {
//                 max-width: 2em;
//                 margin: 0px auto .5em 0px;
//             }
//             &:hover, &:focus {
//                 &:before {
//                     content: "";
//                     z-index: 99;
//                     position: absolute;
//                     border-radius: 4px;
//                     top: 0;
//                     left: 0;
//                     width: 100%;
//                     height: 100%;
//                     box-shadow: 0px 0px 0px 2px $aHover inset;
//                 }
//             }
//             .kb {
//                 font-size: .75em;
//                 color: #666;
//                 display: none;
//                 margin: 0px .5em;
//             }
//             &:after {
//                 content: "";
//                 background: url(~@/assets/images/basic/icon_file.png) no-repeat center center;
//                 background-size: contain;
//                 width: 26px;
//                 height: 28px;
//                 position: absolute;
//                 top: 3px;
//                 left: 3px;
//                 text-align: right;
//             }
//             // word系列
//             &[href$="doc"] {
//                 &:after {
//                     background: url(~@/assets/images/basic/icon_doc.png) no-repeat center center;
//                     background-size: contain;
//                 }
//             }
//             &[href$="docx"] {
//                 &:after {
//                     background: url(~@/assets/images/basic/icon_docx.png) no-repeat center center;
//                     background-size: contain;
//                 }
//             }
//             &[href$="odt"] {
//                 &:after {
//                     background: url(~@/assets/images/basic/icon_odt.png) no-repeat center center;
//                     background-size: contain;
//                 }
//             }
//             // excel系列
//             &[href$="xls"] {
//                 &:after {
//                     background: url(~@/assets/images/basic/icon_xls.png) no-repeat center center;
//                     background-size: contain;
//                 }
//             }
//             &[href$="csv"] {
//                 &:after {
//                     background: url(~@/assets/images/basic/icon_csv.png) no-repeat center center;
//                     background-size: contain;
//                 }
//             }
//             &[href$="ods"] {
//                 &:after {
//                     background: url(~@/assets/images/basic/icon_ods.png) no-repeat center center;
//                     background-size: contain;
//                 }
//             }
//             &[href$="xlsx"] {
//                 &:after {
//                     background: url(~@/assets/images/basic/icon_xlsx.png) no-repeat center center;
//                     background-size: contain;
//                 }
//             }
//             // pdf系列
//             &[href$="pdf"] {
//                 &:after {
//                     background: url(~@/assets/images/basic/icon_pdf.png) no-repeat center center;
//                     background-size: contain;
//                 }
//             }
//             &[href$="ppt"] {
//                 &:after {
//                     background: url(~@/assets/images/basic/icon_ppt.png) no-repeat center center;
//                     background-size: contain;
//                 }
//             }
//             &[href$="pptx"] {
//                 &:after {
//                     background: url(~@/assets/images/basic/icon_pptx.png) no-repeat center center;
//                     background-size: contain;
//                 }
//             }
//             &[href$="odp"] {
//                 &:after {
//                     background: url(~@/assets/images/basic/icon_odp.png) no-repeat center center;
//                     background-size: contain;
//                 }
//             }
//             // 其他格式
//             &[href$="zip"] {
//                 &:after {
//                     background: url(~@/assets/images/basic/icon_zip.png) no-repeat center center;
//                     background-size: contain;
//                 }
//             }
//             &[href$="txt"] {
//                 &:after {
//                     background: url(~@/assets/images/basic/icon_txt.png) no-repeat center center;
//                     background-size: contain;
//                 }
//             }
//             &[href$="mov"] {
//                 &:after {
//                     background: url(~@/assets/images/basic/icon_mov.png) no-repeat center center;
//                     background-size: contain;
//                 }
//             }
//             &[href$="mp3"] {
//                 &:after {
//                     background: url(~@/assets/images/basic/icon_mp3.png) no-repeat center center;
//                     background-size: contain;
//                 }
//             }
//             &[href$="jpg"] {
//                 &:after {
//                     background: url(~@/assets/images/basic/icon_jpg.png) no-repeat center center;
//                     background-size: contain;
//                 }
//             }
//             &[href$="wmv"] {
//                 &:after {
//                     background: url(~@/assets/images/basic/icon_wmv.png) no-repeat center center;
//                     background-size: contain;
//                 }
//             }
//             &[href$="mp4"] {
//                 &:after {
//                     background: url(~@/assets/images/basic/icon_mp4.png) no-repeat center center;
//                     background-size: contain;
//                 }
//             }
//         }
//     }
// }
</style>
