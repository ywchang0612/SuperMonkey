<template>
  <div id="app" class="clear-fix site-wrapper">
    <Header :current="'home'" :data="this.header"></Header>
    <main id="page" class="container">
      <article id="sections" class="sections">
        <Greeting :data="this.greeting"></Greeting>
        <SoldOut :data="this.soldOut"></SoldOut>
        <Introduce :data="this.introduce"></Introduce>
        <WhatsYourSeven :data="this.whatsYourSeven"></WhatsYourSeven>
        <Roadmap :data="this.roadmap"></Roadmap>
        <Team :data="this.team"></Team>
      </article>
    </main>
    <Footer :data="this.footer"></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Greeting from "@/components/Greeting";
import SoldOut from "@/components/SoldOut";
import Introduce from "@/components/Introduce";
import WhatsYourSeven from "@/components/WhatsYourSeven";
import Roadmap from "@/components/Roadmap";
import Team from "@/components/Team";
import Footer from "@/components/Footer";

export default {
  name: 'App',
  data() {
    return {
      header: {
        logo: '/assets/logo.png',
      },
      greeting: {
        banner: {
          desktop: "/assets/HeroBanner-desktop.png",
          mobile: "/assets/HeroBanner-mobile.png"
        },
        welcome: "Welcome to Monkeybrix Studios",
        spec: "We’re making the first NFT show of its kind where YOUR Monkeybrix can be in the cast.",
        content: [
            "Monkeybrix 7 is a show about assembling a league of 7 Monkeybrix to face an imminent threat.",
            "Each Monkeybrix is a unique superhero collectible that has a chance to appear on Monkeybrix 7, receive rewards, and even become famous.",
            "Owning a Monkeybrix also grants you exclusive studio membership."
        ]
      },
      soldOut: {
        title: "Sale Launch",
        content: "Monkeybrix drops on 7/7/21. You can buy a maximum of 20 at a time, and pay gas fee once. You might even score a rare one. For our secondary market place, check out Open Sea. Join our discord or follow us on Twitter.",
        heroImage: "/assets/012.png"
      },
      introduce: {
        title: "What is SuperYeti?",
        heroImage: "/assets/intro01.png",
        hero2: {
          left: "/assets/17.png",
          right: "/assets/26.png"
        },
        features: [
          {
            subject: "Monkeybrix",
            description: "10,000 unique NFT characters programmatically generated and stored as ERC-721 on Ethereum by IPFS. Monkeybrix sold here are the same price (0.08 ETH) - no bonded curve. Each Monkeybrix is a unique superhero collectible that also has a chance to appear on the Monkeybrix 7 show, receive rewards, and even become famous. Superheroes x Monkeys x Brix. Badass."
          },
          {
            subject: "Traits",
            description: "Monkeybrix are generated from nearly 200 possible traits separated into 9 categories: headwear, eyes, mouths, skin colors, shirts, pants, capes, background, and accessories. There are many rare traits and hidden themes to collect. Just a heads up, some Monkeybrix aren’t very fond of clothes."
          }
        ],
        features2: [
          {
            subject: "Show",
            description: "Monkeybrix Studios is an NFT studio producing an NFT show with an NFT cast using NFT sets and props. Phew...that was a mouthful. The cast for the show will be selected from minted Monkeybrix, it could be yours. Our pilot show is Monkeybrix 7, a story about assembling a league of 7 Monkeybrix to face an imminent threat. What’s your seven?"
          },
          {
            subject: "Studio Membership",
            description: "Owning a Monkeybrix also makes you a studio member where you can participate in discussions of shows and activities that can feature your Monkeybrix. Join our discord or follow us on Twitter."
          }
        ]
      },
      whatsYourSeven: {
        heroImage: "/assets/whatsyourseven.png"
      },
      roadmap: {
        title: "Roadmap",
        heroImage: {
          left: "/assets/31.png",
          right: "/assets/32.png"
        },
        features: [
          {
            subject: "25%",
            description: "A few lucky holders of seven or more Monkeybrix will randomly be airdropped one company locked Monkeybrix"
          },
          {
            subject: "50%",
            description: "Monkeybrix selected for show promotion and receive rewards"
          },
          {
            subject: "75%",
            description: "Monkeybrix selected to appear on the show and receive rewards"
          },
          {
            subject: "100%",
            description: "Show production begins"
          }
        ],
        units: [
            '/units/unit_3.png',
            '/units/unit_4.png',
            '/units/unit_5.png',
            '/units/unit_7.png',
            '/units/unit_8.png',
            '/units/unit_9.png',
            '/units/unit_10.png',
            '/units/unit_11.png',
            '/units/unit_12.png',
            '/units/unit_13.png',
        ]
      },
      team: {

      },
      footer: {
        link: {
          twitter: "https://twitter.com/super_yeti",
          discord: "https://discord.gg/ApesASVn4E"
        },
        logo: "/assets/logo.png",
        copyright: "All Rights Reserved, MONKEYBRIX 2021"
      }
    }
  },
  components: {
    Header,
    Greeting,
    SoldOut,
    Introduce,
    WhatsYourSeven: WhatsYourSeven,
    Roadmap: Roadmap,
    Team: Team,
    Footer,
  }
}
</script>

<style>

</style>
