<template>
  <section>
    <button>
      <h2>{{ title }}</h2>
      +
    </button>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
    },
  },
};
</script>

<style  scoped>
section {
  width: 80%;
  margin: 0 auto;
  max-width: 700px;
}

button {
  width: 100%;
  height: 55px;
  margin: 0 auto 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  background-color: #303030;
  outline: none;
  color: #fff;
  border: none;
}
button:focus {
  background-color: rgb(87, 102, 102);
}
@media (min-width: 768px) {
  button {
    height: 95px;
  }
  h1 {
    font-size: 2.6rem;
  }
}
</style>