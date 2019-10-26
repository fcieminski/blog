import React from "react"
import Layout from "../components/Layout"

import "../styles/about.scss"
import me from "../images/12.png"
import Facebook from "../images/icons/facebook.svg"
import Githublogo from "../images/icons/githublogo.svg"
import Linkedin from "../images/icons/linkedin.svg"

const About = () => {
  return (
    <Layout>
      <main className="about">
        <div className="about-me">
          <section className="about-me__info">
            <h1>o mnie</h1>
            <p>
              Front-end developer, zapalony podróżnik, fascynat nowoczesnych
              technologii.. no i to by było na tyle.
            </p>
            <p>jest jeszcze trochę, jeśli kogoś to interesuje.</p>
            <p>
              Niegdyś zajmowałem się marketingiem w sieci, prowadziłem
              komunikację i kampanie reklamowe w mediach społecznościowych,
              uważam, że byłem całkiem dobry, jednak praca w tym zawodzie
              uświadomiła mi, że to nie dla mnie i muszę coś zmienić, bo inaczej
              będę jednym z tych, którzy z bólem wstają rano do pracy, a
              wracając, przeklinają kolejny dzień. Więc wziąłem się do roboty,
              powiedziałem sobie
              <strong>Filip, pora na zmiany!</strong>Poszedłem na kurs
              programowania i tak o to, spełniłem swoje marzenie z dzieciństwa.
            </p>
            <p>
              Dzisiaj, mogę śmiało nazwać siebie (junior)
              <strong> Front-end developerem i jestem z tego dumny!</strong>
            </p>
          </section>
          <section
            style={{ backgroundImage: `url(${me})` }}
            className="about-me__photo"
          ></section>
        </div>
        <section className="about-me__contact">
          <div>
            <h2>Zostańmy w kontakcie</h2>
            <p>
              Nigdy niewiadomo, czy w przyszłości nie będziemy siebie
              potrzebowali, może chcesz omówić kwestie biznesowe, pogadać o byle
              czym, lub umówić się na kawę, jestem do Twoje dyspozycji.
              Znajdziesz mnie na tych kanałach...
            </p>
            <div className="contact__links">
              <a href="" className="links">
                <Facebook className="icons" />
              </a>
              <a href="" className="links">
                <Githublogo className="icons" />
              </a>
              <a href="" className="links">
                <Linkedin className="icons" />
              </a>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}

export default About
