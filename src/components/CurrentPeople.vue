<template>
            <td class="child">{{currentPeople.firstname}}</td>
            <td class="child">{{currentPeople.lastname}}</td>
            <td class="child">{{currentPeople.surname}}</td>
            <td class="child">{{currentPeople.position}}</td>
            <td><v-btn @click="closeModal">Редактировать</v-btn></td>
            <td>
                <router-link :to="`/aboutPerson/${currentPeople.id}`"><v-btn>Открыть</v-btn></router-link>
            </td>
            <redact-person :person="currentPeople" :closeBtnFnc="closeModal" v-if="openModalRedact" :delFnc="delFnc" :changeFnc="changeFnc"/>
</template>

<script>
import RedactPerson from './RedactPerson.vue'
export default {
  components: { RedactPerson },
 props:{
    currentPeople:{
        Type: Object,
        require: true
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
 data(){
    return{
        openModalRedact: false
    }
 },
 methods:{
    closeModal(){
        return this.openModalRedact = !this.openModalRedact
    }
 }
}
</script>

<style>
.child{
    flex: 1;
 }
</style>