import * as animation from "./animation.js"
import {Page} from "../entity/Page.js"
/**
 **Charge toutes les pages de la section
 *!requiert importation : animation.js et page.js
 */
fetch("./data/page.json")
.then(res => res.json())
.then((data) => {
    new Page(data)
    .getHomeData()
    .getAboutData()
    .getProjectData()
    animation.typingText(data.home.job.typing, document.querySelector(".typing"))
})

/**
 **Animation dans la naviguation
 */
let navs = Array.from(document.querySelectorAll("nav ul li a"))
navs.forEach((nav) =>{
    nav.addEventListener("click", (e) =>{
        e.preventDefault()
        if(!nav.classList.contains("linked"))
        {
            navs.filter(nav => nav.classList.contains("linked")).forEach(linked => linked.classList.remove("linked"))
            nav.classList.add("linked")

            let lastest_show = document.querySelector(".show")
            document.querySelector("."+nav.getAttribute("href")).classList.add("show")
            lastest_show.classList.remove("show")

            //Nav bar responsive
            document.querySelector("header").classList.remove("slide-on")
            document.querySelector(".nav-bar-container").classList.remove("is-open")
        }
    })
})

//!Nav bar responsive
document.querySelector(".nav-bar-container").addEventListener("click", () =>{
    document.querySelector(".nav-bar-container").classList.toggle("is-open")
    document.querySelector("header").classList.toggle("slide-on")
})