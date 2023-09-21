var languageValues = [
    {"property": "status-text", "EN": "status: employed", "PT": "estado: empregado"},
    {"property": "header-title", "EN": "im rúben cipriano, <br>a <span>software developer</span>", "PT": "eu rúben cipriano trabalho como <br> <span>desenvolvedor de software</span>"},
    {"property": "header-subtitle", "EN": "I'm a motivated and passionate professional in the technology industry. <br><br>My expertise includes C, C#, Java and JavaScript programming languages, on top of that I've already gained some experience with JavaScript, TypeScript, C# and Java Frameworks in both back and front end development. </h2>", "PT": "Sou um profissional motivado e apaixonado pela indústria de tecnologia. <br><br> Minha experiência inclui as linguagens de programação C, C#, Java e JavaScript, além disso já ganhei alguma experiência com JavaScript, TypeScript, C# e Java Frameworks tanto no desenvolvimento back quanto front end.</h2>"},
    {"property": "button inverted talk-to-me-button", "EN": "TALK TO ME", "PT": "FALA COMIGO"}
]


function changeLanguange(lng) { 

    languageValues.forEach(language => {

        var element = document.getElementsByClassName(language.property)[0];


        element.innerHTML = language[lng];
    })
}