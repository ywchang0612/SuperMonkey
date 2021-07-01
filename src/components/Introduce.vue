<template>
  <section id="monkeybrix"
      class="page-section layout-engine-section background-width--full-bleed section-height--medium content-width--wide horizontal-alignment--center vertical-alignment--middle ">
    <div class="section-background"></div>
    <div class="content-wrapper">
      <div class="content">
        <div class="sqs-layout sqs-grid-12 columns-12"
             id="features-1">
          <div class="row sqs-row">
            <div  class="col" style="flex: 1">
              <div class="sqs-block image-block sqs-block-image sqs-text-ready">
                <div class="sqs-block-content">
                  <div
                      class="image-block-outer-wrapper layout-caption-below design-layout-inline combination-animation-site-default individual-animation-site-default individual-text-animation-site-default animation-loaded">
                    <figure class=" sqs-block-image-figure intrinsic ">
                      <div style="padding-bottom: 100%; overflow: hidden;"
                           class=" image-block-wrapper has-aspect-ratio ">
                        <img class="thumb-image loaded"
                             alt="Test_superYeti_photographer_23.jpg"
                             :src="data.heroImage"
                             style="left: 0%; top: 0%; width: 100%; height: 100%; position: absolute;">
                      </div>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
            <div style="flex:1;display: flex; flex-direction: column; justify-content: space-between">
              <div class="sqs-block html-block sqs-block-html">
                <div class="sqs-block-content">
                  <p class="subject">
                    <strong>{{ data.features[0].subject }}</strong></p>
                  <p class="content"
                     v-text="data.features[0].description"></p>
                </div>
              </div>
              <div class="sqs-block html-block sqs-block-html">
                <div class="sqs-block-content">
                  <p class="subject">
                    <strong>{{ data.features[1].subject }}</strong></p>
                  <p class="content"
                     v-text="data.features[1].description"></p>
                </div>
              </div>
              <div class="sqs-block html-block sqs-block-html logo-block">
                <div class="sqs-block-content">
                  <img src="/assets/logo.png" alt="">
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="sqs-layout sqs-grid-12 columns-12"
              id="features-2">
          <div class="row sqs-row" >
            <div  class="col" style="flex: 1;" id="show">
              <div class="sqs-block image-block sqs-block-image sqs-text-ready">
                <div class="sqs-block-content">
                  <div style="display:flex;" class="image-block-outer-wrapper layout-caption-below design-layout-inline combination-animation-site-default individual-animation-site-default individual-text-animation-site-default animation-loaded">
                    <img class="thumb-image" v-for="(image, key) of data.hero2" :key="key"
                         alt=""
                         :src="image"
                         style="width: 50%; height: auto; position: relative">
                  </div>
                </div>
              </div>
            </div>
            <div style="flex:1; display: flex; flex-direction: column; justify-content: space-between">
              <div class="sqs-block html-block sqs-block-html">
                <div class="sqs-block-content">
                  <p class="subject">
                    <strong>{{ data.features2[0].subject }}</strong></p>
                  <p class="content"
                     v-text="data.features2[0].description"></p>
                </div>
              </div>
              <div class="sqs-block html-block sqs-block-html">
                <div class="sqs-block-content">
                  <p class="subject">
                    <strong>{{ data.features2[1].subject }}</strong></p>
                  <p class="content"
                     v-text="data.features2[1].description"></p>
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
  name: "Introduce"
}
</script>

<style scoped>

.sqs-row {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.logo-block {
  display: none;
}

.subject {
  text-align: center;
  font-size: 22px;
  color: white;
  white-space: pre-wrap;
}

.content {
  font-size:18px; color:white; white-space:pre-wrap;
}

@media screen and (min-width: 992px) {
  .sqs-row {
    flex-direction: row
  }

  #features-1 {
    margin-bottom: 5rem;
  }

  #features-2 .sqs-row {
    flex-direction: row-reverse;
  }

  .logo-block {
    display: block;
  }

  .subject {
    text-align: left;
  }
}
</style>