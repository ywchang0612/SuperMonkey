<template>
  <section id="roadmap"
           class="page-section layout-engine-section background-width--full-bleed section-height--medium content-width--wide horizontal-alignment--center vertical-alignment--top ">
    <div class="section-background">
    </div>
    <div class="content-wrapper">
      <div class="content">
        <div class="sqs-layout sqs-grid-12 columns-12">
          <div class="row sqs-row">
            <div class="col sqs-col-12">
              <div id="roadmap-title" class="sqs-block html-block sqs-block-html">
                <div class="sqs-block-content">
                  <h2 style="text-align:center;white-space:pre-wrap;">
                    <strong>{{ data.title }}</strong>
                  </h2>
                  <div style="text-align: center; color: white">After initial sale</div>
                </div>
              </div>
              <div class="row sqs-row">
                <div class="col sqs-col-3" v-for="(feature, key) of data.features" :key="key">
                  <div class="sqs-block image-block sqs-block-image sqs-text-ready">
                    <div class="sqs-block-content">
                      <div
                          class="image-block-outer-wrapper layout-caption-below design-layout-inline combination-animation-site-default individual-animation-site-default individual-text-animation-site-default animation-loaded">
                        <div class="image-caption">
                          <h3 class="subject" style="text-align:center;white-space:pre-wrap;"
                              v-text="feature.subject"></h3>
                          <p class="description" style="text-align:center;white-space:pre-wrap;"
                             v-text="feature.description"></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div style="text-align: center; color: white; padding-bottom: 5rem;">Note: 50 Monkeybrix are being
                  withheld from the sale and used for rewards, giveaways, promotions, charity, and team members.
                </div>
              </div>
              <div class="grid-image">
                <img :srcset="unit" alt="" v-for="(unit, key) of data.units" :key="key">
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
  name: "Roadmap"
}
</script>
<style scoped>

.page-section.vertical-alignment--top:not(.content-collection):not(.gallery-section):not(.user-items-list-section):not(.section-height--custom) > .content-wrapper {
  padding-top: 13vw;
  padding-bottom: 5vw;
}

h2 {
  color: white;
  display: flex;
  justify-content: center;
}

h2:before {
  content: '';
  background-image: url("/assets/logo-opacity.png");
  background-repeat: no-repeat;
  position: absolute;
  bottom: 2rem;
  width: 251px;
  height: 196px;
}

#roadmap-title {
  padding-bottom: 4rem;
  border-bottom: 1px solid white;
}

.subject, .description {
  color: white;
}

.grid-image {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(12, 1fr);
}

@media screen and (max-width: 768px) {

  .grid-image img:nth-child(1), .grid-image img:nth-child(4) {
    grid-column-start: 1;
    grid-column-end: 5;
  }

  .grid-image img:nth-child(2), .grid-image img:nth-child(5) {
    grid-column-start: 5;
    grid-column-end: 9;
  }

  .grid-image img:nth-child(3), .grid-image img:nth-child(6) {
    grid-column-start: 9;
    grid-column-end: 13;
  }

  .grid-image img:nth-child(7) {
    grid-column-start: 1;
    grid-column-end: 4;
  }

  .grid-image img:nth-child(8) {
    grid-column-start: 4;
    grid-column-end: 7;
  }

  .grid-image img:nth-child(9) {
    grid-column-start: 7;
    grid-column-end: 10;
  }

  .grid-image img:nth-child(10) {
    grid-column-start: 10;
    grid-column-end: 13;
  }
}

@media screen and (min-width: 768px) {
  .grid-image {
    grid-template-columns: repeat(5, 1fr);
    gap: 2rem;
  }
}

.grid-image img {
  width: 100%;
}

</style>