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
  <div class="search">
    <div class="form_grp">
      <label for="mustSameAsId">搜尋</label>
      <input
        name="username"
        id="mustSameAsId"
        type="text"
        placeholaccesskey="S"
      />
      <input name="" type="submit" title="查詢" value="查詢" />
    </div>
    <div class="btn_grp">
      <input name="" type="submit" value="進階搜尋" />
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
