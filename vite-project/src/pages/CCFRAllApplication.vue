<template>
    <div id="show-applications" style = "text-align: center;">
        <br /> 
        <h1>CCFR Chair Dashboard</h1>
        <br /> 
        <br /> 
        <el-input
        v-model="searchContent"
        placeholder="Search Content"
        size="medium"
        style="width:200px; float:left;  left: 43%; margin-bottom:10px; position:relative;"
        ></el-input>

        <el-table :data="filterData" style="width: 100%;" >
        <el-table-column prop="title" label="Application Title" width="180" ></el-table-column>
        <el-table-column prop="name" label="Applicant Name" width="180"></el-table-column>
        <el-table-column prop="job" label="Applicant Job" width="180"></el-table-column>
        <el-table-column prop="institution" label="Institution"></el-table-column>
        <el-table-column prop="voteAccept" label="Accept Votes"></el-table-column>
        <el-table-column prop="voteReject" label="Reject Votes"></el-table-column>
        <el-table-column prop="remaining" label="Time Left"></el-table-column>
        <el-table-column prop="status" label="Status"></el-table-column>
        <el-table-column label="Detail">
            <template v-slot="scope">
            <router-link v-bind:to="'/CCFRdetail/' + scope.row.appId">
                <el-button type="primary" size="small">Detail</el-button>
            </router-link>
            </template>
        </el-table-column>   
        </el-table>
    </div>
</template>


<script>
import 'element-plus/theme-chalk/index.css';

import { getFirestore, collection, getDocs} from "firebase/firestore"
export default{
    data(){
        return{
            application: [],
            searchContent: '',
        }
    },
    created(){
        const db = getFirestore();
        const colref = collection(db, 'submitApp');
        // const test = query(colref, where("userId" ,"==", "3") );
        getDocs(colref)
            .then(snapshot => {
            snapshot.docs.forEach(doc => {
            const theApp = doc.data();

            // countdown setup
            var countDownDate = new Date(doc.data().dueDate);
            var now = new Date().getTime();
            var distance = countDownDate - now;
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            theApp.remaining = days + "d " + hours + "h " + minutes + "m "+seconds +"s";

            theApp.appId = doc.id;
            this.application.push(theApp);
            });
        });
        console.log(this.application);
    },

    computed: {
    filterData: function() {
      var input = this.searchContent && this.searchContent.toLowerCase();
      var items = this.application;
      var items1;
      if (input) {
        items1 = items.filter(function(item) {
          return Object.keys(item).some(function(key1) {
            return String(item[key1])
              .toLowerCase()
              .match(input);
          });
        });
      } else {
        items1 = items;
      }
      return items1;
    }
  }
}
</script>



<style scoped>
#show-applications{
    max-width: 1400px;
    margin: 0px auto;
}
</style>
  