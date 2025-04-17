// const box = document.querySelector(".hover-box");

// // Hover effect
// box.addEventListener("mouseenter", () => {
//   box.style.bacckgroundColor = "rgba (0,0,0, 0.1)";
// });

// box.addEventListener("mouseleave", () => {
//   box.style.backgroundColor = "transparent)";
// });

const designerContainerSection = document.querySelector(".third-sec");
console.log(designerContainerSection);

const products = [
  {
    id: 1,
    name: "Dee Store",
    price: 10.99,
    paragraph1:
      "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius aliquid inventore eaque.",
    paragrapgh2: "2km from your location",
    image1: "Frame 1000003458.svg",
    image2: "material-symbols-light_bookmark-outline.png",
    image3: "iconamoon_share-1-thin.png",
    image4: "img/Vector.png",
    button1: "Chat",
    button2: "Book",
  },
  {
    id: 2,
    name: "Dee Store",
    price: 10.99,
    paragraph1:
      "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius aliquid inventore eaque.",
    paragrapgh2: "2km from your location",
    image1: "Frame 1000003458.svg",
    image2: "material-symbols-light_bookmark-outline.png",
    image3: "iconamoon_share-1-thin.png",
    image4: "img/Vector.png",
    button1: "Chat",
    button2: "Book",
  },
  {
    id: 3,
    name: "Dee Store",
    price: 10.99,
    paragraph1:
      "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius aliquid inventore eaque.",
    paragrapgh2: "2km from your location",
    image1: "Frame 1000003458.svg",
    image2: "material-symbols-light_bookmark-outline.png",
    image3: "iconamoon_share-1-thin.png",
    image4: "img/Vector.png",
    button1: "Chat",
    button2: "Book",
  },
  {
    id: 4,
    name: "Dee Store",
    price: 10.99,
    paragraph1:
      "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius aliquid inventore eaque.",
    paragrapgh2: "2km from your location",
    image1: "Frame 1000003458.svg",
    image2: "material-symbols-light_bookmark-outline.png",
    image3: "iconamoon_share-1-thin.png",
    image4: "img/Vector.png",
    button1: "Chat",
    button2: "Book",
  },
  {
    id: 5,
    name: "Dee Store",
    price: 10.99,
    paragraph1:
      "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius aliquid inventore eaque.",
    paragrapgh2: "2km from your location",
    image1: "Frame 1000003458.svg",
    image2: "material-symbols-light_bookmark-outline.png",
    image3: "iconamoon_share-1-thin.png",
    image4: "img/Vector.png",
    button1: "Chat",
    button2: "Book",
  },
  {
    id: 6,
    name: "Dee Store",
    price: 10.99,
    paragraph1:
      "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius aliquid inventore eaque.",
    paragrapgh2: "2km from your location",
    image1: "Frame 1000003458.svg",
    image2: "material-symbols-light_bookmark-outline.png",
    image3: "iconamoon_share-1-thin.png",
    image4: "img/Vector.png",
    button1: "Chat",
    button2: "Book",
  },
];

designerContainerSection.innerHTML = products
  .map(
    (product) => `

 <div class="designCard">
          <img src="img/${product.image1}" class="designCardImg" alt="" />
          <div class="store">
            <h5>${product.name}</h5>
            <div>
                          <i class="fa-solid fa-bookmark"></i>

              <i class="fa-solid fa-share-nodes"></i>

            </div>
          </div>
          <p class="storeDescription-1">
           ${product.paragraph1}
          </p>

          <div class="distanceInfo">
            <div class="joblabel">                     <i class="fa-solid fa-location-dot"></i>

              <p>Jabi</p>
            </div>
            <span>view on map</span>
          </div>

          <p class="storeDescription-2">${product.paragrapgh2} </p>

          <button class="chatbutton">${product.button1}</button>
          <button class="bookbutton">${product.button2}</button>
        </div>
        
`
  )
  .join(" ");
