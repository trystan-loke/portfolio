<template>
  <header>
    <nav>
      <router-link to="/about">About me</router-link>
      <router-link to="/experience">Experience</router-link>
      <router-link to="/education">Education</router-link>
    </nav>
    <div class="header-details">
      <h2>{{ CONSTANTS.PERSONALDETAILS.NAME }}</h2>
      <h3>{{ CONSTANTS.PERSONALDETAILS.TITLE }}</h3>
      <h5>{{ CONSTANTS.PERSONALDETAILS.MOBILE }} &emsp; {{ CONSTANTS.PERSONALDETAILS.EMAIL }}</h5>
      <ul>
        <li v-for="item in CONSTANTS.PERSONALDETAILS.SKILLS">{{ item }}</li>
      </ul>
    </div>
  </header>
  <router-view class="view"></router-view>
</template>

<script>
import CONSTANTS from './constants/values'
export default {
  data() {
    return {
      CONSTANTS: CONSTANTS
    }
  }
}
</script>

<style>
header {
  background-image: url("assets/headerBackground.jpg");
  background-position: right;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  height: 200px;
  width: 100%;
  font-family: Calibri;
  color: navy;
}

header nav{
  margin-left: 10px;
}

header a{
  font-weight: bold;
}

header nav{
  display: flex;
  justify-content: flex-start;
  gap: 20px;
}

header .header-details{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:flex-start;
  width: 50%;
  margin: 30px 0px 0px 30%;
}

.header-details *{
  margin: 1px;
}

.header-details ul{
  display: grid;
  grid-column-gap: 20px;
  grid-template-columns: 70px 70px;
  padding-left: 12px;
}

.header-details li{
  font-size: x-small;
  margin: 0;
}

</style>
