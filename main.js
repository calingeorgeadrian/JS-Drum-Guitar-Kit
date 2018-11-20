function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
	
	if (!audio) return;

    audio.currentTime = 0;
    key.classList.add('playing');
    audio.play();
}

const keys = document.querySelectorAll('.key');
var index;
for(index = 0; index < keys.length; index++){
	keys[index].addEventListener('transitionend', removeTransition);
	keys[index].onclick = function() {
		const key_code = this.getAttribute("data-key");
		const audio = document.querySelector(`audio[data-key="${key_code}"]`);
		const key = document.querySelector(`div[data-key="${key_code}"]`);
			
		if (!audio) return;
		
		audio.currentTime = 0;
		key.classList.add('playing');
		audio.play();
	}
}
  
window.addEventListener('keydown', playSound);