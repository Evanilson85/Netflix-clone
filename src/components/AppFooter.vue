<template>
  <footer>
    <div class="footer">
      <div class="duvidas"><h3>Dúvidas? Ligue 0800-000-0000</h3></div>
      <div class="ul">
        <ul>
          <li>
            <a href="">Perguntas Frequentes</a>
          </li>
          <li>
            <a href="">Conta</a>
          </li>
          <li>
            <a href="">Relações com Investimento</a>
          </li>
          <li>
            <a href="">Resgatar cartão</a>
          </li>
          <li>
            <a href="">Formas de assistir</a>
          </li>
        </ul>

        <ul>
          <li>
            <a href="">Privacidade</a>
          </li>
          <li>
            <a href="">Inormações</a>
          </li>
          <li>
            <a href="">Teste de Velocidade</a>
          </li>
          <li>
            <a href="">Originais Netflix</a>
          </li>
          <li>
            <a href="">Centro de ajuda</a>
          </li>
        </ul>

        <ul>
          <li>
            <a href="">Impresa</a>
          </li>
          <li>
            <a href="">Carreiras</a>
          </li>
          <li>
            <a href="">Comprar Cartão</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="">Termos de uso</a>
          </li>
          <li>
            <a href="">Cookies</a>
          </li>
          <li>
            <a href="">Entre em contato</a>
          </li>
          <li>
            <a href="">Avisos Legais</a>
          </li>
        </ul>
      </div>

      <div class="select">
        <select name="" id="">
          <option value="">Portugues</option>
          <option value="">Ingles</option>
        </select>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
footer {
  height: 850px;
  background-color: rgb(0, 0, 0);
}
.footer {
  padding: 20px 10px 0;
  display: flex;
  max-width: 900px;
  margin: 0 auto;
  flex-direction: column;
}
.duvidas h3 {
  font-size: 1em;
  color: #757575;
  padding: 7% 7% 0;
}
ul {
  padding: 0%;
  width: 50%;
}
.ul {
  height: auto;
  width: 86%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
}
.select {
  padding: 7% 7% 0;
}
select {
  height: 40px;
  width: 100px;
  background: #000;
  color: #fff;
  display: flex;
}
ul li {
  margin-right: 20px;
  margin-bottom: 20px;
}
ul li a {
  font-size: 1em;
  color: #757575;
  text-decoration: none;
  line-height: 1.3;
}
@media (min-width: 769px) {
  ul {
    width: 25%;
  }
}
</style>