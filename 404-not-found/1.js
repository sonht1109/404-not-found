document.addEventListener("DOMContentLoaded", function(){
    var body = document.body;
    var colors = ['#ff6600', '#880000', '#ff9933', '#ff3300', '#ff3366'];

    setInterval(createStar, 100);

    function createStar(){
        var star = document.createElement('div'); // tao ra div.star
        star.classList.add('star');
        body.appendChild(star);

        var right = Math.floor(Math.random() * 300);
        var top = Math.floor(Math.random() * screen.height);
        star.style.top = top + 'px';
        star.style.background = colors[Math.floor(Math.random() * 5)];

        function starFly(){ // tao motion cho star
            right += 5;
            star.style.right = right + 'px';
            if(right >= screen.width){
                star.remove();
            }
        }
        setInterval(starFly, 10);
        setTimeout(function(){
            star.remove();
        },6000);
    }

}, false)