
function change() {
    var a = ['red', 'blue', 'orange', 'yellow'];
    document.body.style.backgroundColor = a[Math.round(Math.random() * a.length)];
}