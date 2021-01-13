<template>
  <section class="section">
    <h1>Perguntas Frenquentes</h1>
    <Question title="O que é Netflix?" />
    <Question title="Quanto custa a Netflix?" />
    <Question title="Onde pooso assitir?" />
    <Question title="Como faço para cancelar?" />
    <Question title="O que eu posso assistir na Netflix?" />

    <h2>
      Pronto para assistir? Informe seu email para criar ou reiniciar sua
      assinatura.
    </h2>
    <Input class="input" />
  </section>
</template>

<script>
import Question from "./AppQuestionPart.vue";
import Input from "./AppInput.vue";
export default {
  components: {
    Question,
    Input,
  },
};
</script>

<style scoped>
.section {
  height: auto;
  background: rgb(0, 0, 0);
  display: flex;
  align-items: center;
  flex-direction: column;
  border-bottom: 8px solid #222;
}
h1 {
  font-size: 1.7rem;
  margin-top: 70px;
  font-family: "Roboto";
  color: #fff;
}
h2 {
  width: 80%;
  text-align: center;
  font-size: 1.1rem;
  margin-top: 70px;
  font-family: "Roboto";
  color: #fff;
}
.input {
  margin-bottom: 10%;
}
@media (min-width: 768px) {
  .input {
    width: 56%;
  }
}
</style>