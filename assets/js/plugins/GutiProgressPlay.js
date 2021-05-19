function GutiProgressPlay(){}

GutiProgressPlay.prototype.run = function(player){
    let functionRun = function(){
        if(player.progress != null){
            let duration = Math.ceil(player.getDuration());
            let newText = GutiProgressPlay.convertHMS(player.media.currentTime) + "/"+GutiProgressPlay.convertHMS(duration);
            if(player.progressLabel.textContent != newText ){
                player.progressLabel.textContent = newText;
                player.progress.value = parseFloat(100*Math.round(player.media.currentTime)/duration);
            }
            setTimeout(functionRun, 0)    
        } 
    }
    functionRun();
}

GutiProgressPlay.convertHMS = function (value) {
    const sec = parseInt(value, 10); 
    let hours   = Math.floor(sec / 3600);
    let minutes = Math.floor((sec - (hours * 3600)) / 60);
    let seconds = sec - (hours * 3600) - (minutes * 60); 
    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    return hours+':'+minutes+':'+seconds;
}

export default GutiProgressPlay;