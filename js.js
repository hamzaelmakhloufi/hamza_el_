  $(document).ready(function() {
    // Simulate the user connection status (you should replace this with your actual logic)
    const userConnected = true; // Change this based on your logic

    // Function to update the menu items based on user connection status
    function updateMenuItems() {
      if (userConnected) {
        $(".menu li.login-link").hide();
        $(".menu li.logout-link").show();
      } else {
        $(".menu li.login-link").show();
        $(".menu li.account").hide();
        $(".menu li.logout-link").hide();
        $(".menu li.welcome").hide();
      }
    }
  updateMenuItems();
    $(".hamburger").on("click", function() {
    $(".menu").toggleClass("show-menu");
    $(".hamburger").toggleClass("active");
  });

  $("#filter-btn").on("click", function() {
    $("#filter-form").toggleClass("hidden");
  });

  // Close the menu when clicking outside of the menu or hamburger
  $(document).on("click", function(event) {
    const $target = $(event.target);

    if (!$target.closest(".menu").length && !$target.closest(".hamburger").length) {
      $(".menu").removeClass("show-menu");
      $(".hamburger").removeClass("active");
    }
    });
	
	// -----------------------
$("#filter-btn").click(function() {
        $("#searchFormOverlay").fadeIn();
		var overlay = document.getElementById("searchFormOverlay");
		overlay.style.display = "flex";
      });

      $("#submitSearch").click(function() {
        $("#searchFormOverlay").fadeOut();
        // Perform additional actions here based on form input
      });
	  
	  
	  //-----------------------------
	

    document.getElementById("searchFormOverlay").addEventListener("click", function(event) {
      if (event.target === this) {
        this.style.display = "none";
      }
    });

	  //---------------------------- pictures
	const products = [
  {
    title: "TEST 1",
    description: "Description du TEST 1",
    imageUrl: "url_de_l_image_1.jpg"
  },
  {
    title: "TEST 2",
    description: "Description du TEST 2",
    imageUrl: "url_de_l_image_2.jpg"
  },
{
    title: "TEST 3",
    description: "Description du TEST 3",
    imageUrl: "url_de_l_image_3.jpg"
  },
{
    title: "TEST 4",
    description: "Description du TEST 4",
    imageUrl: "url_de_l_image_4.jpg"
  },
{
    title: "TEST 5",
    description: "Description du TEST 5",
    imageUrl: "url_de_l_image_5.jpg"
  },
{
    title: "TEST 6",
    description: "Description du TEST 6",
    imageUrl: "url_de_l_image_6.jpg"
  },
{
    title: "TEST 7",
    description: "Description du TEST 7",
    imageUrl: "url_de_l_image_7.jpg"
  },
{
    title: "TEST 8",
    description: "Description du TEST 8",
    imageUrl: "url_de_l_image_8.jpg"
  },
{
    title: "TEST 9",
    description: "Description du TEST 9",
    imageUrl: "url_de_l_image_9.jpg"
  },
{
    title: "TEST 10",
    description: "Description du TEST 10",
    imageUrl: "url_de_l_image_10.jpg"
  },
{
    title: "TEST 3",
    description: "Description du TEST 3",
    imageUrl: "url_de_l_image_3.jpg"
  },
{
    title: "TEST 4",
    description: "Description du TEST 4",
    imageUrl: "url_de_l_image_4.jpg"
  },
{
    title: "TEST 5",
    description: "Description du TEST 5",
    imageUrl: "url_de_l_image_5.jpg"
  },
{
    title: "TEST 6",
    description: "Description du TEST 6",
    imageUrl: "url_de_l_image_6.jpg"
  },
{
    title: "TEST 7",
    description: "Description du TEST 7",
    imageUrl: "url_de_l_image_7.jpg"
  },
{
    title: "TEST 8",
    description: "Description du TEST 8",
    imageUrl: "url_de_l_image_8.jpg"
  },
{
    title: "TEST 9",
    description: "Description du TEST 9",
    imageUrl: "url_de_l_image_9.jpg"
  },
{
    title: "TEST 10",
    description: "Description du TEST 10",
    imageUrl: "url_de_l_image_10.jpg"
  },
  {
    title: "TEST 3",
    description: "Description du TEST 3",
    imageUrl: "url_de_l_image_3.jpg"
  },
{
    title: "TEST 4",
    description: "Description du TEST 4",
    imageUrl: "url_de_l_image_4.jpg"
  },
{
    title: "TEST 5",
    description: "Description du TEST 5",
    imageUrl: "url_de_l_image_5.jpg"
  },
{
    title: "TEST 6",
    description: "Description du TEST 6",
    imageUrl: "url_de_l_image_6.jpg"
  },
{
    title: "TEST 7",
    description: "Description du TEST 7",
    imageUrl: "url_de_l_image_7.jpg"
  },
{
    title: "TEST 8",
    description: "Description du TEST 8",
    imageUrl: "url_de_l_image_8.jpg"
  },
{
    title: "TEST 9",
    description: "Description du TEST 9",
    imageUrl: "url_de_l_image_9.jpg"
  },
{
    title: "TEST 10",
    description: "Description du TEST 10",
    imageUrl: "url_de_l_image_10.jpg"
  },
  {
    title: "TEST 3",
    description: "Description du TEST 3",
    imageUrl: "url_de_l_image_3.jpg"
  },
{
    title: "TEST 4",
    description: "Description du TEST 4",
    imageUrl: "url_de_l_image_4.jpg"
  },
{
    title: "TEST 5",
    description: "Description du TEST 5",
    imageUrl: "url_de_l_image_5.jpg"
  },
{
    title: "TEST 6",
    description: "Description du TEST 6",
    imageUrl: "url_de_l_image_6.jpg"
  },
{
    title: "TEST 7",
    description: "Description du TEST 7",
    imageUrl: "url_de_l_image_7.jpg"
  },
{
    title: "TEST 8",
    description: "Description du TEST 8",
    imageUrl: "url_de_l_image_8.jpg"
  },
{
    title: "TEST 9",
    description: "Description du TEST 9",
    imageUrl: "url_de_l_image_9.jpg"
  },
{
    title: "TEST 10",
    description: "Description du TEST 10",
    imageUrl: "url_de_l_image_10.jpg"
  },
  {
    title: "TEST 3",
    description: "Description du TEST 3",
    imageUrl: "url_de_l_image_3.jpg"
  },
{
    title: "TEST 4",
    description: "Description du TEST 4",
    imageUrl: "url_de_l_image_4.jpg"
  },
{
    title: "TEST 5",
    description: "Description du TEST 5",
    imageUrl: "url_de_l_image_5.jpg"
  },
{
    title: "TEST 6",
    description: "Description du TEST 6",
    imageUrl: "url_de_l_image_6.jpg"
  },
{
    title: "TEST 7",
    description: "Description du TEST 7",
    imageUrl: "url_de_l_image_7.jpg"
  },
{
    title: "TEST 8",
    description: "Description du TEST 8",
    imageUrl: "url_de_l_image_8.jpg"
  },
{
    title: "TEST 9",
    description: "Description du TEST 9",
    imageUrl: "url_de_l_image_9.jpg"
  },
{
    title: "TEST 10",
    description: "Description du TEST 10",
    imageUrl: "url_de_l_image_10.jpg"
  },
  {
    title: "TEST 3",
    description: "Description du TEST 3",
    imageUrl: "url_de_l_image_3.jpg"
  },
{
    title: "TEST 4",
    description: "Description du TEST 4",
    imageUrl: "url_de_l_image_4.jpg"
  },
{
    title: "TEST 5",
    description: "Description du TEST 5",
    imageUrl: "url_de_l_image_5.jpg"
  },
{
    title: "TEST 6",
    description: "Description du TEST 6",
    imageUrl: "url_de_l_image_6.jpg"
  },
{
    title: "TEST 7",
    description: "Description du TEST 7",
    imageUrl: "url_de_l_image_7.jpg"
  },
{
    title: "TEST 8",
    description: "Description du TEST 8",
    imageUrl: "url_de_l_image_8.jpg"
  },
{
    title: "TEST 9",
    description: "Description du TEST 9",
    imageUrl: "url_de_l_image_9.jpg"
  },
{
    title: "TEST 10",
    description: "Description du TEST 10",
    imageUrl: "url_de_l_image_10.jpg"
  },
  {
    title: "TEST 3",
    description: "Description du TEST 3",
    imageUrl: "url_de_l_image_3.jpg"
  },
{
    title: "TEST 4",
    description: "Description du TEST 4",
    imageUrl: "url_de_l_image_4.jpg"
  },
{
    title: "TEST 5",
    description: "Description du TEST 5",
    imageUrl: "url_de_l_image_5.jpg"
  },
];



  // Assurez-vous d'avoir le tableau 'products' avec les informations des produits

  // Sélectionnez la div "products-container"
  const productsContainer = $(".products-container");
  // Parcourez le tableau de produits et créez les éléments HTML pour chaque produit
  products.forEach((product, index) => {
    const productDiv = $("<div class='product'></div>");
    const imageElement = $("<img src='" + product.imageUrl + "' alt='" + product.title + "'>");
    const titleElement = $("<h2>" + product.title + "</h2>");
    const descriptionElement = $("<p>" + product.description + "</p>");

    // Ajoutez les éléments à la div du produit
    productDiv.append(imageElement, titleElement, descriptionElement);
    // Ajoutez le produit à la div "products-container"
    productsContainer.append(productDiv);

  });
 // premium photo ***************************************
// Sélectionnez la div "premium-container"
const premiumContainer = $(".premium-container");

// Fonction pour générer un nombre aléatoire entre min et max (inclus)
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Fonction pour afficher les produits en fonction de la largeur de l'écran
function displayProducts() {
  const screenWidth = window.innerWidth;
  let numImagesToDisplay;
  
  if (screenWidth >= 768) {
    numImagesToDisplay = 3;
  } else {
    numImagesToDisplay = 1;
  }

  // Supprimez le contenu actuel de la div "premium-container"
  premiumContainer.empty();

  // Créez un tableau de numéros aléatoires uniques pour les indices des produits
  const randomIndices = [];
  while (randomIndices.length < numImagesToDisplay) {
    const randomIndex = getRandomNumber(0, products.length - 1);
    if (!randomIndices.includes(randomIndex)) {
      randomIndices.push(randomIndex);
    }
  }

  // Ajoutez les produits correspondants à la div "premium-container"
  randomIndices.forEach((randomIndex) => {
    const product = products[randomIndex];
    const productDiv = $("<div class='premium'></div>");
    const imageElement = $("<div class='premium-image'><img src='" + product.imageUrl + "' alt='" + product.title + "'></div>");
    const star = $("<div class='premium-badge'><span class='star'>&#9733;</span> Premium</div>");
    const titleElement = $("<h2>" + product.title + "</h2>");
    const descriptionElement = $("<p>" + product.description + "</p>");

    // Ajoutez les éléments à la div du produit
    imageElement.append(star); // Add the "premium-badge" element to the "premium-image" container
    productDiv.append(imageElement, titleElement, descriptionElement);

    // Ajoutez la classe 'premium' à chaque produit pair pour un style alterné
    if (randomIndices.indexOf(randomIndex) % 2 === 1) {
      productDiv.addClass("premium");
    }

    // Ajoutez le produit à la div "premium-container"
    premiumContainer.append(productDiv);
  });
}

// Appelez la fonction pour afficher les produits initialement
$(window).on('load resize', function () {
  displayProducts();
});

// Écoutez les changements de taille d'écran et mettez à jour les produits en conséquence
window.addEventListener("resize", displayProducts);


// ------------------------------------------------------------------------- pagination 
const productsPerPage = 30; // Number of products to show per page
    let currentPage = 1; // Current page number
    function displayRegularProducts(page) {
        const startIndex = (page - 1) * productsPerPage;
        const endIndex = startIndex + productsPerPage;
        const productsContainer = $(".products-container");
        productsContainer.empty();

        for (let i = startIndex; i < endIndex && i < products.length; i++) {
            const product = products[i];
            const productDiv = $("<div class='product'></div>");
			const productLink = $("<a href='#'></a>");
            const imageElement = $("<img src='" + product.imageUrl + "' alt='" + product.title + "'>");
            const titleElement = $("<h2>" + product.title + "</h2>");
            const descriptionElement = $("<p>" + product.description + "</p>");

            productLink.append(imageElement, titleElement, descriptionElement);
            productDiv.append(productLink);
            productsContainer.append(productDiv);
        }
    }

    // ... Your existing displayProducts function for premium products ...

// ------------------------------------
function updatePagination() {
    const totalPages = Math.ceil(products.length / productsPerPage);
    const paginationContainer = $(".pagination ul");
    paginationContainer.empty();

    const pagesToShow = 5; // Number of pages to show

    // Calculate the start and end pages based on the current page
    let startPage = currentPage - Math.floor(pagesToShow / 2);
    startPage = Math.max(startPage, 1);
    let endPage = startPage + pagesToShow - 1;
    if (endPage > totalPages) {
        endPage = totalPages;
        startPage = endPage - pagesToShow + 1;
        startPage = Math.max(startPage, 1);
    }

    if (currentPage > 1) {
        paginationContainer.append("<li><a href='#' class='prev'>&laquo;</a></li>");
    }

    for (let i = startPage; i <= endPage; i++) {
        const listItem = $("<li><a href='#'>" + i + "</a></li>");
        if (i === currentPage) {
            listItem.find('a').addClass('active-page');
        }
        listItem.on("click", function () {
            currentPage = i;
            displayRegularProducts(currentPage); // Call the regular product display function
            updatePagination();
        });
        paginationContainer.append(listItem);
    }

    if (currentPage < totalPages) {
        paginationContainer.append("<li><a href='#' class='next'>&raquo;</a></li>");
    }
}

// Add event listeners for "<<" and ">>" buttons
$(".pagination").on("click", ".prev", function () {
    if (currentPage > 1) {
        currentPage--;
        displayRegularProducts(currentPage);
        updatePagination();
    }
});

$(".pagination").on("click", ".next", function () {
    const totalPages = Math.ceil(products.length / productsPerPage);
    if (currentPage < totalPages) {
        currentPage++;
        displayRegularProducts(currentPage);
        updatePagination();
    }
});


// ------------------------------------


    displayRegularProducts(currentPage);
    updatePagination();
	// ---------------------------------------------------GO TO THE TOP
	
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

scrollToTopBtn.addEventListener("click", function() {
    scrollToTop(0);
});

function scrollToTop(top) {
    if (window.scrollY > top) {
        window.scrollBy(0, -150); // You can adjust the scrolling speed here
        requestAnimationFrame(scrollToTop.bind(null, top));
    }
}

window.addEventListener("scroll", function() {
    if (document.documentElement.scrollTop > 100) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
});



// -----------------------------------------------------

// ---------------------------------------------------- premium scroll
const premiumContainer1 = document.querySelector('.premium-container');
const header = document.querySelector('header');
const footer = document.querySelector('footer');
const spaceBetweenHeaderAndPremium = 100; // Adjust this value

function handleScroll() {
  const scrollY = window.scrollY;
  const headerHeight = header.offsetHeight;
  const footerTop = footer.getBoundingClientRect().top;
  const premiumHeight = premiumContainer1.offsetHeight;

  if (scrollY >= headerHeight) {
    premiumContainer1.style.top = `3%`; // Add space
	premiumContainer1.style.height = `90%`;
	premiumContainer1.style.transition = "top 0.5s, height 0.2s"; // Add a 0.5s transition effect
  } else {
	premiumContainer1.style.height = `75%`;
	premiumContainer1.style.transition = "top 0.0s, height 0.2s"; // Add a 0.5s transition effect
    premiumContainer1.style.top = `${headerHeight + spaceBetweenHeaderAndPremium - scrollY}px`; // Add space
  }
  if (scrollY > footerTop+2000) {
  premiumContainer1.style.bottom = `20%`; // Add space
	premiumContainer1.style.height = `60%`;
   }
}

window.addEventListener('scroll', handleScroll);
// ---------------------------------------------------- premium scroll


	
});
  
  
  
 


