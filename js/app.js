document.addEventListener("DOMContentLoaded", () => {
  const sideMenu = document.querySelector("#side-menu"),
    hamburger = document.querySelector("#hamburger"),
    menuItems = document.querySelectorAll(".chevron-right"),
    backButtons = document.querySelectorAll(".back"),
    closeButtons = document.querySelectorAll(".close"),
    overlay = document.querySelector("#overlay"),
    shareWidgetTrigger = document.querySelectorAll(".share-icon"),
    productImage = document.querySelector("#product"),
    activeVariant = document.querySelector("#active-varient"),
    colors = document.querySelectorAll("#colors .color"),
    environmentButtons = document.querySelectorAll(
      "#product-customisation-tabs button"
    ),
    carouselTabs = document.querySelectorAll("#carousel-tabs .tab"),
    tabPanels = document.querySelectorAll("#tab-panels .panel"),
    variantTabs = document.querySelectorAll("#variant-tabs .tab"),
    variantTabsWrapper = document.querySelectorAll(
      "#variant-tab-panels .wrapper"
    );

  menuItems.forEach((menuItem) => {
    menuItem.addEventListener("click", function () {
      this.nextElementSibling.classList.toggle("active");
    });
  });

  backButtons.forEach((backButton, index) => {
    backButton.addEventListener("click", function () {
      document.querySelectorAll(".submenu")[index].classList.remove("active");
    });
  });

  hamburger.addEventListener("click", function () {
    sideMenu.classList.add("active");
    overlay.classList.add("active");
  });
  
  closeButtons.forEach((closeButton, index) => {
    closeButton.addEventListener("click", function () {
      const submenus = document.querySelectorAll(".submenu");
      submenus.forEach((submenu) => {
        submenu.classList.remove("active");
      });
      sideMenu.classList.remove("active");
      overlay.classList.remove("active");
    });
  });

  // Share Widget
  shareWidgetTrigger.forEach((shareWidget) => {
    shareWidget.addEventListener("click", function () {
      this.nextElementSibling.classList.toggle("active");
    });
  });

  // Product Customisation
  colors.forEach((color) => {
    color.addEventListener("click", function () {
      const title = color.getAttribute("title");
      const variantImage = color.dataset.img;
      activeVariant.textContent = title;
      productImage.querySelector("img").src = variantImage;
    });
  });

  const envNightButton = document.querySelector("button[data-env='Night']");
  envNightButton.style.display = "none";
  environmentButtons.forEach((envBtn) => {
    envBtn.addEventListener("click", function () {
      const activeEnv = document.querySelector(
        "#product-customisation-tabs .active"
      );
      const env = this.dataset.env;
      activeEnv.classList.remove("active");
      this.classList.add("active");
      if (env === "Studio") {
        envNightButton.style.display = "none";
        productImage.style.background = "#ffffff";
      } else if (env === "Outdoor") {
        envNightButton.style.display = "block";
        productImage.style.backgroundImage =
          "url('../images/outdoor-env-day.png')";
      } else if (env === "Night") {
        this.classList.add("active");
        productImage.style.backgroundImage =
          "url('../images/outdoor-env-night.png')";
      } else {
        this.classList.remove("active");
        envNightButton.style.display = "none";
      }
    });
  });

  // Full Screen
  const productContainer = document.querySelector("#product-container");
  const fullScreenButton = document.querySelector("#full-screen-view");
  const requestFullScreen = () => {
    if (productContainer.requestFullscreen) {
      productContainer.requestFullscreen();
    } else if (productContainer.mozRequestFullScreen) {
      // Firefox
      productContainer.mozRequestFullScreen();
    } else if (productContainer.webkitRequestFullscreen) {
      // Chrome, Safari, Opera
      productContainer.webkitRequestFullscreen();
    } else if (productContainer.msRequestFullscreen) {
      // IE/Edge
      productContainer.msRequestFullscreen();
    }
  };
  fullScreenButton.addEventListener("click", requestFullScreen);

  // Fullscreen change event listener to toggle class on body
  const onFullScreenChange = () => {
    const body = document.body;
    if (
      document.fullscreenElement ||
      document.webkitFullscreenElement ||
      document.mozFullScreenElement ||
      document.msFullscreenElement
    ) {
      body.classList.add("fullscreen-active");
    } else {
      body.classList.remove("fullscreen-active");
    }
  };

  fullScreenButton.addEventListener("click", requestFullScreen);

  document.addEventListener("fullscreenchange", onFullScreenChange);
  document.addEventListener("webkitfullscreenchange", onFullScreenChange);
  document.addEventListener("mozfullscreenchange", onFullScreenChange);
  document.addEventListener("MSFullscreenChange", onFullScreenChange);

  // Carousel Tabs
  carouselTabs.forEach((tab, index) => {
    tab.addEventListener("click", function () {
      const activeTab = document.querySelector("#carousel-tabs .tab.active");
      activeTab.classList.remove("active");
      this.classList.add("active");
      tabPanels.forEach((tabPanel, idx) => {
        if (index != idx) {
          tabPanel.classList.remove("active");
        } else {
          tabPanel.classList.add("active");
        }
      });
    });
  });

  // Variant Tabs
  variantTabs.forEach((variantTab, index) => {
    variantTab.addEventListener("click", function () {
      console.log(variantTabsWrapper);
      document
        .querySelector("#variant-tabs > .active")
        .classList.remove("active");
      document
        .querySelector("#variant-tab-panels > .active")
        .classList.remove("active");
      variantTab.classList.add("active");
      variantTabsWrapper[index].classList.add("active");
    });
  });
});
