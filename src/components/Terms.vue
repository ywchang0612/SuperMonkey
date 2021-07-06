<template>
  <section id="term"
           class="page-section layout-engine-section background-width--full-bleed section-height--medium content-width--medium horizontal-alignment--center vertical-alignment--middle "
  >
    <div class="content-wrapper" style="text-align: center; padding: 0">
      <div class="content">
        <div class="col sqs-col-12">
          <div class="sqs-block html-block sqs-block-html">
            <div class="sqs-block-content">
              <h2>
                <strong>{{ data.title }}</strong>
              </h2>
            </div>
          </div>
          <div class="sqs-block sqs-block-html">
            <div class="sqs-block-content">
              <p v-for="(list, key) of data.lists" :key="key">
                <strong v-text="list.subject"></strong> <span v-text="list.context"></span>
              </p>
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
  name: "Terms"
}
</script>
<style scoped>
#term .sqs-block-content h2 {
  color: white;
  text-align: center;
  white-space: pre-wrap;
  margin-bottom: 2rem;
}

#term  .sqs-block-content p {
  color: white;
  white-space: pre-wrap;
  text-align: left;
}

.page-section.section-height--medium:not(.content-collection):not(.gallery-section):not(.user-items-list-section) {
  padding: 3rem 0 8rem 0;
}
</style>