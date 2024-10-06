<template>
  <h2>Section3 Description of Proposed Collaborative Study</h2>
  <h3>
    Please provide a brief description of the proposed research that uses
    data/biospecimens from the Colon CFR.
  </h3>
  <Sample />    
  <hr/>
  <form>
    <label>Abstract</label>
    <textarea cols="30" rows="30" v-model="abstract"></textarea>

    <label>Specific Aims</label>
    <textarea cols="30" rows="30" v-model="specificAims"></textarea>

    <label>
      Background and Significance <br>
      State the purpose and rationale of the research. 
      Please also include why you need the resources of the Colon CFR for the study.
    </label>
    <textarea cols="30" rows="30" v-model="backgroundAndSignificance"></textarea>

    <label>
      Preliminary Data <br>
      Provide evidence of experience in analyzing requested data and biospecimens.
    </label>
    <textarea cols="30" rows="30" v-model="preliminaryData"></textarea>

    <label>
      Study Design <br>
      Describe the design you will employ and the data you request from the Colon CFR, 
      including justification of sample numbers with power calculations if applicable.
    </label>
    <textarea cols="30" rows="30" v-model="studyDesign"></textarea>

    <label>
      Selection Criteria <br>
      Describe selection inclusion/exclusion criteria.
    </label>
    <textarea cols="30" rows="30" v-model="selectionCriteria"></textarea>

  </form>

   <div class="btn">
      <router-link :to="'/sec2/' + this.$route.params.id"><button class="button1" @click="publishPost">Back</button></router-link>
      <router-link :to="'/sec4/' + this.$route.params.id"><button class="button2" @click="publishPost">Next</button></router-link>
  </div>

</template>

<script setup>
  import { useStoreNotes } from "../stores/storeNotes";
  import { ref } from "vue";
  import PostList from "../components/PostList.vue";
  import { useRoute } from 'vue-router'
  import { onMounted } from "vue";
  import {collection,doc,getDoc} from 'firebase/firestore'
  import { db } from '../firebase'
  import Sample from "../pages/Sample.vue"
  const store = useStoreNotes();
  const route = useRoute();

  const abstract = ref("");
  const specificAims = ref("");
  const backgroundAndSignificance = ref("");
  const preliminaryData = ref("");
  const studyDesign = ref("");
  const selectionCriteria = ref("");

  function publishPost(){
    store.inputNoteThree(route.params.id,abstract.value,specificAims.value,backgroundAndSignificance.value,preliminaryData.value,studyDesign.value,selectionCriteria.value)
  }
onMounted(async ()=>{   
const docRef = doc(db, 'application',route.params.id);
const docSnap =  await getDoc(docRef);
abstract.value = docSnap.data().abstract
specificAims.value = docSnap.data().specificAims
backgroundAndSignificance.value = docSnap.data().backgroundAndSignificance
preliminaryData.value = docSnap.data().preliminaryData
studyDesign.value = docSnap.data().studyDesign
selectionCriteria.value = docSnap.data().selectionCriteria
})
</script>

<style scoped>
h1, h2, h3 {
  margin: 25px auto;
  text-align: center;
}
hr {
  height: 1px;
  border: none;
  margin-top: 0px;
  border-top: 1px solid #c1c1c1;
}
form {
  max-width: 60%;
  margin: 10px auto;
  background: white;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}
label {
  color: rgb(93, 88, 88);
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.85em;
  letter-spacing: 1px;
  font-weight: bold;
  text-align: justify;
}
textarea {
  background-color: #f3efef;
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}
button {
  background: #0b6ddf;
  border: 0;
  padding: 10px 20px;
  margin-block: 20px;
  margin-right: 20px;
  color: white;
  border-radius: 20px;
}
.btn {
  text-align: center;
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
  .button1 {
    width: 140px;
    height: 50px;
    font-size: 18px;
    background-color: white;
    color: #448ccc;
    border: 2px solid #448ccc;
    border-radius: 8px;
  }
  
  .button1:hover {
    background-color: #f3f3f3;
  }
</style>