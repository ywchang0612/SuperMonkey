<template>
  <section
      class="page-section layout-engine-section background-width--full-bleed section-height--medium content-width--medium horizontal-alignment--center vertical-alignment--middle bright">
    <div class="section-background"></div>
    <div class="content-wrapper">
      <div class="image-block">
        <img class="thumb-image"
             alt="finalyeti10.png"
             :src="data.heroImage"
             style="width: auto; height: auto;">
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
        <div class="sqs-block html-block sqs-block-html">
          <div class="sqs-block-content buy-block">
            <div>
              <select name="unit" id="unit" class="buy-count">
                <option value="">16 UNIT</option>
              </select>
            </div>
            <div>
              <button type="button" class="buy-button">Buy</button>
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
}

.buy-count {
  background: transparent;
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