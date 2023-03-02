window.addEventListener("keydown", function(e){
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        const key = this.document.querySelector(`.key[data-key="${e.keyCode}"]`);
        if(!audio){
            return;
        }
        else{
            audio.currentTime = 0; //rewind the audio
            audio.play();
            key.classList.add('playing');
        }


});
const keys = document.querySelectorAll('.key');
console.log(keys);
keys.forEach(key => key.addEventListener('transitioned', removeTransition()));

function removeTransition(e){
    // console.log(e);
    // if(e.propertyName !== 'transform'){
    //     return;
    // }
    // else{
    //     this.classList.remove('playing');
    // }
    
}