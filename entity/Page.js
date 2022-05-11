export class Page
{
    constructor(data)
    {
        this.data = data
    }

    getHomeData()
    {
        let data = this.data.home
        let presentation = document.querySelector(".presentation-container")
        presentation.innerHTML = "<h1>" + data.profile.text + "<span>" + data.profile.name + "</span></h1>"
        presentation.innerHTML += '<h1>' + data.profile.text + '<span class="typing"></span></h1>'
        presentation.innerHTML += "<p>" + data.description + "</p>"
        presentation.innerHTML += "<button>" + data.button + "</button>"
        document.querySelector(".photo img").setAttribute("src", data.photo)
        return this
    }

    getAboutData()
    {
        let data = this.data.about
        document.querySelector(".about .title").innerHTML += "<h1>" + data.title + "</h1>"
        let profile = document.querySelector(".profile-name")
        profile.innerHTML = data.profile.text
        profile.innerHTML += `<span>${data.profile.name}</span>`
        document.querySelector(".profile-description").innerHTML = data.profile.description
        for(let i in data.information1)
        {
            document.querySelector(".profile-info-list").children[0].innerHTML += "<li>"+Object.keys(data.information2[i])[0] + " : <span>" + Object.values(data.information2[i])[0] + "</span></li>"
        }
        for(let i in data.information2)
        {
            document.querySelector(".profile-info-list").children[1].innerHTML += "<li>" + Object.keys(data.information2[i])[0] + " : <span>" + Object.values(data.information2[i])[0] + "</span></li>"
        }
        if(data.cv.show)
        {
            document.querySelector(".profile-info").innerHTML += '<div class="profile-cv">' + '<button><a href="'+ data.cv.link  +'" download>Pour télécharger mon CV</a></button>' + '</div>'
        }
        for(let i in data.skill)
        {
            document.querySelector(".skill-container").innerHTML += `<div class="skill">
                                                                        <div class="skill-info">
                                                                            <h1>${data.skill[i].name}</h1>
                                                                            <h1>${data.skill[i].percent}</h1>
                                                                        </div>
                                                                        <div class="skill-bar">
                                                                            <div class="skill-progress" style="width: ${data.skill[i].percent}"></div>
                                                                        </div>
                                                                    </div>`
        }
        for(let i in data.education)
        {
            document.querySelector(".career-card .card").innerHTML += `<div class="card-content">
                                                                            <p><i class="uil uil-calender"></i> ${data.education[i].date}<p>
                                                                            <h3>${data.education[i].title}</h3>
                                                                            <p>${data.education[i].description}</p>
                                                                        </div>`
        }
        for(let i in data.experience)
        {
            document.querySelectorAll(".career-card .card")[1].innerHTML += `<div class="card-content">
                                                                            <p><i class="uil uil-calender"></i> ${data.experience[i].date}<p>
                                                                            <h3>${data.experience[i].title}</h3>
                                                                            <p>${data.experience[i].description}</p>
                                                                        </div>`
        }
        return this
    }

    getProjectData()
    {
        let data = this.data.project
        document.querySelector(".project .title").innerHTML += "<h1>" + data.title + "</h1>"
        for(let i in data.content)
        {
            document.querySelector(".project-container").innerHTML += `<div class="project-box">
                                                                            <h1>${data.content[i].icon}</h1>
                                                                            <h2>${data.content[i].title}</h2>
                                                                            <p>${data.content[i].description}</p>
                                                                            <button><a href="${data.content[i].git}" target="_blank">Code source</a></button>
                                                                        </div>`
        }
        return this
    }
}