import GutiMediaPlayer from './GutiMediaPlayer.js';
import GutiAutoPlayer from './plugins/GutiAutoPlay.js';
import GutiProgressPlay from './plugins/GutiProgressPlay.js';
const objectVideo = document.querySelector("video");
const objectProgress = document.querySelector("progress");
const objectButtonStaryOrStopController = document.querySelector("#button-primary");
const objectButtonUnMutedController = document.querySelector("#button-unmuted");
const objectProgressLabel = document.querySelector("p");


const player = new GutiMediaPlayer({
    el: objectVideo,
    progress: objectProgress,
    progressLabel: objectProgressLabel
},[
    new GutiAutoPlayer(),
    new GutiProgressPlay()
]);

objectButtonStaryOrStopController.onclick = ()=> player.play();
objectButtonUnMutedController.addEventListener('click',function (){
    player.changeMuted();
});