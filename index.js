setInterval(() => {
    
let d = new Date;
let nhour= d.getHours();
let nminute = d.getMinutes();
let nsecond= d.getSeconds();
let hourRotation =30*nhour+(nminute/2);
let minRotation = 6*nminute;
let secRotation = 6*nsecond;
hours.style.transform=`rotate(${hourRotation}deg)`;
minutes.style.transform=`rotate(${minRotation}deg)`;
seconds.style.transform=`rotate(${secRotation}deg)`;

}, 1000);