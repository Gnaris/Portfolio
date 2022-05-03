//! Naviguation
let navs = Array.from(document.querySelectorAll("nav ul li a"))
navs.forEach((nav) =>{
    nav.addEventListener("click", (e) =>{
        e.preventDefault()
        navs.filter(nav => nav.classList.contains("linked"))
            .forEach(linked => linked.classList.remove("linked"))
        nav.classList.add("linked")
        document.querySelector("section")
            .setAttribute("page", nav.getAttribute("href"))
    })
})