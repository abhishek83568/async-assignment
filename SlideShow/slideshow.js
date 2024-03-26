let photos = [
  {
    img: "./images/pexels-photo-1133957.webp",
  },
  {
    img: "./images/pexels-pixabay-45853.jpg",
  },
  {
    img: "./images/pexels-pixabay-265987.jpg",
  },
  {
    img: "./images/pexels-pixabay-326055.jpg",
  },
  {
    img: "./images/pexels-andrea-piacquadio-3979134.jpg",
  },
  {
    img: "./images/pexels-noelle-otto-906052.jpg",
  },
  {
    img: "./images/pexels-pixabay-247597.jpg",
  },
  {
    img: "./images/pexels-fabricio-trujillo-62640.jpg",
  },
  {
    img: "./images/pexels-pixabay-163891.jpg",
  },
  {
    img: "./images/pexels-abdullah-al-sayeem-5825740.jpg",
  },
  {
    img: "./images/pexels-viktor-lundberg-754595.jpg",
  },
  {
    img: "./images/pexels-may-dayua-1545743.jpg",
  },
  {
    img: "./images/pexels-nordic-overdrive-627678.jpg",
  },
  {
    img: "./images/pexels-belle-co-847393.jpg",
  },
  {
    img: "./images/pexels-neha-pandey-2446439.jpg",
  },
  {
    img: "./images/pexels-vision-plug-13739807.jpg",
  },
  {
    img: "./images/pexels-zeeshaan-shabbir-12907890.jpg",
  },
  {
    img: "./images/pexels-burcu-elmas-19862330.jpg",
  },
  {
    img: "./images/pexels-photo-19761107.jpeg",
  },
  {
    img: "./images/pexels-josh-hild-2448749.jpg",
  },
];

let startStopButton=document.querySelector("#start-stop");
let previousBtn=document.querySelector("#previous");
let nextBtn=document.querySelector("#next");
let currentIndex=0;
isSlideshowRunning=false;
let slideshowInterval;

if(currentIndex===0){
  let display = document.getElementById("container");
  let image = document.createElement("img");
  image.src = photos[currentIndex].img;
display.innerHTML="";
  display.append(image);
}

startStopButton.addEventListener("click",function(){
    if(isSlideshowRunning)
    {
        stopSlideShow();
        startStopButton.innerText="Start";
    }
    else{
        startSlideShow();
        startStopButton.innerText="Stop";
    }
})

previousBtn.addEventListener("click",function(){
    
  if(currentIndex<1)
  {
    currentIndex=photos.length-1;
    
  }
  console.log(currentIndex,photos.length-1)
  stopSlideShow();
    previousImage();
    
})

nextBtn.addEventListener("click",function(){
    stopSlideShow();
    nextImage();
})

function startSlideShow(){
  slideshow();
  slideshowInterval=setInterval(slideshow,1500);
  isSlideshowRunning=true;
}

function stopSlideShow(){
    clearInterval(slideshowInterval);
    isSlideshowRunning=false;
}


function nextImage(){
    currentIndex=(currentIndex)%photos.length;
    slideshow();
    
}

function previousImage()
{
  currentIndex = (currentIndex-2+photos.length) % photos.length;
    slideshow();
    
}


  function slideshow(){
    
    
    let display = document.getElementById("container");
        let image = document.createElement("img");
        image.src = photos[currentIndex].img;
      display.innerHTML="";
        display.append(image);
        currentIndex=(currentIndex+1)%photos.length;
        
        
  }


  

 
