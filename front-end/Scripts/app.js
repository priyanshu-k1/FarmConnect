
// Cart functionality
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function updateCartCount() {
  const cartCount = document.getElementById('cart-count');
  if (cartCount) {
    cartCount.textContent = cart.reduce((total, item) => total + item.quantity, 0);
  }
}

async function addToCart(product) {
  // First check if user is logged in
  const username = localStorage.getItem('username');
  const token = localStorage.getItem('token');
  
  if (!username || !token) {
    alert('Please login to add items to cart');
    return;
  }

  try {
    // Add to database first
    const response = await fetch('http://localhost:3000/api/cart/add', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        product_name: product.name,
        price: product.price,
        image_url: product.image_url,
        quantity: 1
      })
    });
    console.log(response.ok);
    if (!response.ok) {
      throw new Error('Failed to add item to cart');
    }

    // If database update successful, update localStorage
    const existingItem = cart.find(item => item.name === product.name);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({
        name: product.name,
        price: product.price,
        quantity: 1,
        image_url: product.image_url
      });
    }


//     <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
//   <div class="toast-header">
//     <img src="..." class="rounded me-2" alt="...">
//     <strong class="me-auto">Bootstrap</strong>
//     <small>11 mins ago</small>
//     <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
//   </div>
//   <div class="toast-body">
//     Hello, world! This is a toast message.
//   </div>
// </div>
    // 
    localStorage.setItem('cart', JSON.stringify(cart));
    
    showToast(' added to cart successfully!');
    updateCartCount();
  } catch (error) {
    console.error('Error adding to cart:', error);
    alert('Failed to add item to cart');
  }
}

// Function to load cart items on checkout page
async function loadCartItems() {
  const token = localStorage.getItem('token');

  try {
    const response = await fetch('http://localhost:3000/api/cart/items', {
      headers: { 'Authorization': `Bearer ${token}` }
    });

    if (!response.ok) {
      throw new Error('Failed to fetch cart items');
    }

    const cartItems = await response.json();
    displayCartItems(cartItems);
    calculateTotal(cartItems);
  } catch (error) {
    console.error('Error loading cart:', error);
    alert('Failed to load cart items');
  }
}
// Call on page load
document.addEventListener('DOMContentLoaded', loadCartItems);

// Function to display cart items on checkout page
function displayCartItems(items) {
  const cartContainer = document.getElementById('cart-items');
  if (!cartContainer) return;
  document.getElementById('cart-count').textContent = items.length;
  cartContainer.innerHTML = items.map(item => `
    <div class="cart-item border-bottom py-3">
      <div class="row align-items-center">
        <div class="col-md-2">
          <img src="${item.image_url}" alt="${item.product_name}" class="img-fluid">
        </div>
        <div class="col-md-4">
          <h5>${item.product_name}</h5>
        </div>
        <div class="col-md-2">
          ₹${item.price}
        </div>
        <div class="col-md-2">
        </div>
        <div class="col-md-2">
          <button onclick="removeFromCart(${item.cart_id})" 
                  class="btn btn-sm btn-danger">Remove</button>
        </div>
      </div>
    </div>
  `).join('');
}
async function removeFromCart(cartId) {
  const token = localStorage.getItem('token');
  if (!token) {
    alert('Please log in first!');
    return;
  }

  try {
    const response = await fetch(`http://localhost:3000/api/cart/remove/${cartId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    if (!response.ok) {
      throw new Error('Failed to remove item from cart');
    }
    loadCartItems(); // Reload the cart after removal
  } catch (error) {
    console.error('Error removing item from cart:', error);
    alert('Failed to remove item from cart');
  }
}
function calculateTotal(cartItems) {
  if (!cartItems || cartItems.length === 0) {
    console.error('No cart items available.');
    return;
  }

  // Calculate total price of items
  let totalPrice = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  // Add random tax between ₹10 and ₹50
  const tax =33;
  const totalAmount = totalPrice + tax;

  // Display result in a specified element
  const delivery = document.getElementById('delivery');
  const Subtotal = document.getElementById('Subtotal');
  const Total = document.getElementById('Total');
  if (Subtotal && Total && delivery) {
    delivery.textContent = `${Math.floor(Math.random() * 7) + 1} Days`;
    Subtotal.textContent = `₹${totalPrice}`;
    Total.textContent = `₹${totalAmount}`;
  } else {
    console.error('Total price element not found.');
  }
}


// Render products from the back-end
async function fetchProducts() {
  try {
    const response = await fetch('http://localhost:3000/api/products');
    const products = await response.json();
    console.log(products);
    displayProducts(products);
  } catch (error) {
    console.error('Error fetching products:', error);
  }
}

function displayProducts(products) {
  const productContainer = document.getElementById('itemholder');
  if (!productContainer) return;
  
  productContainer.innerHTML = '';
  products.forEach(product => {
    productContainer.innerHTML += `
      <div class="card" style="width: 18rem;">
        <div class="cardImgHolder">
          <img class="card-img-top cardImg" src="${product.image_url}" alt="${product.name}">
        </div>
        <div class="card-body">
          <h4 class="card-title">${product.name}</h4>
          <p class="card-text">${product.description}</p>
          <p>Best for: ${product.best_for}</p>
          <div class="finalinfo">
            <p id="priceP">${product.price}₹</p>
            <div class="innerfinalinfo">
              <span class="material-symbols-outlined cartspan" 
                    onclick="addToCart({
                      name: '${product.name}',
                      price: '${product.price}',
                      image_url: '${product.image_url}'
                    })">
                add_shopping_cart
              </span>
              <button class="btn btn-primary cartbutton" onclick="onPressedBuyNow('${product.name}')"
              data-lang="buyb">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    `;
  });
}

// Crop search functionality
async function searchCrops() {
  const inputBox = document.getElementById("cropinputbox").value.trim().toLowerCase();
  const lang = localStorage.getItem("selectedLanguage") || "en";

  // Format the crop name (capitalize first letter)
  const formattedInput = inputBox.charAt(0).toUpperCase() + inputBox.slice(1);

  if (!formattedInput) {
    alert("Please enter a crop name.");
    return;
  }

  try {
    const response = await fetch("http://localhost:3000/api/getCropDetails", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cropName: formattedInput, lang }),
    });

    if (!response.ok) {
      throw new Error("Crop not found.");
    }

    const cropData = await response.json();

    // Update the UI with crop details
    updateUI(cropData, formattedInput);
  } catch (error) {
    alert(error.message);
  }
}

function updateUI(cropData, formattedInput) {
  const nameElement = document.getElementById("cropname");
  const tempElement = document.getElementById("Temp");
  const seasonElement = document.getElementById("season");
  const durationElement = document.getElementById("Duration");
  const soilElement = document.getElementById("Soil");
  const waterElement = document.getElementById("Water");
  const irrigationElement = document.getElementById("Irrigation");
  const fertilizersElement = document.getElementById("Fertilizers");
  const pestsElement = document.getElementById("Pests");
  const cropImageElement = document.getElementById("cropImage");
  const textarea = document.getElementById("detailsArea");

  // Update UI elements with backend data
  nameElement.textContent = formattedInput;
  tempElement.textContent = `${cropData.Temperature}`;
  seasonElement.textContent = `${cropData.BestSeasonToGrow}`;
  durationElement.textContent = `${cropData.Duration}`;
  soilElement.textContent = `${cropData.Soil}`;
  waterElement.textContent = `${cropData.WaterRequirement}`;
  irrigationElement.textContent = `${cropData.Irrigation}`;
  fertilizersElement.textContent = `${cropData.Fertilizers}`;
  pestsElement.textContent = `${cropData.Pests}`;
  cropImageElement.src = cropData.pic;
  textarea.style.visibility = "visible";
}

// Authentication handlers
document.addEventListener('DOMContentLoaded', function() {
  // Add event listener for the sign-in button (if any)
  const signinButton = document.getElementById('signin-btn');
  if (signinButton) {
    signinButton.addEventListener('click', function() {
      console.log('Sign-in button clicked');
    });
  }

  // Add event listener for signup form
  const signupForm = document.getElementById('signupForm');
  if (signupForm) {
    signupForm.addEventListener('submit', async function(event) {
      event.preventDefault();

      const username = document.getElementById('usernameholder').value.trim();
      const email = document.getElementById('emailholder').value.trim();
      const password = document.getElementById('passwordholder').value.trim();

      try {
        const response = await fetch('http://localhost:3000/api/signup', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username, email, password }),
        });

        if (response.ok) {
          alert('Sign-up successful!');
          localStorage.setItem("username", username);
          window.location.href = '../index.html';
        } else {
          const errorData = await response.json();
          alert(errorData.error || 'Sign-up failed!');
        }
      } catch (error) {
        console.error('Error during sign-up:', error);
        alert('An unexpected error occurred.');
      }
    });
  }

  // Add event listener for login form
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', async function(event) {
      event.preventDefault();

      const email = document.getElementById('email').value.trim();
      const password = document.getElementById('password').value.trim();

      try {
        const response = await fetch('http://localhost:3000/api/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password })
        });

        if (response.ok) {
          const data = await response.json();
          localStorage.setItem('username', data.username);
          localStorage.setItem('token', data.token);
          window.location.href = '../index.html';
        } else {
          const errorData = await response.json();
          alert(errorData.error || 'Login failed!');
        }
      } catch (error) {
        console.error('Login error:', error);
        alert('An unexpected error occurred.');
      }
    });
  }

  // Initialize cart if we're on the shop page
  if (document.getElementById('itemholder')) {
    updateCartCount();
    fetchProducts();
  }

  // Update navigation state
  const navLink = document.getElementById("signinbutton");
  if (navLink) {
    const username = localStorage.getItem('username');
    if (username) {
      const dropdownHtml = `
        <div class="dropdown nav-item">
          <button class="nav-link btn dropdown-toggle" type="button" id="userDropdown" data-bs-toggle="dropdown" aria-expanded="false">
            Welcome, ${username}
          </button>
          <ul class="dropdown-menu" aria-labelledby="userDropdown">
            <li><a class="dropdown-item" href="#" onclick="handleLogout()">Logout</a></li>
          </ul>
        </div>
      `;
      navLink.outerHTML = dropdownHtml;
    } else {
      navLink.textContent = 'Sign in';
      navLink.href = 'sign_.html';
    }
  }
});

function handleLogout() {
  localStorage.removeItem('username');
  localStorage.removeItem('token');
  window.location.href = '../index.html';
}

function chat() {
  window.open("https://t.me/Priyanshuk_01", '_blank');
}
function showCart(){
  window.location.href = 'checkout.html';
}

function showToast(message, type = 'success') {
  const toast = document.createElement('div');
  toast.className = `toast align-items-center show position-fixed top-0 end-0 m-3`;
  toast.style.zIndex = '1000';
  toast.setAttribute('role', 'alert');

  toast.innerHTML = `
    <div class="d-flex">
      <div class="toast-body bg-${type} text-white">
        ${message}
      </div>
      <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
  `;

  document.body.appendChild(toast);

  setTimeout(() => toast.remove(), 3000); // Show for 3 seconds
}
function orderConfirmed(){
  const address=document.getElementById('Address');
  const pincode=document.getElementById('Pincode');
  const cardholderName=document.getElementById('cardholderName');
  const CardNumber=document.getElementById('CardNumber');
  const Expiration=document.getElementById('Expiration');
  if(address&&pincode&&cardholderName&&CardNumber&&Expiration){
    if(!address.value.trim()||!pincode.value.trim()||!cardholderName.value.trim()||!CardNumber.value.trim()||!Expiration.value.trim()){
      alert('Please fill all the fields');
    }
    else{
      localStorage.setItem("address",address.value.trim());
      localStorage.setItem("pincode",pincode.value.trim());
      alert('Order Confirmed');
      window.location.href = 'finalPage.html';
    }
  }
  else{
    alert("Issue");
  }
}