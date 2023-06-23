<template>
  <h3>Сортировать по</h3>
  <v-select
    variant="outlined"
    :items="[
      'Не сортировать',
      'По имени',
      'По фамилии',
      'По отчеству',
      'По должности',
    ]"
    v-model="sort"
  />
  <v-container class="list">
    <v-table class="table">
      <thead>
        <tr>
          <th>Имя</th>
          <th>Фамилия</th>
          <th>Отчество</th>
          <th>Должность</th>
          <th>Редактирование пользователя</th>
          <th>Детальнее о пользователе</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="currentPeople in sortArray" :key="currentPeople.id">
          <current-people :currentPeople="currentPeople" :delFnc="delFnc" :changeFnc="changeFnc"/>
        </tr>
      </tbody>
    </v-table>
  </v-container>
</template>

<script setup>
import CurrentPeople from "./CurrentPeople.vue";
import { ref, defineProps, computed } from "vue";
const props = defineProps({
  people: {
    Type: Array,
    require: true,
  },
  delFnc: {
    Type: Function,
    requre: true,
  },
  changeFnc: {
    Type: Function,
    require: true
  }
});
const sort = ref("Не сортировать");

const sortArray = computed(() => {
  const temp = [...props.people];
  if (sort.value === "По имени")
    return temp.sort((a, b) => a.firstname.localeCompare(b.firstname));
  if (sort.value === "По фамилии")
    return temp.sort((a, b) => a.lastname.localeCompare(b.lastname));
  if (sort.value === "По отчеству")
    return temp.sort((a, b) => a.surname.localeCompare(b.surname));
  if (sort.value === "По должности")
    return temp.sort((a, b) => a.position.localeCompare(b.position));
  return temp;
});
</script>

<style scoped>
.list {
  display: flex;
}
.v-table {
  width: 100% !important;
}
</style>
