<template>
  <v-card-text>
    <v-btn class="float-right" @click="openModal = !openModal"
      >Добавить сотрудника</v-btn
    >
  </v-card-text>
  <div v-if="openModal" class="modal">
    <v-card class="mx-auto pa-7 mt-5" max-width="600" rounded="lg">
      <v-form>
        <h1 style="text-align: center">Добавление нового сотрудника</h1>
        <h2>Имя</h2>
        <v-text-field
          label="Введите имя"
          :rules="[validationLength, validation]"
          variant="underlined"
          v-model="newFirstname"
        ></v-text-field>
        <h2>Фамилия</h2>
        <v-text-field
          label="Введите фамилию"
          :rules="[validationLength, validation]"
          variant="underlined"
          v-model="newlastname"
        ></v-text-field>
        <h2>Отчество</h2>
        <v-text-field
          label="Введите отчество"
          :rules="[validationLength, validation]"
          variant="underlined"
          v-model="newSurname"
        ></v-text-field>
        <h2>Должность</h2>
        <v-text-field
          label="Введите должность"
          :rules="[validationLength, validation]"
          variant="underlined"
          v-model="newPosition"
        ></v-text-field>
        <h2>Дата выхода на работу</h2>
        <v-text-field
          label="Введи дату выхода на работу"
          placeholder="dd/mm/yyyy"
          variant="underlined"
          type="date"
          v-model="newTimeToWork"
        />
        <h2>Сдача трудовой книжки</h2>
        <v-checkbox v-model="newWorkbook"></v-checkbox>
        <h2>Ставка</h2>
        <v-select
          label="Ставка"
          :items="['Полная', 'Половина']"
          variant="underlined"
          v-model="newBet"
        ></v-select>
        <v-btn class="float-right" @click="addBtn">Создать</v-btn>
        <v-btn
          class="closeBtn"
          variant="tonal"
          rounded="xl"
          icon="mdi-minus"
          density="comfortable"
          @click="openModal = !openModal"
        ></v-btn>
      </v-form>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    addFnc: {
      Type: Function,
      requre: true,
    },
  },
  data() {
    return {
      openModal: false,
      newFirstname: "",
      newlastname: "",
      newSurname: "",
      newPosition: "",
      newTimeToWork: '',
      newWorkbook: false,
      newBet: 'Не полная'
    };
  },
  methods: {
    validation(text) {
      if (/[^0-9]/.test(text)) return true
      return 'В поле не может быть цифр'
    },
    validationLength(text){
      return !!text || "Это поле являеться обязательныи";
    },
    addBtn() {
      if(this.newFirstname && this.newlastname && this.newPosition && this.newSurname && this.newPosition && this.newTimeToWork && this.newWorkbook && this.newBet){
        this.addFnc(
        this.newFirstname,
        this.newlastname,
        this.newSurname,
        this.newPosition,
        this.newTimeToWork,
        this.newWorkbook,
        this.newBet
      );
      this.openModal = !this.openModal;
      this.newFirstname = ''
      this.newlastname = ''
      this.newSurname = ''
      this.newPosition = ''
      this.newTimeToWork = ''
      this.newWorkbook = ''
      this.newBet = 'Не полная'
      }
      else alert('Не все поля были заполнены')
    },
  },
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
