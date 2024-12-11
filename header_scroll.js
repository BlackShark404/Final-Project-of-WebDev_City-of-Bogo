class NavMenu {
    constructor() {
      this.offcanvas = document.getElementById('navMenu');
      if (!this.offcanvas) return;
  
      this.links = this.offcanvas.querySelectorAll('.nav-link');
      this.divider = this.offcanvas.querySelector('.divider');
      this.servicesDropdown = this.offcanvas.querySelector('.dropdown');
      this.servicesDropdownToggle = this.offcanvas.querySelector('.dropdown-toggle');
  
      this.dropdownCloseTimeout = null;
  
      this.init();
    }
  
    init() {
      this.bindEvents();
      this.bindClickOutside();
      this.setupDropdownHover();
    }
  
    isMobile() {
      return window.innerWidth < 992 || navigator.maxTouchPoints > 0;
    }
  
    bindEvents() {
      this.offcanvas.addEventListener('show.bs.offcanvas', () => this.onShow());
      this.offcanvas.addEventListener('hide.bs.offcanvas', () => this.onHide());
      window.addEventListener('resize', () => this.handleResize());
    }
  
    onShow() {
      if (this.isMobile()) {
        this.offcanvas.classList.add('glass-effect');
        this.showDivider();
        this.addMobileClasses();
      }
    }
  
    onHide() {
      this.offcanvas.classList.remove('glass-effect');
      this.hideDivider();
      this.removeMobileClasses();
    }
  
    showDivider() {
      if (!this.divider) return;
      this.divider.style.display = 'block';
      requestAnimationFrame(() => this.divider.classList.add('show'));
    }
  
    hideDivider() {
      if (!this.divider) return;
      this.divider.classList.remove('show');
      setTimeout(() => {
        this.divider.style.display = 'none';
      }, 150);
    }
  
    addMobileClasses() {
      this.links.forEach((link) => link.classList.add('in-offcanvas'));
    }
  
    removeMobileClasses() {
      this.links.forEach((link) => link.classList.remove('in-offcanvas'));
    }
  
    handleResize() {
      if (!this.isMobile()) {
        this.offcanvas.classList.remove('glass-effect');
      } else if (this.offcanvas.classList.contains('show')) {
        this.offcanvas.classList.add('glass-effect');
      }
    }
  
    bindClickOutside() {
      document.addEventListener('click', (event) => {
        if (this.offcanvas.classList.contains('show') && !this.offcanvas.contains(event.target)) {
          const offcanvasInstance = bootstrap.Offcanvas.getOrCreateInstance(this.offcanvas);
          if (offcanvasInstance) {
            offcanvasInstance.hide();
          }
        }
      });
    }
  
    setupDropdownHover() {
      if (!this.servicesDropdownToggle) return;
  
      const isTouchDevice = navigator.maxTouchPoints > 0;
  
      if (!isTouchDevice) {
        this.servicesDropdownToggle.addEventListener('mouseenter', () => {
          if (this.dropdownCloseTimeout) {
            clearTimeout(this.dropdownCloseTimeout);
            this.dropdownCloseTimeout = null;
          }
  
          if (!this.isMobile()) {
            const dropdownInstance = bootstrap.Dropdown.getOrCreateInstance(this.servicesDropdownToggle);
            dropdownInstance.show();
          }
        });
  
        this.servicesDropdown.addEventListener('mouseleave', () => {
          if (!this.isMobile()) {
            this.dropdownCloseTimeout = setTimeout(() => {
              const dropdownInstance = bootstrap.Dropdown.getInstance(this.servicesDropdownToggle);
              if (dropdownInstance) {
                dropdownInstance.hide();
              }
            }, 200);
          }
        });
  
        this.servicesDropdown.addEventListener('mouseenter', () => {
          if (!this.isMobile() && this.dropdownCloseTimeout) {
            clearTimeout(this.dropdownCloseTimeout);
            this.dropdownCloseTimeout = null;
          }
        });
      }
    }
  }
  
  document.addEventListener('DOMContentLoaded', () => new NavMenu());
  