<template>
    <TheLayout>
    <Status />
    <h2>Section1:Investigator and General Information</h2>
     <PostShow />
     <PostActions />
    </TheLayout>
</template>

    <script setup>
    import PostActions from "../components/PostActions.vue";
    import PostList from "../components/PostList.vue";
    import TheButton from "../components/TheButton.vue";
    import PostShow from "../components/PostShow.vue";
    import Status from "../components/Status.vue";
    import TheLayout from "../components/TheLayout.vue";
    </script>