<template>
  <section
      class="page-section layout-engine-section background-width--full-bleed section-height--custom horizontal-alignment--center vertical-alignment--bottom has-background white"
  >
    <img alt="" class="banner-desktop"
         ref="bgMonkeybrix"
         :srcset="data.banner.desktop"
         sizes="100vw"
         style="width: 100%; height: 100%; object-fit: cover;"
    >
    <img alt="" class="banner-mobile"
         ref="bgMonkeybrix"
         :srcset="data.banner.mobile"
         sizes="100vw"
         style="width: 100%; height: 100%; object-fit: cover;"
    >
    <div class="content-wrapper">
      <div class="content">
        <div class="sqs-layout sqs-grid-12 columns-12">
          <div class="row sqs-row">
            <div class="col sqs-col-12 span-12">
              <div class="sqs-block html-block sqs-block-html">
                <div class="sqs-block-content">
                  <h3 style="color: white; text-align:center;"><strong>{{ data.welcome }}</strong></h3>
                </div>
              </div>
              <hr>
              <div class="sqs-block html-block sqs-block-html" style="margin-bottom: 3rem">
                <div class="sqs-block-content">
                  <h4 style="color:white;text-align:center;">
                    {{ data.spec }}
                  </h4>
                </div>
              </div>
              <div class="sqs-block html-block sqs-block-html">
                <div class="sqs-block-content">
                  <div class="about-content">
                    <div style="flex: 1" v-for="(content, key) of data.content" :key="key">{{ content }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: ['data'],
  methods: {},
  name: "Greeting"
}
</script>
<style scoped>
main .page-section:first-child {
  padding-top: 0;
  flex-direction: column;
}

.page-section:not(.full-bleed-section) > .content-wrapper {
  box-sizing: border-box;
}

.content-wrapper {
  padding-top: 5vw;
  padding-bottom: 5vw;
}

.about-content {
  gap: 3rem;
  color: white;
  display: flex;
  flex-direction: column;
  text-align: center;
}

hr {
  width: 90%;
}

.banner-desktop {
  display: none;
}

@media screen and (min-width: 768px) {
  .about-content {
    flex-direction: row;
  }

  hr {
    width: 65%;
  }
  .banner-desktop {
    display: block;
  }

  .banner-mobile {
    display: none;
  }
}

@media screen and (min-width: 0) and (max-width: 1511px) {
  h3 {
    font-size: calc(.5vw + 1rem);
  }
}
</style>