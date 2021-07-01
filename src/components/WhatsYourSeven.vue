<template>
  <section
      class="page-section layout-engine-section background-width--full-bleed section-height--medium content-width--wide horizontal-alignment--center vertical-alignment--middle ">
    <div class="section-background">
    </div>
    <div class="content-wrapper">
      <div class="content">
        <figure>
          <img class="thumb-image loaded"
               style="margin: auto; width: 100%; height: auto;"
               alt="Yeti_web7.png"
               :src="data.heroImage">
        </figure>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ['data'],
  name: "WhatsYourSeven"
}
</script>

<style scoped>
.page-section.vertical-alignment--middle:not(.content-collection):not(.gallery-section):not(.user-items-list-section).section-height--medium>.content-wrapper {
  padding: 0;
}
</style>