let tags = ['Ed Sorby.','a product person.','a builder.','a creator.','a thinker.','a dad.','learning.','improving.','...'];
document.getElementById("tag").innerHTML = "test";
let iterator = 0;
let wait = 5;
for (let z = 0; z < 200; z++) {
    for (let i = 0; i < tags.length; i++) {
        for (let j = 1; j <= tags[i].length; j++) {
            changeContent(i,j);
            iterator++;
        }
        if (i === tags.length - 1) {
            wait = 20;
        } else {
            wait = 5;
        }
        for (let l = 0; l < wait; l++) {
            changeContent(i,tags[i].length);
            iterator++;
        }
        for (let j = tags[i].length; j >= 0; j--) {
            changeContent(i,j);
            iterator+=0.3;
        }
    }
    console.log(iterator + ' times through');
}

function changeContent(i,j) {
    setTimeout(function() {
        let display = tags[i].substring(0,j);
        document.getElementById("tag").innerHTML = display;
    },80 * (iterator));
}