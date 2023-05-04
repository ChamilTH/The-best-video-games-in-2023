// Declare your genre arrays here
let fpsgames = ["https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Valorant_logo_-_pink_color_version.svg/1200px-Valorant_logo_-_pink_color_version.svg.png", "https://i.ytimg.com/vi/GKXS_YA9s7E/maxresdefault.jpg", "https://cdn.cloudflare.steamstatic.com/steam/apps/1172470/capsule_616x353.jpg?t=1679171844"];
console.log(fpsgames);
let adventuregames = ["https://cdn1.epicgames.com/offer/e97659b501af4e3981d5430dad170911/EGS_HogwartsLegacy_AvalancheSoftware_S1_2560x1440-2baf3188eb3c1aa248bcc1af6a927b7e", "https://image.api.playstation.com/vulcan/ap/rnd/202206/0720/eEczyEMDd2BLa3dtkGJVE9Id.png", "https://image.api.playstation.com/cdn/UP1004/CUSA03041_00/Hpl5MtwQgOVF9vJqlfui6SDB5Jl4oBSq.png"];
console.log(adventuregames);
let sportsgames = ["https://image.api.playstation.com/vulcan/ap/rnd/202206/2200/vLdTCoRLhhHmAAqRypgAOlAI.png", "https://cdn.cloudflare.steamstatic.com/steam/apps/1811260/capsule_616x353.jpg?t=1679316327", "https://www.f4wonline.com/.image/t_share/MTk2NjYxMTQxNjMwMzYzNDU0/wwe-2k23-john-cena.jpg"];
console.log(sportsgames);

let fpsgameplay =
["https://thumbs.gfycat.com/BlankColossalBunting-size_restricted.gif", "https://thumbs.gfycat.com/DependableCoarseLarva-size_restricted.gif", "https://media.tenor.com/GD3Mbs4d9JEAAAAd/apex-legends-season7.gif"];
console.log(fpsgameplay);

let adventuregameplay =
["https://i.pinimg.com/originals/d2/94/e3/d294e3367f4f17d4426531e7599e21ee.gif", "https://i.gifer.com/3Xsz.gif", "https://thumbs.gfycat.com/AcrobaticMediumHammerkop-size_restricted.gif"];
console.log(adventuregameplay);

let sportsgameplay =
["https://media4.giphy.com/media/NfvhTD0TNkOaukuEhe/giphy.gif?cid=5e2148860471af8a0d55922d7d0ab646eab5%20%20f4cae225f1d8&rid=giphy.gif&ct=g", "https://thumbs.gfycat.com/RealJealousCanary-size_restricted.gif", "https://thumbs.gfycat.com/FlusteredCreativeHarpseal-size_restricted.gif"];
console.log(adventuregameplay);

// Make sure to declare your HTML elements as variables! 
let button1 = document.querySelector(".answer1");
let suggestButton = document.querySelector(".answer2");
let results = document.querySelector(".videogames");
let gameplayButton = document.querySelector(".answer3");
let resetButton = document.querySelector(".reset");
let results2 = document.querySelector(".gameplay");
// Submit Button 
let submitButton = document.querySelector("button");
submitButton.onclick = function() {
let gamesInput = document.querySelector(".put1").value;
if(gamesInput === "Fps") {
for (let fps of fpsgames) {
let img = "<img src=" + fps + ">";
results.insertAdjacentHTML("beforeend", img);
}
} else if(gamesInput === "Adventure") {
for (let adv of adventuregames) {
let img = "<img src=" + adv + ">";
results.insertAdjacentHTML("beforeend", img);
}
} else if(gamesInput === "Sports") {
for (let sports of sportsgames) {
let img = "<img src=" + sports + ">";
results.insertAdjacentHTML("beforeend", img);
}
}
};

// Suggest Button
suggestButton.onclick = function(){
let suggestInput = document.querySelector(".put2").value;
  fpsgames.push(suggestInput);
    adventuregames.push(suggestInput);
    sportsgames.push(suggestInput);
      let img = "<img src=" + suggestInput + ">";
results.insertAdjacentHTML("beforebegin", img);
    
};
gameplayButton.onclick = function() {
let gamesInput = document.querySelector(".put1").value;
if(gamesInput === "Fps") {
for (let fps of fpsgameplay) {
let img = "<img src=" + fps + ">";
results2.insertAdjacentHTML("beforeend", img);
}
    } else if(gamesInput === "Adventure") {
for (let adv of adventuregameplay) {
let img = "<img src=" + adv + ">";
results2.insertAdjacentHTML("beforeend", img);
}
    } else if(gamesInput === "Sports") {
for (let sports of sportsgameplay) {
let img = "<img src=" + sports + ">";
results2.insertAdjacentHTML("beforeend", img);
}
}
};

resetButton.onclick = function(){
results.style.display="none";
results2.style.display="none";};