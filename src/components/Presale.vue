<template>
  <section
      class="page-section layout-engine-section background-width--full-bleed section-height--medium content-width--wide horizontal-alignment--center vertical-alignment--middle ">
    <div class="section-background">
    </div>
    <div class="content-wrapper">
      <div class="content">
        <div class="sqs-layout sqs-grid-12 columns-12"
             id="page-section-6090990f6f648c6378f6985c">
          <div class="row sqs-row">
            <div class="col sqs-col-6 span-6">
              <div class="row sqs-row">
                <div class="col sqs-col-1 span-1">
                  <div class="sqs-block spacer-block sqs-block-spacer">
                    <div class="sqs-block-content sqs-intrinsic" style="padding-bottom: 395.349%;">&nbsp;
                    </div>
                  </div>
                </div>
                <div class="col sqs-col-5 span-5">
                  <div class="sqs-block html-block sqs-block-html">
                    <div class="sqs-block-content">
                      <h2 style="text-align:center;white-space:pre-wrap;" v-text="data.title"></h2>
                      <p class="sqsrte-large" style="white-space:pre-wrap;" v-html="data.description"></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col sqs-col-1 span-1">
              <div class="sqs-block spacer-block sqs-block-spacer sized vsize-1">
                <div class="sqs-block-content">&nbsp;</div>
              </div>
            </div>
            <div class="col sqs-col-5 span-5">
              <div class="sqs-block image-block sqs-block-image sqs-text-ready">
                <div class="sqs-block-content">
                  <div
                      class="image-block-outer-wrapper layout-caption-below design-layout-inline combination-animation-site-default individual-animation-site-default individual-text-animation-site-default animation-loaded">
                    <figure class=" sqs-block-image-figure intrinsic " style="max-width:1080px;">
                      <div style="padding-bottom: 95.7447%; overflow: hidden;"
                           class=" image-block-wrapper has-aspect-ratio ">
                        <img class="thumb-image loaded"
                             style="left: 0%; top: -2.15686%; width: 100%; height: 104.314%; position: absolute;"
                             alt="Yeti_web7.png"
                             :src="data.heroImage">
                      </div>
                    </figure>
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
  name: "Presale"
}
</script>

<style scoped>
</style>