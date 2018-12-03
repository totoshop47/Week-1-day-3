var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
}

// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

var printPlaylists = function () {
  var lPL = library.playlists;
  var pList = Object.keys(lPL);
  var pValue = Object.values(lPL);

  // console.log(pValue[0].tracks.length);
  // console.log(pValue);

  for (var i = 0; i < pList.length; i++) {
    console.log(pList[i] + ": " + pValue[i].name + " - " + pValue[i].tracks.length + " tracks");
  }
}


// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

var printTracks = function () {
  var lTr = library.tracks;
  var tList = Object.keys(lTr);
  var tValue = Object.values(lTr);

  // console.log(tValue[0].name);
  for (var i = 0; i < tList.length; i++ ) {
    console.log(tList[i] + ": " + tValue[i].name + " by " + tValue[i].artist + " (" + tValue[i].album + ")");
  }
}


// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

var printPlaylist = function (playlistId) {
  // var lPL = library.playlists;
  // var lTr = library.tracks;
  // var pList = Object.keys(lPL);
  // var tList = Object.keys(lTr);
  // var pValue = Object.values(lPL);
  // var tValue = Object.values(lTr);
  // // console.log(lPL);
  // // console.log(tList);
  // // console.log(pValue[1].tracks);
  // // console.log(tValue[2].id);
  // // console.log(tValue[i].id.length)
  // for (var i = 0; i < pList.length; i++) {
  //   if (playlistId === pList[i]) {
  //     console.log(pList[i] + ": " + pValue[i].name + " - " + pValue[i].tracks.length + " tracks");
  //     for (var v = 0; v < pValue[i].tracks.length; v++) {
  //       console.log(tList[v] + ": " + tValue[v].name + " by " + tValue[v].artist + " (" + tValue[v].album + ")");
  //     }
  //   }
  // }


  //Code written by Rohit


  console.log(playlistId+": "+library.playlists[playlistId].name+" - "+library.playlists[playlistId].tracks.length+ " tracks");

  let tracks = library.playlists[playlistId].tracks;
  for(var i = 0; i < tracks.length; i++) {
    let temp = tracks[i];
    console.log(temp + ": " + library.tracks[temp].name + " by " + library.tracks[temp].artist + " (" + library.tracks[temp].album + ")");
  }
  // Code written by Rohit Ends here
}


// adds an existing track to an existing playlist

var addTrackToPlaylist = function (trackId, playlistId) {
  library.playlists[playlistId].tracks.push(trackId);
  console.log(library.playlists[playlistId].tracks);
}


// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}


// adds a track to the library

var addTrack = function (name, artist, album) {
  var newTrackName = 't' + uid();

  var newTrackInfo =
    {
      id: newTrackName,
      name: name,
      artist: artist,
      album: album
    };

  library.tracks[newTrackName] = newTrackInfo;
  console.log(library.tracks);
}


// adds a playlist to the library

var addPlaylist = function (name) {

  library.playlists[name] =
  { id: name,
    name: "Crazy musics",
    tracks: ["t01", "t02", "t04", "t05",]
  }
}



// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {

}

// printPlaylists
// printTracks
// printPlaylist
// addTrackToPlaylist
// addTrack
// addPlaylist('p03');
printPlaylists();
// console.log(library.playlists)
// printTracks();
// printPlaylist('p02');
// addTrackToPlaylist('t02', 'p02');
// addTrack('Triptych', 'Siam Shade', '3rd Gen');