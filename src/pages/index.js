import * as React from "react"
import Logo from "../images/logo.svg"
import Hero from "../images/hero.jpg"
import Wave from "../images/wave.svg"
import Fruit from "../images/fruit.jpg"
import Grain from "../images/grain.jpg"
import Beverage from "../images/beverage.jpg"
import Berry from "../images/berry.jpg"
import LogoW from "../images/logo-w.svg"


// styles
const pageStyles = {
}

// data
const links = [
  {
    text: "Tutorial",
    url: "https://www.gatsbyjs.com/docs/tutorial/",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
    color: "#E95800",
  },
  {
    text: "How to Guides",
    url: "https://www.gatsbyjs.com/docs/how-to/",
    description:
      "Practical step-by-step guides to help you achieve a specific goal. Most useful when you're trying to get something done.",
    color: "#1099A8",
  },
  {
    text: "Reference Guides",
    url: "https://www.gatsbyjs.com/docs/reference/",
    description:
      "Nitty-gritty technical descriptions of how Gatsby works. Most useful when you need detailed information about Gatsby's APIs.",
    color: "#BC027F",
  },
  {
    text: "Conceptual Guides",
    url: "https://www.gatsbyjs.com/docs/conceptual/",
    description:
      "Big-picture explanations of higher-level Gatsby concepts. Most useful for building understanding of a particular topic.",
    color: "#0D96F2",
  },
  {
    text: "Plugin Library",
    url: "https://www.gatsbyjs.com/plugins",
    description:
      "Add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
    color: "#8EB814",
  },
  {
    text: "Build and Host",
    url: "https://www.gatsbyjs.com/cloud",
    badge: true,
    description:
      "Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
    color: "#663399",
  },
]

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <header class="header">
        <div class="container">
          <div class="site">
            <a href="base-index.html">
              <img src={Logo} alt="ESSENTIALS" />
            </a>
          </div>
          <nav class="nav">
            <ul>
              <li><a href="base-index.html">TOP</a></li>
              <li><a href="base-about.html">ABOUT</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <section class="hero">
        <figure>
          <img src={Hero} alt="" />
        </figure>
        <div class="catch">
          <h1>There is no love sincerer than<br /> the love of food.</h1>
          <p>食物を愛するよりも誠実な愛はない ― バーナード・ショー</p>
        </div>
        <div class="wave">
          <img src={Wave} alt="" />
        </div>
      </section>


      <section class="food">
        <div class="container">
          <h2 class="bar">Food <span>Essence</span></h2>

          <div class="details">
            <div class="detail">
              <figure>
                <img src={Fruit} alt="" />
              </figure>
              <h3>フルーツ</h3>
              <p>FRUIT</p>
                <p>甘くてすっぱくておいしい果実たち。<br />旬のフルーツを満喫します。</p>
            </div>

            <div class="detail">
              <figure>
                <img src={Grain} alt="" />
              </figure>
              <h3>穀物</h3>
              <p>GRAIN</p>
                <p>食事の基本となる穀物。<br />毎日の活動のエネルギー源になります。</p>
            </div>

            <div class="detail">
              <figure>
                <img src={Beverage} alt="" />
              </figure>
              <h3>飲み物</h3>
              <p>BEVERAGE</p>
                <p>リラックスするのに欠かせない飲み物。<br />お気に入りの一杯はありますか？</p>
            </div>
          </div>
        </div>
      </section>

      <section class="photo">
        <h2 class="sr-only">Photo</h2>
        <figure>
          <img src={Berry} alt="赤く熟したベリー" />
        </figure>
      </section>

      <footer class="footer">
        <div class="container">
          <div class="site">
          <a href="base-index.html">
            <img src={LogoW} alt="ESSENTIALS" />
            <p>おいしい食材と食事を探求するサイト</p>
          </a>
          </div>

          <ul class="sns">
            <li>
              <a href="https://twitter.com/">
                <i class="fab fa-twitter"></i>
                <span class="sr-only">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://facebook.com/">
                <i class="fab fa-facebook-square"></i>
                <span class="sr-only">Facebook</span>
              </a>
            </li>
            <li>
              <a href="http://instagram.com/">
                <i class="fab fa-instagram"></i>
                <span class="sr-only">Instagram</span>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </main>
  )
}

export default IndexPage
