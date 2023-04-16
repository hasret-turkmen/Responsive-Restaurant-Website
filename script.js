//will make the icons move
const icons = document.querySelectorAll('.section-1-icons i')
let i =1;

//show icons one by one after 1 seconds
setInterval(()=>{
    i++;
    const icon = document.querySelector('.section-1-icons .change')

    icon.classList.remove('change');

    if(i>icons.length){
        icons[0].classList.add('change')
        i=1;
    }else{
        icon.nextElementSibling.classList.add('change');
    }
   
}, 2000);

//will make the navbar go down when clicked
document.querySelector('.menu').addEventListener('click', ()=>{
    document.querySelectorAll('.target').forEach((item) => {
        item.classList.toggle('change')
    })
})
