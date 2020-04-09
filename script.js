
window.addEventListener('load', function(){
    
    let rightButton = document.getElementById('rightButton');
    let leftButton = document.getElementById('leftButton');
    let img1 = "./images/thanksgivingTurkey.JPG";
    let img1Cap = 'Preparing one of the Thanksgiving turkeys for the oven.';
    let img2 = "./images/thanksgivingTurkeyDone.JPG";
    let img2Cap = 'Both turkeys cooked and carved!';
    let img3 = "./images/kitchenPrep1.jpg";
    let img3Cap ='Another picture of the counter during prep.';
    let img4 = "./images/valentinesDinner.JPG";
    let img4Cap = 'Surf and Turf I made for Valentines Day 2020';
    let currentPic = document.getElementById('currentPic');
    let currentCap = document.getElementById('currentCap');
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
    rightButton.addEventListener('click', function(e){
        i = i++
        if (i === slidePics.length) {
            i = 0
        }
        currentPic.src = slidePics[i];
        currentCap.innerHTML = slideCaps[i];
        i++;
    });

    leftButton.addEventListener('click', function(e){
        i--
        if (i === slidePics.length) {
            i = 0
        }
        currentPic.src = slidePics[i];
        currentCap.innerHTML = slideCaps[i];
        i--;
    });
    
});