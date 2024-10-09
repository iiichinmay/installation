const buttons = document.querySelectorAll('.btn');
const discs = document.querySelectorAll('.disc');
const imgSection = document.getElementById('imgs');

const images = ['1st.jpg', '2nd.jpg', '3rd.jpg'];

// Function to remove the highlight (shadow and background color) from all discs
function clearDiscHighlights() {
    discs.forEach(disc => {
        // Reset background color and remove shadow for each disc
        disc.style.backgroundColor = 'rgb(230, 230, 230)';
        disc.style.boxShadow = 'none';
    });
}

// Add a click event listener to each button
buttons.forEach((button, index) => {
    // When a button is clicked, the function inside is executed
    button.addEventListener('click', () => {
        // Change the image inside the 'imgSection' based on the button clicked (index is used to get the correct image)
        imgSection.innerHTML = `<img src="${images[index]}" alt="Image ${index + 1}" style="width: 100%; height: auto; border-radius: 10px;">`;

        // Call the function to clear all highlights from the discs
        clearDiscHighlights();

        // Apply shadow highlight to the disc that corresponds to the clicked button
        discs[index].style.boxShadow = '0 4px 15px rgba(0,10, 0, 0.5)';
    });
});
