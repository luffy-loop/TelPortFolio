const reveals = document.querySelectorAll('.card');

const observer = new IntersectionObserver((entries)=>{
entries.forEach((entry)=>{
if(entry.isIntersecting){
entry.target.classList.add('active');
}
});
},{
threshold:0.1
});

reveals.forEach((card)=>{
observer.observe(card);
});

window.addEventListener('scroll',()=>{
const navbar=document.querySelector('.navbar');

if(window.scrollY>50){
navbar.style.boxShadow='0 4px 20px rgba(0,0,0,0.3)';
}
else{
navbar.style.boxShadow='none';
}
});
