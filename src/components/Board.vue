<template>
  <div class="board">
    <menu-bar></menu-bar>
    <div class="row">
        <div class="col-md">
          <task-lane id="todo" title="To-Do" :items="todoItems"></task-lane>
        </div>
        <div class="col-md">
		  <task-lane id="inProgress" title="Doing" :items="inProgressItems"></task-lane>
		</div>
		<div class="col-md">
		  <task-lane id="done" title="Done" :items="doneItems"></task-lane>
		</div>
    </div>
  </div>

</template>

<script>
import { mapState } from 'vuex';
import TaskLane from './TaskLane';

export default {
  name: 'Board',
  components: {
    'task-lane': TaskLane,
  },
  computed: mapState({
    todoItems: s => s.items.todo,
    inProgressItems: s => s.items.inProgress,
  	doneItems: s => s.items.done,
  }),
};
</script>

<style>
.col-md{
  color:rgb(227, 99, 71);
}

</style>