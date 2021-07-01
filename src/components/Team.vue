<template>
  <section id="team"
      class="page-section layout-engine-section background-width--full-bleed section-height--medium content-width--medium horizontal-alignment--center vertical-alignment--middle "
  >
    <div class="content-wrapper" style="text-align: center; padding: 0">
      <div class="content">
        <div class="col sqs-col-12">
          <div id="team-title" class="sqs-block html-block sqs-block-html">
            <div class="sqs-block-content">
              <h2 style="color:white; text-align:center;white-space:pre-wrap;">
                <strong>Team</strong>
              </h2>
            </div>
          </div>
          <div class="sqs-block html-block sqs-block-html">
            <div class="sqs-block-content">
              <p style="color:white; white-space:pre-wrap;" v-text="data.content"></p>
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
  name: "Team"
}
</script>
<style scoped>
.h2 {
  color: white;
}

#team-title {
  border-bottom: 1px solid white;
  margin: auto auto 1.5rem;
  width: 80%;
}

.page-section.section-height--medium:not(.content-collection):not(.gallery-section):not(.user-items-list-section) {
  align-items: normal;
  min-height: 36vh;
}
</style>