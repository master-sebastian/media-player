function GutiMediaPlayer(configGuti, plugins){
    this.media = configGuti.el;
    this.plugins = plugins || [];
    this.progress = configGuti.progress || null;
    this.progressLabel = configGuti.progressLabel || null;
    this._initPlugins();
}
GutiMediaPlayer.prototype._initPlugins = function (){
    this.plugins.forEach(plugin => {
        plugin.run(this);
    });
}

GutiMediaPlayer.prototype.muted = function(){
    this.media.muted = true;
}
GutiMediaPlayer.prototype.unmuted = function(){
    this.media.muted = false;
}

GutiMediaPlayer.prototype.play = function(){
    if(this.media.paused){
        this.media.play();
    }else{
        this.media.pause();
    }
};
GutiMediaPlayer.prototype.getDuration = function(){
    return parseInt(this.media.duration);
}
GutiMediaPlayer.prototype.changeMuted = function(){
    if(!this.media.muted){
        this.muted();
    }else{
        this.unmuted();
    }
}
export default GutiMediaPlayer;