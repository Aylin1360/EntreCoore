<template>
  <div id="home">
    <ul class="collection with-header">
      <li class="collection-header"><h4>Notes</h4></li>
      <li v-for="note in notes" v-bind:key="note.id" class="collection-item">
        <div class="chip">{{note.topic}}</div>
        {{note.notee_id}}: {{note.name}} 
         <router-link class="secondary-content" v-bind:to="{ name: 'view-note', params: { note_id: note.note_id }}"><i class="fa fa-eye"></i></router-link>
      </li>
    </ul>
    <div class="fixed-action-btn">
      <router-link to="/new" class="btn-floating btn-large red">
        <i class="fa fa-plus"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
import db from './firebaseInit';
export default {
  name: 'home',
  data() {
    return {
      notes: [],
      loading: true
    };
  },
  created() {
    db
      .collection('notes')
      .orderBy('topic')
      .get()
      .then(querySnapshot => {
        this.loading = false;
        querySnapshot.forEach(doc => {
          const data = {
            id: doc.id,
            note_id: doc.data().note_id,
            name: doc.data().name,
            topic: doc.data().topic
          };
          this.notes.push(data);
        });
      });
  }
};
</script>

<style scoped>

ul{
  border: 2px solid red;
  position: relative;
  padding:0px;
  margin:0px;
  height:400px;
  width:400px;
  margin-left:950px;
  margin-top:70px;
}
li{
  border: 2px solid red;
  text-align:center;
}
.collection-header{
  font-family: "Benton Sans Medium", 'Open Sans', Helvetica, Arial, sans-serif;
  color:red;
}
.fixed-action-btn{
  position: relative;
  margin-left:1150px;
  margin-top:50px;
}
</style>