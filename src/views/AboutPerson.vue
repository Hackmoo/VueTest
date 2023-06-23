<template>
  <div class="contentBox">
    <info-about-person/>
    {{ people }}
  </div>
</template>

<script setup>
import infoAboutPerson from '@/components/about-person/infoAboutPerson.vue'
</script>

<style scoped>
 .contentBox{
  max-width: 776px;
  margin: 0 auto;
  margin-top: 10px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 15px 10px;
  border-radius: 15px;
 }
</style>