document.addEventListener('DOMContentLoaded', function () {
    document.addEventListener('change', function () {
        let input = document.querySelector('input');
        console.log(input.value);
    });
});