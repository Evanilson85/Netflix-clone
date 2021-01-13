<template>
  <div class="inputs">
    <div class="label-float">
      <input type="email" placeholder=" " />
      <label>Email</label>
    </div>

    <button>Comece aqui ></button>
  </div>
</template>
<script>
export default {};
</script>
<style  scoped>
.inputs {
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
}

.inputs button {
  background-color: rgb(229 9 20);
  color: #fff;
  border: none;
  width: 160px;
  cursor: pointer;
  outline: none;
  font-size: 28px;
  margin: 25px auto 0;
  font-size: 1rem;
  min-height: 40px;
  font-family: "Roboto";
}

.label-float {
  position: relative;
  /* padding-top: 13px; */
  padding-top: 0px;
}

.label-float input {
  border: none;
  outline: none;
  width: 95%;
  height: 48px;
  /* min-width: 450px;
  height: 35px !important; */
  padding: 0 0 0 15px;
  font-size: 16px;
  transition: all 0.1s linear;
  -webkit-transition: all 0.1s linear;
  -moz-transition: all 0.1s linear;
  -webkit-appearance: none;
}

/* .label-float input:focus {
  border: 2px solid #3951b2;
} */

.label-float input::placeholder {
  color: transparent;
}

.label-float label {
  pointer-events: none;
  position: absolute;
  top: calc(50% - 8px);
  left: 15px;
  transition: all 0.1s linear;
  -webkit-transition: all 0.1s linear;
  -moz-transition: all 0.1s linear;
  background-color: white;
  color: #979797;
  padding: 0epx;
  box-sizing: border-box;
}

.label-float input:required:invalid + label {
  color: red;
}
.label-float input:focus:required:invalid {
  border: 2px solid red;
}
.label-float input:required:invalid + label:before {
  content: "*";
}
.label-float input:focus + label,
.label-float input:not(:placeholder-shown) + label {
  font-size: 13px;
  top: 0px;
  color: #979797;
}
@media (min-width: 789px) {
  .inputs {
    flex-direction: row;
  }
  .label-float input {
    min-width: 450px;
    height: 66px !important;
  }
  .inputs button {
    margin: 0;
    height: 66px;
    width: 240px;
    font-size: 1.5rem;
  }
}
</style>