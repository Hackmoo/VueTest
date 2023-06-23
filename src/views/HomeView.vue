<template>
  <div class="homeView">
    <div class="contentBox">
      <header-of-home-view :addFnc="addNewPerson" />
      <list-of-people :people="people" :delFnc="deletePerson" :changeFnc="changePerson"/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import ListOfPeople from "@/components/ListOfPeople.vue";
import HeaderOfHomeView from "../components/HeaderOfHomeView.vue";
import { ref, computed, reactive } from "vue";

const people = computed({
  get() {
    return _people;
  },
  set(newValue) {
    _people.length = 0
    _people.push(...newValue)
    localStorage.setItem("people", JSON.stringify(newValue));
  },
});

const _people = reactive(JSON.parse(localStorage.getItem('people') || '') || [])

const addNewPerson = (
  newFirstname: string,
  newLastname: string,
  newSurname: string,
  newPosition: string
) => {
  const temp = [
    ...people.value,
    {
      id: Date.now(),
      firstname: newFirstname,
      lastname: newLastname,
      surname: newSurname,
      position: newPosition,
      timeToWork: "1",
      workBook: false,
      bet: "Полная",
    },
  ];
  people.value = temp;
  console.log(people.value);
  console.log(localStorage.getItem("people"));
};
const deletePerson = (id: number) => {
  const temp = [...people.value];
  people.value = temp.filter((el) => el.id !== id);
};

const changePerson = (id: number, newObject: object) => { 
 const temp = people.value.findIndex(el => el.id === id);
 const clonePeople = [...people.value]
 clonePeople[temp] = newObject
 people.value = clonePeople
}
</script>

<style scoped>
.contentBox {
  max-width: 50%;
  margin: 0 auto;
  margin-top: 10px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 15px 10px;
  border-radius: 15px;
}
</style>
