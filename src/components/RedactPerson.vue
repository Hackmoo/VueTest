<template>
  <div class="modal">
    <v-card class="mx-auto pa-7 mt-5" max-width="600" rounded="lg">
      <v-form>
        <h1 style="text-align: center">
          Изменение сотрудника - {{ person.firstname }}
        </h1>
        <h2>Имя</h2>
        <v-text-field
          label="Введите имя"
          :rules="[validationLength, validation]"
          variant="underlined"
          v-model="clonePerson.firstname"
        ></v-text-field>
        <h2>Фамилия</h2>
        <v-text-field
          label="Введите фамилию"
          :rules="[validationLength, validation]"
          variant="underlined"
          v-model="clonePerson.lastname"
        ></v-text-field>
        <h2>Отчество</h2>
        <v-text-field
          label="Введите отчество"
          :rules="[validationLength, validation]"
          variant="underlined"
          v-model="clonePerson.surname"
        ></v-text-field>
        <h2>Должность</h2>
        <v-text-field
          label="Введите должность"
          :rules="[validationLength, validation]"
          variant="underlined"
          v-model="clonePerson.position"
        ></v-text-field>
        <h2>Дата выхода на работу</h2>
        <v-text-field
          label="Введи дату выхода на работу"
          placeholder="dd/mm/yyyy"
          variant="underlined"
          v-model="clonePerson.timeToWork"
        />
        <h2>Сдача трудовой книжки</h2>
        <v-checkbox v-model="clonePerson.workBook"></v-checkbox>
        <h2>Ставка</h2>
        <v-select
          label="Ставка"
          :items="['Полная', 'Половина']"
          variant="underlined"
          v-model="clonePerson.bet"
        ></v-select>
        <v-btn @click="openConfirmModal = !openConfirmModal" color="red">Удалить</v-btn>
        <open-confirm-modal v-if="openConfirmModal" :closeModal="closeModal" :delFnc="delFnc" :person="person"/>
        <v-btn class="float-right" color="blue" @click="changeFunction">Изменить</v-btn>
        <v-btn
          class="closeBtn"
          variant="tonal"
          rounded="xl"
          icon="mdi-minus"
          density="comfortable"
          @click="closeBtnFnc"
        ></v-btn>
      </v-form>
    </v-card>
  </div>
</template>

<script>
import OpenConfirmModal from './OpenConfirmModal.vue';
export default {
  components: { OpenConfirmModal },
  props: {
    person: {
      Type: Object,
      require: true,
    },
    closeBtnFnc: {
      Type: Function,
      require: true,
    },
    delFnc:{
        Type: Function,
        requre: true
    },
    changeFnc:{
      Type: Function,
        requre: true
    }
  },
  data() {
    return {
      openConfirmModal: false,
      clonePerson: Object.assign({}, this.person),
      changedPerson: null,
    };
  },
  methods:{
    closeModal(){
      return this.openConfirmModal = !this.openConfirmModal
    },
    changeFunction(){
    this.changeFnc(this.person.id, this.clonePerson)
    this.closeBtnFnc()
  },
  validation(text) {
      if (/[^0-9]/.test(text)) return true
      return 'В поле не может быть цифр'
    },
    validationLength(text){
      return !!text || "Это поле являеться обязательныи";
    },
  },
  created(){
    this.changedPerson = Object.assign([], this.person)
  }
};
</script>

<style scoped>
.modal {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.2);
  z-index: 1000;
}
.closeBtn {
  position: absolute;
  top: 2px;
  right: 7px;
  background: none;
}
</style>
