
let offerSection = document.querySelector('.offers-section')
const imgArray = ['/assets/product-img-3.jpg','/assets/product-img-4.jpg','/assets/product-img-5.jpg'];
let i =0;

const changeOfferImg = () =>{
     if(i<3){
        
        offerSection.innerHTML = `<img src=${imgArray[i]} />`
        i=i+1;
     }
    else{
        i=0;
    }
}

setInterval(changeOfferImg,2000)


// =${imgArray[0]}