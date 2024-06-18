
const $slideContainer=document.querySelector('.toner_slide1')
const $slide = document.querySelectorAll('.class1')
const $pager=document.querySelectorAll('.indicator')
const $pagerBtn=document.querySelectorAll('.indicator li')
const $slideCount=$slide.length-2;
let $currentIndex=0;
let $timer=undefined;
let $true=true;

function goToSlide(idx){
    $slideContainer.style.left=-620*idx+'px';
    $currentIndex=idx; 
    updatePagerButtons(idx);
}
goToSlide(0)

function updatePagerButtons(index){
    $pagerBtn.forEach((btn,i)=>{
        btn.classList.toggle('active',i === index);
    });
}

$pagerBtn.forEach((btn,idx) => {
    btn.addEventListener('click',()=>{
        goToSlide(idx);
    });
})


function applyStyle() {
    document.querySelector('.logo').classList.add('hovered');
    return false;
}

function removeStyle() {
    document.querySelector('.logo').classList.remove('hovered');
    return false;
}