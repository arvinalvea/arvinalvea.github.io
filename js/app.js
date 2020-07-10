/* ============================================= */
/*              Global Variables                 */
/* ============================================= */

const projectBtn = document.querySelector('#projectBtn');


/* ============================================= */
/*                     Main                      */
/* ============================================= */

// Hide "See Projects" on load up
window.addEventListener('load', (event) => {
    projectBtn.classList = 'hidden';
});

// Smooth scroll when arrow button is clicked
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        projectBtn.classList = "col-lg-12";
    });
});




