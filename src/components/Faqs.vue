<template>
  <section
      class="page-section layout-engine-section background-width--full-bleed section-height--medium content-width--medium horizontal-alignment--center vertical-alignment--middle "
      style="padding-top: 136.375px;"
  >
    <div class="section-background">
    </div>
    <div class="content-wrapper">
      <div class="content">
        <div class="sqs-layout sqs-grid-12 columns-12"
             id="page-section-608331a8de02a46cdbd469ef">
          <div class="row sqs-row">
            <div class="col sqs-col-12 span-12">
              <div class="row sqs-row">
                <div class="col sqs-col-5 span-5">
                  <div class="sqs-block html-block sqs-block-html">
                    <div class="sqs-block-content"><h2 style="white-space:pre-wrap;">FAQs</h2></div>
                  </div>
                </div>
                <div class="col sqs-col-7 span-7">
                  <div class="sqs-block html-block sqs-block-html">
                    <div class="sqs-block-content">
                      <section v-for="(faq, key) of data" :key="key">
                        <p style="white-space:pre-wrap;"><strong>{{ faq.question }}</strong></p>
                        <p style="white-space:pre-wrap;" v-html="faq.answer"></p>
                        <p style="white-space:pre-wrap;"><br></p>
                      </section>
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
  props: ["data"],
  name: "Faqs"
}
</script>
<style scoped>
</style>