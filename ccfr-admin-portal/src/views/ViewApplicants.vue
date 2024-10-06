<template>
  <NavBar2/>
  <div class="container">
    <div v-if="applicants.length != 0">
      <div class="container subpage">
        <ul class="collection with-header">
          <li class="collection-header">
            <h4>All Applicants</h4>
          </li>
          <li v-for="applicant in applicants" v-bind:key="applicant.id" class="collection-item">
            Name: {{ applicant.firstName}} {{ applicant.lastName }}<br>
            Email: {{ applicant.email }}<br>
            <RouterLink v-bind:to="{name: 'adminMessages', params: {id: applicant.id, first: applicant.firstName, last: applicant.lastName}}">View Messages</RouterLink>
          </li>
        </ul>
      </div>
    </div>
    <div class="subpage" v-else>
      <h4>Loading Data...</h4>
    </div>
  </div>
</template>

<script setup>
  import NavBar2 from '../components/NavBar2.vue'
  import { ref, onMounted } from 'vue'
  import { collection, query, where, orderBy, onSnapshot } from 'firebase/firestore'
  import { db } from '@/firebase.js'

  const usersRef = collection(db, 'user'),
        applicantsQuery = query(usersRef, where('type', '==', 'applicant')),
        applicants = ref([])

  /* 
    Extract all applicants.
  */
  onMounted(() => {
    onSnapshot(applicantsQuery, querySnapShot => {
      const tempApplicants = []

      querySnapShot.forEach(doc => {
        const applicant = {
          'id': doc.id,
          'firstName': doc.data().firstName,
          'lastName': doc.data().surname,
          'email': doc.data().email
        }
        tempApplicants.push(applicant)
      })

      applicants.value = tempApplicants
    })
  })
</script>

<style scoped>
  .subpage {
    margin: 40px auto;
  }
  h4 {
    text-align: center;
  }
</style>