<template>
  <div id="new-note">
    <h3>Edit Note</h3>
    <div class="row">
    <form @submit.prevent="updateNote" class="col s12">
      <div class="row">
        <div class="input-field col s12">
          <input type="text" v-model="note_id" required>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input type="text" v-model="name" required>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input type="text" v-model="dept" required>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input type="text" v-model="position" required>
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
    name: 'edit-note',
    data () {
      return {
        note_id: null,
        name: null,
        topic: null,
        xxx: null
      }
    },
    beforeRouteEnter (to, from, next) {
      db.collection('notes').where('note_id', '==', to.params.note_id).get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          next(vm => {
            vm.note_id = doc.data().employee_id
            vm.name = doc.data().name
            vm.topic = doc.data().topic
            vm.xxx = doc.data().xxx
          })
        })
      })
    },
    watch: {
      '$route': 'fetchData'
    },
    methods: {
      fetchData () {
        db.collection('notes').where('note_id', '==', this.$route.params.note_id).get().then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.note_id = doc.data().note_id
            this.name = doc.data().name
            this.topic = doc.data().topic
            this.xxx = doc.data().xxx
          })
        })
      },
      updateNote () {
        db.collection('notes').where('note_id', '==', this.$route.params.note_id).get().then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            doc.ref.update({
              note_id: this.note_id,
              name: this.name,
              topic: this.topic,
              xxx: this.xxx
            })
            .then(() => {
              this.$router.push({ name: 'view-note', params: { note_id: this.note_id }})
            })
          })
        })
      }
    }
  }
</script>