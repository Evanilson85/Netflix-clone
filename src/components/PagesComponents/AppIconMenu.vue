//! Refatorar o menu responsivo

<template>
  <div class="container-menu">
    <input type="checkbox" name="" id="check-menu" />
    <label for="check-menu">
      <span></span>
      <span></span>
      <span></span>
    </label>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.container-menu {
  /* height: 100%;
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;
    z-index: 2;
    right: 0;
    padding: 29px; */
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
</style>