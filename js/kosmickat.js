const names  =[
    "k o s m i c k a t z",
    "k o s m i c k 4 t z",
    "k o s m 1 c k a t z",
    "k o s m 1 c k 4 t z",
    "k o 5 m i c k a t z",
    "k o 5 m i c k 4 t z",
    "k o 5 m 1 c k a t z",
    "k o 5 m 1 c k 4 t z",
    "k 0 s m i c k a t z",
    "k 0 s m i c k 4 t z",
    "k 0 s m 1 c k a t z",
    "k 0 s m 1 c k 4 t z",
    "k 0 5 m i c k a t z",
    "k 0 5 m i c k 4 t z",
    "k 0 5 m 1 c k a t z",
    "k 0 5 m 1 c k 4 t z",
 ];
 function displayName() {
    var i = Math.floor(Math.random() * (names.length));
    document.getElementById("kosmickat").innerHTML = names[i];
 }
 setInterval(function() {
    displayName()
}, 1000);