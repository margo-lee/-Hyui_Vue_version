<script>
import $ from "jquery";
import { onMounted } from "@vue/runtime-core";
export default {
  setup() {
    onMounted(() => {});
  },
};
</script>
<template>
  <!-- Search Start -->
  <div class="search" role="search">
    <div class="form_grp">
      <label for="mustSameAsId">搜尋</label>
      <input
        name="username"
        id="mustSameAsId"
        type="text"
        placeholder="請輸入文字"
        accesskey="S"
        title="請輸入文字"
        aria-label="搜尋網站內容"
      />
      <!-- <input name="" type="submit" value="查詢" class="btn btn-search" /> -->
    </div>
    <div class="btn_grp">
      <input name="" type="submit" value="進階搜尋" class="btn" />
    </div>
    <div class="keywordHot">
      <ul>
        <li><a href="#">熱門熱門</a></li>
        <li><a href="#">查詢</a></li>
        <li><a href="#">字詞三</a></li>
      </ul>
    </div>
  </div>
</template>
<style scoped></style>
