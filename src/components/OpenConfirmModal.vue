<template>
  <div class="modalConfirm">
    <v-card class="confirmBox">
        <h1>Вы уверены, что хотите удалить пользователя?</h1>
        <v-btn color="red" @click="delFnc(person.id)">Да</v-btn>
        <v-btn color="blue" @click="closeModal">Нет</v-btn>
    </v-card>
  </div>
</template>

<script>
export default {
 props:{
    closeModal:{
        Type: Function,
        require: true
    },
    person:{
      Type: Object,
      require: true
    },
    delFnc:{
      Type: Function,
      requre: true
    }
 },
}
</script>

<style scoped> 
  .modalConfirm{
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1000;
   background: rgba(0,0,0,.3);
   display: flex;
   justify-content: center;
   align-items: center;
   padding: 50px;
  }
  .confirmBox{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    gap: 10px;
  }
</style>