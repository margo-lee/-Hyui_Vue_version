<script>
import $ from "jquery";

export default {
  setup() {},
};
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
      <div class="left_block">
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
        <h2 class="title">意見信箱</h2>
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
                  ><img src="images/basic/icon_facebook.png" alt="facebook"
                /></a>
              </li>
              <li>
                <a href="#"
                  ><img src="images/basic/icon_twitter.png" alt="twitter"
                /></a>
              </li>
              <li>
                <a href="#"
                  ><img src="images/basic/icon_line.png" alt="line"
                /></a>
              </li>
              <li>
                <a href="#"
                  ><img src="images/basic/icon_youtube.png" alt="youtube"
                /></a>
              </li>
              <li>
                <a href="#"
                  ><img src="images/basic/icon_googleplus.png" alt="google plus"
                /></a>
              </li>
              <li>
                <a href="#"
                  ><img src="images/basic/icon_instagram.png" alt="instagram"
                /></a>
              </li>
              <li>
                <a href="#"
                  ><img src="images/basic/icon_linkedin.png" alt="LinkedIn"
                /></a>
              </li>
              <li>
                <a href="#"><img src="images/basic/icon_rss.png" alt="RSS"/></a>
              </li>
            </ul>
          </div>
        </div>
        <!-- function功能區塊 -->
        <div class="function">
          <ul>
            <li class="icon_back"><a href="#">回上一頁</a></li>
            <li class="icon_print"><a href="#">友善列印</a></li>
            <li class="icon_forward"><a href="#">轉寄友人</a></li>
          </ul>
        </div>
        <!-- QP Start -->
        <section class="">
          <p>
            註:<abbr class="necessary" title="為必填(選)欄位,不能為空白。"
              >*</abbr
            >為必填(選)欄位, 不能為空白。
          </p>
          <form action="" class="form_grid flex_form">
            <div class="form_grp">
              <label for="" class="form_title"
                ><abbr class="necessary" title="為必填(選)欄位,不能為空白。"
                  >*</abbr
                >您的真實姓名：</label
              >
              <div class="form_content">
                <input type="text" id="" value="" />
              </div>
            </div>
            <div class="form_grp">
              <label for="password" class="form_title"
                ><abbr class="necessary" title="為必填(選)欄位,不能為空白。"
                  >*</abbr
                >聯絡電話：</label
              >
              <div class="form_content">
                <input name="" id="" type="text" />
              </div>
            </div>
            <div class="form_grp">
              <label for="" class="form_title"
                ><abbr class="necessary" title="為必填(選)欄位,不能為空白。"
                  >*</abbr
                >您的電子信箱：</label
              >
              <div class="form_content">
                <input name="" id="" type="text" />
              </div>
            </div>
            <div class="form_grp">
              <label for="" class="form_title"
                ><abbr class="necessary" title="為必填(選)欄位,不能為空白。"
                  >*</abbr
                >意見類別：</label
              >
              <div class="form_content">
                <div class="radio_grp form_inline">
                  <label>
                    <input
                      type="radio"
                      name="sampleRadio5"
                      value=""
                      checked=""
                    />類別1</label
                  >
                  <label>
                    <input
                      type="radio"
                      name="sampleRadio5"
                      value=""
                    />類別2</label
                  >
                  <label>
                    <input
                      type="radio"
                      name="sampleRadio5"
                      value=""
                    />類別3</label
                  >
                </div>
              </div>
            </div>
            <div class="form_grp">
              <label for="" class="form_title"
                ><abbr class="necessary" title="為必填(選)欄位,不能為空白。"
                  >*</abbr
                >意見類別：</label
              >
              <div class="form_content">
                <div class="check_grp form_inline">
                  <label>
                    <input
                      type="checkbox"
                      name=""
                      value=""
                      checked=""
                    />類別1</label
                  >
                  <label>
                    <input type="checkbox" name="" value="" />類別2</label
                  >
                  <label>
                    <input type="checkbox" name="" value="" />類別3</label
                  >
                </div>
              </div>
            </div>
            <div class="form_grp">
              <label for="" class="form_title"
                ><abbr class="necessary" title="為必填(選)欄位,不能為空白。"
                  >*</abbr
                >內容：</label
              >
              <div class="form_content">
                <textarea name="" id="" cols="30" rows="70"></textarea>
              </div>
            </div>
            <div class="form_grp">
              <label for="selectSample" class="form_title"
                ><abbr class="necessary" title="為必填(選)欄位,不能為空白。"
                  >*</abbr
                >意見類別：</label
              >
              <div class="form_content form_inline">
                <select id="selectSample" name="">
                  <option value="">類別1</option>
                  <option value="">類別2</option>
                  <option value="">類別3</option>
                </select>
              </div>
            </div>
            <div class="form_grp">
              <label class="form_title"
                ><abbr class="necessary" title="為必填(選)欄位,不能為空白。"
                  >*</abbr
                >驗證碼：</label
              >
              <div class="form_content">
                <img src="images/basic/captcha.gif" alt="" class="captcha" />
                <input type="text" id="" value="" />
              </div>
            </div>
            <div class="btn_grp form_inline">
              <input name="" type="reset" value="清除" class="btn btn-reset" />
              <input
                name="Search"
                type="submit"
                value="送出"
                class="btn btn-submit"
              />
            </div>
          </form>
        </section>
        <!-- QP End -->
      </div>
    </div>
  </div>
</template>
<style></style>
