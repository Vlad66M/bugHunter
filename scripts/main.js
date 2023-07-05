function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function moveBug(bugNumber){
    let x = getRandom(100, 450);
    let y = getRandom(100, 450);
    let currentBug = 'bug'+bugNumber;
    document.getElementById(currentBug).style.left = x+'px';
    document.getElementById(currentBug).style.top = y+'px';
}

var bugs = document.querySelectorAll('.bug');

function moveBugs(){
    for(let i=0;i<bugs.length;i++){
        moveBug(i+1);
    }
}

var intervalId = setInterval(() => {
    moveBugs();
}, 600);

var killedNumber = 0;
const bugsNumber = 6;

for(let i=0;i<bugs.length;i++){
    let currentBug = 'bug'+(i+1);
    document.getElementById(currentBug).addEventListener('click', () => {
        let bugDisplay =document.getElementById(currentBug).style.display;
        if(bugDisplay!='none'){
            killedNumber++;
            document.getElementById(currentBug).style.display = 'none';
        }
        if (killedNumber>=bugsNumber){
            setTimeout(() => {
                alert('Вы поймали всех жуков!');
            }, 500);
        }
    });
}

document.getElementById('btn-reset').addEventListener('click', () => {
    killedNumber = 0;
    document.getElementById('bug1').style.display = 'block';
    document.getElementById('bug2').style.display = 'block';
    document.getElementById('bug3').style.display = 'block';
    document.getElementById('bug4').style.display = 'block';
    document.getElementById('bug5').style.display = 'block';
    document.getElementById('bug6').style.display = 'block';
    clearInterval(intervalId);
    intervalId = setInterval(() => {
        moveBugs();
    }, 600);
});
