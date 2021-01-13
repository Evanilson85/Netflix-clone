<template>
  <header>
    <div class="color">
      <div class="logo">
        <img src="../assets/logo.svg" alt="logo" />

        <router-link to="/login" tag="button">Entrar </router-link>
      </div>

      <div class="init">
        <h1>Filmes, séries e muito mais. Sem limites.</h1>

        <p>
          Assita onde quiser. Cancele quando quiser.
          <br />
          <br />
          Pronto para assitir? Informe seu email para criar ou reniciar sua
          assinatura
        </p>
        <Input />
      </div>
    </div>
  </header>
</template>

<script>
import Input from "./AppInput.vue";
export default {
  components: {
    Input,
  },
};
</script>

<style scoped>
header {
  background-image: url("../assets/init/init.jpg");
  background-size: cover;
  height: 660px;
  background-repeat: no-repeat;
  position: relative;
  border-bottom: 8px solid #222;
}
.color {
  display: flex;
  justify-content: center;
  position: relative;
  height: 660px;
  width: 100%;
  background-image: -webkit-gradient(
    linear,
    left bottom,
    left top,
    from(rgb(0 0 0)),
    color-stop(50%, rgba(0, 0, 0, 0)),
    to(rgb(0 0 0))
  );
}
.logo {
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin: 40px auto;
}

.logo img {
  width: 100px;
}

.logo button {
  background-color: rgb(229 9 20);
  border: none;
  border-radius: 5px;
  color: #fff;
  padding: 7px 17px;
  height: 40px;
  width: 95px;
  cursor: pointer;
  outline: none;
}

.init {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
h1 {
  text-align: center;
  color: #fff;
  font-size: 1.75rem;
  line-height: 1.1;
  font-family: "Roboto", sans-serif;
  font: 700;
  width: 90%;
  margin: 0 auto;
}
p {
  font-family: "Roboto", sans-serif;
  text-align: center;
  color: #fff;
  width: 75%;
}

@media (min-width: 789px) {
  .logo img {
    width: 150px;
  }
  h1 {
    width: 80%;
    font-size: 2.75rem;
    margin-top: 85px;
  }
  p {
    font-size: 1.3rem;
  }
}
</style>