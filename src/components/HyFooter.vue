<script>
export default {};
</script>
<template>
  <!-- footer Start -->
  <footer>
    <div class="container">
      <a class="accesskey" href="#aZ" id="aZ" accesskey="Z" title="下方功能區塊"
        >:::</a
      >
      <div class="footer_logo">
        <img src="~@/assets/images/logo.png" alt="" class="img-responsive" />
      </div>
      <div class="footer_info">
        <ul class="footer_link">
          <li><a href="#">隱私權政策</a></li>
          <li><a href="#">網站安全政策</a></li>
          <li><a href="#">政府網站資料開放宣告</a></li>
        </ul>
        <p class="Copyright">
          Hyweb Technology Co., Ltd.© 2015 All Rights Reserved
        </p>
        <p>
          總公司：新竹縣竹北市台元一街8號5樓之6TEL：03-5601296
          <br />
          台北分公司：台北市重慶南路二段51號5樓 TEL：02-2395-6966 <br />
          台中分公司：台中市西屯區臺灣大道三段658號6樓A1 TEL：04-2706-3968
          <br />
          高雄分公司：高雄市新興區中正三路55號26樓之5 TEL：07-2223606
        </p>
        <span class="update">更新日期:<em>2018/01/01</em></span>
        <span class="counter">累計瀏覽人次:<em>46476653</em></span>
      </div>
      <div class="footer_icon">
        <a target="_blank" href="#" title="另開視窗">
          <img src="~@/assets/images/basic/accessibility.jpg" alt="" />
        </a>
        <a target="_blank" href="#" title="另開視窗">
          <img src="~@/assets/images/basic/egov.png" alt="" />
        </a>
      </div>
    </div>
  </footer>
</template>
<style lang="scss">
footer {
  @include box-sizing(border-box);
  @include clearfix;
  text-align: left;
  font-size: 0.813em;
  padding: 1em 0;
  .container {
    @include gutter;
    > div {
      padding-bottom: 1em;
    }
  }
  a {
    text-decoration: none;
    color: $primaryColor;
    &:hover,
    &:focus {
      color: darken($primaryColor, 10);
    }
  }
  .footer_logo {
    @include make-xs-column(8);
    @include make-sm-column(3);
    @include make-md-column(3);
    @include make-lg-column(3);
    @include gutter();
  }
  .footer_info {
    @include make-xs-column(12);
    @include make-sm-column(6);
    @include make-md-column(6);
    @include make-lg-column(6);
    @include gutter();
  }
  .footer_icon {
    @include make-xs-column(12);
    @include make-sm-column(3);
    @include make-md-column(3);
    @include make-lg-column(3);
    @include gutter();
  }
  // 版權連結
  .footer_link {
    @include li-reset();
    @include clearfix();
    li {
      float: left;
      display: block;
      margin: 0px 5px 5px 0px;
      a {
        display: block;
        padding: 0.5em 1em;
        background: $primaryColor;
        color: #fff;
        border-radius: 4px;
        @include transition(all, 0.3s, ease-out);
        &:hover,
        &:focus {
          background: darken($primaryColor, 10);
        }
      }
    }
  }
  p {
    line-height: 1.65em;
  }
  .update,
  .counter {
    display: inline-block;
    margin-right: 5px;
    em {
      font-style: normal;
      color: $primaryColor;
      padding: 0 0.5em;
    }
  }
  .footer_icon {
    a {
      display: inline-block;
      vertical-align: top;
      position: relative;
      &:focus {
        &:after {
          content: "";
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          box-shadow: 0px 0px 0px 1px $aHover inset;
          z-index: 99;
        }
      }
    }
    img {
      max-width: 120px;
    }
  }
}
</style>
