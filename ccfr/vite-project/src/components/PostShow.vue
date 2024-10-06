<template>
    <PostList>
        <textarea
          placeholder="Full Name"
          class="postContentInput"
          v-model="description"
        ></textarea>
         <textarea
          placeholder="JobTitle"
          class="postContentInput"
          v-model="description"
        ></textarea>
        <textarea
          placeholder="Institution"
          class="postContentInput"
          v-model="description"
        ></textarea>
        <textarea
          placeholder="Department"
          class="postContentInput"
          v-model="description"
        ></textarea>
        <textarea
          placeholder="Address"
          class="postContentInput"
          v-model="description"
        ></textarea><textarea
          placeholder="City"
          class="postContentInput"
          v-model="description"
        ></textarea>
        <textarea
          placeholder="State"
          class="postContentInput"
          v-model="description"
        ></textarea>
        <textarea
          placeholder="Country"
          class="postContentInput"
          v-model="description"
        ></textarea>
    </PostList>
    <div style="text-align:center"><TheButton class="pubBtn" @click="publishPost">Next</TheButton></div>
</template>
<script setup>
import TheIcon from "./TheIcon.vue";
import TheButton from "./TheButton.vue";
import PostList from "./PostList.vue";

// import { useStore } from "vuex";
// import { ref } from "vue";
// const store = useStore();

// const description = ref("");

// function publishPost() {
//   store.dispatch("uploadPost", {
//     description: description.value,
//   });
// }
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
</style>
