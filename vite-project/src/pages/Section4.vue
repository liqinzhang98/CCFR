<script setup>
  import { useStoreNotes } from "../stores/storeNotes";
  import { ref } from "vue";
  import TheButton from "../components/TheButton.vue";
  import { useRoute } from 'vue-router'
  import { onMounted } from "vue";
  import {collection,doc,getDoc} from 'firebase/firestore'
  import { db } from '../firebase'
  import { ElMessage } from "element-plus";
  const route = useRoute();
  

  const store = useStoreNotes();

  const condition1 = ref("");
  const condition2 = ref("");
  const condition3 = ref("");
  const condition4 = ref("");
  function publishPost(){
    store.inputNoteFour(route.params.id,condition1.value,condition2.value,condition3.value,condition4.value)
  }
  
  function submitPost(){
  store.submitApp(route.params.id)
  ElMessage.success("Application submitted !");
}

onMounted(async ()=>{    
  const docRef = doc(db, 'application',route.params.id);
  const docSnap =  await getDoc(docRef);
  condition1.value = docSnap.data().condition1
  condition2.value = docSnap.data().condition2
  condition3.value = docSnap.data().condition3
  condition4.value = docSnap.data().condition4
})
</script>

<template>

  <div class="text">
    <h2>Section 4: Agreement</h2>
    <div class="content">
    <hr class="h2_line" />
    <div>
      <div class="condi">
        <label>
          <input type="checkbox" class="check" v-model="condition1" />
          <a>I agree to form a collaboration with the Colon CFR (CCFR). I agree
            to assume all risks and responsibilities in connection with the
            receipt, handling, storage and use of data/biomaterials. I agree
            that the data/biomaterials to be provided by the NCI CCFR will be
            used only for the purposes specified in the approved proposal. I
            will provide documentation of IRB/ethics committee review that will
            include my IRB file number and IRB review date. I agree not to
            distribute data or biomaterials to third parties without the
            approval of the CCFR Principal Investigators and then only with
            fully executed data-use agreement and/or material transfer
            agreement.</a>
        </label>
      </div>
      <div class="condi">
        <label>
          <input type="checkbox" class="check" v-model="condition2"/>
          <a>I agree to make study-generated results available to the scientific
            community by transferring them to the central CCFR Informatics
            Center within 6 months of their publication and to submit progress
            reports upon request (at most annually) until the project is
            completed.</a>
        </label>
      </div>
      <div class="condi">
        <label>
          <input type="checkbox" class="check" v-model="condition3"/>
          <a>I agree to adhere to the CCFR Policy on Publications and notify the
            CCFR of planned publications that make use of CCFR data and/or
            biospecimens and to: 1) register publications with the CCFR early in
            the planning process; 2) submit publications to the CFR for
            administrative review prior to submission to a journal; and, 3),
            acknowledge the contributions (financial and otherwise) of the NCI
            and CCFR. The CCFR Policy on Publications, Manuscript Registration
            Form and Review Checklist can be downloaded at
            <a href="https://www.coloncfr.org/publications">www.coloncfr.org/publications.</a></a>
        </label>
      </div>
      <div class="condi">
        <label>
          <input type="checkbox" class="check" v-model="condition4"/>
          <a>I understand that the Colon CFR has been funded entirely by the NCI
            of the U.S. NIH, and that all applicable publications arising from
            the use of Colon CFR resources must comply with the NIH Public
            Access Policy by ensuring they are submitted to the PubMed Central
            (PMC) upon acceptance for publication (see:
            <a href="https://www.nlm.nih.gov/bsd/public_access/resources.html">https://www.nlm.nih.gov/bsd/public_access/resources.html</a>).
          </a>
        </label>
      </div>
    </div>
    <div class="button">
      <router-link :to="'/sec3/' + this.$route.params.id"><button class="button1" @click="publishPost">Back</button></router-link>
      <!-- <button class="button2" @click="publishPost">AGREE</button> -->
      <button class="button2" @click="submitPost">Submit</button>
    </div>
  </div>
</div>
</template>

<style scoped>
body {
  margin: 0;
  padding-top: 0;
  padding-bottom: 0;
  padding-right: 15%;
  padding-left: 15%;
  background-color: #8eb7cb;
}

h2 {
  font-size: 30px;
  margin-left: 2%;
  text-align: center;
}

.h2_line {
  height: 1px;
  border: none;
  margin-top: 0px;
  border-top: 1px solid #c1c1c1;
}

.condi {
  margin-top: 3%;
  margin-left: 2%;
  margin-right: 2%;
}

.check {
  width: 16px;
  height: 16px;
}

.text {
  padding: 1px 10px;
  height: 1000px;
  background-color: white;
}

.button {
  margin-top: 15%;
  text-align: center;
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
.content {
  padding-left: 15%;
  padding-right: 15%;
}
.pubBtn {
  align-self: end;
  justify-self: end;
  position: relative;
  right: 24px;
  bottom: 18px;
}
</style>
