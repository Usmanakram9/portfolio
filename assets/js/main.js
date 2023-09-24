const menuButton = document.getElementById('menu-button');
const blurBackground = document.querySelector('.blur-background');


menuButton.addEventListener('click', () => {
    blurBackground.style.display = blurBackground.style.display === 'flex' ? 'none' : 'flex';
    menuButton.classList.toggle('opened');
    if(menuButton.classList.contains('opened')){
        menuButton.innerHTML = 'CLOSE';
        
    }
    else{
        menuButton.innerHTML = 'MENU';
    }
    
});


document.addEventListener('DOMContentLoaded', function () {
    const h1 = document.querySelector('h1');
    const lightSpan = document.querySelector('.light');
    const normalSpan = document.querySelector('.normal');

    function typeText(element, text, speed, callback) {
        let index = 0;
        const timer = setInterval(() => {
            if (index < text.length) {
                element.textContent += text[index];
                index++;
            } else {
                clearInterval(timer); // Stop the typing effect
                if (typeof callback === 'function') {
                    callback();
                }
            }
        }, speed);
    }

    function eraseText(element, speed, callback) {
        const text = element.textContent;
        let index = text.length;
        const timer = setInterval(() => {
            if (index > 0) {
                element.textContent = text.substring(0, index - 1);
                index--;
            } else {
                clearInterval(timer); // Stop the erasing effect
                if (typeof callback === 'function') {
                    callback();
                }
            }
        }, speed);
    }

    // Define the sequence of animations
    function animateTextSequence() {
        typeText(lightSpan, 'MY NAME IS', 100, function () {
            eraseText(lightSpan, 50, function () {
                typeText(normalSpan, 'USMAN AKRAM.', 100, function () {
                    eraseText(normalSpan, 50, function () {
                        typeText(normalSpan, 'I AM A FULL STACK DEVELOPER.', 100, function () {
                            eraseText(normalSpan, 50, function () {
                                
                                animateTextSequence();
                            });
                        });
                    });
                });
            });
        });
    }

    // Start the animation sequence
    animateTextSequence();
});


const dots = document.querySelectorAll('.dots-navigation');
const sections = document.querySelectorAll('section');

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        sections[index].scrollIntoView({ behavior: 'smooth' });
        
        // Remove the 'active' class from all dots
        dots.forEach((dot) => {
            dot.classList.remove('active');
        });
        
        // Add the 'active' class to the clicked dot
        dot.classList.add('active');
    });
});


// const box1 = document.querySelector('.banner');
// const box2 = document.querySelector('section');

// box1.addEventListener('wheel', (event) => {
//     if (event.deltaY > 0) {
//         // Scrolling down, so scroll to box2 with a faster scroll speed
//         scrollToSection(box2, 200); // You can adjust the scroll speed (200 in this example)
//     }
// });

// function scrollToSection(targetSection, scrollAmount) {
//     const targetScrollTop = targetSection.offsetTop;
//     const currentScrollTop = window.scrollY;
//     const scrollStep = Math.abs(targetScrollTop - currentScrollTop) / scrollAmount;
//     const direction = targetScrollTop > currentScrollTop ? 1 : -1;

//     function scroll() {
//         if ((direction === 1 && window.scrollY < targetScrollTop) || (direction === -1 && window.scrollY > targetScrollTop)) {
//             window.scrollTo(0, window.scrollY + direction * scrollStep);
//             requestAnimationFrame(scroll);
//         }
//     }

//     requestAnimationFrame(scroll);
// }
