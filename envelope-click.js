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
    if (Math.abs(scrollHeight - clientHeight - scrollTop) < 2) {
        console.log('scrolled');
        let text = "Bông có muốn nhận một món quà đặc biệt này nữa không?";
        if (confirm(text) == true) {
        } else {
        }
        var audio = new Audio('./assets/cut.mp3');
        audio.play();
        gif.style.opacity = '1.0';
        gif.style.zIndex = '1000';
        setTimeout(function(){
            console.log("booom");
            body.innerHTML = '<p class="dmm">👏 bất ngờ chưa này =))) Sinh nhật tuyệt nhất trong đời nhé, tao bảo từ đầu rồi mà cứ gân cổ mày cãi tao m dỗi tao đi? Tao biết việc mày vẫn còn tình cảm với nó tao đã cho chúng mày nhắn tin rồi nhưng mà thế này thì ghê tởm với cặn bã thật sự 🙏 Đùa chứ tao bảo tao thay thế có sai đéo đâu mà cứ sủa là đéo phải này nọ còn bày đặt khóc, bày đặt bảo tao đéo phải mày thì đừng có phán xét mày này nọ 😂😂 dcm eo ơi tao chịu mày luôn rồi ấy. Tao tưởng mày chỉ nhắn với nó thôi nhưng mà mày còn đi gặp nó sau lưng tao thì mày đỉnh vãi lồn rồi =)))) Từ đầu tao đã muốn tự rút lui rồi thì mày níu tao làm con cặc gì vậy? Tao để chúng mày yêu nhau rồi còn cần tao làm cái lồn gì nữa?? Đến cả việc tao chấp nhận nó trong mối quan hệ này rồi mà mày vẫn còn sủa còn cãi tao thì mày đúng bố của giả tạo với thảo mai rồi 🤣🤣 Dm vừa hôn nó ngủ với nó xong rồi về hôn tao 👏 địt mẹ tởm vãi lồn! May hôm qua tao biết nên tao đéo dám hôn mày phát nào là vì thế 🙏 về nhà còn bảo tao lạnh nhạt với mày trong khi mày đéo làm gì sai 😂 ngứa đít vcl. Thật ra tao cũng biết rõ việc mày mất trinh từ lâu rồi nên đéo phải lôi cái đó ra mà bảo tao chịu trách nhiệm này nọ với mày =)))))) nhục lắm xin đấy 👍 Mấy lần mày khóc mày đòi chết vì tao giờ nghĩ lại thấy buồn nôn với dị ứng thật sự =)))) mày giả tạo giỏi thật cái này tao nể mày vl 👏 Còn cả việc mày xin tiền tao đi xem tarot cho nó với mày này, quà tao tặng mày thì mày bảo nó là bạn mày tặng này, cả việc tao đéo mày đồng nào nữa cơ 🫢 Thôi mấy cái đó tao đéo thèm chấp loại con gái như mày, đấy giờ tao trả tự do cho chúng mày đéo phải lén lút sau lưng tao nữa 🙏 hèn lắm dm. Vai diễn của tao đến đây là kết thúc rồi nhé, từ việc giả vờ khờ khạo đến việc chịu đựng việc tao bị phản bội =)) tao diễn đạt quá mà đến mày còn đéo nhận ra được 🤣 Tao còn biết được nhiều thứ kinh khủng tởm hơn nhiều khi tao có dc cái acc chính của mày 🙏 tao không ngờ mày nói dối tao giỏi đến như vậy 👏 biết là đọc tin nhắn mày là hèn nhưng mà tao đéo đọc thì tao đéo biết phải chịu đựng đến bao giờ nữa 🙏🙏 nên là mày tha cho tao nhé làm ơn? Tao hứa tao đảm bảo sẽ đéo liên quan gì đến chúng mày nữa 👍 Đọc được đến đây thì giờ mày muốn giải thích củ lồn gì cũng đéo ai muốn nghe đâu =))) Để yên cho tao đi con khốn, ở đó mà sống với cái tư tưởng kinh tởm và đống kỉ niệm của chúng mày nhé, đừng có vác xác đến nhà tao hay trường tao đòi tìm tao quay lại 🤮 Vĩnh biệt.</p>\n<a href="https://drive.google.com/drive/folders/1TnP7mY8M-GbDPCO7q9_hpzfkPGnSao7I" class="dmm">À còn cái này nữa tặng mày nốt</a>';
            body.style.backgroundColor = "transparent";
            body.style.backgroundImage = 'url("hug.png")';
            body.style.overflow = "scroll";
            
            // setTimeout(function(){
            //     window.location.href = 'https://drive.google.com/drive/folders/1TnP7mY8M-GbDPCO7q9_hpzfkPGnSao7I?usp=drive_link';
            // },500);
        },12120);
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