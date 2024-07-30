document.addEventListener('DOMContentLoaded', function() {
    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Function to check if an element is in the viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Add event listener for scroll event
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            if (isInViewport(section)) {
                section.classList.add('visible');
            } else {
                section.classList.remove('visible'); // Optional: Remove class if not in viewport
            }
        });
    });

    // Trigger the scroll event to check visibility on page load
    window.dispatchEvent(new Event('scroll'));

    // Load certificates dynamically
    document.getElementById('loadCertificates').addEventListener('click', function() {
        const certificateList = document.getElementById('certificate-list');
        certificateList.innerHTML = `
            <ul>
                <li><a href="certificates/Certificate1.pdf" target="_blank">Certificate 1</a></li>
                <li><a href="certificates/Certificate2.pdf" target="_blank">Certificate 2</a></li>
                <!-- Add more certificates here -->
            </ul>
        `;
    });

    // Header background color change on scroll
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});
