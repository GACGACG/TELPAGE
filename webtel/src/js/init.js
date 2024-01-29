let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);
window.addEventListener('resize', () => {
    // We execute the same script as before
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});

function render(props) {
    return function (tok, i) {
        return (i % 2) ? props[tok] : tok;
    };
}
let relaPath = './'

let fullCareerName = ""
let texts = "Malla"

let params = new URLSearchParams(window.location.search)

let carr = params.get('m')
if (!carr)
    carr = 'TEL'
let sct = true
if (params.get('SCT') === "false")
    sct = false

let includes = document.querySelectorAll('[data-include]')
let promises = []
let welcomeTexts = {}
includes.forEach(include => {
    let fileURL = relaPath + 'views/' + include.attributes['data-include'].nodeValue + '.html';
    promises.push(fetch(fileURL).then(response => response.text())
        .then(data => {
            include.insertAdjacentHTML("afterbegin", data)
        }))
})

$(function () {



    let malla = null

    if (true) {
        malla = new Malla(sct);
        malla.enableCreditsStats()
        malla.enableCreditsSystem()
        malla.enableSave()
        document.getElementById("cleanApprovedButton").addEventListener("click", () => malla.cleanSubjects())

    }
    let drawnMalla = malla.setCareer(carr, fullCareerName, relaPath).then((val) => {
        return malla.drawMalla(".canvas")
    });
    drawnMalla.then(() => {
        malla.updateStats()
        malla.displayCreditSystem()
        malla.showColorDescriptions(".color-description")
        malla.loadApproved()
        malla.enablePrerCheck()
    })
});

function changeCreditsSystem() {
    let key = 'SCT'
    let value = 'false'
    const params = new URLSearchParams(window.location.search);
    if (params.has(key)) {
        value = !('true' === params.get(key))
    }
    key = encodeURI(key); value = encodeURI(value);
    var kvp = document.location.search.substr(1).split('&');

    var i = kvp.length; var x; while (i--) {
        x = kvp[i].split('=');

        if (x[0] === key) {
            x[1] = value;
            kvp[i] = x.join('=');
            break;
        }
    }

    if (i < 0) { kvp[kvp.length] = [key, value].join('='); }

    //this will reload the page, it's likely better to store this until finished
    document.location.search = kvp.join('&');
}