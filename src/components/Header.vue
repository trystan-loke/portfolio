<template>
  <header>
      <nav>
        <router-link to="/about">About me</router-link>
        <router-link to="/experiences">Experiences</router-link>
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
</template>

<script>
import CONSTANTS from '../constants/values'
export default {
  name: 'Header',
  data() {
    return {
      CONSTANTS: CONSTANTS
    }
  }
}
</script>

<style>
header{
  height: 210px;
  background-image: url("../assets/HeaderBackground.jpg");
  background-size: cover;
  background-position-y: 50%;
}

header nav{
  padding-top: 10px;
  margin-left: 20px;
  font-size: 14px;
  display: flex;
  justify-content: flex-start;
  gap: 20px;
}

header a{
  text-decoration: none;
  color: darkblue;
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
  margin: 20px 0px 0px 30%;
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
  grid-template-columns: 75px 75px;
  padding-left: 12px;
  font-size: 12px;
  line-height: 12px;
}
</style>
