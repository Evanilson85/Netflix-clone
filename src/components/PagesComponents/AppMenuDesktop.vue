<template>
  <div class="navs">
    <nav>
      <ul>
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

<style scoped>
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
nav {
  display: flex;
  justify-content: space-between;
}

nav ul {
  padding: 0%;
  margin: 0%;
  list-style: none;
  display: flex;
  justify-content: left;
  align-items: center;
  width: 50%;
}
.ul2 {
  width: 37%;
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