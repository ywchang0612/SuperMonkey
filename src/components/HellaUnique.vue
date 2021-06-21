<template>
  <section
      class="page-section layout-engine-section background-width--full-bleed section-height--medium content-width--wide horizontal-alignment--center vertical-alignment--top ">
    <div class="section-background">
    </div>
    <div class="content-wrapper">
      <div class="content">
        <div class="sqs-layout sqs-grid-12 columns-12"
             id="page-section-608244e935d08840b1a92bed">
          <div class="row sqs-row">
            <div class="col sqs-col-12 span-12">
              <div class="sqs-block html-block sqs-block-html">
                <div class="sqs-block-content"><h2 style="text-align:center;white-space:pre-wrap;"><strong>{{ data.title }}</strong></h2></div>
              </div>
              <div class="sqs-block image-block sqs-block-image sqs-text-ready">
                <div class="sqs-block-content">
                  <div
                      class="image-block-outer-wrapper layout-caption-below design-layout-inline combination-animation-site-default individual-animation-site-default individual-text-animation-site-default animation-loaded">
                    <figure class=" sqs-block-image-figure intrinsic " style="max-width:1200px;">
                      <div style="padding-bottom: 29.4167%; overflow: hidden;"
                           class=" image-block-wrapper has-aspect-ratio ">
                        <img class="thumb-image loaded"
                             style="left: 0%; top: 0%; width: 100%; height: 100%; position: absolute;"
                             alt="3 yetis website-02.png"
                             :src="data.heroImage">
                      </div>
                    </figure>
                  </div>
                </div>
              </div>
              <div class="row sqs-row">
                <div class="col sqs-col-4 span-4">
                  <div class="sqs-block image-block sqs-block-image sqs-text-ready">
                    <div class="sqs-block-content">
                      <div
                          class="image-block-outer-wrapper layout-caption-below design-layout-inline combination-animation-site-default individual-animation-site-default individual-text-animation-site-default animation-loaded">
                        <figure class=" sqs-block-image-figure intrinsic " style="max-width:252px;">
                          <div style="padding-bottom: 94.8413%; overflow: hidden;"
                               class=" image-block-wrapper has-aspect-ratio ">
                            <img class="thumb-image loaded"
                                 style="left: 0%; top: 0%; width: 100%; height: 100%; position: absolute;"
                                 alt="Interactive Utilizing 3D software to create each SuperYeti ensures a rich futuristic experience in the Yetiverse specifically and any Metaverse generally!"
                                 :src="data.features[0].icon">
                          </div>
                          <figcaption class="image-caption-wrapper">
                            <div class="image-caption">
                              <h3 style="text-align:center;white-space:pre-wrap;" v-text="data.features[0].subject"></h3>
                              <p style="text-align:center;white-space:pre-wrap;" v-text="data.features[0].description"></p>
                            </div>
                          </figcaption>
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col sqs-col-4 span-4">
                  <div class="sqs-block image-block sqs-block-image sqs-text-ready">
                    <div class="sqs-block-content">
                      <div
                          class="image-block-outer-wrapper layout-caption-below design-layout-inline combination-animation-site-default individual-animation-site-default individual-text-animation-site-default animation-loaded">
                        <figure class=" sqs-block-image-figure intrinsic " style="max-width:257px;">
                          <div style="padding-bottom: 92.9961%; overflow: hidden;"
                               class=" image-block-wrapper has-aspect-ratio ">
                            <img class="thumb-image loaded"
                                 style="left: 0%; top: 0%; width: 100%; height: 100%; position: absolute;"
                                 alt="Same Price No bonded curve, no FOMO buying before the price skyrockets. You’re able to join the Yetiverse and own a SuperYeti for a consistent .1 ETH, even though some are rarer than others!"
                                 :src="data.features[1].icon">
                          </div>
                          <figcaption class="image-caption-wrapper">
                            <div class="image-caption">
                              <h3 style="text-align:center;white-space:pre-wrap;" v-text="data.features[1].subject"></h3>
                              <p style="text-align:center;white-space:pre-wrap;" class="" v-text="data.features[1].description"></p>
                            </div>
                          </figcaption>
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col sqs-col-4 span-4">
                  <div class="sqs-block image-block sqs-block-image sqs-text-ready">
                    <div class="sqs-block-content">
                      <div
                          class="image-block-outer-wrapper layout-caption-below design-layout-inline combination-animation-site-default individual-animation-site-default individual-text-animation-site-default animation-loaded">
                        <figure class=" sqs-block-image-figure intrinsic " style="max-width:279px;">
                          <div style="padding-bottom: 85.6631%; overflow: hidden;"
                               class=" image-block-wrapper has-aspect-ratio ">
                            <img class="thumb-image loaded"
                                 style="left: 0%; top: 0%; width: 100%; height: 100%; position: absolute;"
                                 alt="Utility SuperYetis are much more than an NFT. They are bringing back our childhood dreams to create a decentralized world of the Yetiverse on the blockchain to build, play, and earn."
                                 :src="data.features[2].icon">
                          </div>
                          <figcaption class="image-caption-wrapper">
                            <div class="image-caption"><h3 style="text-align:center;white-space:pre-wrap;" v-text="data.features[2].subject"></h3>
                              <p style="text-align:center;white-space:pre-wrap;" v-text="data.features[2].description"></p></div>
                          </figcaption>
                        </figure>
                      </div>
                    </div>
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
  name: "HellaUnique"
}
</script>
<style scoped>
</style>