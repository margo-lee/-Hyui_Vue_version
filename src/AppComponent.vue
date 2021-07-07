<script>
import $ from "jquery";
// import HyHeader from "@/components/HyHeader.vue";
// import HyFooter from "@/components/HyFooter.vue";
// import HyFatfooter from "@/components/HyFatfooter.vue";
// import HyGoTopBtn from "@/components/HyGoTopBtn.vue";
import HyMarquee from "@/components/HyMarquee.vue";
import HyModal from "@/components/HyModal.vue";
import HyTabs from "@/components/HyTabs.vue";
import HyWeblink from "@/components/HyWeblink.vue";
import HyMeun from "@/components/HyMenu.vue";
import HyLanguage from "@/components/HyLanguage.vue";
import HyFontSize from "@/components/HyFontSize.vue";
import HySearch from "@/components/HySearch.vue";
import { onMounted } from "@vue/runtime-core";

export default {
  components: {
    HyMarquee,
    HyModal,
    HyTabs,
    HyWeblink,
    HyMeun,
    HyLanguage,
    HyFontSize,
    HySearch,
  },
  setup() {
    onMounted(() => {});
  },
};
</script>

<template>
  <div class="wrapper">
    <HyTabs />
    <HyWeblink />
    <HyMeun />
    <HyLanguage />
    <HyFontSize />
    <HySearch />
    <!-- <HyMarquee /> -->
    <!-- <HyModal /> -->
  </div>
</template>

<style lang="scss">
// @import "~@/assets/sass/hyui.scss";
</style>
