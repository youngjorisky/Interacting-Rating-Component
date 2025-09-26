document.addEventListener('DOMContentLoaded', () => {
    const activeone = document.getElementById("active-one");
    const inactive = document.getElementById("inactive");
    const ratingbuttons = Array.from(document.getElementsByClassName("element"));
    const submitbutton = document.getElementById("submit");
    const selectionSpan = document.getElementById("selection");

    let selectedrating = null;

    ratingbuttons.forEach(ratingbutton => {
        ratingbutton.addEventListener('click', () => {
            ratingbuttons.forEach(button => button.classList.remove('active'));

            ratingbutton.classList.add('active');
            selectedrating = ratingbutton.dataset.number;
        });
    });

    submitbutton.addEventListener('click', () => {
        if (selectedrating) {
            selectionSpan.innerHTML = '&nbsp;' + selectedrating + '&nbsp;';

            inactive.style.display = 'none';
            activeone.style.display = 'flex';
        } else {
            window.alert('Please select a rating first.');
        }
    });
});

