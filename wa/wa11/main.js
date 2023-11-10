const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = ['images/pic1.jpg', 'images/pic2.jpg','images/pic3.jpg','images/pic4.jpg','images/pic5.jpg',];
/* Declaring the alternative text for each image file */
const altText = {
    "pic1": "an image of a close up on a human eye",
    "pic2": "an image of waves crashing on a shore",
    "pic3": "an image of flowers",
    "pic4": "Picture of a hieroglyphs",
    "pic5": "A moth or a butterfly mayhaps?"
};

/* Looping through images */
for (let i = 0; i < images.length; i++)
{
    const newImage = document.createElement('img');
    newImage.setAttribute('src', images[i]);
    newImage.setAttribute('alt', altText['pic' + (i+1)]);
    thumbBar.appendChild(newImage);
    function displayImage(){
        displayedImage.setAttribute('src', images[i]);
        displayedImage.setAttribute('alt', altText['pic' + (i+1)]);
    }
    newImage.addEventListener("click", displayImage);
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener("click", ()=>{
    if(btn.getAttribute("class")=="dark")
    {
        btn.setAttribute("class", "light");
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = "rgba(0,0,0,.5)";
    }
    else
    {
        btn.setAttribute("class", "dark");
        btn.textContent = "Darken";
        overlay.style.backgroundColor = "rgba(0,0,0,0)";
    }
});