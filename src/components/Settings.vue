<template>
  <div class="settings">
    
    <form enctype="multipart/form-data" v-on:submit.prevent>
      <div class="btn-outer-box">
        <button @click="restore" class="btn">Wiederherstellen</button>
      </div>
      
      <div class="outer-box">
        <div class="box box-bg-white">
          <h3 class="header-box green">Backup</h3>
          <p class="padding-tb">
            Backup erstellt am: {{backup.StartTimeFormat}}
          </p>
          <h3>Folgende Schritte werden auf dem Server durchgeführt:</h3>

          <ul class="ullist">
            <li v-if="backup.Action == 'data'">
              1. Der 'data' Ordner wird gelöscht und mit dem Ordner aus dem Backup ersetzt.
            </li>
            <li v-if="backup.Action == 'full'">
              1. Die Ordner 'www', 'framework', 'cli' und 'data' werden gelöscht und mit den Ordnern aus dem Backup ersetzt.
            </li>
            <li v-if="backup.Action == 'data' || backup.Action == 'full' || backup.Action == 'database'">
              2. Die Datenbank wird geleert und mit dem Backup neu eingespielt.
            </li>
          </ul>

          <h3 class="header-box blue">SQL Dump</h3>
          <ul class="">
            <li v-bind:key="index" v-for="(item, index) in backup.FileDatabase" >
              <div>
                <p>{{item.name}} [{{item.size}}mb]</p>
                <div v-if="item.diff == false" class="text-red icons-vorsicht">
                  Die Datei ist wahrscheinlich zu groß!
                </div>
              </div>
              
            </li>
          </ul>

          <h3 class="header-box grey">Server Verzeichnis</h3>
          <ul class="text-red box-icons-vorsicht">
            <li v-if="!backup.FileDatabase">
              Es wurde kein Datenbank Backup (Database.sql) gefunden!
            </li>
            <li v-if="backup.Action == 'full' && backup.FolderWWW">
              Der Ordner 'www' wurde auf dem Server gefunden und wird vom Backupscript überschrieben.
            </li>
            <li v-if="backup.Action == 'full' && backup.FolderFramework">
              Der Ordner 'framework' wurde auf dem Server gefunden und wird vom Backupscript überschrieben.
            </li>
            <li v-if="backup.Action == 'full' && backup.FolderCli">
              Der Ordner 'cli' wurde auf dem Server gefunden und wird vom Backupscript überschrieben.
            </li>
            <li v-if="(backup.Action == 'data' || backup.Action == 'full') && backup.FolderData">
              Der Ordner 'data' wurde auf dem Server gefunden und wird vom Backupscript überschrieben.
            </li>

            <li v-else class="box-icons-vorsicht-NONE">Keine Probleme erkannt.</li>

          </ul>

        </div>

        <div class="box box-bg-white">
          <h3 class="header-box red">Datenbank</h3>
          <ul>
            <li class="box-input">
              <strong>Bitte beachten Sie, dass die Datenbank bereits angelegt sein muss.</strong>
            </li>
            <li class="box-input text-red">
              <strong>Bestehende Tabellen werden gelöscht!</strong><br>Falls nötig bitte ein Backup der Datenbank anlegen.
            </li>
            <li class="box-input">
              Datenbank - Host
              <input type="text" name="dbhost" v-model="values.dbhost" placeholder="z.B. localhost" required="true" />
            </li>
            <li class="box-input">
              Datenbank - Port
              <input type="text" name="dbport" v-model="values.dbport" placeholder="" required="true" />
            </li>
            <li class="box-input">
              Datenbank - Benutzername
              <input type="text" name="dbuser" v-model="values.dbuser" placeholder="z.B. root" required="true" />
            </li>
            <li class="box-input">
              Datenbank - Passwort
              <input type="text" name="dbpass" v-model="values.dbpass" placeholder="z.B. secret"  />
            </li>
            <li class="box-input">
              Datenbank - Datenbankname
              <input type="text" name="dbname" v-model="values.dbname" placeholder="z.B. schuleinterndatenbank" required="true" />
            </li>
          </ul>

        </div>
      </div>

      <div class="btn-outer-box">
        <button @click="restore" class="btn">Wiederherstellen</button>
      </div>
    </form>
    

  </div>
</template>

<script>

import axios from "axios";

export default {
  name: 'Settings',
  props: {
    apiRoot: String,
    userValues: Object,
    backup: Object
  },
  data: function () {
    return {
      values: {}
    }
  },
  created: function () {
    
    if (this.userValues.file) {
      this.setData(this.userValues);
    } else {
      this.init();
    }
  
  },
  methods: {
    init: function () {

      var that = this;

      axios.get(this.apiRoot+'restore.php?action=settings')
      .then( function(response) {
        that.setData(response.data);
      }).catch(function (error) {
        console.error(error);
      });

    },
    setData: function (data) {

      this.values = data;

    },
    required: function () {

      if (!this.values.dbhost
        || !this.values.dbport
        //|| !this.values.dbpass
        || !this.values.dbname
        || !this.values.dbuser
        
         ) {
          return false;
      } else {
          return true;
      }

    },
    restore: function () {

      if ( !this.required() ) {
          // TODO: error msg
          //console.log(this.values);
          console.log('error: required');
          return false;
      }

      EventBus.$emit('done--step', {
        settings: true,
        values: this.values
      })

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
