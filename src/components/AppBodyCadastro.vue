<template>
  <main>
    <div class="color">
      <div class="logo">
        <router-link to="/" tag="button">
          <img src="../assets/seta-esquerda.svg" class="seta" alt="voltar" />
        </router-link>
        <img src="../assets/logo.svg" alt="logo" />
      </div>

      <form @submit.prevent="cadastro" method="POST">
        <h1>Cadastrar</h1>

        <input
          type="text"
          name="name"
          id=""
          v-model="form.name"
          placeholder="Nome"
          title="Nome Completo"
        />

        <input
          type="email"
          name="email"
          id=""
          v-model="form.email"
          placeholder="Email"
          title="Email"
        />

        <input
          type="date"
          name="date"
          id=""
          v-model="form.date"
          placeholder=""
          title="Data de nascimento"
        />

        <input
          type="password"
          name="password"
          id=""
          v-model="form.password"
          placeholder="Senha"
          title="Senha"
        />

        <input type="submit" value="Entrar" class="submit" />

        <div class="checkFooter">
          <div class="check">
            <input
              type="checkbox"
              name="check"
              v-model="form.check"
              id="checkh"
            />
            <label for="checkh">Lembre-se de mim</label>
          </div>
          <a href="">Precisa de Ajuda?</a>
        </div>

        <div class="facebook">
          <label for="facebook">facebook</label>
          <p id="facebook"></p>
        </div>
      </form>
    </div>
  </main>
</template>
<script>
import save from "../service/controller";
export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
        date: "",
        password: "",
        check: false,
      },
    };
  },
  methods: {
    cadastro() {
      console.log("oi");

      save
        .stores(this.form)
        .then(() => {
          this.form = {};
          // console.log(result);
          return this.$router.push("/inicio");
        })
        .catch((err) => console.error(err));
    },
  },
};
</script>
<style scoped>
main {
  height: 100vh;
  background-color: #000;
}
h1 {
  font-family: "Roboto";
  margin: 0% 0 30px;
  color: #fff;
}
.logo {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  left: 20px;
  height: 100px;
  margin: 0 auto;
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
.logo img {
  width: 100px;
}
.logo .seta {
  width: 30px;
}
form {
  height: 400px;
  width: 90%;
  height: auto;
  margin: 0 auto;
  display: flex;
  justify-content: left;
  align-items: left;
  flex-direction: column;
}
input {
  background-color: #333;
  color: #fff;
  font-size: 18px;
  border: none;
  margin: 0 auto 20px;
  width: 100%;
  height: 50px;
  border-radius: 5px;
}
.submit {
  background-color: #e50914;
  color: #fff;
  font-family: "Roboto";
  font-size: 20px;
  margin-top: 30px;
}
.checkFooter {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.check {
  display: flex;
  justify-content: left;
  align-items: center;
  width: 45%;
}
a,
.check label {
  cursor: pointer;
  color: #b3b3b3;
  font-size: 13px;
  font-weight: 500;
  font-family: "Roboto";
  text-decoration: none;
}

.check input {
  cursor: pointer;
  width: 20%;
  height: 15px;
  margin: 0;
}
.facebook {
  color: #fff;
  margin: 65px 0 0;
}
p {
  color: #fff;
  margin: 10px 0;
  color: #b3b3b3;
  font-size: 13px;
  font-weight: 500;
  font-family: "Roboto";
}
@media (min-width: 733px) {
  main {
    background-image: url("../assets/init/init.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    height: 660px;
  }
  .logo {
    margin: 45px auto 0;
  }
  form {
    width: 357px;
    background-color: rgba(0, 0, 0, 0.75);
    padding: 60px 50px 40px;
  }
  .color {
    display: flex;
    flex-direction: column;
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
}
</style>