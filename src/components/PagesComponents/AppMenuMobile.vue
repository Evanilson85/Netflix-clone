<template>
  <div>
    <div class="container-menu">
      <input
        type="checkbox"
        name=""
        id="check-menu"
        @click="showNav = !showNav"
      />
      <label for="check-menu">
        <span></span>
        <span></span>
        <span></span>
      </label>
    </div>
    <nav :class="{ open: showNav }">
      <ul class="ul">
        <li>Home</li>
        <li>Home</li>
        <li>Home</li>
      </ul>
      <ul class="ul2">
        <li class="li">
          <input type="search" name="" id="search" />
          <label for="search">
            <font-awesome-icon class="icons" icon="search" />
          </label>
        </li>
        <li>
          <font-awesome-icon class="icon" icon="bell" />
        </li>
        <li>
          <div class="dropdown">
            <div class="dropbtn">
              <img src="../../assets/user/user1.png" alt="" /> User
              <font-awesome-icon class="icons" icon="sort-down" />
            </div>
            <div class="dropdown-content">
              <a href="#"
                ><img src="../../assets/user/user2.png" alt="" /> User 1</a
              >
              <a href="#"
                ><img src="../../assets/user/user3.png" alt="" /> USer 2</a
              >
              <a href="#"
                ><img src="../../assets/user/user4.png" alt="" /> User 3</a
              >
              <a href="">Conta</a>
              <a href="">Central de Ajuda</a>
              <a href="">Sair</a>
            </div>
          </div>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
export default {
  data: () => {
    return {
      showNav: false,
    };
  },
  components: {},
};
</script>


<style scoped>
nav {
  height: 100vh;
  background-color: rgb(9, 10, 10);
  width: 80%;
  border-right: 1px solid #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: -100%;
  transition: 0.1s linear;
  top: 0%;
  flex-direction: column-reverse;
}
nav.open {
  left: 0%;
}

nav.toggle {
  left: -50%;
}
nav ul {
  padding: 0%;
  margin: 0%;
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
nav ul li {
  margin-bottom: 10px;
}
.container-menu {
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;
  z-index: 3;
  right: 0;
  padding: 29px;
  top: -7px;
}

#check-menu {
  position: absolute;
  opacity: 0;
}

label {
  cursor: pointer;
  position: relative;
  display: block;
  height: 22px;
  width: 30px;
  z-index: 1;
  margin: 0;
}

label span {
  position: absolute;
  display: block;
  height: 3px;
  width: 100%;
  border-radius: 30px;
  background-color: rgb(226, 28, 28);
  transition: 0.25s ease-in-out;
}

label span:nth-child(1) {
  top: 0;
}

label span:nth-child(2) {
  top: 8px;
}

label span:nth-child(3) {
  top: 16px;
}

#check-menu:checked + label span:nth-child(1) {
  transform: rotate(-45deg);
  top: 8px;
}

#check-menu:checked + label span:nth-child(2) {
  opacity: 0;
}

#check-menu:checked + label span:nth-child(3) {
  transform: rotate(45deg);
  top: 8px;
}
.container-menu {
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;
  z-index: 3;
  right: 0;
  padding: 29px;
  top: -7px;
}

#check-menu {
  position: absolute;
  opacity: 0;
}

label {
  cursor: pointer;
  position: relative;
  display: block;
  height: 22px;
  width: 30px;
  z-index: 1;
  margin: 0;
}

label span {
  position: absolute;
  display: block;
  height: 3px;
  width: 100%;
  border-radius: 30px;
  background-color: rgb(226, 28, 28);
  transition: 0.25s ease-in-out;
}

label span:nth-child(1) {
  top: 0;
}

label span:nth-child(2) {
  top: 8px;
}

label span:nth-child(3) {
  top: 16px;
}

#check-menu:checked + label span:nth-child(1) {
  transform: rotate(-45deg);
  top: 8px;
}

#check-menu:checked + label span:nth-child(2) {
  opacity: 0;
}

#check-menu:checked + label span:nth-child(3) {
  transform: rotate(45deg);
  top: 8px;
}

.icons {
  color: #fff;
  font-size: 20px;
}
.icon {
  color: #fff;
  font-size: 25px;
}
.navs {
  width: 100%;
}

nav ul {
  padding: 0%;
  margin: 0%;
  list-style: none;
  display: flex;
  justify-content: left;
  align-items: center;
  width: 100%;
}
.ul {
  height: 65%;
}
.ul li {
  width: 90%;
  display: block;
  font-size: 35px;
}
.ul2 {
  flex-direction: row-reverse;
  width: 100%;
  position: absolute;
  top: 45px;
  border-bottom: 1px solid #fff;
}
.li {
  position: relative;
  width: 36%;
  height: 35px;
}
nav ul li {
  margin: 0 20px;
  cursor: pointer;
  color: #fff;
  font-family: "OpenSans", "Arial";
  display: flex;
  align-items: center;
  justify-content: center;
}
nav ul li label {
  position: absolute;
  right: 5px;
  top: 8px;
  cursor: pointer;
}
nav ul li #search {
  height: 42px;
  padding-left: 10px;
  border: none;
  border-radius: 5px;
  width: 0px;
  display: flex;
  justify-content: right;
  align-items: center;
  position: absolute;
  /* right: 30%; */
  outline: none;
  right: 0;
  transition: 0.1s linear !important;
  background-color: rgba(138, 118, 118, 0);
  color: #fff;
}
nav ul li #search:focus {
  background-color: rgb(68, 67, 67);
  width: 150px;
}
select {
  width: 100px;
  height: 54px;
  background: black;
  border: none;
  color: #fff;
}
.dropbtn {
  background-color: #0000007e;
  color: white;
  height: auto;
  width: 61%;
  height: 30px;
  font-size: 16px;
  border: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 13px 15px 13px 0;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #000000;
  width: 227px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  border: 1px solid #fff;
}

.dropdown-content a {
  color: #fff;
  padding: 12px 16px 12px 0;
  text-decoration: none;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.dropdown-content a:hover {
  background-color: #ddd;
  transition: 1s linear;
}

.dropdown:hover .dropdown-content {
  display: block;
  transition: 1s linear;
}
.dropbtn {
}
.dropdown:hover .dropbtn {
  background-color: rgb(0, 0, 0);
  transition: 1s linear;
}
.dropdown img {
  width: 40%;
}
.dropdown-content img {
  width: 30%;
}
</style>

