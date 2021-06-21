<template>
  <section
      class="page-section layout-engine-section background-width--full-bleed section-height--medium content-width--medium horizontal-alignment--center vertical-alignment--middle bright">
    <div class="section-background"></div>
    <div class="content-wrapper">
      <div class="content">
        <div class="sqs-layout sqs-grid-12 columns-12"
             id="page-section-60bfbba5f92beb4553c770d3">
          <div class="row sqs-row">
            <div class="col sqs-col-6 span-6">
              <div class="sqs-block spacer-block sqs-block-spacer sized vsize-1"
                   id="block-yui_3_17_2_1_1623468223341_5458">
                <div class="sqs-block-content">&nbsp;</div>
              </div>
              <div class="sqs-block html-block sqs-block-html"
                   id="block-yui_3_17_2_1_1623468223341_15912">
                <div class="sqs-block-content">
                  <h2 style="text-align:center;white-space:pre-wrap;">{{ data.text }}</h2>
                </div>
              </div>
            </div>
            <div class="col sqs-col-6 span-6">
              <div class="sqs-block image-block sqs-block-image sqs-text-ready"
                   id="block-yui_3_17_2_1_1623178133529_92974">
                <div class="sqs-block-content">
                  <div
                      class="image-block-outer-wrapper layout-caption-below design-layout-inline combination-animation-site-default individual-animation-site-default individual-text-animation-site-default sqs-narrow-width animation-loaded">
                    <figure class=" sqs-block-image-figure intrinsic " style="max-width:1080px;">
                      <div style="padding-bottom: 94.0952377319336%; overflow: hidden;"
                           class=" image-block-wrapper has-aspect-ratio ">
                        <img class="thumb-image loaded"
                             alt="finalyeti10.png"
                             :src="data.heroImage"
                             style="left: 0%; top: -3.1598513011152463%; width: 100%; height: 106.31970260223049%; position: absolute;">
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
  name: "SoldOut"
}
</script>

<style scoped>

</style>