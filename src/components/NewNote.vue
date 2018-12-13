<template>
  <div id="new-note">
    <h3>New Note</h3>
    <div class="row">
    <form @submit.prevent="saveNote" class="col s12">
      <div class="row">
        <div class="input-field col s12">
          <input type="text" v-model="note" required>
          <label>Note ID#</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input type="text" v-model="name" required>
          <label>Name</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input type="text" v-model="topic" required>
          <label>Topic</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input type="text" v-model="xxx" required>
          <label>blablabla</label>
        </div>
      </div>
      <button type="submit" class="btn">Submit</button>
      <router-link to="/" class="btn grey">Cancel</router-link>
    </form>
  </div>
  </div>
</template>

<script>
    import db from './firebaseInit'
    export default {
      name: 'new-note',
      data () {
        return {
          note_id: null,
          name: null,
          topic: null,
          xxx: null
        }
      },
      methods: {
        saveNote () {
          db.collection('notes').add({
            notee_id: this.note_id,
            name: this.name,
            topic: this.topic,
            xxx: this.xxx
          })
          .then(docRef => {
            console.log('Client added: ', docRef.id)
            this.$router.push('/')
          })
          .catch(error => {
            console.error('Error adding new note: ', error)
          })
        }
      }
    }
</script>
