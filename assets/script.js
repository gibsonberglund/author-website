//QUOTE 1

let quote1 = document.querySelector('#quote1');
let modal1 = document.querySelector('#modal1');
let quote1Button = document.querySelector('#quote1button');

quote1.addEventListener('click', function() {
    console.log("are you there");
    quote1.textContent = `She pulls me through the door and throws her arms around me even though my clothes are soaking wet and
    my hair drips onto her cheeks.
    “You found it!” Her accent is impossibly complex, just as I remember it.
    She lets go to look me over as I glance around the room, a narrow restaurant with a single row of
    booths against the wall. Other than candles on tables the room is lit only by one big window next
    to the door, where rain crackles steadily and evening twilight flows down it like pale blue dye.`;
    quote1Button.setAttribute('class', 'button');
});

quote1Button.addEventListener('click', function() {
    quote1Button.setAttribute('class', 'hidden');
    modal1.style.display = "flex";
    quote1.textContent = "She pulls me through the door and throws her arms around me";
});

var span = document.getElementsByClassName("close1")[0]

span.onclick = function() {
    modal1.style.display = "none";
  }

//QUOTE 2
let quote2 = document.querySelector('#quote2');
let modal2 = document.querySelector('#modal2');
let quote2Button = document.querySelector('#quote2button');

  quote2.addEventListener('click', function() {
    console.log("are you there");
    quote2.textContent = `The rain has stopped and the clouds, black as coal-fired smoke, begin to break apart and blow away
    as I cross the bridge over the train yard. Water has filled in the spaces between the tracks, making
    the Earth a broken mirror reflecting a broken sky. The sun bursts out of a crag in the clouds, red
    in the face, furious, falling toward the jagged horizon.`;
    quote2Button.setAttribute('class', 'button');
});

quote2Button.addEventListener('click', function() {
    quote2Button.setAttribute('class', 'hidden');
    modal2.style.display = "flex";
    quote2.textContent = "the Earth a broken mirror reflecting a broken sky";
});

var span = document.getElementsByClassName("close2")[0]

span.onclick = function() {
    modal2.style.display = "none";
  }