<template>
  <footer class="sections" id="footer-sections">
    <section
        class="page-section layout-engine-section background-width--full-bleed section-height--small content-width--wide horizontal-alignment--center vertical-alignment--middle black">
      <div class="section-background"></div>
      <div class="content-wrapper">
        <div class="content">
          <div class="sqs-layout sqs-grid-12 columns-12"
               id="page-section-60b48252e39ebd52956221e8">
            <div class="row sqs-row">
              <div class="col sqs-col-4 span-4">
                <div class="sqs-block html-block sqs-block-html" id="block-bbf28a51c9f80a518335">
                  <div class="sqs-block-content"><h4 style="white-space:pre-wrap;">Follow Us </h4>
                    <p style="white-space:pre-wrap;"><a :href="data.followUs.twitter">Twitter</a></p>
                  </div>
                </div>
              </div>
              <div class="col sqs-col-6 span-6">
                <div class="sqs-block html-block sqs-block-html" id="block-c3fc5673d47159fab5e9">
                  <div class="sqs-block-content"><h4 style="white-space:pre-wrap;">Join Our Discord</h4>
                    <p style="white-space:pre-wrap;"><a :href="data.joinUs.discord">Discord </a></p>
                    <p style="white-space:pre-wrap;"></p>
                  </div>
                </div>
              </div>
              <div class="col sqs-col-2 span-2">
                <div class="sqs-block image-block sqs-block-image sqs-text-ready"
                     id="block-yui_3_17_2_1_1622362655919_35747">
                  <div class="sqs-block-content">
                    <div
                        class="image-block-outer-wrapper layout-caption-below design-layout-inline combination-animation-site-default individual-animation-site-default individual-text-animation-site-default sqs-narrow-width animation-loaded">
                      <figure class=" sqs-block-image-figure intrinsic " style="max-width:1383px;">
                        <div style="padding-bottom: 43.8178%; overflow: hidden;"
                             class=" image-block-wrapper has-aspect-ratio ">
                          <img class="thumb-image loaded"
                               style="left: 0%; top: -0.0774713%; width: 100%; height: 100.155%; position: absolute;"
                               alt="logo_sywebpage-03.png"
                               :src="data.logo">
                        </div>
                      </figure>
                    </div>
                  </div>
                </div>
                <div class="sqs-block html-block sqs-block-html"
                     id="block-yui_3_17_2_1_1622442865082_42643">
                  <div class="sqs-block-content"><p style="text-align:center;white-space:pre-wrap;"
                                                    v-text="data.copyright"></p></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </footer>

</template>
<script>
export default {
  props: ["data"],
  name: "Footer"
}
</script>
<style scoped>
</style>