<template>
  <section
      class="page-section layout-engine-section background-width--full-bleed section-height--medium content-width--medium horizontal-alignment--center vertical-alignment--middle bright">
    <div class="section-background"></div>
    <div class="content-wrapper">
      <div class="image-block">
        <img class="thumb-image"
             alt="finalyeti10.png"
             :src="data.heroImage"
             style="width: 100%; height: auto;">
      </div>
      <div class="text-block">
        <div class="sqs-block spacer-block sqs-block-spacer sized vsize-1">
          <div class="sqs-block-content">&nbsp;</div>
        </div>
        <div class="sqs-block html-block sqs-block-html">
          <div class="sqs-block-content">
            <h2 style="white-space:pre-wrap;">{{ data.title }}</h2>
          </div>
        </div>
        <div class="sqs-block html-block sqs-block-html">
          <div class="sqs-block-content">
            <h4 style="white-space:pre-wrap; line-height: 2.3;">{{ data.content }}</h4>
          </div>
        </div>
        <div class="sqs-block html-block sqs-block-html" v-if="display">
          <div class="sqs-block-content buy-block">
            <div>
              <input v-model="buyCount" type="number" min="1" max="20" class="buy-count">
            </div>
            <div>
              <button type="button" class="buy-button">{{ this.buttonText }}</button>
            </div>
            <div class="sqs-block-content">
            <h4 style="white-space:pre-wrap; line-height: 2.3;">{{ this.address }}</h4>
            </div>
          </div>
        </div>
        <div v-else>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
import buttonPress from "../services/w3";
export default {
  props: ['data'],
  data: ()=>{
  return {netID:null, address:null, buttonText:"Connect Wallet", buyCount:0, display:false }
  },
  methods: {
    buttonPress:buttonPress
  },
  name: "SoldOut"
}
</script>

<style scoped>
.section-background {
  background-color: #687981;
}

.sqs-block-content h1, .sqs-block-content h2,
.sqs-block-content h3, .sqs-block-content h4,
.sqs-block-content h5, .sqs-block-content h6 {
  color: white;
}

.image-block {
  text-align: center;
  flex-shrink: 0;
}

.text-block h2 {
  text-align: center;
}

.buy-block {
  gap: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.content-wrapper {
  flex-direction: column;
}

.buy-button {
  padding: 8px 56px;
  color: #687981;
  border: none;
  border-radius: 4px;
  background: white;
}

.buy-count {
  background: transparent;
  text-align: center;
  width: 75px;
  padding: 8px 32px;
  color: rgb(239, 239, 239);
  border: 1px solid rgb(239, 239, 239);
  border-radius: 4px;
}

@media screen and (min-width: 768px) {
  .content-wrapper {
    flex-direction: row;
    gap: 4rem;
  }

  .text-block h2 {
    text-align: left;
  }

  .buy-block {
    flex-direction: row;
  }
}

</style>