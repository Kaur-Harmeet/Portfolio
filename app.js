// script.js
document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggleButton');
    const content = document.getElementById('content');

    toggleButton.addEventListener('click', function() {
        if (content.classList.contains('hidden')) {
            content.classList.remove('hidden');
        } else {
            content.classList.add('hidden');
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const toggleButton2 = document.getElementById('toggleButton2');
    const content2 = document.getElementById('content2');

    toggleButton2.addEventListener('click', function() {
        if (content2.classList.contains('hidden2')) {
            content2.classList.remove('hidden2');
        } else {
            content2.classList.add('hidden2');
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const toggleButton3 = document.getElementById('toggleButton3');
    const content3 = document.getElementById('content3');

    toggleButton3.addEventListener('click', function() {
        if (content3.classList.contains('hidden3')) {
            content3.classList.remove('hidden3');
        } else {
            content3.classList.add('hidden3');
        }
    });
});

const toggleBtn = document.querySelector('.toggel_btn')
const toggleBtnIcon = document.querySelector('.toggel_btn i')
const dropDownMenu = document.querySelector('.dropdown_menu')

toggleBtn.addEventListener("click", function()
{
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')
    toggleBtnIcon.classList = isOpen
    ? 'fa-solid fa-xmark '
    : 'fa-solid fa-bars '
})
