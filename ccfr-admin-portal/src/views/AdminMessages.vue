<template>
  <NavBar2/>
  <div class="container">
    <div class="subpage" v-if="messages.length != 0">
      <ul class="collection with-header">
        <li class="collection-header">
          <h4>All Messages Between {{firstName}} {{lastName}} and You</h4>
        </li>
        <li v-for="message in messages" v-bind:key="message.id" class="collection-item">
          <div class="row">
            <div class="col s6" v-if="message.sender">
              {{ message.timestamp.toDate() }}<br>
              {{ message.content }}
            </div>
            <div class="col s6 offset-s6" v-else>
              {{ message.timestamp.toDate() }}<br>
              {{ message.content }}
            </div>
        </div>
        </li>
      </ul>
    </div>
    <div class="subpage" v-else>
      <h4>No communication exist between {{firstName}} {{lastName}} and you.</h4>
    </div>
    <div class="row">
        <form class="col s12">
          <div class="row">
            <div class="input-field col s12">
              <textarea id="msg" class="materialize-textarea" v-model="messageToSend"></textarea>
              <label for="textarea">Type your message here.</label>
            </div>
          </div>
        </form>
        <div class="right-align btn-dist">
          <button class="btn waves-effect waves-light" @click="sendMessage">Send</button>
        </div>
      </div>
  </div>
</template>

<script setup>
  import NavBar2 from '../components/NavBar2.vue'
  import { ref, onMounted } from 'vue'
  import { collection, query, onSnapshot, orderBy, addDoc, Timestamp } from 'firebase/firestore'
  import { db } from '@/firebase.js'

  const props = defineProps(['id', 'first', 'last']),
        firstName = ref(props.first),
        lastName = ref(props.last),
        messagesRef = collection(db, 'user/' + props.id + '/messages'),
        messagesQuery = query(messagesRef, orderBy('timestamp')),
        messages = ref([]),
        messageToSend = ref('')

  /*
    Extract all messages between the applicant/reviewer and the admin.
  */
  onMounted(() => {
    onSnapshot(messagesQuery, querySnapshot => {
      const tempMessages = []
      querySnapshot.forEach(doc => {
        const message = {
          'content': doc.data().content,
          'timestamp': doc.data().timestamp,
          'sender': doc.data().sender
        }
        // console.log(message.content, message.timestamp.toDate(), message.sender)
        tempMessages.push(message)
      })
      messages.value = tempMessages
    })
  })

  /*
    Send a message to the applicant/reviewer.
  */
  const sendMessage = () => {
    if (messageToSend.value == '') {
      alert('The text area cannot be empty.')
      return
    }
    let result = window.confirm(`Are you sure you want to send the following message?\n\n${messageToSend.value}`)
    if (result) {
      addDoc(messagesRef, {
        content: messageToSend.value,
        sender: false,
        timestamp: Timestamp.fromDate(new Date())
      })
      messageToSend.value = ''
      $('#msg').removeClass('valid').val('')
      $('label[for=textarea]').removeClass('active')
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
</style>