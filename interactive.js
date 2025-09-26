document.addEventListener('DOMContentLoaded', () => {
    const activeOne = document.getElementById("active-one");
    const inactive = document.getElementById("inactive");
    const ratingButtons = Array.from(document.getElementsByClassName("element"));
    const submitButton = document.getElementById("submit");
    const selectionSpan = document.getElementById("selection");

    let selectedRating = null;

    ratingButtons.forEach(ratingButton => {
        ratingButton.addEventListener('click', () => {
            ratingButtons.forEach(button => button.classList.remove('active'));

            ratingButton.classList.add('active');
            selectedRating = ratingButton.dataset.number;
        });
    });

    submitButton.addEventListener('click', () => {
        if (selectedRating) {
            selectionSpan.innerHTML = '&nbsp;' + selectedRating + '&nbsp;';

            inactive.style.display = 'none';
            activeOne.style.display = 'flex';
        } else {
            window.alert('Please select a rating first.');
        }
    });
});

