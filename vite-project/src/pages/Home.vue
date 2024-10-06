<script setup>
import TheButton from "../components/TheButton.vue";
</script>

<template>
    <div class="body">
        <div class="text">
            <h2 class="h21">APPLICATION FOR COLLABORATION WITH THE</h2>
            <h2 class="h22">COLON CANCER FAMILY REGISTRY (COLON CFR, CCFR)</h2>
            <p>The Colon Cancer Family Registry (CCFR) is an international research infrastructure comprised of multidisciplinary 
                team of investigators with a central goal of facilitating laboratory, clinical and prevention research for the benefit 
                of registry participants and the general public. The resources collected by the C-CFR are available to the scientific 
                and medical community for collaborative research on the etiology, risk, prevention, and prognosis of colorectal cancer.</p>
            <p>Before you begin, you may find the following helpful:</p>
            <ul>
                <li>The Colon CFR Overview Manuscript (Newcomb et al., CEBP. 2007 Nov;16(11) can be found at: <a href="https://www.coloncfr.org/supplementary-information">https://www.coloncfr.org/supplementary-information</a></li>
                <li>Summary data can be found at <a href="https://www.coloncfr.org/summary-data">https://www.coloncfr.org/summary-data</a></li>
                <li>CCFR Biospecimen Product Pricing can be found under “Forms” at <a href="https://www.coloncfr.org/collaboration">https://www.coloncfr.org/collaboration</a></li>
                <li>Descriptions of variables can be found in our data dictionaries at: <a href="http://www.coloncfr.org/data-dictionaries">http://www.coloncfr.org/data-dictionaries</a></li>
                <li>Center questionnaires and abstraction forms can be found at <a href="http://www.coloncfr.org/questionnaires">http://www.coloncfr.org/questionnaires</a></li>
                <li>Information pertaining to collaborations with the CCFR can be found <a href="https://www.coloncfr.org/collaboration">https://www.coloncfr.org/collaboration</a>.</li>
            </ul>
            <br />
            <router-link :to="'/login'"><div style="text-align:center"><TheButton class="pubBtn" >Login</TheButton></div> </router-link>
        </div>
    </div>
</template>

<style scoped>
.body {
  margin: 0;
  padding-right: 15%;
  padding-left: 15%;
  background-color: #8eb7cb;
}
.text {
  padding: 1px 10px;
  height: 1000px;
  background-color: white;
}
.h21 {
    font-size: 18px;
    font-family:"Arial";
    margin-top: 5%;
    text-align: center;
}
.h22 {
    font-size: 18px;
    font-family:"Arial";
    font-weight: 100;
    text-align: center;
}
p {
    margin-top: 5%;
    padding-left: 8%;
    padding-right: 8%;
    line-height: 200%;
    text-align: justify;
}
ul {
    list-style-type: disc;
    padding-left: 13%;
}
li {
    padding-top: 20px;
}
</style>