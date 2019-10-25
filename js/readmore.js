const readmoreAllToggles= document.querySelectorAll('.toggle-text-button')

readmoreAllToggles.forEach((readmoreToggle) => {
    readmoreToggle.addEventListener("click", (e) => {
        e.preventDefault();
        if (readmoreToggle.text == "CONTINUE READING") {

            readmoreToggle.text = "READ LESS";
            readmoreToggle.parentElement.querySelector(".article-body").querySelector(".toggle-text").classList.remove('slideUp');
            readmoreToggle.parentElement.querySelector(".article-body").querySelector(".toggle-text").classList.add('slideDown');
            
        } else {

            readmoreToggle.text = "CONTINUE READING";
            readmoreToggle.parentElement.querySelector(".article-body").querySelector(".toggle-text").classList.remove('slideDown');
            readmoreToggle.parentElement.querySelector(".article-body").querySelector(".toggle-text").classList.add('slideUp');

        }    
    })
})
