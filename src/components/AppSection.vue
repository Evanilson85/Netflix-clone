<template>
  <section>
    <div class="section" :class="{ row: statu }">
      <div class="infor">
        <h1>{{ title }}</h1>
        <p>
          {{ text }}
        </p>
      </div>
      <div class="tv">
        <div class="sub">
          <video src="../assets/video/tv.mp4" autoplay loop></video>
          <img src="../assets/section/tv.png" alt="TV" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    title: {
      type: String,
    },
    text: {
      type: String,
    },
    statu: {
      type: Boolean,
    },
  },
};
</script>

<style scoped>
section {
  width: 100%;
  background-color: #000;
  border-bottom: 8px solid #222;
}
.section {
  margin: 0 auto;
  max-width: 1024px;
  height: auto;
  display: flex;
  flex-direction: column;
}
.infor {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: left;
  padding: 40px 40px 0;
}
.sub {
  position: relative;
}
.tv img {
  position: relative;
  z-index: 4;
  width: 100%;
}
/* .teste {
  position: absolute;
  height: 40px;
  width: 80%;
  margin: 0 auto;
  bottom: 0;
  background-color: aqua;
} */
.sub video {
  position: absolute;
  left: 46px;
  width: 74%;
  bottom: 78px;
}
h1 {
  margin: 0%;
  text-align: center;
  color: #fff;
  font-family: "Roboto";
  font-size: 1.7rem;
}
p {
  font-size: 1.2rem;
  line-height: 1.3;
  font-family: "Roboto", "Arial";
  font: 500;
  text-align: center;
  color: #fff;
}
@media (min-width: 669px) {
  .sub video {
    left: 91px;
    width: 73%;
    bottom: 130px;
  }
}
@media (min-width: 769px) {
  .section {
    flex-direction: row;
  }
  .sub video {
    left: 60px;
    width: 74%;
    bottom: 91px;
  }
  .row {
    flex-direction: row-reverse;
  }
}
</style>