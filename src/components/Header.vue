<template>
  <header id="header" class="header theme-col--primary white" tabindex="-1">
    <div class="sqs-announcement-bar-dropzone"></div>
    <div class="header-announcement-bar-wrapper">
      <a href="#page" tabindex="1" class="header-skip-link">
        Skip to Content
      </a>
      <div class="header-inner container--fluid header-mobile-layout-logo-left-nav-right header-layout-nav-right ">
        <!-- Background -->
        <div class="header-background theme-bg--primary"></div>
        <div class="header-display-desktop">
          <!-- Social -->
          <!-- Title and nav wrapper -->
          <div class="header-title-nav-wrapper">
            <!-- Title -->
            <div class=" header-title ">
              <div class="header-title-logo">
                <a href="/">
                  <img :src="data.logo" alt="SuperYeti">
                </a>
              </div>
            </div>
            <!-- Nav -->
            <div class="header-nav">
              <div class="header-nav-wrapper">
                <nav class="header-nav-list">
                  <div
                      class="header-nav-item header-nav-item--collection header-nav-item--active header-nav-item--homepage">
                    <a href="/">
                      <span class="visually-hidden">Current Page:</span>
                      Home
                    </a>
                  </div>
                  <div class="header-nav-item header-nav-item--collection">
                    <a href="/about">
                      FAQ
                    </a>
                  </div>
                </nav>
              </div>
            </div>
          </div>
          <!-- Actions -->
          <div class="header-actions header-actions--right">
            <div class="showOnMobile"></div>
            <div class="showOnDesktop"></div>
          </div>
          <!-- Burger -->
          <div class="header-burger no-actions">
            <button class="header-burger-btn burger burger--active">
              <span class="js-header-burger-open-title visually-hidden">Open Menu</span>
              <span class="js-header-burger-close-title visually-hidden">Close Menu</span>
              <div class="burger-box">
                <div class="burger-inner header-menu-icon-doubleLineHamburger ">
                  <div class="top-bun"></div>
                  <div class="patty"></div>
                  <div class="bottom-bun"></div>
                </div>
              </div>
            </button>
          </div>
        </div>
        <div class="header-display-mobile">
          <!-- Title and nav wrapper -->
          <div class="header-title-nav-wrapper">
            <!-- Title -->
            <div class=" header-title ">
              <div class="header-title-logo">
                <a href="/">
                  <img
                      :src="data.logo"
                      alt="SuperYeti">
                </a>
              </div>
            </div>
            <!-- Nav -->
            <div class="header-nav">
              <div class="header-nav-wrapper">
                <nav class="header-nav-list">
                  <div
                      class="header-nav-item header-nav-item--collection header-nav-item--active header-nav-item--homepage">
                    <a href="/">
                      <span class="visually-hidden">Current Page:</span>
                      Home
                    </a>
                  </div>
                  <div class="header-nav-item header-nav-item--collection">
                    <a href="/about">
                      FAQ
                    </a>
                  </div>
                </nav>
              </div>
            </div>
          </div>
          <!-- Actions -->
          <div class="header-actions header-actions--right">
            <div class="showOnMobile">
            </div>
            <div class="showOnDesktop">
            </div>
          </div>
          <!-- Burger -->
          <div class="header-burger no-actions ">
            <button class="header-burger-btn burger" :class="{ 'burger--active' : isActive }" @click="activeBurger">
              <span class="js-header-burger-open-title visually-hidden">Open Menu</span>
              <span hidden="" class="js-header-burger-close-title visually-hidden">Close Menu</span>
              <div class="burger-box">
                <div class="burger-inner header-menu-icon-doubleLineHamburger ">
                  <div class="top-bun"></div>
                  <div class="patty"></div>
                  <div class="bottom-bun"></div>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- (Mobile) Menu Navigation -->
    <div class="header-menu header-menu--folder-list"
         style="padding-top: calc(10vmax / 5);">
      <div class="header-menu-bg theme-bg--primary"></div>
      <div class="header-menu-nav">
        <nav class="header-menu-nav-list">
          <div class="header-menu-nav-folder header-menu-nav-folder--active">
            <!-- Menu Navigation -->
            <div class="header-menu-nav-folder-content">
              <div
                  class="container header-menu-nav-item header-menu-nav-item--collection header-menu-nav-item--active header-menu-nav-item--homepage">
                <a href="/">
                  <span class="visually-hidden">Current Page:</span>
                  Home
                </a>
              </div>
              <div class="container header-menu-nav-item header-menu-nav-item--collection">
                <a href="/about">
                  FAQ
                </a>
              </div>
            </div>
            <div class="header-menu-actions"></div>
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  props: ['data'],
  name: "Header", 
  data() {
    return {
      isActive: false
    }
  },
  methods: {
    activeBurger: function() {
      this.isActive = !this.isActive;
      
      const body = document.getElementsByTagName('body')[0];
      
      if (body.classList.contains('header--menu-open')) {
        body.classList.remove('header--menu-open');
      } else {
        body.classList.add('header--menu-open');
      }
    }
  }
}
</script>

<style scoped>

</style>