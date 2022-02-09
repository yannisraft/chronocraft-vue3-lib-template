<template>
  <h1>Chronocarft Library Test Playground</h1>
  <CountDownTimer/>
  <TimeClock/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CountDownTimer from './components/CountDownTimer/CountDownTimer.vue';
import TimeClock from './components/TimeClock/TimeClock.vue';

export default defineComponent({
  name: 'App',
  components: {
    CountDownTimer,
    TimeClock
  }
});
</script>

<style>
#app {
  font-family: 'Advent Pro', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1 {
  font-weight: 400 !important;
}

.widget-container {
    border: 0px solid;
    box-shadow: rgb(0 0 0 / 24%) 0px 3px 8px;
    text-indent: 10px;
    font-size: 16pt;
    padding: 20px;
    margin: 0px auto;
    max-width: 50%;  
    margin-bottom: 20px; 
    position: relative;
}

.widget-container h3 {
    margin-top: 10px;
    font-family: 'Advent Pro', sans-serif;
    font-weight: 300 !important;    
}

.madewith {
  position: absolute;
  bottom: 10px;
  right: 10px;
  font-size: 12pt;
}

@media screen and (max-width: 600px) {
  .widget-container {
    max-width: 90%; 
  }
}

@media screen and (max-width: 960px) {
  .widget-container {
    max-width: 70%; 
  }
}
</style>
