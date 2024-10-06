<template>
  <NavBar2/>
  <div class="container">
    <div v-if="reviewers.length != 0">
      <div class="container subpage">
        <ul class="collection with-header">
          <li class="collection-header">
            <h4>All Reviewers</h4>
          </li>
          <li v-for="reviewer in reviewers" v-bind:key="reviewer.id" class="collection-item">
            Name: {{ reviewer.firstName}} {{ reviewer.lastName }}
            <div class="chip">{{ reviewer.position }}</div><br>
            Email: {{ reviewer.email }}<br>
            <RouterLink v-bind:to="{name: 'adminMessages', params: {id: reviewer.id, first: reviewer.firstName, last: reviewer.lastName}}">View Messages</RouterLink>
            <div class="right-align">
              <button
                v-if="!reviewer.approved"
                @click="approveReviewer(reviewer.id, reviewer.firstName, reviewer.lastName)"
                class="waves-effect waves-light btn-small space"
              >Approve
              </button>
              <button
                v-if="reviewer.approved"
                @click="freezeReviewer(reviewer.id, reviewer.firstName, reviewer.lastName)"
                class="waves-effect waves-light btn-small space"
              >Freeze
              </button>
              <button
                @click="deleteReviewer(reviewer.firstName, reviewer.lastName, reviewer.id)"
                class="waves-effect waves-light btn-small"
              >Delete
              </button>
            </div>
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
  import { collection, query, where, orderBy, onSnapshot, updateDoc, deleteDoc, doc } from 'firebase/firestore'
  import { db } from '@/firebase.js'

  const usersRef = collection(db, 'user'),
        reviewersQuery = query(usersRef, where('type', 'not-in', ['admin', 'applicant']), orderBy('type')),
        reviewers = ref([])

  /* 
    Extract all reviewers.
  */
  onMounted(() => {
    onSnapshot(reviewersQuery, querySnapShot => {
      const tempReviewers = []

      querySnapShot.forEach(doc => {
        const reviewer = {
          'id': doc.id,
          'firstName': doc.data().firstName,
          'lastName': doc.data().surname,
          'email': doc.data().email,
          'position': doc.data().type,
          'approved': doc.data().approved
        }
        if (reviewer.position == 'BWGreviewer') {
          reviewer.position = 'BWG Chair'
        }
        if (reviewer.position == 'COMMITTEEreviewer') {
          reviewer.position = 'Steering Committee Member'
        }
        if (reviewer.position == 'CCFRreviewer') {
          reviewer.position = 'CCFR Community Chair'
        }
        tempReviewers.push(reviewer)
      })

      reviewers.value = tempReviewers
    })
  })

  /*
    Approve a reviewer.
  */
  const approveReviewer = (id, firstName, lastName) => {
    let result = window.confirm(`Are you sure you want to approve ${firstName} ${lastName}'s account?`)
    if (result) {
      updateDoc(doc(usersRef, id), {
      approved: true
    })
    }
  }

  /*
    Freeze a reviewer.
  */
  const freezeReviewer = (id, firstName, lastName) => {
    let result = window.confirm(`Are you sure you want to freeze ${firstName} ${lastName}'s account?`)
    if (result) {
      updateDoc(doc(usersRef, id), {
        approved:false
      })
    }
  }

  /*
    Delete a reviewer.
  */
  const deleteReviewer = (firstName, lastName, id) => {
    let result = window.confirm("Are you sure you want to delete " + firstName + " " + lastName + "?")
    if (result) {
      deleteDoc(doc(usersRef, id))
      alert("You have successfully deleted " + firstName + " " + lastName + ".")
    }
  }
</script>

<style scoped>
  .subpage {
    margin: 40px auto;
  }
  h4 {
    text-align: center;
  }
  .space {
    margin-right: 30px;
  }
</style>