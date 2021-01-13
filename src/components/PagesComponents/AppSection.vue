<template >
  <main>
    <div class="new">
      <h1>Novidades</h1>
      <!-- v-for="filme in filmes" :key="filme.id" -->

      <div class="container">
        <Container />
      </div>
    </div>
  </main>
</template>
<script>
import Container from "./AppContainer";
//import filmes from "../../service/controller";
export default {
  data() {
    return {
      filmes: {
        title: "",
      },
    };
  },
  components: {
    Container,
  },
  methods: {
    alerta() {
      console.log("oi");
    },
  },
  mounted() {},
};
</script>
<style scoped>
main {
  height: 100vh;
  background-color: rgb(2, 2, 2);
  position: relative;
}
.new {
  position: relative;
  top: 70px;
  width: 90%;
  margin: 0 auto;
}
h1 {
  color: #fff;
  margin: 0%;
  font-family: "OpenSans";
  font-size: 2rem;
}
.container {
  width: 100%;
  display: flex;
  overflow: auto;
  /* flex-wrap: wrap; */
}
.container::-webkit-scrollbar {
  height: 1px;
  width: 2px;
}
.container::-webkit-scrollbar-thumb {
  background-color: red;
}
</style>