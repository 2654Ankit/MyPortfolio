
const slider = document.querySelectorAll('.detail-box')

// const next = document.querySelector('.gonext')

// next.addEventListener(onclick(gonext()))

let counter =0

console.log(slider);
slider.forEach((slide ,  i)=>{
  slide.style.left = `${i*100}%`

})



const slideImg = ()=>{
    console.log('hurhr');
    console.log(slider);
  slider.forEach((slide)=>{
    console.log(slide);
    slide.style.transform=`translateX(-${counter*100}%)`
})
}


const gonext = ()=>{
  console.log('dede');



  counter++;
  slideImg()
  console.log(slider);



}

const gopre = ()=>{
  console.log(
    'jhui'
  );
  counter--;
  slideImg()
  console.log(slider);

}
