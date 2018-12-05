<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <v-progress-circular
          v-if="loading"
          :width="3"
          color="green"
          indeterminate>
        </v-progress-circular> 
        <pre v-if="!loading">
          {{boards}}
        </pre>
            <v-flex sm4>
          <v-card>
            <v-card-title>
              <div>
                  <div class="headline">Create Board</div>
                  <div>
                    <v-form 
                   v-if="!creating" 
                   v-model="valid" 
                   @submit.prevent="createBoard"
                   @keydown.prevent.enter
                   >
                      <v-text-field
                        v-model="board.name"
                        :rules="notEmptyRules"
                        label="Name"
                        required
                      ></v-text-field>
                      <v-text-field
                        v-model="board.background"
                        :rules="notEmptyRules"
                        label="Background"
                        required
                      ></v-text-field>
                      <v-btn type="submit">Create</v-btn>
                   </v-form>
                  </div>
              </div>
            </v-card-title>
          </v-card>
        </v-flex>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
export default {
  name: 'boards',
  data: () => ({
    creating: false,
    valid: false,
    board: {
      name: '',
      background: ''
    },
    notEmptyRules: [(value) => !!value || 'Cannot be empty']
  }),
  methods () {
  createBoard({})
  }
}
  </script>