
// var audioPlayer = new Cowbell.Player.Audio();
// var psgZXPlayer = new Cowbell.Player.PSG();
var psgSTPlayer = new Cowbell.Player.PSG({ayFrequency: 2000000, ayMode:"YM"});
// var stcPlayer = new Cowbell.Player.ZXSTC({stereoMode: 'acb'});
// var pt3Player = new Cowbell.Player.ZXPT3({stereoMode: 'acb'});
// var sqtPlayer = new Cowbell.Player.ZXSQT({stereoMode: 'acb'});
// var vtxPlayer = new Cowbell.Player.VTX();
// var modPlayer = new Cowbell.Player.OpenMPT({
//   'pathToLibOpenMPT': 'cowbell/libopenmpt.js'
// });
// var sidPlayer = new Cowbell.Player.JSSID();
// var asapPlayer = new Cowbell.Player.ASAP();
// var sndhPlayer = new Cowbell.Player.PSGPlay({
//   'pathToLibPSGPlay': 'cowbell/libpsgplay.js'
// });

var currentTrack;
var audioElement;

function loadMusicFromURL(url, options, onCompletion, onFail, onProgress) {
  var track = new psgSTPlayer.Track(url, {track: options.track ? options.track + 1 : 1});
  if (audioElement && !audioElement.paused) {
    audioElement.pause();
  }
  if (currentTrack && currentTrack.close) {
    currentTrack.close();
  }
  currentTrack = track;
  audioElement = null;
  audioElement = currentTrack.open();

  audioElement.ontimeupdate = onProgress
  audioElement.play()

}

function pause() {
  audioElement.pause()
}

function resume() {
  if (audioElement.paused)
    audioElement.play()
}

function getSongInfo() {
  return {
    numberOfTracks: 10
  }
}


export default {
  loadMusicFromURL: loadMusicFromURL,
  pause: pause,
  resume: resume,
  getSongInfo: getSongInfo
}
