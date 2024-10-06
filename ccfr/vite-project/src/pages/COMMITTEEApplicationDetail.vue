<template>
    <div id="single-blog">
        <br /> 
        <h2 class = "app_title">{{theApplication.title}}</h2>
        <br /> 

        <div class = "buttonDiv" style = "display: flex; align-items: center; width: 100%;">
            <button class="acceptButton" v-on:click="acceptApp"> Vote For Accept</button>
            <button class="rejectButton" v-on:click="rejectApp"> Vote For Reject</button>
        </div>
        <br /> 
        <h3 class = "small_title" > Section 1</h3>
            <br />
        <div class = "section1">
            <div class="td">
		            <div class="section1_tr_left">
		                Title of project
		                <div class="vr"></div>
		            </div>
		            <div class="section1_tr_right">
		                {{theApplication.title}}
		            </div>
            </div>
            <div class="td">
		            <div class="section1_tr_left">
		                Address
		                <div class="vr"></div>
		            </div>
		            <div class="section1_tr_right">
		                {{theApplication.address}}
		            </div>
            </div>
            <div class="td">
                <div class="section1_tr_small_left">
		                Principal Investigator
		                <div class="vr"></div>
                </div>
                <div class="section1_tr_small_right">
                        {{theApplication.name}}     
		                <div class="vr"></div>
                </div>
                <div class="section1_tr_small_left">
		                Job Title
		                <div class="vr"></div>
		        </div>
                <div class="section1_tr_small_right">
                        {{theApplication.job}}
		                <div class="vr"></div>
		        </div>
            </div>
            <div class="td">
                <div class="section1_tr_small_left">
		                Institution
		                <div class="vr"></div>
                </div>
                <div class="section1_tr_small_right">
                        {{theApplication.institution}}     
		                <div class="vr"></div>
                </div>
                <div class="section1_tr_small_left">
		                Department
		                <div class="vr"></div>
		        </div>
                <div class="section1_tr_small_right">
                        {{theApplication.department}}
		                <div class="vr"></div>
		        </div>
            </div>
            <div class="td">
                <div class="section1_tr_small_left">
		                Country
		                <div class="vr"></div>
                </div>
                <div class="section1_tr_small_right">
                        {{theApplication.country}}     
		                <div class="vr"></div>
                </div>
                <div class="section1_tr_small_left">
		                City
		                <div class="vr"></div>
		        </div>
                <div class="section1_tr_small_right">
                        {{theApplication.city}}
		                <div class="vr"></div>
		        </div>
            </div>
            <div class="td">
		            <div class="section1_tr_left">
		                Zip
		                <div class="vr"></div>
		            </div>
		            <div class="section1_tr_right">
		                {{theApplication.zip}}
		            </div>
            </div>
        </div>
<!-- Section 2 -->
        <br />
        <h3 class = "small_title" > Section 2</h3>
        <br />
        <div class = "section2">
            <div class="td">
		            <div class="section2_tr_left" style = "font-weight:bolder;">
		                CCFR Site and Site Principal Investigator
		                <div class="vr"></div>
		            </div>
		            <div class="section2_tr_right" style = "font-weight:bolder;">
		                Apply or not
		            </div>
		    </div>
            <div class="td">
		            <div class="section2_tr_left">
		                No.13 Australasian Colorectal Cancer Family Study, Site PI: Mark A. Jenkins, PhD 
		                <div class="vr"></div>
		            </div>
		            <div class="section2_tr_right">
		                <p>{{theApplication.con1}}</p>
		            </div>
		    </div>
            <div class="td">
		            <div class="section2_tr_left">
		                No.12(02) Cedars-Sinai Colorectal Cancer Family Registry, Site PI: Jane Figueiredo, PhD  
		                <div class="vr"></div>
		            </div>
		            <div class="section2_tr_right">
		                <p>{{theApplication.con2}}</p>
		            </div>
		    </div>
            <div class="td">
		            <div class="section2_tr_left">
		                No.12(05) Cleveland Clinic Cancer Family Registry, Site PI: Stephanie Schmit, PhD, MPH  
		                <div class="vr"></div>
		            </div>
		            <div class="section2_tr_right">
		                <p>{{theApplication.con3}}</p>
		            </div>
		    </div>
            <div class="td">
		            <div class="section2_tr_left">
		                No.14 Hawaii Family Registry of Colon Cancer, Site PI: Loic Le Marchand, MD, PhD  
		                <div class="vr"></div>
		            </div>
		            <div class="section2_tr_right">
		                <p>{{theApplication.con4}}</p>
		            </div>
		    </div>
            <div class="td">
		            <div class="section2_tr_left">
		                No.15 Mayo Colorectal Cancer Family Registry, Site PI: Rish Pai, MD, PhD 
		                <div class="vr"></div>
		            </div>
		            <div class="section2_tr_right">
		                <p>{{theApplication.con5}}</p>
		            </div>
		    </div>
            <div class="td">
		            <div class="section2_tr_left">
		                No.11 Ontario Familial Colorectal Cancer Registry, Site PI: Steve Gallinger, MD 
		                <div class="vr"></div>
		            </div>
		            <div class="section2_tr_right">
		                <p>{{theApplication.con6}}</p>
		            </div>
		    </div>
            <div class="td">
		            <div class="section2_tr_left">
		                No.16 Seattle Familial Colorectal Cancer Registry, Site PI: Amanda Phipps, PhD, MPH
		                <div class="vr"></div>
		            </div>
		            <div class="section2_tr_right">
		                <p>{{theApplication.con7}}</p>
		            </div>
		    </div>
            <div class="td">
		            <div class="section2_tr_left">
		                No.17 UCSF Colon Cancer Family Registry (previously CPIC), Site PI: Iona Cheng, PhD, MPH 
		                <div class="vr"></div>
		            </div>
		            <div class="section2_tr_right">
		                <p>{{theApplication.con8}}</p>
		            </div>
		    </div>
            <div class="td">
		            <div class="section2_tr_right" style = "font-weight:bolder;">
		                Affiliation
		                <div class="vr"></div>
		            </div>
		            <div class="section2_tr_left">
		                <p>{{theApplication.Affiliation}}</p>
		            </div>
		    </div>
        </div>
<!-- Section 3 -->
        <br />
        <h3 class = "small_title" > Section 3</h3>
        <br />
        <div class = "section3">
            <div class="section3_tr_top" style = "font-weight:bolder;">
                1. Abstract
                <div class="vr"></div>
            </div>
            <div class = "section3_tr_text" style="word-break:break-all">
                {{theApplication.abstract}}
            </div>
            <div class="section3_tr_top" style = "font-weight:bolder;">
                2. Specific Aims
                <div class="vr"></div>
            </div>
            <div class = "section3_tr_text" style="word-break:break-all">
                {{theApplication.specificAims}}
            </div>
            <div class="section3_tr_top" style = "font-weight:bolder;">
                3. Background and Significance
                <div class="vr"></div>
            </div>
            <div class = "section3_tr_text" style="word-break:break-all">
                {{theApplication.backgroundAndSignificance}}
            </div>
            <div class="section3_tr_top" style = "font-weight:bolder;">
                4. Preliminary Data
                <div class="vr"></div>
            </div>
            <div class = "section3_tr_text" style="word-break:break-all">
                {{theApplication.preliminaryData}}
            </div>
            <div class="section3_tr_top" style = "font-weight:bolder;">
                5. Study Design
                <div class="vr"></div>
            </div>
            <div class = "section3_tr_text" style="word-break:break-all">
                {{theApplication.studyDesign}}
            </div>
            <div class="section3_tr_top" style = "font-weight:bolder;">
                6. Selection Criteria
                <div class="vr"></div>
            </div>
            <div class = "section3_tr_text" style="word-break:break-all">
                {{theApplication.selectionCriteria}}
            </div>
        </div>
    </div>
  </template>
  
  <script>
  // Imports
  import { getFirestore, doc, collection, getDocs, updateDoc} from "firebase/firestore"
  import { ElMessage } from "element-plus";

  export default {
    data () {
        return {
            id: this.$route.params.id,
            theApplication: {},
            isVote: false
        }
    },
    created() {
        const db = getFirestore();
        const colref = collection(db, 'submitApp');
        getDocs(colref)
            .then(snapshot => {
            snapshot.docs.forEach(doc => {
            if (doc.id == this.$route.params.id){
                this.theApplication = doc.data();
                if(this.theApplication.con1 == true){
                    this.theApplication.con1 = 'yes';
                }else{
                    this.theApplication.con1 = 'no';
                }
                if(this.theApplication.con2 == true){
                    this.theApplication.con2 = 'yes';
                }else{
                    this.theApplication.con2 = 'no';
                }
                if(this.theApplication.con3 == true){
                    this.theApplication.con3 = 'yes';
                }else{
                    this.theApplication.con3 = 'no';
                }
                if(this.theApplication.con4 == true){
                    this.theApplication.con4 = 'yes';
                }else{
                    this.theApplication.con4 = 'no';
                }
                if(this.theApplication.con5 == true){
                    this.theApplication.con5 = 'yes';
                }else{
                    this.theApplication.con5 = 'no';
                }
                if(this.theApplication.con6 == true){
                    this.theApplication.con6 = 'yes';
                }else{
                    this.theApplication.con6 = 'no';
                }
                if(this.theApplication.con7 == true){
                    this.theApplication.con7 = 'yes';
                }else{
                    this.theApplication.con7 = 'no';
                }
                if(this.theApplication.con8 == true){
                    this.theApplication.con8 = 'yes';
                }else{
                    this.theApplication.con8 = 'no';
                }
            }
            });
            console.log(this.$route.params.id)
        });
    },  
    components: {
    },

    methods: {
        async acceptApp(){
            if(this.isVote == false){
                if(this.theApplication.status == 'pending'){
                    const db = getFirestore();
                    const docRef = doc(db, "submitApp", this.$route.params.id);
                    this.theApplication.voteAccept= this.theApplication.voteAccept + 1
                    const vote = this.theApplication.voteAccept;
                    await updateDoc(docRef, {
                    voteAccept: vote
                    });
                    this.isVote = true
                    ElMessage.success("You accept this application !");  
                }else{
                    ElMessage.error("This application has already been approved or rejected !"); 
                }
                
            }else{
                ElMessage.error("You have already voted for this application !");    
            }
            

        },
        async rejectApp(){
            if(this.isVote == false){
                if(this.theApplication.status == 'pending'){
                    const db = getFirestore();
                    const docRef = doc(db, "submitApp", this.$route.params.id);
                    this.theApplication.voteReject = this.theApplication.voteReject + 1
                    const vote = this.theApplication.voteReject;
                    await updateDoc(docRef, {
                    voteReject: vote
                    });
                    this.isVote = true
                    ElMessage.success("You reject this application !"); 
                } else {
                    ElMessage.error("This application has already been approved or rejected !");
                }
            }else{
                ElMessage.error("You have already voted for this application !");    
            }
        }
  }
}
  </script>
  
  <style scoped>

  .acceptButton{
    border-radius: 4px;
    width: 250px;
    height: 40px;
    border: 1px solid skyblue;
    background: skyblue;
    color: #fff;
    cursor: pointer;
    display:block;
    margin-left: auto;
    margin-right: auto;
  }

  .rejectButton{
    border-radius: 4px;
    width: 250px;
    height: 40px;
    border: 1px solid rgb(189, 61, 6);
    background: rgb(189, 61, 6);
    color: #fff;
    cursor: pointer;
    display:block;
    margin-left: auto;
    margin-right: auto;
  }

  .app_title {
    margin: 0 auto;
    width: 1000px;
    height: 100px;
    line-height: 100px;
    font-size: 25px;
    background-color: #f4f6f7;
    text-align: center;
  }

  .small_title {
    text-align: center;
    font-size: 20px;
  }

  .vr {
    width: 1px;
    height: 30px;
    border: 1px solid black;
    float: right;
  }

  .td {
    width: 1000px;
    height: 100%;
    font-size: 18px;
    text-align: center;
    border: 1px solid black;
 }

 .section1{
    width: 1000px;
    margin: 0 auto;
    border: 1px solid black;
    margin-bottom: 50px;
  }

 .section1_tr_left {
    width: 195px;
    height: 30px;
    display: inline-block;
    line-height: 30px;
    font-size: 17px;
    font-weight:bolder;
 }

 .section1_tr_right {
    width: 800px;
    height: 30px;
    display: inline-block;
    text-align: center;
    line-height: 30px;
    font-size: 17px;
 }

 .section1_tr_small_left{
    width: 249px;
    height: 30px;
    display: inline-block;
    text-align: center;
    line-height: 30px;
    font-size: 17px;
    font-weight: bolder;
 }

 .section1_tr_small_right{
    width: 250px;
    height: 30px;
    display: inline-block;
    text-align: center;
    line-height: 30px;
    font-size: 17px;
 }

 .section2{
    width: 1000px;
    margin: 0 auto;
    border: 1px solid black;
    margin-bottom: 50px;
  }

  
  .section2_tr_left{
    width: 840px;
    height: 30px;
    display: inline-block;
    line-height: 30px;
    font-size: 17px;
  }

  .section2_tr_right{
    width: 150px;
    height: 30px;
    display: inline-block;
    text-align: center;
    line-height: 30px;
    font-size: 17px;
  }

  .section3{
    width: 1000px;
    margin: 0 auto;
    border: 1px solid black;
    margin-bottom: 50px;
  }

  .section3_tr_top{
    width: 1000px;
    height: 30px;
    display: inline-block;
    text-align: left;
    line-height: 30px;
    font-size: 17px;
    border: 1px solid black;
  }
  .section3_tr_text{
    width: 1000px;
    height: 100%;
    display: inline-block;
    text-align: left;
    line-height: 30px;
    font-size: 17px;
    border: 1px solid black;
  }
</style>
  