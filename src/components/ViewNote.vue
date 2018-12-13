<template>
  <div id="view-note">
    <ul class="collection with-header">
      <li class="collection-header"><h4>{{name}}</h4></li>
      <li class="collection-item">Note ID#: {{note_id}}</li>
      <li class="collection-item">Topic: {{topic}}</li>
      <li class="collection-item">xxx: {{xxx}}</li>
    </ul>
    <router-link to="/" class="btn grey">Back</router-link>
    <button @click="deleteNote" class="btn red">Delete</button>

    <div class="fixed-action-btn">
      <router-link v-bind:to="{ name: 'edit-note', params: { note_id: note_id }}" class="btn-floating btn-large red">
        <i class="fa fa-pencil"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
import db from './firebaseInit';
export default {
  name: 'view-note',
  data() {
    return {
      note_id: null,
      name: null,
      topic: null,
      xxx: null
    };
  },
  beforeRouteEnter(to, from, next) {
    db
      .collection('notes')
      .where('note_id', '==', to.params.note_id)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          next(vm => {
            vm.note_id = doc.data().note_id;
            vm.name = doc.data().name;
            vm.topic = doc.data().topic;
            vm.xxx = doc.data().xxx;
          });
        });
      });
  },
  watch: {
    $route: 'fetchData'
  },
  methods: {
    fetchData() {
      db
        .collection('notes')
        .where('note_id', '==', this.$route.params.note_id)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            this.note_id = doc.data().note_id;
            this.name = doc.data().name;
            this.topic = doc.data().topic;
            this.xxx = doc.data().xxx;
          });
        });
    },
    deleteNote() {
      if (confirm('Are you sure?')) {
        db
          .collection('notes')
          .where('note_id', '==', this.$route.params.note_id)
          .get()
          .then(querySnapshot => {
            querySnapshot.forEach(doc => {
              doc.ref.delete();
              this.$router.push('/');
            });
          });
      }
    }
  }
};
</script>
