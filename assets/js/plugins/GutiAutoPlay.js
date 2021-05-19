function GutiAutoPlay(){}

GutiAutoPlay.prototype.run = function(player){
    player.muted();
    player.play();
}

export default GutiAutoPlay;