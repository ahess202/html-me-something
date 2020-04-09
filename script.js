
window.addEventListener('load', function(){
    
    let rightButton = document.getElementById('rightButton');
    let leftButton = document.getElementById('leftButton');
    let img1 = "./images/thanksgivingTurkey.JPG";
    let img1Cap = 'Preparing one of the Thanksgiving turkeys for the oven.';
    let img2 = "./images/thanksgivingTurkeyDone!.JPG";
    let img2Cap = 'Both turkeys cooked and carved!';
    let img3 = "./images/kitchenPrep1.jpg";
    let img3Cap ='Another picture of the counter during prep.';
    let img4 = "./images/valentinesDinner.JPG";
    let img4Cap = 'Surf and Turf I made for Valentines Day 2020';
    let currentPic = document.getElementById('currentPic');
    let currentCap = document.getElementById('currentCap');
    let currentNum = document.getElementById('currentNum');
    let i = 0;
    let slidePics = [
        img1,
        img2,
        img3,
        img4
    ]
    let slideCaps = [
        img1Cap,
        img2Cap,
        img3Cap,
        img4Cap
    ]
    currentNum.innerHTML = `${1}/${slidePics.length}`
    rightButton.addEventListener('click', function(e){
        if (i === slidePics.length) {
            i = 0
        }
        currentPic.src = slidePics[i];
        currentCap.innerHTML = slideCaps[i];
        i++;
        currentNum.innerHTML = `${i}/${slidePics.length}`
        console.log(i);
    });

    leftButton.addEventListener('click', function(e){
        i--;
        if (i < 0) {
            i = slidePics.length -1;
        }
        currentPic.src = slidePics[i];
        currentCap.innerHTML = slideCaps[i];
        currentNum.innerHTML = `${i+1}/${slidePics.length}`
        console.log(i);
    });
});