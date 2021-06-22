<template>
  <div id="siteWrapper" class="clear-fix site-wrapper">
    <Header :data="this.header"></Header>
    <main id="page" class="container">
      <article id="sections" class="sections">
        <div class="system-page" style="padding-top: 136.375px;">
          <p>We couldn't find the page you were looking for. This is either because:</p>
          <ul>
            <li>There is an error in the URL entered into your web browser. Please check the URL and try again.</li>
            <li>The page you are looking for has been moved or deleted.</li>
          </ul>
          <p>
            You can return to our homepage by <a href="/">clicking here</a>, or you can try searching for the
            content you are seeking by <a href="/search">clicking here</a>.
          </p>
        </div>
      </article>
    </main>
    <Footer :data="this.footer"></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  name: "404",
  data() {
    return {
      header: {
        logo: "//static1.squarespace.com/static/6078a567cd564058f99c3281/t/60af61c40a1af747b9f5d534/1623468009452/",
      },
      footer: {
        followUs: {
          twitter: "https://twitter.com/super_yeti"
        },
        joinUs: {
          discord: "https://discord.gg/ApesASVn4E"
        },
        copyright: "All Rights Reserved, SuperYeti 2021",
        logo: "https://images.squarespace-cdn.com/content/v1/6078a567cd564058f99c3281/1622442741867-R8EB7WI6HP3BIXOBNEQU/ke17ZwdGBToddI8pDm48kO3pTM0WNQkAkgf9MXJEUjsUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcuwEJB9aSiPHcRlCGDbY-mcZcZSt-Z57ARTA7vNRERitnlElEjou9gcnbhS4DST-n/logo_sywebpage-03.png"
      }
    }
  },
  components: {
    Header,
    Footer,
  }
}
</script>

<style scoped>

</style>