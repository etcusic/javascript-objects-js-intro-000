var playlist = {
  RATM: "Maggie's Farm"
}

var updatePlaylist = function(playlist, artistName, songTitle){
  playlist[artistName] = songTitle

  return playlist
}
