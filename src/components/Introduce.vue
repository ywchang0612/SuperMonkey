<template>
  <section
      class="page-section layout-engine-section background-width--full-bleed section-height--medium content-width--wide horizontal-alignment--center vertical-alignment--middle ">
    <div class="section-background"></div>
    <div class="content-wrapper">
      <div class="content">
        <div class="sqs-layout sqs-grid-12 columns-12"
             id="page-section-60aebec6d21ca3763717c09b">
          <div class="row sqs-row">
            <div class="col sqs-col-12 span-12">
              <div class="sqs-block html-block sqs-block-html">
                <div class="sqs-block-content">
                  <h2 style="text-align:center;white-space:pre-wrap;">{{ data.title }}</h2></div>
              </div>
            </div>
          </div>
          <div class="row sqs-row">
            <div class="col sqs-col-7 span-7">
              <div class="sqs-block spacer-block sqs-block-spacer sized vsize-1">
                <div class="sqs-block-content">&nbsp;</div>
              </div>
              <div class="sqs-block image-block sqs-block-image sqs-text-ready">
                <div class="sqs-block-content">
                  <div
                      class="image-block-outer-wrapper layout-caption-below design-layout-inline combination-animation-site-default individual-animation-site-default individual-text-animation-site-default animation-loaded">
                    <figure class=" sqs-block-image-figure intrinsic " style="max-width:1080px;">
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
              <div class="sqs-block html-block sqs-block-html" id="block-60aebec7556a1b1ae07be6ad">
                <div class="sqs-block-content"><p style="white-space:pre-wrap;">&nbsp;</p></div>
              </div>
            </div>
            <div class="col sqs-col-5 span-5">
              <div class="sqs-block spacer-block sqs-block-spacer">
                <div class="sqs-block-content sqs-intrinsic"
                     style="padding-bottom: 6.769230769230769%;">&nbsp;
                </div>
              </div>
              <div class="sqs-block image-block sqs-block-image sqs-col-2 span-2 float float-left sqs-text-ready">
                <div class="sqs-block-content">
                  <div
                      class="image-block-outer-wrapper layout-caption-below design-layout-inline combination-animation-site-default individual-animation-site-default individual-text-animation-site-default sqs-narrow-width animation-loaded">
                    <figure class=" sqs-block-image-figure intrinsic " style="max-width:290px;">
                      <div style="padding-bottom: 87.24137878417969%; overflow: hidden;"
                           class=" image-block-wrapper has-aspect-ratio ">
                        <img class="thumb-image loaded"
                             alt="iconssuperyeti11png-01.png"
                             :src="data.features[0].icon"
                             style="left: -0.2287160811831086%; top: 0%; width: 100.45743216236622%; height: 100%; position: absolute;">
                      </div>
                    </figure>
                  </div>
                </div>
              </div>
              <div class="sqs-block html-block sqs-block-html">
                <div class="sqs-block-content"><p style="white-space:pre-wrap;"><strong>{{
                    data.features[0].subject
                  }}</strong></p>
                  <p style="white-space:pre-wrap;" v-text="data.features[0].description"></p></div>
              </div>
              <div class="sqs-block spacer-block sqs-block-spacer">
                <div class="sqs-block-content sqs-intrinsic"
                     style="padding-bottom: 3.900709219858156%;">&nbsp;
                </div>
              </div>
              <div class="row sqs-row">
                <div class="col sqs-col-2 span-2">
                  <div class="sqs-block image-block sqs-block-image sqs-text-ready">
                    <div class="sqs-block-content">
                      <div
                          class="image-block-outer-wrapper layout-caption-below design-layout-inline combination-animation-site-default individual-animation-site-default individual-text-animation-site-default sqs-narrow-width animation-loaded">
                        <figure class=" sqs-block-image-figure intrinsic " style="max-width:257px;">
                          <div style="padding-bottom: 96.49805450439453%; overflow: hidden;"
                               class=" image-block-wrapper has-aspect-ratio ">
                            <img class="thumb-image loaded"
                                 alt="iconsswebsite-03.png"
                                 :src="data.features[1].icon"
                                 style="left: -0.06795940558173186%; top: 0%; width: 100.13591881116346%; height: 100%; position: absolute;">
                          </div>
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col sqs-col-3 span-3">
                  <div class="sqs-block html-block sqs-block-html">
                    <div class="sqs-block-content"><p style="white-space:pre-wrap;"><strong>{{
                        data.features[1].subject
                      }}</strong></p>
                      <p style="white-space:pre-wrap;" v-text="data.features[1].description"></p></div>
                  </div>
                </div>
              </div>
              <div class="sqs-block spacer-block sqs-block-spacer">
                <div class="sqs-block-content sqs-intrinsic" style="padding-bottom: 3.900709219858156%;">&nbsp;</div>
              </div>
              <div class="row sqs-row">
                <div class="col sqs-col-2 span-2">
                  <div class="sqs-block image-block sqs-block-image sqs-text-ready">
                    <div class="sqs-block-content">
                      <div
                          class="image-block-outer-wrapper layout-caption-below design-layout-inline combination-animation-site-default individual-animation-site-default individual-text-animation-site-default sqs-narrow-width animation-loaded">
                        <figure class=" sqs-block-image-figure intrinsic " style="max-width:252px;">
                          <div style="padding-bottom: 100.39682006835938%; overflow: hidden;"
                               class=" image-block-wrapper has-aspect-ratio ">
                            <img class="thumb-image loaded" alt="iconsswebsite-02.png"
                                 :src="data.features[2].icon"
                                 style="left: -0.08216014566772145%; top: 0%; width: 100.16432029133544%; height: 100%; position: absolute;">
                          </div>
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col sqs-col-3 span-3">
                  <div class="sqs-block html-block sqs-block-html">
                    <div class="sqs-block-content">
                      <p style="white-space:pre-wrap;"><strong>{{ data.features[2].title }}</strong></p>
                      <p style="white-space:pre-wrap;" v-text="data.features[2].description"></p></div>
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
  name: "Introduce"
}
</script>

<style scoped>

</style>