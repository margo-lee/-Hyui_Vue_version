<script>
export default {};
</script>
<template>
  <div class="thumbnail">
    <a href="#">
      <div class="img-container">
        <picture>
          <source
            media="(min-width: 1200px)"
            data-srcset="images/demo/01.jpg"
          />
          <source media="(min-width: 992px)" data-srcset="images/demo/01.jpg" />
          <source media="(min-width: 576px)" data-srcset="images/demo/01.jpg" />
          <source media="(max-width: 575px)" data-srcset="images/demo/01.jpg" />
          <img data-src="images/demo/01.jpg" class="lazy" />
          <img src="~@/assets/images/demo/01.jpg" />
          <!-- <noscript><img src="~@/assets/images/demo/01.jpg"></noscript> -->
        </picture>
      </div>
    </a>
    <div class="caption">
      <time>2018-01-01</time>
      <h3>標題文字</h3>
    </div>
    <hr />
    <div class="btn_grp">
      <button class="btn">按鈕</button>
    </div>
  </div>
</template>
<style lang="scss">
.thumbnail {
  box-shadow: 0 0 3em -1em rgba(0, 0, 0, 0.5);
  padding-bottom: 0.5em;
  background: #fff;
  a {
    display: block;
    @include aSetting(#555);
  }
  .img-container {
    @include aspect-ratio(4, 3);
    margin-bottom: 0.5em;
  }
  h2,
  h3,
  h4 {
    margin: 0.2em 0;
  }
  .caption {
    width: 90%;
    margin: 0 auto 1em;
  }
  .btn_grp {
    padding: 0.2em 0;
    @extend %clearfix;
  }
  hr {
    width: 90%;
    margin: 0.1em auto 1em;
  }
  transition: transform 0.1s ease-in-out, box-shadow 0.1s;
  &:hover,
  &:focus {
    transform: scale(1.05);
  }
}
</style>
