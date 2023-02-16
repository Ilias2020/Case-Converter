document.getElementById("upper-case").addEventListener("click", function (){
    let sentences = document.querySelector("textarea").value.toUpperCase().split(' ');
    document.querySelector("textarea").value = sentences.join(' ');
});

document.getElementById("lower-case").addEventListener("click", function (){
    let sentences = document.querySelector("textarea").value.toLowerCase().split(' ');
    document.querySelector("textarea").value = sentences.join(' ');
});

let toProperCaseButton = document.getElementById('proper-case');
toProperCaseButton.addEventListener('click', function () {
    let sentences = document.querySelector("textarea").value.toLowerCase().split(' ');
    let modifiedSentences = [];
    for (let sentence of sentences) {
        let modifiedSentence = sentence.charAt(0).toUpperCase().concat(sentence.slice(1));
        modifiedSentences.push(modifiedSentence);
    }
    document.querySelector("textarea").value = modifiedSentences.join(' ');
});

let toSentenceCaseButton = document.getElementById('sentence-case');
toSentenceCaseButton.addEventListener('click', function () {
    let sentences = document.querySelector("textarea").value.toLowerCase().split('. ');
    let modifiedSentences = [];
    for (let sentence of sentences) {
        let modifiedSentence = sentence.charAt(0).toUpperCase().concat(sentence.slice(1));
        modifiedSentences.push(modifiedSentence);
    }
    document.querySelector("textarea").value = modifiedSentences.join('. ');
});

function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}


document.getElementById('save-text-file').addEventListener('click', function() {
    let text = document.getElementById('text').value;;
    let filename = "text.txt"
    download(filename ,text);
}, false);