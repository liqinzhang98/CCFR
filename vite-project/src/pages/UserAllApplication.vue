<template>
    <div id="show-applications" style = "text-align: center;">
        <br /> 
        <h1>My applications</h1>
        <RouterLink v-bind:to="{name: 'Messages', params: {id: applicant.id, first: applicant.firstName, last: applicant.surname}}">View Messages</RouterLink>
        <br /> 
        <br /> 
        
        <el-table :data="application" style="width: 100%;" >
        <el-table-column prop="title" label="Application Title " width="180" ></el-table-column>
        <el-table-column prop="abstract" label="Abstract" width="180"></el-table-column>
        <el-table-column prop="appId" label="Application ID" width="180"></el-table-column>
        <el-table-column prop="institution" label="Institution"></el-table-column>
        <el-table-column prop="status" label="Status"></el-table-column>
        <el-table-column label="Detail">
            <template v-slot="scope">
            <router-link v-bind:to="'/userdetail/' + scope.row.appId">
                <el-button type="primary" size="small">Detail</el-button>
            </router-link>
            </template>
        </el-table-column>   
        </el-table>
    </div>
</template>


<script>
import 'element-plus/theme-chalk/index.css';

import { getFirestore, collection, getDocs, query, where } from "firebase/firestore"
export default{
    data(){
        return{
            applicant:{},
            application: [],
        }
    },
    created(){
        const db = getFirestore();
        // fetch applications
        const colref = collection(db, 'submitApp');
        const uid = this.$route.params.id;
        const subApp = query(colref, where("userId" ,"==", uid) );
        getDocs(subApp)
            .then(snapshot => {
            snapshot.docs.forEach(doc => {
            const theApp = doc.data();
            theApp.appId = doc.id;
            this.application.push(theApp);
            });
        });
        // fetch user data
        const colref_user = collection(db, 'user');
        getDocs(colref_user)
            .then(snapshot => {
            snapshot.docs.forEach(doc => {
            if (doc.id == uid){
                this.applicant.id = uid;
                this.applicant.firstName = doc.data().firstName;
                this.applicant.surname = doc.data().surname;
            }
            });
        });

        console.log(this.applicant.firstName);



    },
}
</script>



<style scoped>
#show-applications{
    max-width: 1100px;
    margin: 0px auto;
}
</style>
  