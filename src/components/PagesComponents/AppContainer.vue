<template >
  <section>
    <!-- <video src="../../assets/video/Home/minions2.mp4" autoplay muted loop>
      <font-awesome-icon class="icons" icon="play" />
    </video> -->

    <div class="section" v-for="item in fil" :key="item.id">
      <h1 style="color: #fff">{{ item.title }}</h1>
      <img src="../../assets/video/Home/avengers-infinity.jpg" alt="" />
      <!--  Quero renderizar as imagens da api Filmes na tag img   o caminho inicial das imagens https://image.tmdb.org/t/p/w500   e para acessar item.backdrop_path-->
    </div>
  </section>
</template>
<script>
import filmes from "../../service/controller";
export default {
  data() {
    return {
      fil: [],
    };
  },

  mounted() {
    filmes
      .imgFilmes()
      .then((result) => {
        this.fil = result.data.results;
        // console.log(this.fil);
      })
      .catch((err) => console.error(err));
  },
};
</script>
<style scoped>
h1 {
  position: absolute;
  background: black;
}
section,
.section {
  /* height: 300px; */
  height: 300px;
  min-width: 500px;
  border: 2px solid #fff;
  margin: 20px;
  position: relative;
  overflow: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
section:hovrt {
  display: block;
}
img {
  width: 100%;
  position: relative;
  opacity: 1;
  transition: 1s linear;
}
img:hover {
  opacity: -2;
}
video {
  width: 80%;
  position: absolute;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;

  /* height: auto;
  width: auto;
  background-size: cover; */
}

@media (min-width: 765px) {
  section {
    min-width: 400px;
  }
}
</style>