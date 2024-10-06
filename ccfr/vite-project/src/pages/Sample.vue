<script setup>
</script>

<template>
    <div class="body">
        <div class="text">
            <div class="content">
                <a class="a1">SPECIMEN AND DATA CRITERIA:</a><a>The tables below describe in basic terms the data and biospecimens that are 
                    available.</a><a class="a1">Use this information to complete</a><a class="a2">DATA AND SPECIMEN CRITERIA table, below.</a>
            </div>
                <div class="table1">
                    <table class="ta1">
                        <tr>
                            <th>BIOSPECIMENS (see biospecimen pricing sheet)</th>
                        </tr>
                        <tr>
                            <td class="ta1">DNA from blood</td>
                        </tr>
                        <tr>
                            <td class="ta1">DNA from lymphoblast cell-lines*1</td>
                        </tr>
                        <tr>
                            <td class="ta1">DNA from buccal or saliva cells</td>
                        </tr>
                        <tr>
                            <td class="ta1">DNA from paraffin-embedded tumor tissue</td>
                        </tr>
                        <tr>
                            <td class="ta1">DNA from paraffin-embedded normal tissue</td>
                        </tr>
                        <tr>
                            <td class="ta1">DNA from fresh frozen tumor tissue*2</td>
                        </tr>
                        <tr>
                            <td class="ta1">DNA from fresh frozen normal tissue*2</td>
                        </tr>
                        <tr>
                            <td class="ta1">Plasma</td>
                        </tr>
                        <tr>
                            <td class="ta1">Dried blood “Guthrie spot”</td>
                        </tr>
                        <tr>
                            <td class="ta1">Tumor tissue from paraffin blocks</td>
                        </tr>
                        <tr>
                            <td class="ta1">Normal tissue from paraffin blocks</td>
                        </tr>
                        <tr>
                            <td class="ta1">Fresh frozen tumor tissue*2</td>
                        </tr>
                        <tr>
                            <td class="ta1">Fresh frozen normal tissue*2</td>
                        </tr>
                        <tr>
                            <td class="ta1">Lymphoblast cell line (LCL) (growing culture) *1</td>
                        </tr>
                        <tr>
                            <td class="ta1">Digital image of the H&E slide</td>
                        </tr>
                        <tr>
                            <td class="ta1">*1Limited primarily to Phase I high-risk probands</td>
                        </tr>
                        <tr>
                            <td class="ta1">*2Very limited availability</td>
                        </tr>
                    </table>
                </div>
                <div class="table2">
                    <table class="ta1">
                        <tr>
                            <th class="he2">DATA</th>
                        </tr>
                        <tr>
                            <td class="ta1">Family history of cancer data</td>
                        </tr>
                        <tr>
                            <td class="ta1">Baseline epi/risk factor questionnaire data</td>
                        </tr>
                        <tr>
                            <td class="ta1">Follow-up epi/risk factor questionnaire data</td>
                        </tr>
                        <tr>
                            <td class="ta1">Baseline diet questionnaire data*3</td>
                        </tr>
                        <tr>
                            <td class="ta1">Colorectal pathology data</td>
                        </tr>
                        <tr>
                            <td class="ta1">Clinical / treatment data*4</td>
                        </tr>
                        <tr>
                            <td class="ta1">Molecular data</td>
                        </tr>
                        <tr>
                            <td class="ta1">Other, describe:</td>
                        </tr>
                        <tr>
                            <td class="ta1">Other, describe:</td>
                        </tr>
                        <tr>
                            <td class="ta1">&nbsp</td>
                        </tr>
                        <tr>
                            <td class="ta1">&nbsp</td>
                        </tr>
                        <tr>
                            <td class="ta1">&nbsp</td>
                        </tr>
                        <tr>
                            <td class="ta1">&nbsp</td>
                        </tr>
                        <tr>
                            <td class="ta1">&nbsp</td>
                        </tr>
                        <tr>
                            <td class="ta1">*3Limited to Phase I, no data for centers 15, 16</td>
                        </tr>
                        <tr>
                            <td class="ta1">*4Limited to Phase-I probands, no data for centers 12 and 17</td>
                        </tr>
                    </table>
                </div>
        </div>
    </div>
</template>

<style scoped>
.body {
  margin: 0;
  padding-right: 15%;
  padding-left: 15%;
  background-color: white;
}
.text {
  padding: 1px 10px;
  height: 700px;
  background-color: white;
}
.content {
    margin-top: 5%;
    padding-left: 2%;
    padding-right: 8%;
    line-height: 200%;
}
.a1 {
    font-weight: 600;
}
.a2 {
    font-weight: 600;
    font-style:italic;
}
.table1 {
    margin-top: 5%;
    margin-left: 5%;
    width:40%;
    float:left;
}
.table2 {
    margin-top: 5%;
    margin-left: 5%;
    width:50%;
    float:left;
}
.he2 {
    padding-left: 1%;
    border-style: solid;
    border-collapse: collapse;  
    text-align: left;  
}
.ta1 {
    border-style: solid;
    border-collapse: collapse;    
    padding-left: 3%;
    padding-right: 3%;
}
</style>
