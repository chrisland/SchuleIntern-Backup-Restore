<?php 

define('FOLDER_RESTORE', getcwd() );
define('FOLDER_WWW', FOLDER_RESTORE.'/../');
define('FOLDER_BACKUPDATA', FOLDER_RESTORE.'/backup');
define('FOLDER_BACKUP_FILE', FOLDER_RESTORE .'/backup.zip');
define('FOLDER_ROOT', FOLDER_RESTORE.'/../../');


// define('FOLDER_TEMP', FOLDER_WWW.'/install_temp');
// //define('FOLDER_ROOT', FOLDER_SETUP.'/../system');
// define('FOLDER_ROOT', FOLDER_SETUP.'/../../');

error_reporting(0);

$action = $_GET['action'];
$Installer = new Installer;

switch ($action) {

  /*
    Step 1 - Server - get
  */
  case 'server';

    $localBackups = array();
    $dir = scandir(FOLDER_RESTORE);
    foreach($dir as $file) {
      $extension = end(explode(".", $file));   
      if ($extension == 'zip' || $extension == '7zip' || $extension == 'rar') {
        $localBackups[] = $file;
      }
    }

    $zip = new ZipArchive();

    $return = array(
      'upperDir' => FOLDER_WWW,
      'upperDirWriteable' => is_writable(FOLDER_WWW),
      'phpVersion' => phpversion(),
      'phpVersionCompare' => version_compare(phpversion(), '7.2.0', '>'),
      'zipEnable' => $zip ? true : false,
      'localBackups' => $localBackups
    );

    echo json_encode($return);
    exit;

    break;
  
  /*
    Step 2 - Settings - get
  */
  case 'settings';


    $return = array(
      'dbport' => '3306',

      //TODO:
      // only for test!!!!!
      'dbhost' => 'localhost',
      'dbuser' => 'root',
      'dbname' => 'test',

    );

    echo json_encode($return);
    exit;

    break;


  /*
    Step 1 - uploadBackup
  */
  case 'uploadBackup':
    
    $return = array('install' => false);

    // required data
    if ( !$Installer->requiredPost() ) {
      $return = array('install' => false, 'error' => 'Missing Data');
      echo json_encode($return);
      exit;
    }
    
    $return['return'] = $Installer->uploadBackup();
    if ($return['return'] !== true) {
      echo json_encode($return);
      exit;
    }
    $return['return'] = $Installer->unzipFile();
    if ($return['return'] !== true) {
      echo json_encode($return);
      exit;
    }
    $return['return'] = $Installer->getBackupJson();
    if ( is_array($return['return']) && $return['return']['errorMsg'] ) {
      echo json_encode($return);
      exit;
    }

    $json = json_decode( $return['return'] );
    if ( $json->StartTime ) {
      $json->StartTimeFormat = date('d.m.Y H:i',$json->StartTime);
    }

    $json->FolderWWW = file_exists(FOLDER_WWW);
    $json->FolderFramework = file_exists(FOLDER_WWW.'../framework');
    $json->FolderCli = file_exists(FOLDER_WWW.'../cli');
    $json->FolderData = file_exists(FOLDER_WWW.'../data');

    //$json->FileDatabase = file_exists(FOLDER_BACKUPDATA."/Database.sql");

    $json->maxUpload = (int)(ini_get('upload_max_filesize'));
    $json->maxPost = (int)(ini_get('post_max_size'));

    $json->FileDatabase = array();
    $split_folder = FOLDER_BACKUPDATA."/sql-dump";
    $splits = scandir($split_folder);
    foreach ($splits as $dump) {
      if ($dump == "." || $dump == "..") { continue; }
      $json->FileDatabase[] = array(
        'name' => $dump,
        'size' => (int)(filesize($split_folder .'/'.$dump)/1000000),
        'diff' => (int)(filesize($split_folder .'/'.$dump)/1000000) > $json->maxUpload ? false : true
      );
    }

    


    $return['return'] = json_encode( $json );


    $return['install'] = true;

    echo json_encode($return);
    exit;
    break;



  /*
    Step 2.1 - moveFiles
  */
  case 'moveFiles':
    
    $return = array('install' => false);

    // required data
    if ( !$Installer->requiredPost() ) {
      $return = array('install' => false, 'error' => 'Missing Data');
      echo json_encode($return);
      exit;
    }
    
    $return['return'] = $Installer->moveFiles();
    if ( $return['return'] === true ) {
      $return['install'] = true;
    }

    echo json_encode($return);
    exit;
    break;

  /*
    Step 2.2 - insertDatabase
  */
  case 'insertDatabase':
    
    $return = array('install' => false);

    // required data
    if ( !$Installer->requiredPost() ) {
      $return = array('install' => false, 'error' => 'Missing Data');
      echo json_encode($return);
      exit;
    }
    
    $return['return'] = $Installer->insertDatabase();
    if ( $return['return'] === true ) {
      $return['install'] = true;
    }

    echo json_encode($return);
    exit;
    break;

  
  /*
    Step 2.2.1 - loopQuery
  */
  // case 'loopQuery':

  //   $return = array('install' => false);

  //   $return['return'] = $Installer->loopQuery();
  //   if ( $return['return'] === true ) {
  //     $return['install'] = true;
  //   }

  //   echo json_encode($return);
  //   exit;
  //   break;


  /*
    Step 3.7 - removeFolder
  */
  case 'removeFolder':
    
    $return = array('install' => false);

    // required data
    if ( !$Installer->requiredPost() ) {
      $return = array('install' => false, 'error' => 'Missing Data');
      echo json_encode($return);
      exit;
    }
    
    $return['return'] = $Installer->removeFolder();
    if ( $return['return'] === true ) {
      $return['install'] = true;
    }

    echo json_encode($return);
    exit;
    break;


    

  // /*
  //   Step Manual - deleteFolder - get
  // */
  // case 'deleteFolder';

  //   $return = array('install' => true);

  //   $return['deleteFolder'] = rrmdir(FOLDER_SETUP);

  //   if ( !$return['deleteFolder'] ) {
  //     $return =  array(
  //       'install' => false,
  //       'errorMsg' => 'Ordner konnte nicht gelöscht werden!'
  //     );
  //   }

  //   echo json_encode($return);
  //   exit;

  //   break;


  default:
    exit;
    break;

}

/**
 * 
 * Installer class for Webportal SchuleIntern
 * 
 * @category   WebportalSchuleIntern
 * @package    Installer
 * @author     Christian Marienfeld <post@chrisland.de>
 * @copyright  2019
 * @license    GPL-2.0
 * @version    1.0
 * @link       https://github.com/chrisland/Installer
 * @deprecated 
 */

class Installer {

  public $mysqli;

  public function requiredPost() {

    $list = array(
      'dbhost',
      'dbport',
      'dbname',
      'dbuser',
      'file'
    );

    for($i = 0; $i < count($list); $i++) {
      
      if ( !isset($list[$i]) || $list[$i] = '' ) {
        return false;
      }

    }
    
    return true;
  }

  public function uploadBackup() {


    if ($_POST['fileRoot'] == 'local') {
      
      $filename = (string)trim($_POST['file']);
      $ext = $this->checkExtension($filename);
      if ( $ext !== true ) {
        return $ext;
      }

      if ( !copy( $filename, FOLDER_BACKUP_FILE) ) {
        return array(
          'errorMsg' => 'Fehler beim File-Copy!'
        );
      }

      return true;

    } else if ($_POST['fileRoot'] == 'upload') {
    
      $filename = basename($_FILES['file']['name']);
      if (!$filename) {
        return array(
          'errorMsg' => 'Fehler beim File-Upload! Kein Dateiname.'
        );
      }
      
      $ext = $this->checkExtension($filename);
      if ( $ext !== true ) {
        return $ext;
      }

      if (!move_uploaded_file($_FILES['file']['tmp_name'], FOLDER_BACKUP_FILE)) {
        return array(
          'errorMsg' => 'Fehler beim File-Upload!'
        );
      }

      return true;

    } else {
      return array(
        'errorMsg' => 'Fehler beim File-Upload! Kein Root.'
      );
    }

    return false;

  }

  public function checkExtension($filename) {

    if (!$filename) {
      return array(
        'errorMsg' => 'Fehler beim File-Upload! Kein Filename. ('.$filename.')'
      );
    }
    $allowedExts = array('zip','7zip','rar');
    $extension = explode(".", $filename);   
    $extension = end($extension);

    if (!$extension) {
      return array(
        'errorMsg' => 'Fehler beim File-Upload! Kein Extension. ('.$filename.')'
      );
    }
    if( !in_array( strtolower($extension) , $allowedExts) ) {
      return array(
        'errorMsg' => 'Es können nur zip Formate verarbeitet werden! ('.$extension.')'
      );
    }

    return true;
  }

  public function unzipFile() {

    if ( !file_exists(FOLDER_BACKUP_FILE) ) {
      return array(
        'errorMsg' => 'Backup zip wurde nicht gefunden!'
      );
    }

    $zip = new ZipArchive;
    if ($zip->open( FOLDER_BACKUP_FILE ) === TRUE) {
        $zip->extractTo( FOLDER_BACKUPDATA );
        $zip->close();
       return true;

    } else {
      return array(
        'errorMsg' => 'Backup zip konnte nicht entpackt werden!'
      );
    }

    return false;

  }

  public function getBackupJson() {

    $jsonFile = FOLDER_BACKUPDATA.'/BackupInfo.json';

    if ( !file_exists($jsonFile) ) {
      return array(
        'errorMsg' => 'Backup json wurde nicht gefunden!'
      );
    }

    if ( !$file = file_get_contents($jsonFile) ) {
      return array(
        'errorMsg' => 'Backup json konnte nicht gelesen!'
      );
    }

    return $file;

  }

  public function moveFiles() {

    // Move Files to Folders
    $move = $this->moveFolder('data');
    if ( is_array($move) && $move['errorMsg'] ) {
      return $move;
    }

    $move = $this->moveFolder('cli');
    if ( is_array($move) && $move['errorMsg'] ) {
      return $move;
    }

    $move = $this->moveFolder('framework');
    if ( is_array($move) && $move['errorMsg'] ) {
      return $move;
    }

    if ( file_exists(FOLDER_BACKUPDATA."/www") ) {
      if ( !recCopy(FOLDER_BACKUPDATA."/www", FOLDER_ROOT."/www") ) {
        return array(
          'errorMsg' => 'Ordner `'.$folder.'` konnte nicht verschoben werden!'
        );
      }
    }

    
    return true;

  }

  public function moveFolder($folder) {
    
    if ( file_exists(FOLDER_BACKUPDATA."/".$folder) ) {
      if ( file_exists(FOLDER_ROOT."/".$folder) ) {
        if ( !$this->deleteDirectory(FOLDER_ROOT."/".$folder) ) {
          return array(
            'errorMsg' => 'Ordner `'.FOLDER_ROOT.'/'.$folder.'` konnte nicht gelöscht werden!'
          );
        }
      }
      if ( !rename(FOLDER_BACKUPDATA."/".$folder, FOLDER_ROOT."/".$folder) ) {
        return array(
          'errorMsg' => 'Ordner `'.$folder.'` konnte nicht verschoben werden!'
        );
      }
    }
    return true;
  }

  public function deleteDirectory($dirPath) {
    if (is_dir($dirPath)) {
      $objects = scandir($dirPath);
      foreach ($objects as $object) {
        if ($object != "." && $object !="..") {
          if (filetype($dirPath . '/' . $object) == "dir") {
            $this->deleteDirectory($dirPath . '/' . $object);
          } else {
            unlink($dirPath . '/' . $object);
          }
        }
      }
      reset($objects);
      rmdir($dirPath);
      return true;
    }
    
  }

  public function insertDatabase() {

    $connect = $this->connectDB();
    
    if ( is_array($connect) && $connect['errorMsg'] ) {
      $connect['errorMsg'] .= ' ('.$this->mysqli->error.')';
      return $connect;
    }

    $split_folder = FOLDER_BACKUPDATA."/sql-dump";

    if ( !file_exists($split_folder) ) {
      return array(
        'errorMsg' => 'SQL Dumps Ordner wurde nicht gefunden.'
      );
    }
    
    $splits = scandir($split_folder);
    $delList = array();
    foreach ($splits as $dump) {
      if ($dump == "." || $dump == "..") { continue; }

      $maxUpload = (int)(ini_get('upload_max_filesize'));

      if ( (int)(filesize($split_folder .'/'.$dump)/1000000) > $json->maxUpload ) {
        continue;
      }


      $sqlInstallation = file_get_contents($split_folder.'/'.$dump);

      if ( !$sqlInstallation ) {
        return array(
          'errorMsg' => 'Datenbank Datei konnte nicht geöffnet werden. ('.$split_folder.'/'.$dump.')'
        );
      }

      if ( !$this->mysqli->multi_query($sqlInstallation) ) {
        return array(
          'errorMsg' => 'Datenbank Query konnte nicht richtig ausgeführt werden. ('.$split_folder.'/'.$dump.')'
        );
      }

      array_push($delList, $dump);
   
      do {
        if($result = mysqli_store_result($this->mysqli)){
          mysqli_free_result($result);
        }
      } while(mysqli_next_result($this->mysqli));
      
    }

    // echo "<pre>";
    // print_r($delList);
    // echo "</pre>";

    // Dumps löschen die bearbeitet wurden
    foreach ($delList as $delFile) {
      if ( !unlink($split_folder.'/'.$delFile) ) {
        return array(
          'errorMsg' => 'Datei konnte nicht gelöscht werden ('.$split_folder.'/'.$delFile.')'
        );
      }
    }

    return true;
  }





  public function connectDB() {

    if ( !isset($_POST['dbhost']) ) {
      return array(
        'errorMsg' => 'Fehlende Daten! (Host)'
      );
    }
    if ( !isset($_POST['dbuser']) ) {
      return array(
        'errorMsg' => 'Fehlende Daten! (User)'
      );
    }
    if ( !isset($_POST['dbname']) ) {
      return array(
        'errorMsg' => 'Fehlende Daten! (Name)'
      );
    }

    $this->mysqli = new mysqli(
      (string)$_POST['dbhost'],
      (string)$_POST['dbuser'],
      (string)$_POST['dbpass'],
      (string)$_POST['dbname']
    );

    if ($this->mysqli->connect_errno) {
      return array(
        'errorMsg' => 'Es kann keine Verbindung zur Datenbank aufgebaut werden. '.$this->mysqli->error
      );
    }

    return true;

  }





  public function sendMail() {

    $cronurl = str_replace('index.php','cron.php?cronkey='.$_POST['cronkey'], $_POST['uri']);

    $mailtext = '<html>
      <head>
          <title>Installation SchuleIntern</title>
      </head>
      <body>
        <h2>Herzlichen Glückwunsch</h2>
        <h3>Ihre Installation von SchuleIntern war erfolgreich</h3>
        <br>
        <b>Ihre URL</b>
        <br>
        <a href="'.$_POST['uri'].'">'.$_POST['uri'].'</a>
        <br>
        <br>
        <b>Ihre Zugangsdaten:</b>
        <br>
        Benutzer: <span>'.$_POST['adminuser'].'</span>
        <br>
        Passwort: <span>'.$_POST['adminpass'].'</span>
        <br>
        <br>

        <h1>Und jetzt?</h1>
        <strong>Um das System in den Beriebszustand zu versetzen und abzusichern, müssen Sie noch folgendes erledigen:</strong>
        <br>

        <h3>1. Cronjobs</h3>
        <p>Folgende Cronjobs müssen noch bei Ihrem Hoster angelegt werden:</p>
        <ul>
            <li>
                '.$cronurl.'
                <br>
                Alle 15 Minuten
            </li>
            <li>
              '.$cronurl.'&cronName=MailSender
              <br>
              Alle 3 Minuten
            </li>
        </ul>

        <h3>2. Domian</h3>
        <p>Falls noch nicht geschehen ändern Sie bitte den Pfad der Domain direkt auf den "www" Ordner. Die Einstellungen dazu können Sie bei Ihrem Webhoster vornehmen.</p>

        <h3>3. Installationsordner entfernen</h3>
        <p>Damit keine weitere Installation durchgeführt werden kann, muss der "install" Ordner vom Server gelöscht werden</p>

        <h3>4. Support-Forum</h3>
        <p>Falls Sie Fragen oder Anregungen haben besuchen Sie unser Forum. Dort können mit der Community Lösungen, Probleme oder Wünsche besprochen werden.</p>
        <a href="https://www.schule-intern.de/forum/">https://www.schule-intern.de/forum/</a>
        
        <div class="spacer-top"></div>
        <h2>Viel Erfolg mit Ihrer Installation der SchuleIntern Software!</h2>
        <a href="'.$_POST['uri'].'">Zur Website</a>
        <br><br>
      </body>
    </html>';

    $empfaenger = (string)$_POST['adminemail'] ; //Mailadresse
    $absender   = "SchuleIntern";
    $betreff    = "Installation SchuleIntern";
    $antwortan  = "Webportal-Installation";
    
    $header  = "MIME-Version: 1.0\r\n";
    $header .= "Content-type: text/html; charset=utf-8\r\n";
    
    $header .= "From: $absender\r\n";
    $header .= "Reply-To: $antwortan\r\n";
    // $header .= "Cc: $cc\r\n";  // falls an CC gesendet werden soll
    $header .= "X-Mailer: PHP ". phpversion();
    
    if ( mail( $empfaenger, $betreff, $mailtext, $header) ) {
      return true;
    }
 
    return false;
  }

  

  public function removeFolder() {
    
    if ( !rrmdir(FOLDER_TEMP) ) {
      return array(
        'errorMsg' => 'Ordner konnte nicht gelöscht werden!'
      );
    }
    return true;

  }

 


}

function rrmdir($dir) { 
  if (is_dir($dir)) { 
    $objects = scandir($dir); 
    foreach ($objects as $object) { 
      if ($object != "." && $object != "..") { 
        if (is_dir($dir."/".$object))
          rrmdir($dir."/".$object);
        else
          unlink($dir."/".$object); 
      } 
    }
    rmdir($dir); 
    return true;
  } 
  return false;
}

function recCopy($source,$destination) {
  $dir = opendir($source);
  @mkdir($destination);
  while(( $file = readdir($dir)) ) {
      if (( $file != '.' ) && ( $file != '..' ) && $file != '.gitignore') {
          if ( is_dir($source . '/' . $file) ) {
              recCopy($source .'/'. $file, $destination .'/'. $file);
          }
          else {
              copy($source .'/'. $file,$destination .'/'. $file);
          }
      }
  }
  closedir($dir);
}