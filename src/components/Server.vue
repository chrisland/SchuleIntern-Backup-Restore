<template>
  <div class="server">

    <div class="outer-box">
      <div class="box boxlist">
        
        <h2>Wiederherstellen Ihres SchuleIntern Backups.</h2>
        <p>
          Bitte legen Sie sich folgende Daten bereit:
        </p>
        <ul class="ullist">
          <li>SchuleIntern Backupdatei im *.zip Format</li>
          <li>Zugangsdaten für Ihre MySQL / MariaDB Datenbank</li>
        </ul>


        <h3>Server Test</h3>

        <ul>
          <li>
            <div class="box-long">
              Schreibrechte im Übergeordnetem Verzeichnis
              <div class="info">
                {{values.upperDir}}
              </div>
            </div>
            <div class="box-icon">
              <img v-if="!loading && values.upperDirWriteable" src="../assets/icons/check.svg" alt="ok" title="ok"/>
              <img v-else-if="!loading && !values.upperDirWriteable" src="../assets/icons/cancel.svg" alt="error" title="error"/>
              <img v-if="loading" src="../assets/icons/spinner.gif" alt="loading" title="loading"/>
            </div>
          </li>
          <li>
            <div class="box-long">
              PHP Version
              <div class="info">
                Min. 7.2 - Installiert: {{values.phpVersion}}
              </div>
            </div>
            <div class="box-icon">
              <img v-if="!loading && values.phpVersionCompare" src="../assets/icons/check.svg" alt="ok" title="ok"/>
              <img v-else-if="!loading && values.phpVersionCompare == false" src="../assets/icons/cancel.svg" alt="error" title="error"/>
              <img v-if="loading" src="../assets/icons/spinner.gif" alt="loading" title="loading"/>
            </div>
          </li>
          <li>
            <div class="box-long">
              PHP Zip Erweiterung
            </div>
            <div class="box-icon">
              <img v-if="!loading && values.zipEnable" src="../assets/icons/check.svg" alt="ok" title="ok"/>
              <img v-else-if="!loading && values.zipEnable == false" src="../assets/icons/cancel.svg" alt="error" title="error"/>
              <img v-if="loading" src="../assets/icons/spinner.gif" alt="loading" title="loading"/>
            </div>
          </li>
          
        </ul>
        <div class="btn-box">
          <button v-if="btnState == false" @click="refresh"
            class="btn">Erneut Testen</button>
        </div>


      </div>
      <div class="box box-bg-white">
        
        <h3 class="header-box green">Ihre Backup Datei</h3>
        <form enctype="multipart/form-data" v-on:submit.prevent>
          
          <h4>Hochladen:</h4>
          <ul>
            <li class="box-input">
              <input type="file" name="file" id="file" v-on:change="setFile" accept=".zip,.rar,.7zip" required="true"/>
              <div class="input-underline">Nur Daten im *.zip Format</div>
            </li>
            <li>
              <img v-if="uploadLoading" src="../assets/icons/spinner.gif" alt="loading" title="loading"/>
              <div v-if="uploadError" class="box-red">
                {{uploadError}}
              </div>
            </li>
          </ul>

          <h4>Auf dem Server:</h4>
          <ul>
            <li class="localHandler" v-bind:key="index" v-for="(item, index) in values.localBackups"
              @click="setLocalHandler(item, $event)">
              {{item}}
            </li>
          </ul>
          <p class="info">Wenn die zip-Datei nicht hochgeladen werden kann, legen Sie das Backup in den /www/restore/ Ordner auf Ihren Server und laden Sie diese Seite neu.</p>

        </form>

        

      </div>
    </div>
    <div class="btn-outer-box">
      <button v-if="btnState" @click="next" class="btn">Weiter</button>
    </div>

    
  </div>
</template>

<script>

import axios from "axios";



export default {
  name: 'Server',
  props: {
    apiRoot: String
  },
  data: function () {
    return {
      values: false,
      btnState: false,
      loading: false,

      uploadError: false,
      uploadLoading: false
    }
  },
  created: function () {
    this.init();
  },
  methods: {

    setLocalHandler: function (item, event) {

      var active = document.querySelector('.activeLocalHandler');
      if (active) {
        active.classList.remove('activeLocalHandler');
      }
      event.target.classList.add('activeLocalHandler');

      this.values.file = item;
      this.values.fileRoot = 'local';

      if ( !this.required() ) {
          this.btnState = false;
      } else {
          this.btnState = true;
      }

    },
    setFile: function (e) {

      var imagefile = document.querySelector('#file');
      this.values.file = imagefile.files[0];
      this.values.fileRoot = 'upload';

      if ( !this.required() ) {
          this.btnState = false;
      } else {
          this.btnState = true;
      }

    },
    init: function () {

      var that = this;

      this.loading = true;

      axios.get(this.apiRoot+'restore.php?action=server')
      .then( function(response) {
        that.setData(response.data);
        
      }).catch(function (error) {

        that.setData( {
          upperDirWriteable: false,
          phpVersionCompare: false,
          phpVersion: false
        });

        console.error(error);
      });

    },
    setData: function (data) {

      this.values = data;

      if ( !this.required() ) {
          this.btnState = false;
      } else {
          this.btnState = true;
      }

      this.loading = false;

    },
    required: function () {

      if (!this.values.upperDirWriteable
         || !this.values.phpVersionCompare
         || !this.values.phpVersion
         || !this.values.file) {

        this.uploadError = 'Bitte wählen sie eine Backupdatei aus.';
        return false;
      } else {
        this.uploadError = false;
        return true;
      }

    },
    refresh: function () {

      this.init();

    },
    next: function () {

      if ( !this.required() ) {
          return false;
      }



      var formData = new FormData();
      formData.append('file', this.values.file);
      formData.append('fileRoot', this.values.fileRoot);
      
      this.uploadLoading = true;

      var that = this;
      axios.post(this.apiRoot+'restore.php?action=uploadBackup', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      .then( function(response) {

        that.uploadLoading = false;

        if (response.data && response.data.install == true && response.data.return) {

          var backup = JSON.parse(response.data.return);
          if (backup.Action && backup.StartTimeFormat) {

            EventBus.$emit('done--step', {
              server: true,
              backup: backup
            })

          }
          
          
        } else {

          if (response.data.return.errorMsg) {
            that.uploadError = response.data.return.errorMsg;
          }
        }
      
      }).catch(function (error) {
        //console.log('error2', error);
        that.uploadLoading = false;
        that.uploadError = 'Error! '+error;
      });




      
      

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
