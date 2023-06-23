<template>
  <router-link to="/"><v-btn>Нет</v-btn></router-link>
  <h1>Подробная информация о пользователя - {{ people.firstname }}</h1>
  <h2>Имя сотрдуника - {{ people.firstname }}</h2>
  <h2>Фамилия сотрудника - {{ people.lastname }}</h2>
  <h2>Отчество сотрудника - {{ people.surname }}</h2>
  <h2>Должность сотрудника - {{ people.position }}</h2>
  <h2>Дата выхода на работу сотрудника - {{ people.timeToWork }}</h2>
  <h2>Сотрудник сдал трудовую книжку ? - {{ people.workBook ? 'Да' : 'Нет' }}</h2>
  <h2>Ставка сотрудника - {{ people.bet }}</h2>
</template>

<script setup>
import { ref, computed, reactive } from "vue";
import { useRouter, useRoute } from "vue-router";
const router = useRouter();
const route = useRoute();
const people = computed({
  get() {
    return _people.find((el) => el.id === Number(route.params.id));
  },
});
const _people = reactive(
  JSON.parse(localStorage.getItem("people") || "") || []
);
</script>

<style></style>
