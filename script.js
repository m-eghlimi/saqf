document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('.tab');
    const cards = document.querySelectorAll('.card');

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', function () {
            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove('active'));
            // Add active class to clicked tab
            tab.classList.add('active');

            // Filtering cards based on the selected tab
            cards.forEach(card => {
                if (index === 0) {
                    card.style.display = 'block';
                } else if (index === 1) {
                    card.style.display = card.querySelector('p').textContent.includes('Paribu') ? 'block' : 'none';
                } else if (index === 2) {
                    card.style.display = card.querySelector('p').textContent.includes('Kitapçısı') ? 'block' : 'none';
                }
            });
        });
    });
});