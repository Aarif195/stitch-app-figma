// function setMainImage(src) {
//   document.getElementById("mainImage").src = src;
// }

//
const productContainer = document.querySelector(".product-container");
console.log(productContainer);

const productDetails = [
  {
    breadcrumb: "Home > Shop > Women's Dresses",
    productImage: "img/image.svg",
    arrowLeft: "img/Line (Stroke).svg",
    arrowright: "img/Line (Stroke) (1).svg",
    productsImages: "img/image (1).svg",
    name: "Fashion Store",
    multi: "Multi-colored flared gown",
    oldPrice: "₦35,000",
    newPrice: "₦28,000",
    sold: "1,679 Sold",
    star: "★",
    rating: "4.5",
    descriptionhead: "Description:",
    description:
      " Make a statement in this stunning multicolored flared dress.The bold colors and elegant silhouett ecreate a truly eye-catching piece. Whether you're attending a cocktail party or a special  occasion, this dress will ensure you turn heads.. ",
    label: "Color: ",
    labelMulti: "Multi",
    storeOwner: "Chat with Store Owner",
    storeImage: "img/Vector.svg",
    sizze: "size",
    sizeNO: "8",
    request1: "Request Measurement",
    request2: "View Size Chart",
    sizeNumber1: "6",
    sizeNumber2: "8",
    sizeNumber3: "10",
    sizeNumber4: "14",
    sizeNumber5: "18",
    sizeNumber6: "20",
    AddToCart: "Add To Cart",
    checkout: "Checkout Now",
  },
];

productContainer.innerHTML = productDetails
  .map(
    (productDetails) =>
      `
     <div class="product-section">
      <div class="breadcrumb">${productDetails.breadcrumb}</div>
   <div class="product-container">
        <div class="gallery-container">
          <div class="main-image-wrapper">
            <img
              id="mainImage"
              src="${productDetails.productImage}"
              class="main-image"
              alt="Main Image"
            />
            <img
              src="${productDetails.arrowLeft}"
              alt=""
              class="arrow left"
              onclick="scrollThumbnails(-1)"
            />
            <img
              src="${productDetails.arrowright}"
              alt=""
              class="arrow right"
              onclick="scrollThumbnails(1)"
            />
          </div>

          <div class="thumbnail-carousel-wrapper">
            <div class="thumbnail-container" id="thumbnailContainer">
              <img
                src="${productDetails.productsImages}"
                class="thumbnail"
                onclick="setMainImage(this.src)"
              />
               <img
                src="${productDetails.productsImages}"
                class="thumbnail"
                onclick="setMainImage(this.src)"
              />
              <img
                src="${productDetails.productsImages}"
                class="thumbnail"
                onclick="setMainImage(this.src)"
              />
              <img
                src="${productDetails.productsImages}"
                class="thumbnail"
                onclick="setMainImage(this.src)"
              />
              <img
                src="${productDetails.productsImages}"
                class="thumbnail"
                onclick="setMainImage(this.src)"
              />
              <img
                src="${productDetails.productsImages}"
                class="thumbnail"
                onclick="setMainImage(this.src)"
              />
              <img
                src="${productDetails.productsImages}"
                class="thumbnail"
                onclick="setMainImage(this.src)"
              />
            </div>
          </div>
        </div>

        <div class="product-details">
          <p class="name">${productDetails.name}</p>
          <h2 class="multi">${productDetails.multi}</h2>

          <!--  -->
          <div class="priceTag">
            <div>
              <p class="price">
                <span class="old-price">${productDetails.oldPrice}</span>
                <span class="new-price">${productDetails.newPrice}</span>
              </p>
            </div>

            <div style="display: flex; align-items: center; gap: 2rem">
              <p class="sold">${productDetails.sold}</p>
              <p class="star">${productDetails.star} <span class="rating">${productDetails.rating}</span></p>
            </div>
          </div>

          <hr class="dotted-line" />

          <!--  -->
          <h4 class="descriptionhead">${productDetails.descriptionhead}</h4>
          <p class="description">
         ${productDetails.description}
          </p>

          <div class="color-selection">
            <p class="label">${productDetails.label} <span class="labelMulti">${productDetails.labelMulti}</span></p>

            <!--  -->
            <div class="colors">
              <div class="circle-border">
                <div class="circle-inner color-dot-1"></div>
              </div>
              <div class="circle-border">
                <div class="circle-inner color-dot-2"></div>
              </div>
              <div class="circle-border">
                <div class="circle-inner color-dot-3"></div>
              </div>
            </div>
            <!--  -->
          </div>

          <!-- ChatBox -->
          <div class="chatBox">
            <p>${productDetails.storeOwner}</p>
            <img src="${productDetails.storeImage}" alt="" />
          </div>

          <!-- Size Div -->
          <div class="size">
            <p class="sizze">${productDetails.sizze} <span class="sizeNO">${productDetails.sizeNO}</span></p>
            <p class="request"> ${productDetails.request1}</p>
            <p class="request">${productDetails.request2}</p>
          </div>

          <!-- Button Page -->
          <div class="size-selection">
            <button class="size-number">${productDetails.sizeNumber1}</button>
            <button class="size-number">${productDetails.sizeNumber2}</button>
            <button class="size-number">${productDetails.sizeNumber3}</button>
            <button class="size-number">${productDetails.sizeNumber4}</button>
            <button class="size-number">${productDetails.sizeNumber5}</button>
            <button class="size-number">${productDetails.sizeNumber6}</button>
          </div>

          <div class="product-buttons">
            <button class="add-to-cart">${productDetails.AddToCart}</button>
            <button class="checkout-now">${productDetails.checkout}</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  `
  )
  .join();

const container = document.getElementById("thumbnailContainer");
const thumbnails = container.querySelectorAll(".thumbnail");
const visibleCount = 5; // Number of visible thumbnails
const thumbnailWidth = thumbnails[0].offsetWidth + 10; // width + gap
let currentIndex = 0;

function scrollThumbnails(direction) {
  const maxIndex = thumbnails.length - visibleCount;
  currentIndex += direction;

  if (currentIndex < 0) currentIndex = 0;
  if (currentIndex > maxIndex) currentIndex = maxIndex;

  const offset = -currentIndex * thumbnailWidth;
  container.style.transform = `translateX(${offset}px)`;
}

function setMainImage(src) {
  document.getElementById("mainImage").src = src;
}

// Optional: make it responsive after window resizes
window.addEventListener("resize", () => {
  const offset = -currentIndex * (thumbnails[0].offsetWidth + 20);
  container.style.transform = ` translateX(${offset}px)`;
});
