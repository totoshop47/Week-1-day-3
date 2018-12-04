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





// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks


  printPlaylists: function () {
    var lPL = this.playlists;
    var pList = Object.keys(lPL);
    var pValue = Object.values(lPL);

    for (var i = 0; i < pList.length; i++) {
      console.log(pList[i] + ": " + pValue[i].name + " - " + pValue[i].tracks.length + " tracks");
    }
  },


  // prints a list of all tracks, in the form:
  // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
  // t02: Model View Controller by James Dempsey (WWDC 2003)
  // t03: Four Thirty-Three by John Cage (Woodstock 1952)

  printTracks: function () {
    var lTr = this.tracks;
    var tList = Object.keys(lTr);
    var tValue = Object.values(lTr);

    for (var i = 0; i < tList.length; i++ ) {
      console.log(tList[i] + ": " + tValue[i].name + " by " + tValue[i].artist + " (" + tValue[i].album + ")");
    }
  },

  // prints a list of tracks for a given playlist, in the form:
  // p01: Coding Music - 2 tracks
  // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
  // t02: Model View Controller by James Dempsey (WWDC 2003)

  printPlaylist: function (playlistId) {

    //Code written by Rohit

    console.log(playlistId+": "+this.playlists[playlistId].name+" - "+this.playlists[playlistId].tracks.length+ " tracks");

    let tracks = this.playlists[playlistId].tracks;
    for(var i = 0; i < tracks.length; i++) {
      let temp = tracks[i];
      console.log(temp + ": " + this.tracks[temp].name + " by " + this.tracks[temp].artist + " (" + this.tracks[temp].album + ")");
    }
    // Code written by Rohit Ends here
  },

  // adds an existing track to an existing playlist

  addTrackToPlaylist: function (trackId, playlistId) {
    this.playlists[playlistId].tracks.push(trackId);
    console.log(this.playlists[playlistId].tracks);
  },

  // generates a unique id
  // (use this for addTrack and addPlaylist)

  uid: function() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  },

  // adds a track to the library

  addTrack: function (name, artist, album) {
    var newTrackName = 't' + uid();

    var newTrackInfo =
      {
        id: newTrackName,
        name: name,
        artist: artist,
        album: album
      };

    this.tracks[newTrackName] = newTrackInfo;
    console.log(this.tracks);
  },

  // adds a playlist to the library

  addPlaylist: function (name) {

    this.playlists[name] =
    { id: name,
      name: "Crazy musics",
      tracks: ["t01", "t02", "t04", "t05",]
    }
  },

  // STRETCH:
  // given a query string string, prints a list of tracks
  // where the name, artist or album contains the query string (case insensitive)
  // tip: use "string".search("tri")
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

  printSearchResults: function(query) {

  }
}

