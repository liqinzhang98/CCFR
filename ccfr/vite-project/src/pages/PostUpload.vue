<template>
<TheLayout>
<!-- <Status /> -->
<h2 class="text">Section1:Investigator and General Information</h2>
<br />
 <PostUpload />
</TheLayout>
</template>
<script setup>
import PostActions from "../components/PostActions.vue";
import PostList from "../components/PostList.vue";
import TheButton from "../components/TheButton.vue";
import PostUpload from "../components/PostUpload.vue";
import Status from "../components/Status.vue";
import TheLayout from "../components/TheLayout.vue";
</script>
<style scoped>  h2 {
    font-size: 30px;
    margin-left: 2%;
    text-align: center;
  }</style>