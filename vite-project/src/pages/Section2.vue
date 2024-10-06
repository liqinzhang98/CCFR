<script setup>
    import { useStoreNotes } from "../stores/storeNotes";
    import { ref } from "vue";
    import PostList from "../components/PostList.vue";
    import { useRoute } from 'vue-router'
    import { onMounted } from "vue";
    import {collection,doc,getDoc} from 'firebase/firestore'
    import { db } from '../firebase'
    
    const store = useStoreNotes();
    const route = useRoute();
  
    const condition1 = ref("");
    const condition2 = ref("");
    const condition3 = ref("");
    const condition4 = ref("");
    const condition5 = ref("");
    const condition6 = ref("");
    const condition7 = ref("");
    const condition8 = ref("");
    const Name = ref("");
    const Affiliation = ref("");

    function publishPost(){
      store.inputNoteTwo(route.params.id,condition1.value,condition2.value,condition3.value,condition4.value,condition5.value,condition6.value,condition7.value,condition8.value,Name.value,Affiliation.value)
    }
  onMounted(async ()=>{    
  const docRef = doc(db, 'application',route.params.id);
  const docSnap =  await getDoc(docRef);
  Name.value = docSnap.data().Name
  Affiliation.value = docSnap.data().Affiliation
  condition1.value = docSnap.data().con1
  condition2.value = docSnap.data().con2
  condition3.value = docSnap.data().con3
  condition4.value = docSnap.data().con4
  condition5.value = docSnap.data().con5
  condition6.value = docSnap.data().con6
  condition7.value = docSnap.data().con7
  condition8.value = docSnap.data().con8
 })
  </script>
  
  <template>
  
    <div class="text">
      <h2>Section 2: CCFR Collaborators</h2>
      <div class="content">
      <hr class="h2_line" />
      <div>
        <div class="condi">
          <label>
            <input type="checkbox"  class="check" v-model="condition1" />
            <a>No.13 Australasian Colorectal Cancer Family Study, Site PI: Mark A. Jenkins,PhD</a>
          </label>
        </div>
        <div class="condi">
          <label>
            <input type="checkbox" checked class="check" v-model="condition2" />
            <a>No.12(02) Cedars-Sinai Colorectal Cancer Family Registry, Site PI: Jane Figueiredo,PhD</a>
          </label>
        </div>
        <div class="condi">
          <label>
            <input type="checkbox" checked class="check" v-model="condition3" />
            <a>No.12(05) Cleveland Clinic Cancer Family Registry, Site Pl: Stephanie Schmit, PhD,
MPH</a>
          </label>
        </div>
        <div class="condi">
          <label>
            <input type="checkbox"  checked class="check" v-model="condition4"/>
            <a>No.15 Mayo Colorectal Cancer Family Registry, Site Pl: Rish Pai, MD, PhD
            </a>
          </label>
        </div>
        <div class="condi">
          <label>
            <input type="checkbox" checked class="check" v-model="condition5"/>
            <a>No.14 Hawaii Family Registry of Colon Cancer, Site PI: Loic Le Marchand, MD,PhD
            </a>
          </label>
        </div>
        <div class="condi">
          <label>
            <input type="checkbox" checked class="check" v-model="condition6"/>
            <a>No.11 Ontario Familial Colorectal Cancer Registry, Site PI: Steve Gallinger, MD
            </a>
          </label>
        </div>
        <div class="condi">
          <label>
            <input type="checkbox" checked class="check" v-model="condition7"/>
            <a>No.16 Seattle Familial Colorectal Cancer Registry, Site Pl: Amanda Phipps,
PhD. MPH
            </a>
          </label>
        </div>
        <div class="condi">
          <label>
            <input type="checkbox" checked class="check" v-model="condition8"/>
            <a>No.17 UCSF Colon Cancer Family Registry (previously CPIC), Site PI: lona
Cheng, PhD, MPH
            </a>
          </label>
        </div>
        <br />
        <br />
        <PostList> <div><div>Investigator Full Name</div>
        <textarea
          placeholder = Name
          class="postContentInput"
          v-model="Name"
        ></textarea></div>
        <div><div>Affiliation</div>
        <textarea
          placeholder = Somewhere Cancer Registry
          class="postContentInput"
          v-model="Affiliation"
        ></textarea></div></PostList>
        

      </div>
      
      
      <div class="button">
        <router-link :to="'/sec1/' + this.$route.params.id"><button class="button1" @click="publishPost">Back</button></router-link>
        <router-link :to="'/sec3/' + this.$route.params.id"><button class="button2" @click="publishPost">Next</button></router-link>
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
  
  .postContentInput {
  border-bottom: none;
  resize: none;
  padding: 12px 24px;
  width: 100%;
  height:50%
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
  </style>
  