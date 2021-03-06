function setPreview(text) {
    const converter = new showdown.Converter();
    document.getElementsByClassName("preview")[0].innerHTML = converter.makeHtml(event.target.value);
}

function debug() {
    document.getElementsByTagName("body")[0].className = document.getElementsByTagName("body")[0].className.indexOf('debug') > -1 ? '' : 'debug';
}

document.getElementById("code-editor")
        .setAttribute('style', 'height:' + (document.getElementById("code-editor").scrollHeight) + 'px;overflow-y:hidden;');

document.getElementById("code-editor").addEventListener("keyup", function (event) {
    this.style.height = 'auto';
    this.style.height = this.scrollHeight + 'px';

    setPreview(event.target.value);
});
setPreview(document.getElementById("code-editor").value);
