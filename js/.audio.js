const dir  =[
    "../audio/01 Adrenaline Horror.mp3",
    "../audio/02 Vague Voices.mp3",
    "../audio/03 Klaxon Beat.mp3",
    "../audio/04 Space Ocean.mp3",
    "../audio/05 Cavern Ambience.mp3",
    "../audio/07 Bass String.mp3",
    "../audio/08 Hurricane Strings.mp3",
    "../audio/09 Diabolical Adrenaline Guitar.mp3",
    "../audio/10 Valve Theme [Extended].mp3",
    "../audio/12 Alien Shock.mp3",
    "../audio/13 Sirens In The Distance.mp3",
    "../audio/14 Nuclear Mission Jam.mp3",
    "../audio/15 Scared Confused Short.mp3",
    "../audio/16 Drums & Riffs.mp3",
    "../audio/17 Hard Technology Rock.mp3",
    "../audio/18 Steam In The Pipes.mp3",
    "../audio/19 Electric Guitar Ambience.mp3",
    "../audio/20 Dimensionless Deepness.mp3",
    "../audio/21 Military Precision.mp3",
    "../audio/22 Jungle Drums.mp3",
    "../audio/23 Traveling Through Limbo.mp3",
    "../audio/24 Credits Closing Theme.mp3",
    "../audio/25 Threatening Short.mp3",
    "../audio/26 Dark Piano Short.mp3",
    "../audio/27 Sharp Fear Short.mp3"
    
 ];
 function displayRandom() {
    var i = Math.floor(Math.random() * (dir.length));
    var audio = new Audio(dir[i]);
    audio.play();
    let str = "Now ur listenin' 2 ==> ";
    document.getElementById("song_name").innerHTML = str.concat(dir[i].slice(9));
    console.log("a"+i);
    console.log("audio duration is " + (document.getElementById("a" + i)).duration*1000);
    //setTimeout(displayRandom(),10000);
 }
 displayRandom();