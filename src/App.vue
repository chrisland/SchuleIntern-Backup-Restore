<template>
  <div id="app">

    <nav>
      <ul>
        <li><a href="https://www.schule-intern.de" target="_blank">SchuleIntern Homepage</a></li>
        <li><a href="http://doku.schule-intern.de/display/ADMINHANDBUCH" target="_blank">Adminhandbuch</a></li>
        <li><a href="https://www.schule-intern.de/forum/" target="_blank">Support Forum</a></li>
        <li><a href="https://www.github.com/schuleintern" target="_blank">Github</a></li>
        <li>Backup-Restore Version 0.1</li>
      </ul>
    </nav>

    <div class="header">
      <div class="logo"></div>
      <div class="title">
        <h2>Wiederherstellung</h2>
        <h1>SchuleIntern</h1>
      </div>
    </div>

    <Server v-if="steps == 'server'" v-bind:apiRoot="apiRoot" ></Server>

    <Settings v-if="steps == 'settings'" v-bind:backup="backup" v-bind:apiRoot="apiRoot" v-bind:userValues="values"></Settings>

    <Restore v-if="steps == 'restore'"  v-bind:backup="backup" v-bind:apiRoot="apiRoot" v-bind:userValues="values"></Restore>

  </div>
</template>

<script>

import Server from "./components/Server.vue";
import Settings from "./components/Settings.vue";
import Restore from "./components/Restore.vue";


export default {
  name: 'app',
  components: {
    Server,
    Settings,
    Restore
  },
  data: function () {
    return {
      apiRoot: './',
      dataPost: {},
      steps: 'server',
      values: {},
      backup: {}
    }
  },
  created: function () {

    var that = this;

    EventBus.$on('done--step', data => {

      if (data.server == true) {
        //console.log('server done!');
        this.steps = 'settings';
        if (data.backup) {
          that.backup = data.backup;
        }
        
      }

      if (data.settings == true && data.values) {
        //console.log('settings done!');
        that.values = data.values;
        this.steps = 'restore';
      }

    });

  },  
  methods: {
    
  }
}
</script>

<style>


</style>
