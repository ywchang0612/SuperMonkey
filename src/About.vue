<template>
  <div id="app" class="clear-fix site-wrapper">
    <Header :current="'about'" :data="this.header"></Header>
    <main id="page" class="container">
      <article id="sections" class="sections">
        <Faqs :data="this.faqs"></Faqs>
      </article>
    </main>
    <Footer :data="this.footer"></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Faqs from "@/components/Faqs";
import Footer from "@/components/Footer";

export default {
  name: 'About',
  data() {
    return {
      header: {
        logo: "//static1.squarespace.com/static/6078a567cd564058f99c3281/t/60af61c40a1af747b9f5d534/1623468009452/",
      },
      faqs: [
        {
          question: "How will SuperYeti’s be launched? ",
          answer: "The Yetiverse will be launched on June 8th. Join our " +
              "<a href='https://discord.gg/9EQmFSyN2U'><span style='text-decoration:underline'>discord </span></a>" +
              "or follow us on <a href='https://twitter.com/super_yeti'><span style='text-decoration:underline'>Twitter</span></a>. " +
              "All SuperYetis can be purchased at <a href='http://www.superyeti.co'><span style='text-decoration:underline'>www.superyeti.co</span></a>, " +
              "for our secondary market place, check out our <a href='https://opensea.io/collection/superyeti'>Open Sea</a>.",
        },
        {
          question: "Who’s the creator?",
          answer: "The creator is a 3X founder, they started their first technology business in college and was fortunate to do two other successful startups all in tech. They first got into crypto in 2017, mostly hodling ETH and BTC and got their first NFT Cryptokittie in 2018. As a self-taught creator and crypto-enthusiast they sought out to create an NFT they always wanted and play the coolest game. They then landed upon the SuperYeti. But this isn’t a one-yeti-show, many people have contributed their time and talents to make the Yetiverse a reality. You can meet the founding yetis on our " +
              " <a href='https://discord.gg/9EQmFSyN2U'><span style='text-decoration:underline'>Discord</span></a>"
        },
        {
          question: "Who’s on the team?",
          answer: "We are a team of 5: Creator, blockchain developer, full-stack developer, 2 moderators. We additionally are contracting with a 3D designer and illustrator. At the moment we are hiring: game developers, game designers, more 3d artists and marketing and community professionals."
        },
        {
          question: "Why SuperYetis?",
          answer: "The creator spent many years living in the Himalayas hoping to “bump” into a special yeti, but it never happened, so they decided to create the Yetiverse, where unlimited  SuperYetis live happily ever after on the blockchain."
        },
        {
          question: "What is the Yetiverse?",
          answer: "The creator spent many years living in the Himalayas hoping to “bump” into a special yeti, but it never happened, so they decided to create the Yetiverse, where unlimited  SuperYetis live happily ever after on the blockchain."
        },
        {
          question: "How many will be created?",
          answer: "The Yetiverse is a blockchain game where all the SuperYetis live. It will include land, breeding, and competitions. Set to release early 2022."
        },
        {
          question: "How were SuperYeti’s created?",
          answer: "SuperYeti was first drafted using Adobe Illustrator, then 3d models were created in Maya, Z-brush and substance painter. Once all SuperYetis and accessories were created, an algorithm randomized all the assets to create a one-of-a-kind NFT."
        },
        {
          question: "How much do SuperYetis cost?",
          answer: "All SuperYetis during the presale are the same price 0.1 ETH, no bonded curve here."
        },
        {
          question: "What is the allocation of SuperYetis for the vitality drop?",
          answer: "<p style='white-space:pre-wrap;'>240 - Company locked SuperYetis (used for promotions, community giveaways &amp; charity)</p>" +
              "<p style='white-space:pre-wrap;'>300 - Allocation for Team&nbsp;</p>" +
              "<p style='white-space:pre-wrap;'>9460 - Pre-Sale&nbsp;</p>"
        },
        {
          question: "Who are the nonprofits you are donating to?",
          answer: "We are donating 10 ETH to 5 local grassroots organizations fighting human trafficking in Nepal and India. All transactions will be transparently shared with you."
        },
        {
          question: "Tell me more about SuperYeti Rarity?",
          answer: `<img src="https://images.squarespace-cdn.com/content/v1/6078a567cd564058f99c3281/1623779957962-F7839F3WNBC3MM8IL6DD/ke17ZwdGBToddI8pDm48kEm7dGjMybb2Dbt9RwKmW0MUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKc1rnzmfAwilcPabc2giJNgdcocYCj-nGbVZQdMhTgdMEi33ElFqjdzwjQhI0r6iVm/yeti_familyupdated-03.png" alt="yeti_familyupdated-03.png" />`
        },
        {
          question: "What are the separate tracks?",
          answer: '<p style="white-space:pre-wrap;">We grouped themes of attributes into "tracks" including : photographer yeti, gamer yeti, astro yeti, beats yeti, and of course the original yeti. </p>' +
              `<img src="https://images.squarespace-cdn.com/content/v1/6078a567cd564058f99c3281/1623780135082-GDZGATU269UNGUQ0ME19/ke17ZwdGBToddI8pDm48kHjfv2lTyDPkasNUry4CMbkUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYy7Mythp_T-mtop-vrsUOmeInPi9iDjx9w8K4ZfjXt2dkgdtN9RTCyVxTLHsgb1gcQFtwSAsbOB6mUBj21ZriU5CjLISwBs8eEdxAxTptZAUg/yeti_familyupdated-02.png" alt="yeti_familyupdated-02.png" />`
        },
        {
          question: "How many different combinations are there?",
          answer: '<p  style="white-space:pre-wrap;">The total number of traits are 88 with 5 tracks meaning there are nearly 1 million unique combinations! (We set the minimum number of traits to 3, maximum 6). </p>' +
              '<p  style="white-space:pre-wrap;">Here are the different types of traits: hair 3, head 15, eyewear 9, eye color 7, face expressions 10, mouth 4, hands 4, feet 4, fur color 27, ears 1. </p>'
        }
      ],
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
    Faqs,
    Footer,
  }
}
</script>

<style>

</style>
