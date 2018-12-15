<template>
  <div class="form-group">
    <h3>New Note</h3>
    <div class="row">
    <form @submit.prevent="saveNote" class="col s12">
      <div class="row">
        <div class="input-field col s12">
          <label class="col-form-label" for="inputDefault">Note ID</label>&nbsp;
          <input type="text" v-model="note" placeholder="Note ID" required>
          
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <label class="col-form-label">Name  </label>&nbsp;&nbsp;&nbsp;&nbsp;
          <input type="text" v-model="name"placeholder="Name" required>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <label class="col-form-label">Topic  </label>&nbsp;&nbsp;&nbsp;&nbsp;
          <input type="text" v-model="topic" placeholder="Topic" required>
        </div>
      </div>
      <button type="submit" class="btn btn-secondary">Submit  </button>
      <router-link to="/notes" class="btn btn-danger">Cancel</router-link>
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
            note_id: this.note_id,
            name: this.name,
            topic: this.topic,
            xxx: this.xxx
          })
          .then(docRef => {
            console.log('Client added: ', docRef.id)
            this.$router.push('/notes')
          })
          .catch(error => {
            console.error('Error adding new note: ', error)
          })
        }
      }
    }
</script>

<style scoped>
h3{
  margin-left:75px;
}
.form-group{
  height:300px;
  width:400px;
}
.btn{
  margin:15px 25px;
}
.row{
  margin:5px;
}
</style>