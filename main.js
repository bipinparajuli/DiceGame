var currentScore = 0,
    player = 0,
    game = true;
// selecting image

document.querySelector('.dice').style.display = 'none'
document.querySelector('.roll').addEventListener('click', function() {
        let random = Math.floor((Math.random() * 6) + 1)
        let die = document.querySelector('.dice');
        die.src = 'image/dice-' + random + '.png'
        die.style.display = 'block'
        if (random !== 1) {
            currentScore += random
            document.querySelector(".player-" + player).innerHTML = currentScore
        } else {
            document.querySelector(".player-" + player).innerHTML = 0
            currentScore = 0;
            /*player = player === 0 ? 1 : 0
            console.log(player)*/
        }
    })
    //Hold
document.querySelector('.hold').addEventListener('click', function() {
    console.log(currentScore)
    document.querySelector(".T" + player).innerHTML = currentScore
    document.querySelector(".player-" + player).innerHTML = 0
    currentScore = 0;
    player = player === 0 ? 1 : 0
});
/*

function nextPLayer() {
    currentScore = 0;
    var cS = document.querySelector('.Cscore');
    cS.innerHTML = 0;
    game = false

    if (!game) {
        currentScore = 0;
        var cS = document.querySelector('.Cscore');
        cS.innerHTML = 0;
        let random = Math.floor((Math.random() * 6) + 1)
        console.log('inside false' + random)
        let die = document.querySelector('.dice');
        die.src = 'image/dice-' + random + '.png'
        die.style.display = 'block'
        if (random !== 1) {
            currentScore += random
            var cS1 = document.querySelector('.Cscore1');
            cS1.innerHTML = currentScore;
            console.log(currentScore)
        } else {
            cS1.innerHTML = 0
            nextPLayer();
        }
    }

}
//reset
/*
document.querySelector('.hold').addEventListener('click', function() {
    let random = Math.floor((Math.random() * 6) + 1)
    console.log(random)
    let die = document.querySelector('.dice');
    die.src = 'image/dice-' + random + '.png'
    die.style.display = 'block'
    if (random !== 1) {
        currentScore += random
        let cS = document.querySelector('.Cscore1');
        cS.innerHTML = currentScore;
        console.log(currentScore)
    } else {
        let cS = document.querySelector('.Cscore1');
        cS.innerHTML = 0;
    }
})*/