document.getElementById('menuToggle').addEventListener('click', () => {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.toggle('hidden');
});



module.exports = {
  theme: {
    extend: {
      animation: {
        'scroll-up': 'scrollUp 10s linear infinite',
      },
      keyframes: {
        scrollUp: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(-100%)' },
        },
      },
    },
  },
  plugins: [],
}

