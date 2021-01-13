<template>
  <div>
    <Header />
    <Section
      title="Aproveite na TV."
      text=" Assista em Smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
          aparelhos de Blu-ray e outros dispositivos."
    />
    <Section
      statu="True"
      title="Baixe séries para assistir offline."
      text="Salve seus títulos favoritos e sempre tenha algo para assistir."
    />
    <Section
      title="Assista quando quiser."
      text="Assista no celular, tablet, Smart TV ou notebook sem pagar a mais por isso."
    />

    <Question />
    <Footer />
  </div>
</template>


<script>
import Header from "../components/AppHeader";
import Section from "../components/AppSection";
import Question from "../components/AppQuestion";
import Footer from "../components/AppFooter";

export default {
  name: "App",
  components: {
    Header,
    Section,
    Question,
    Footer,
  },
};
</script>

<style>
@font-face {
  font-family: "circular";
  src: url("../assets/font/Circular Std Font.otf");
}
@font-face {
  font-family: "OpenSans";
  src: url("../assets/font/OpenSans-SemiBold.ttf");
}
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@500;700&display=swap");
body {
  box-sizing: border-box;
  margin: 0%;
  padding: 0%;
  outline: none;
}

@media (min-width: 769px) {
  div.section .reverse {
    flex-direction: row-reverse;
  }
}
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
