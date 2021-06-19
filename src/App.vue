<template>
  <div id="app" class="clear-fix site-wrapper">
    <Header :data="this.header"></Header>
    <main id="page" class="container">
      <article id="sections" class="sections">
        <Greeting :data="this.greeting"></Greeting>
        <SoldOut :data="this.soldOut"></SoldOut>
        <Introduce :data="this.introduce"></Introduce>
        <Presale :data="this.presale"></Presale>
        <HellaUnique :data="this.hellaUnique"></HellaUnique>
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
import Presale from "@/components/Presale";
import HellaUnique from "@/components/HellaUnique";
import Footer from "@/components/Footer";

export default {
  name: 'App',
  data() {
    return {
      header: {
        logo: "//static1.squarespace.com/static/6078a567cd564058f99c3281/t/60af61c40a1af747b9f5d534/1623468009452/",
      },
      greeting: {
        welcome: "Welcome to the Monkeyverse",
        herosImage: "https://images.squarespace-cdn.com/content/v1/6078a567cd564058f99c3281/1623757211914-7BSPCYIWPM0EPXBU2HM6/ke17ZwdGBToddI8pDm48kD0qsoJjXsd2g-l2sy5F9QcUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcQiroJt_GWnYQ2OPrSA9mXlglsFGOTzJqh6sz62BU3SuPPX9cJVPQnl_o8GtNHV-L/yeti_family_homepage-05-05.png",
        spec: "🚀 10,000 NFT’s | Same price (0.1 ETH) - no bonded curve 😍",
        button: {
          text: "Join Our Discord",
          link: "https://discord.gg/9EQmFSyN2U"
        }
      },
      soldOut: {
        text: "Sold out in 4 days, thanks Yeti fam!",
        heroImage: "https://images.squarespace-cdn.com/content/v1/6078a567cd564058f99c3281/1623646047596-F4DBF92R1LX4U0VKEKGR/ke17ZwdGBToddI8pDm48kJK4Mm1kch8SFO9ZNkN1NT97gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmN9YSRtfoTLg6dUq-6F17A0FFZK5fArcnK1IqGweyunyWChwIwkIJ_P7MaZif-uMs/finalyeti10.png"
      },
      introduce: {
        title: "What is SuperYeti?",
        heroImage: "https://images.squarespace-cdn.com/content/v1/6078a567cd564058f99c3281/1623757821537-TEDCMEW33UEKSZIOQFTJ/ke17ZwdGBToddI8pDm48kJK4Mm1kch8SFO9ZNkN1NT97gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmFk_H6M1tkD9NpL7mXac0oVSXdFfjxR5AjcLwGSebOiGBsFzzcw3xKxvyC_6CFFG_/Test_superYeti_photographer_23.jpg",
        features: [
          {
            icon: "https://images.squarespace-cdn.com/content/v1/6078a567cd564058f99c3281/1622105950754-E8VVVNLSK1L9UJVPSRE6/ke17ZwdGBToddI8pDm48kIiyhAZniGp-m9x_HQpsdvBZw-zPPgdn4jUwVcJE1ZvWhcwhEtWJXoshNdA9f1qD7XxG-9FZQiNMT_ZdcQnlMXZi8ZcBmCBJxzpybnsmhFEmnP417Q4Gd8hkMqjCrp6Tog/iconssuperyeti11png-01.png",
            subject: "The Yeti",
            description: "SuperYetis are 3D interactive characters randomized through a secret algorithm to ensure everyone gets a cute AF SuperYeti."
          },
          {
            icon: "https://images.squarespace-cdn.com/content/v1/6078a567cd564058f99c3281/1622764308093-5XDRKCBZGJA4654R8MDT/ke17ZwdGBToddI8pDm48kL9Tv4sdxJpjI7OvFoG599JZw-zPPgdn4jUwVcJE1ZvWhcwhEtWJXoshNdA9f1qD7eaDBaxyzPPG4B3J3_Z93rYZVJPIA_sMyiw6ccoBPXJgpGPBNKYN4fTlTvJdH2c0kA/iconsswebsite-03.png",
            subject: "The Contract",
            description: "SuperYeti NFTs are created through a standard ERC-721 contract backed by IPFS file storage and registered on the Ethereum Blockchain. Guaranteed to outlast us all!"
          },
          {
            icon: "https://images.squarespace-cdn.com/content/v1/6078a567cd564058f99c3281/1622764378068-P8AWI6PI7LFV84M2QRXX/ke17ZwdGBToddI8pDm48kBzOD3JMfbI9jQW0YDwCrD1Zw-zPPgdn4jUwVcJE1ZvWhcwhEtWJXoshNdA9f1qD7fuBZ4h1tngtocbAcnQlXimW0JI1B6JTOWX9FR0OUwVwKm6UtTWG2FLgPiTpnv6p3Q/iconsswebsite-02.png",
            subject: "The Game",
            description: "The Yetiverse is a multiplayer, play-to-earn game where SuperYetis own land, breed and compete with one another to protect the Yetiverse. *Set to release early 2022."
          }
        ]
      },
      presale: {
        title: "Presale 7 days only",
        description: "On Tuesday June 8th, the entire SuperYeti collection will be available to mint. You can buy 30 at a time, and pay gas fees once. <strong>The SuperYeti you receive will be revealed on June 15th at 3:00 PM ET. </strong>You may even get lucky and score Apex or Alpha (the rarest of SuperYetis).",
        heroImage: "https://images.squarespace-cdn.com/content/v1/6078a567cd564058f99c3281/1622620985799-Y4UFVVH2OOSF0ZD2TS74/ke17ZwdGBToddI8pDm48kJK4Mm1kch8SFO9ZNkN1NT97gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmN9YSRtfoTLg6dUq-6F17A0FFZK5fArcnK1IqGweyunyWChwIwkIJ_P7MaZif-uMs/Yeti_web7.png"
      },
      hellaUnique: {
        title: "Hella Uniqueeeee",
        heroImage: "https://images.squarespace-cdn.com/content/v1/6078a567cd564058f99c3281/1622664098402-NSTP2MEORK6GUYUY5DFY/ke17ZwdGBToddI8pDm48kKkdcnzYLF4indVry4LJewcUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKc7-o6n1ZYzzps2jkNsMlGpFlYJb40Gieb34GIsmELmg9BYg-g0ETFNYIXHOSO7gr-/3+yetis+website-02.png",
        features: [
          {
            icon: "https://images.squarespace-cdn.com/content/v1/6078a567cd564058f99c3281/1622108391491-9MYAJ4ZE0RC59BC4MMEJ/ke17ZwdGBToddI8pDm48kLuY7ZO6cYHIQurpki0gVdNZw-zPPgdn4jUwVcJE1ZvWhcwhEtWJXoshNdA9f1qD7UnCxNA8dHvmd7460Z7fbKEYj8f-6i52m2BqbuvYgpyoZmy-jBpc5eJ9hfftSO3Ufg/iconssuperyeti-05.png",
            subject: "Interactive",
            description: "Utilizing 3D software to create each SuperYeti ensures a rich futuristic experience in the Yetiverse specifically and any Metaverse generally!"
          },
          {
            icon: "https://images.squarespace-cdn.com/content/v1/6078a567cd564058f99c3281/1622169422934-9GMX1IA6SVODM9GB6A3S/ke17ZwdGBToddI8pDm48kP0zibU00kFydKeOOBlBwZhZw-zPPgdn4jUwVcJE1ZvWhcwhEtWJXoshNdA9f1qD7TtM594zIdQAwli_U78u76KUPTSW_wTbKw6BeR-ImdilR1CyWeNSbWOv5XlqJXo1tw/iconssuperyeti-04.png",
            subject: "Same Price",
            description: "No bonded curve, no FOMO buying before the price skyrockets. You’re able to join the Yetiverse and own a SuperYeti for a consistent .1 ETH, even though some are rarer than others!"
          },
          {
            icon: "https://images.squarespace-cdn.com/content/v1/6078a567cd564058f99c3281/1622184060713-PKK5AM3B1USIMTJ8RBWM/ke17ZwdGBToddI8pDm48kAz3LRIHJYsWSvz0pZzjbJ9Zw-zPPgdn4jUwVcJE1ZvWhcwhEtWJXoshNdA9f1qD7XaGPskfQtVutuSA2B-JW6yb-GvDfyKQwz6RRz7HD_6WJgw1iv3xIjFx0TVBRi0TPg/iconssuperyeti-06.png",
            subject: "Utility",
            description: "SuperYetis are much more than an NFT. They are bringing back our childhood dreams to create a decentralized world of the Yetiverse on the blockchain to build, play, and earn."
          }
        ],
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
    Greeting,
    SoldOut,
    Introduce,
    Presale,
    HellaUnique,
    Footer,
  }
}
</script>

<style>

</style>
