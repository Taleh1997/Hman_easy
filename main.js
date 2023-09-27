let winPoint = 0;
let losePoint = 0;
let guesLeft = 9;

let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'];

let wrongLetters = [];

let compChoose = (arr) => compChoosen = letters[Math.floor(Math.random() * letters.length)];

compChoose(letters)

window.addEventListener('keyup', (e) => {
    if (letters.indexOf(e.key) == -1) {
        alert('Zəhmət olmasa yuxarıda göstərilən hərflərdən birini seçin.')
    } else {
        if (e.key == compChoosen) {
            winPoint += 1
            win.innerHTML = `<p>Wins: ${winPoint}</p>`
            guesLeft = 9
            gues.innerHTML = `<p>Guesses Left: ${guesLeft}</p>`
            wrongLetters.length = 0
            yourGues.innerHTML = `<p>Your Guesses so far:</p>`
            compChoose(letters)
        } else if (wrongLetters.indexOf(e.key) != -1) {
            return 0
        } else if (e.key !== compChoosen && wrongLetters.indexOf(e.key) == -1) {
            guesLeft -= 1
            gues.innerHTML = `<p>Guesses Left: ${guesLeft}</p>`
            wrongLetters.push(e.key)
            yourGues.innerHTML = `<p>Your Guesses so far: ${wrongLetters}</p>`
            if (guesLeft == 0) {
                losePoint += 1
                lose.innerHTML = `<p>Losses: ${losePoint}</p>`
                guesLeft = 9
                gues.innerHTML = `<p>Guesses Left: ${guesLeft}</p>`
                wrongLetters.length = 0
                yourGues.innerHTML = `<p>Your Guesses so far:</p>`
                compChoose(letters)
            }
        }
    }
});

