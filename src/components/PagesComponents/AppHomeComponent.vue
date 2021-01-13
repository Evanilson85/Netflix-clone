<template>
  <header>
    <div class="logo">
      <img src="../../assets/logo.svg" alt="logo" />

      <MenuDesk class="menuDesk" />
      <Menu class="menuMobile" />
      <!-- <MenuDesk class="menuDesk" v-show="!mobileViws" />
      <Menu class="menuMobile" v-show="mobileViws" /> src="../../assets/video/Home/vingadores.mp4"-->
    </div>
    <div class="video">
      <video
        :src="require('../../assets/video/Home/' + this.video)"
        autoplay
        muted
        loop
      ></video>
    </div>

    <div class="color">
      <div class="title">
        <h1>{{ title }}</h1>
        <div class="btns">
          <button><font-awesome-icon class="icons" icon="play" />Play</button>
          <button>
            <font-awesome-icon class="icons" icon="plus" /> PlayList
          </button>
        </div>
        <h2>{{ subtitle }}</h2>
        <p>
          {{ info }}
        </p>
      </div>
    </div>
  </header>
</template>

<script>
import Menu from "./AppMenuMobile";
import MenuDesk from "./AppMenuDesktop";
export default {
  data: () => {
    return {
      mobileViws: true,
    };
  },
  props: {
    title: String,
    subtitle: String,
    info: String,
    video: String,
  },
  methods: {
    handleView() {
      this.mobileViws = window.innerWidth < 760;
      return this.mobileViws;
      //! refatorar
    },
  },
  components: {
    Menu,
    MenuDesk,
  },
  created() {
    // console.log(this.handleView());
  },
};
</script>

<style scoped>
header {
  height: 100vh;
  background-image: linear-gradient(
    to right,
    #000000c4 40%,
    rgba(38, 38, 43, 0.282),
    rgba(0, 0, 255, 0)
  );
  width: 100%;
  overflow: hidden;
}

.logo {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin: 0 auto 40px;
  height: 85px;
}

.logo img {
  width: 100px;
}
.video {
  width: 100vw;
  overflow: hidden;
}
video {
  position: absolute;
  z-index: -1;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  height: auto;
  width: auto;
  background-size: cover;
  /* position: ABSOLUTE;
  top: 0;
  height: 100vh;

  z-index: -1; */
}
.menuDesk {
  display: none;
}

.menuMobile {
  display: block;
}
.color {
  height: 65%;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.title {
  width: 40%;
  height: 100%;
  margin: 0 auto 0 5%;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.title h1 {
  font-family: "Roboto";
  font-family: 2rem;
  color: #fff;
}
.btns {
  width: 65%;
  display: flex;
  justify-content: space-between;
}
.btns button {
  height: 40px;
  width: 150px;
  background: rgba(0, 0, 0, 0.46);
  color: #fff;
  border: none;
  font-size: 1.2rem;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

h2 {
  display: none;
  color: #fff;
  font-size: 1.7rem;
  font-family: "Roboto";
}
p {
  display: none;
  color: #fff;
  font-size: 15px;
  font-family: "OpenSans";
}
.icons {
  color: #fff;
  margin-right: 10px;
}
@media (min-width: 769px) {
  .menuDesk {
    display: block;
  }

  .menuMobile {
    display: none;
  }

  .title h1 {
    font-size: 5rem;
  }
  h2,
  p {
    display: block;
  }
}

/* .color {
  width: 50%;
  height: 85vh;
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(
    to right,
    #000000c4 90%,
    rgba(38, 38, 43, 0.282),
    rgba(0, 0, 255, 0)
  );
}
video {
  width: 100%;
} */
</style>