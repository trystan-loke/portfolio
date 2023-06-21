<template>
  <header>
    <img src="assets/HeaderBackground.jpg" alt="Header Image">
    <nav>
      <router-link to="/about">About me</router-link>
      <router-link to="/experience">Experience</router-link>
      <router-link to="/education">Education</router-link>
    </nav>
    <div class="header-details">
      <p class="header-name">{{ CONSTANTS.PERSONALDETAILS.NAME }}</p>
      <p class="header-title">{{ CONSTANTS.PERSONALDETAILS.TITLE }}</p>
      <p class="header-contact">{{ CONSTANTS.PERSONALDETAILS.MOBILE }} &emsp; {{ CONSTANTS.PERSONALDETAILS.EMAIL }}</p>
      <ul>
        <li v-for="item in CONSTANTS.PERSONALDETAILS.SKILLS">{{ item }}</li>
      </ul>
    </div>
  </header>
  <div class="content"><router-view /></div>
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
*{
  font-family: Calibri;
  font-weight: 400;
  font-style: normal;
}

header{
  height: 210px;
}

header img{
  width: 100%;
  height: 220px;
  position: absolute;
  object-fit: cover;
  left: 0px;
  top: 0px;
  z-index: -1;
}

header nav{
  margin-top: 10px;
  margin-left: 20px;
  font-size: 14px;
  display: flex;
  justify-content: flex-start;
  gap: 20px;
}

header a{
  text-decoration: none;
}

header a:hover{
  text-decoration: underline;
}

.header-details{
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

.header-name{
  font-size: 36px;
  line-height: 35px;
}

.header-title{
  font-size: 24px;
}

.header-contact{
  font-size: 12px;
}

.header-details ul{
  display: grid;
  grid-column-gap: 20px;
  grid-template-columns: 70px 70px;
  padding-left: 12px;
  font-size: 12px;
  line-height: 12px;
}

.content{
  margin-top: 20px;
  margin-left: 5%;
  margin-right: 5%;
}

</style>
