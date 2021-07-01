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
              <div class="col sqs-col-12">
                <div class="sqs-block html-block sqs-block-html" id="block-bbf28a51c9f80a518335">
                  <div class="sqs-block-content">
                    <h4>Follow and join us </h4>
                    <p style="" v-for="(link, name) in data.link" :key="link"><a :href="link" target="_blank" v-text="name"></a></p>
                    <p style=""></p>
                  </div>
                </div>
                <div class="sqs-block html-block sqs-block-html">
                  <div class="sqs-block-content">
                    <figure class="sqs-block-image-figure intrinsic">
                      <img class="thumb-image"
                           alt="footer-logo"
                           :src="data.logo">
                    </figure>
                    <p v-text="data.copyright"></p>
                  </div>
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
#footer-sections .page-section.vertical-alignment--middle:not(.content-collection):not(.gallery-section):not(.user-items-list-section).section-height--small>.content-wrapper {
  padding-top: 7vmax;
}

#footer-sections :not(.has-background) .section-background {
  background-color: #181818;
}

#footer-sections .sqs-block-html h4 {
  color: white;
}
#footer-sections .sqs-block-html .sqs-block-content {
  color: white;
  text-align: center;
}
#footer-sections #block-bbf28a51c9f80a518335::after {
  content:'';
  display: block;
  height: 190px;
}
#footer-sections .sqs-block-html .sqs-block-content a {
  text-transform: capitalize;
  color: white;
}

#page-section-60b48252e39ebd52956221e8 {
  position: relative;
}

#footer-sections figure {
  text-align: center;
}

@media screen and (min-width: 768px) {
  #footer-sections figure {
    position: absolute;
    right: 0;
  }
}
</style>
