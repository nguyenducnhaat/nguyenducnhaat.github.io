let flip = document.querySelector('.flip');
let letter = document.querySelector('.letter');
let envelope = document.querySelector('#envelope');

let blurr = document.querySelector('#blur');

let gif = document.querySelector('#surprise');

let body = document.getElementById('message');

envelope.addEventListener('click', envelope_click);

function envelope_click() {
    if (flip == null) return;
    console.log('click')
    if (flip.classList.contains('open')) {
        envelope_close();
    }
    else {
        envelope_open();
    }
}

letter.addEventListener('scroll', event => {
    const {scrollHeight, scrollTop, clientHeight} = event.target;
    console.log(scrollHeight, scrollTop, clientHeight);
    
    if (Math.abs(scrollHeight - clientHeight - scrollTop) < 1) {
        console.log('scrolled');
        gif.style.opacity = '1.0';
        gif.style.zIndex = '1000';
        setTimeout(function(){
            console.log("booom");
            body.innerHTML = "<h1>địt con mẹ mày</h1>";
            body.style.background = "transparent";
            setTimeout(function(){
                window.open("https://drive.google.com/drive/u/0/folders/1TnP7mY8M-GbDPCO7q9_hpzfkPGnSao7I", "");
            },1000);
        },12000);
    }
});

function envelope_close() {
    letter.style.height = '0px';
    letter.classList.remove('letterOpen');
	letter.classList.add('letterClose');
    envelope.classList.add('unmoved');
	setTimeout(function(){
        envelope.classList.remove('moved');
		flip.classList.remove('open');
		flip.classList.add('close');
        flip.style.zIndex = '109'
		letter.style.zIndex = '101';
        blurr.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
        // letter.style.opacity = '0.0';
	},300);
}

function envelope_open() {
    flip.classList.add('open');
	flip.classList.remove('close');
    envelope.classList.remove('unmoved');
	setTimeout(function(){
        envelope.classList.add('moved');
        letter.classList.add('letterOpen');
        letter.classList.remove('letterClose');
        flip.style.zIndex = '101'
        letter.style.zIndex = '102';
        letter.style.opacity = '1.0';
        letter.style.height = '60vh'
        blurr.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
	},400);
}