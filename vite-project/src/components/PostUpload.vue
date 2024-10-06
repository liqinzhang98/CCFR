<template>
              <div>
        <div>Title of Project</div>
        <textarea
          placeholder = Title
          class="postContentInput"
          v-model="Title"
        ></textarea></div>
    <PostList>
        <div>
        <div>Investigator Full Name</div>
        <textarea
          placeholder = Name
          class="postContentInput"
          v-model="Name"
        ></textarea></div>
        <div>
        <div>JobTitle</div>
        <textarea
          placeholder = Job
          class="postContentInput"
          v-model="Job"
        ></textarea></div>
        <div>
        <div>Institution</div>
        <textarea
          placeholder = Institution
          class="postContentInput"
          v-model="Institution"
        ></textarea></div>
        <div>
        <div>Department</div>
        <textarea
          placeholder = Department
          class="postContentInput"
          v-model="Department"
        ></textarea></div>
        <div>
        <div>Address</div>
        <textarea
          placeholder = Address
          class="postContentInput"
          v-model="Address"
        ></textarea></div>
        <div>
        <div>City</div>
        <textarea
          placeholder = City
          class="postContentInput"
          v-model="City"
        ></textarea></div>
        <div>
        <div>Zip</div>
        <textarea
          placeholder = Zip
          class="postContentInput"
          v-model="Zip"
        ></textarea></div>
        <div>
        <div>Country</div>
        <textarea
          placeholder = Country
          class="postContentInput"
          v-model="Country"
        ></textarea></div>

        <el-date-picker
      v-model="value1"
      type="datetimerange"
      range-separator="To"
      start-placeholder="Start date"
      end-placeholder="End date"
    />

    <el-calendar>
    <template #date-cell="{ data }">
      <p :class="data.isSelected ? 'is-selected' : ''">
        {{ data.day.split('-').slice(1).join('-') }}
        {{ data.isSelected ? '✔️' : '' }}
      </p>
    </template>
  </el-calendar>
    </PostList>
  <br />
  <router-link :to="'/sec2/' + this.$route.params.id"><div style="text-align:center"><button class="button2"  @click="newPost">Create New Craft</button></div> </router-link>
  <br />
  <router-link :to="'/sec2/' + this.$route.params.id"><div style="text-align:center"><button class="button2" @click="publishPost">Next Page Craft</button></div> </router-link>
</template>

<script setup>
import TheIcon from "./TheIcon.vue";
import TheButton from "./TheButton.vue";
import PostList from "./PostList.vue";
import {collection,doc,getDoc} from 'firebase/firestore'
import { db } from '../firebase'

import { useStoreNotes } from "../stores/storeNotes";
import { ref } from "vue";
import { onMounted } from "vue";
import { useRoute } from 'vue-router'

const store = useStoreNotes();
const route = useRoute();

const Title = ref("");
const Name = ref("");
const Job = ref("");
const Institution = ref("");
const Department = ref("");
const Address = ref("");
const City = ref("");
const Zip = ref("");
const Country = ref("");
const Ryan = ref("");

function publishPost(){
  console.log(Job.value)
  store.inputNote(route.params.id,Name.value,Job.value,Institution.value,Department.value,Address.value,City.value,Zip.value,Country.value,Title.value)
}
function newPost(){
  console.log(Job.value)
  store.newNote(route.params.id,Name.value,Job.value,Institution.value,Department.value,Address.value,City.value,Zip.value,Country.value,Title.value)
}
function submitPost(){
  store.submitApp(route.params.id)
}
 onMounted(async ()=>{    
  const docRef = doc(db, 'application',route.params.id);
  const docSnap =  await getDoc(docRef);
  const Ryan = docSnap.data().name
  Title.value = docSnap.data().title
  Name.value = docSnap.data().name
  Job.value = docSnap.data().job
  Institution.value = docSnap.data().institution
  Department.value = docSnap.data().department
  Address.value = docSnap.data().address
  City.value = docSnap.data().city
  Zip.value = docSnap.data().zip
  Country.value = docSnap.data().country
 })

</script>
<style scoped>
.preview {
  width: 100%;
  height: 100%;
  object-fit: cover;
  min-height: 0;
}
.upload {
  display: grid;
  place-items: center;
  cursor: pointer;
  min-height: 0;
}
.upload > svg {
  width: 254px;
  height: 316px;
}

.fileChooser {
  opacity: 0;
  position: absolute;
}

.postContent {
  display: grid;
}
.postContentInput {
  border-bottom: none;
  resize: none;
  padding: 12px 24px;
  width: 100%;
  height:50%
}

.postContentInput::placeholder {
  color: #757575;
}

.pubBtn {
  align-self: end;
  justify-self: end;
  position: relative;
  right: 24px;
  bottom: 18px;
}

.button2 {
    width: 140px;
    height: 50px;
    font-size: 18px;
    background-color: #448ccc;
    border: none;
    color: white;
    border-radius: 8px;
    margin-left: 10px;
  }
  
  .button2:hover {
    background-color: #3670a7;
  }
</style>
