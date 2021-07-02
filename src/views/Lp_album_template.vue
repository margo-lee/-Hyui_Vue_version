<script>
export default {};
</script>
<template>
  <!-- main Start -->
  <div id="center" class="main innerpage">
    <!-- 內頁新增一個classname-->
    <a class="accesskey" href="#aC" id="aC" accesskey="C" title="主要內容區"
      >:::</a
    >
    <div class="container">
      <!-- 左側 -->
      <div class="left_block hidden">
        <div class="leftblock_banner">
          <div class="item">Banner</div>
          <div class="item">Banner</div>
          <div class="item">Banner</div>
          <div class="item">Banner</div>
        </div>
      </div>
      <!-- 主要內容區 -->
      <div class="center_block">
        <!-- breadcrumb路徑 -->
        <div class="breadcrumb">
          <ul>
            <li><a href="#">首頁</a></li>
            <li><a href="#">節點</a></li>
            <li>節點</li>
          </ul>
        </div>
        <!-- h2節點 -->
        <h2 class="title">節點標題</h2>
        <!-- function_panel -->
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
              <li class="back">
                <a href="javascript:history.back()">回上一頁</a>
              </li>
              <li class="print"><a href="#">友善列印</a></li>
              <li class="forward"><a href="#">轉寄友人</a></li>
            </ul>
          </div>
          <!-- 社群分享 -->
          <div class="share">
            <ul>
              <li>
                <a href="#"
                  ><img
                    src="@/assets/images/basic/icon_facebook.png"
                    alt="facebook"
                /></a>
              </li>
              <li>
                <a href="#"
                  ><img
                    src="@/assets/images/basic/icon_twitter.png"
                    alt="twitter"
                /></a>
              </li>
              <li>
                <a href="#"
                  ><img src="@/assets/images/basic/icon_line.png" alt="line"
                /></a>
              </li>
              <li>
                <a href="#"
                  ><img
                    src="@/assets/images/basic/icon_youtube.png"
                    alt="youtube"
                /></a>
              </li>
              <li>
                <a href="#"
                  ><img
                    src="@/assets/images/basic/icon_googleplus.png"
                    alt="google plus"
                /></a>
              </li>
              <li>
                <a href="#"
                  ><img
                    src="@/assets/images/basic/icon_instagram.png"
                    alt="instagram"
                /></a>
              </li>
              <li>
                <a href="#"
                  ><img
                    src="@/assets/images/basic/icon_linkedin.png"
                    alt="LinkedIn"
                /></a>
              </li>
              <li>
                <a href="#"
                  ><img src="@/assets/images/basic/icon_rss.png" alt="RSS"
                /></a>
              </li>
            </ul>
          </div>
        </div>
        <!-- function功能區塊 -->
        <div class="function">
          <ul>
            <li><a href="#">回上一頁</a></li>
            <li><a href="#">友善列印</a></li>
            <li><a href="#">轉寄友人</a></li>
          </ul>
        </div>
        <!-- LP Start -->
        <section class="">
          <!-- category -->
          <div class="category">
            <ul>
              <li><a href="#">標籤1</a></li>
              <li><a href="#">標籤2</a></li>
              <li><a href="#">標籤3</a></li>
              <li><a href="#">標籤4</a></li>
              <li><a href="#">標籤5</a></li>
              <li><a href="#">標籤6</a></li>
              <li><a href="#">標籤7</a></li>
              <li><a href="#">標籤8</a></li>
              <li><a href="#">標籤9</a></li>
              <li><a href="#">標籤10</a></li>
            </ul>
          </div>
          <!-- grid:flex -->
          <section class="flex-equal-3">
            <div class="container">
              <div class="Flex-set">
                <div class="thumbnail">
                  <a
                    href="~@/assets/images/demo/01.jpg"
                    data-fancybox="images"
                    data-caption="第1張圖說"
                  >
                    <div class="img-container">
                      <picture>
                        <source
                          media="(min-width: 1200px)"
                          data-srcset="@/assets/images/demo/01.jpg"
                        />
                        <source
                          media="(min-width: 992px)"
                          data-srcset="images/demo/01.jpg"
                        />
                        <source
                          media="(min-width: 576px)"
                          data-srcset="images/demo/01.jpg"
                        />
                        <source
                          media="(max-width: 575px)"
                          data-srcset="images/demo/01.jpg"
                        />
                        <img data-src="images/demo/01.jpg" class="lazy" />
                        <noscript><img src="images/demo/01.jpg"/></noscript>
                      </picture>
                    </div>
                    <div class="caption">
                      <time>2018-01-01</time>
                      <h3>標題</h3>
                      <p>內文</p>
                    </div>
                  </a>
                </div>
                <div class="thumbnail">
                  <a
                    href="images/demo/02.jpg"
                    data-fancybox="images"
                    data-caption="第2張圖說"
                  >
                    <div class="img-container">
                      <picture>
                        <source
                          media="(min-width: 1200px)"
                          data-srcset="images/demo/02.jpg"
                        />
                        <source
                          media="(min-width: 992px)"
                          data-srcset="images/demo/02.jpg"
                        />
                        <source
                          media="(min-width: 576px)"
                          data-srcset="images/demo/02.jpg"
                        />
                        <source
                          media="(max-width: 575px)"
                          data-srcset="images/demo/02.jpg"
                        />
                        <img data-src="images/demo/02.jpg" class="lazy" />
                        <noscript><img src="images/demo/02.jpg"/></noscript>
                      </picture>
                    </div>
                    <div class="caption">
                      <time>2018-01-01</time>
                      <h3>標題</h3>
                      <p>內文</p>
                    </div>
                  </a>
                </div>
                <div class="thumbnail">
                  <a
                    href="images/demo/03.jpg"
                    data-fancybox="images"
                    data-caption="第3張圖說"
                  >
                    <div class="img-container">
                      <picture>
                        <source
                          media="(min-width: 1200px)"
                          data-srcset="images/demo/03.jpg"
                        />
                        <source
                          media="(min-width: 992px)"
                          data-srcset="images/demo/03.jpg"
                        />
                        <source
                          media="(min-width: 576px)"
                          data-srcset="images/demo/03.jpg"
                        />
                        <source
                          media="(max-width: 575px)"
                          data-srcset="images/demo/03.jpg"
                        />
                        <img data-src="images/demo/03.jpg" class="lazy" />
                        <noscript><img src="images/demo/03.jpg"/></noscript>
                      </picture>
                    </div>
                    <div class="caption">
                      <time>2018-01-01</time>
                      <h3>標題</h3>
                      <p>內文</p>
                    </div>
                  </a>
                </div>
                <div class="thumbnail">
                  <a
                    href="images/demo/04.jpg"
                    data-fancybox="images"
                    data-caption="第4張圖說"
                  >
                    <div class="img-container">
                      <picture>
                        <source
                          media="(min-width: 1200px)"
                          data-srcset="images/demo/04.jpg"
                        />
                        <source
                          media="(min-width: 992px)"
                          data-srcset="images/demo/04.jpg"
                        />
                        <source
                          media="(min-width: 576px)"
                          data-srcset="images/demo/04.jpg"
                        />
                        <source
                          media="(max-width: 575px)"
                          data-srcset="images/demo/04.jpg"
                        />
                        <img data-src="images/demo/04.jpg" class="lazy" />
                        <noscript><img src="images/demo/04.jpg"/></noscript>
                      </picture>
                    </div>
                    <div class="caption">
                      <time>2018-01-01</time>
                      <h3>標題</h3>
                      <p>內文</p>
                    </div>
                  </a>
                </div>
                <div class="thumbnail">
                  <a
                    href="images/demo/05.jpg"
                    data-fancybox="images"
                    data-caption="第5張圖說"
                  >
                    <div class="img-container">
                      <picture>
                        <source
                          media="(min-width: 1200px)"
                          data-srcset="images/demo/05.jpg"
                        />
                        <source
                          media="(min-width: 992px)"
                          data-srcset="images/demo/05.jpg"
                        />
                        <source
                          media="(min-width: 576px)"
                          data-srcset="images/demo/05.jpg"
                        />
                        <source
                          media="(max-width: 575px)"
                          data-srcset="images/demo/05.jpg"
                        />
                        <img data-src="images/demo/05.jpg" class="lazy" />
                        <noscript><img src="images/demo/05.jpg"/></noscript>
                      </picture>
                    </div>
                    <div class="caption">
                      <time>2018-01-01</time>
                      <h3>標題</h3>
                      <p>內文</p>
                    </div>
                  </a>
                </div>
                <div class="thumbnail">
                  <a
                    href="images/demo/06.jpg"
                    data-fancybox="images"
                    data-caption="第6張圖說"
                  >
                    <div class="img-container">
                      <picture>
                        <source
                          media="(min-width: 1200px)"
                          data-srcset="images/demo/06.jpg"
                        />
                        <source
                          media="(min-width: 992px)"
                          data-srcset="images/demo/06.jpg"
                        />
                        <source
                          media="(min-width: 576px)"
                          data-srcset="images/demo/06.jpg"
                        />
                        <source
                          media="(max-width: 575px)"
                          data-srcset="images/demo/06.jpg"
                        />
                        <img data-src="images/demo/06.jpg" class="lazy" />
                        <noscript><img src="images/demo/06.jpg"/></noscript>
                      </picture>
                    </div>
                    <div class="caption">
                      <time>2018-01-01</time>
                      <h3>標題</h3>
                      <p>內文</p>
                    </div>
                  </a>
                </div>
                <div class="thumbnail">
                  <a
                    href="images/demo/07.jpg"
                    data-fancybox="images"
                    data-caption="第7張圖說"
                  >
                    <div class="img-container">
                      <picture>
                        <source
                          media="(min-width: 1200px)"
                          data-srcset="images/demo/07.jpg"
                        />
                        <source
                          media="(min-width: 992px)"
                          data-srcset="images/demo/07.jpg"
                        />
                        <source
                          media="(min-width: 576px)"
                          data-srcset="images/demo/07.jpg"
                        />
                        <source
                          media="(max-width: 575px)"
                          data-srcset="images/demo/07.jpg"
                        />
                        <img data-src="images/demo/07.jpg" class="lazy" />
                        <noscript><img src="images/demo/07.jpg"/></noscript>
                      </picture>
                    </div>
                    <div class="caption">
                      <time>2018-01-01</time>
                      <h3>標題</h3>
                      <p>內文</p>
                    </div>
                  </a>
                </div>
                <div class="thumbnail">
                  <a
                    href="images/demo/08.jpg"
                    data-fancybox="images"
                    data-caption="第8張圖說"
                  >
                    <div class="img-container">
                      <picture>
                        <source
                          media="(min-width: 1200px)"
                          data-srcset="images/demo/08.jpg"
                        />
                        <source
                          media="(min-width: 992px)"
                          data-srcset="images/demo/08.jpg"
                        />
                        <source
                          media="(min-width: 576px)"
                          data-srcset="images/demo/08.jpg"
                        />
                        <source
                          media="(max-width: 575px)"
                          data-srcset="images/demo/08.jpg"
                        />
                        <img data-src="images/demo/08.jpg" class="lazy" />
                        <noscript><img src="images/demo/08.jpg"/></noscript>
                      </picture>
                    </div>
                    <div class="caption">
                      <time>2018-01-01</time>
                      <h3>標題</h3>
                      <p>內文</p>
                    </div>
                  </a>
                </div>
                <div class="thumbnail">
                  <a
                    href="images/demo/09.jpg"
                    data-fancybox="images"
                    data-caption="第9張圖說"
                  >
                    <div class="img-container">
                      <picture>
                        <source
                          media="(min-width: 1200px)"
                          data-srcset="images/demo/09.jpg"
                        />
                        <source
                          media="(min-width: 992px)"
                          data-srcset="images/demo/09.jpg"
                        />
                        <source
                          media="(min-width: 576px)"
                          data-srcset="images/demo/09.jpg"
                        />
                        <source
                          media="(max-width: 575px)"
                          data-srcset="images/demo/09.jpg"
                        />
                        <img data-src="images/demo/09.jpg" class="lazy" />
                        <noscript><img src="images/demo/09.jpg"/></noscript>
                      </picture>
                    </div>
                    <div class="caption">
                      <time>2018-01-01</time>
                      <h3>標題</h3>
                      <p>內文</p>
                    </div>
                  </a>
                </div>
                <div class="thumbnail">
                  <a
                    href="images/demo/10.jpg"
                    data-fancybox="images"
                    data-caption="第10張圖說"
                  >
                    <div class="img-container">
                      <picture>
                        <source
                          media="(min-width: 1200px)"
                          data-srcset="images/demo/10.jpg"
                        />
                        <source
                          media="(min-width: 992px)"
                          data-srcset="images/demo/10.jpg"
                        />
                        <source
                          media="(min-width: 576px)"
                          data-srcset="images/demo/10.jpg"
                        />
                        <source
                          media="(max-width: 575px)"
                          data-srcset="images/demo/10.jpg"
                        />
                        <img data-src="images/demo/10.jpg" class="lazy" />
                        <noscript><img src="images/demo/10.jpg"/></noscript>
                      </picture>
                    </div>
                    <div class="caption">
                      <time>2018-01-01</time>
                      <h3>標題</h3>
                      <p>內文</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </section>
        <!-- LP End -->
        <!-- Pagination -->
        <div class="pagination">
          <form action="">
            <div class="form_inline">
              <div class="total">
                共<span>308</span>筆資料，第<span>1/18</span>頁，每頁顯示
                <select name="" id="" aria-label="每頁顯示">
                  <option value="">10</option>
                  <option value="">20</option>
                  <option value="">30</option>
                  <option value="">40</option>
                </select>
                筆， <input type="button" class="btn" value="確定" />
              </div>
            </div>
          </form>
          <ul class="page">
            <li class="first">
              <a href="#" title="第一頁">第一頁 </a>
            </li>
            <li class="prev">
              <a href="#" title="回上一頁">回上一頁 </a>
            </li>
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
            <li class="next">
              <a href="#" title="下一頁">下一頁 </a>
            </li>
            <li class="last">
              <a href="#" title="最後一頁">最後一頁 </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<style></style>
