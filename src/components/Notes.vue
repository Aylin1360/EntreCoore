<template>
  <div id="home">
    <ul class="list-group">
      <li class="list-group-item d-flex justify-content-between align-items-center"><h4>Notes</h4></li>
      <li v-for="note in notes" v-bind:key="note.id" class="collection-item">
        <div class="chip">{{note.topic}}</div>
        {{note.notee_id}}: {{note.name}} 
         <router-link class="secondary-content" v-bind:to="{ name: 'view-note', params: { note_id: note.note_id }}"><i class="fa fa-eye"></i></router-link>
      </li>
    </ul>
    <div class="fixed-action-btn">
      <router-link to="/new" class="btn-floating btn-large">
        <span>Add New Note</span><i class="fa fa-plus"></i>
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
  position: relative;
  padding:0px;
  margin:0px;
  height:400px;
  width:400px;
  margin-left:350px;
  margin-top:70px;
}
li{
  text-align:center;
  padding:20px;
}
.fixed-action-btn{
  position: relative;
  margin-left:550px;
  margin-top:20px;
  margin-bottom:50px;
}
.list-group{  
  background-color:white;
}
span{
  margin-right:10px;
}
</style>