var languageValues = [
    {"property": "status-text", "EN": "status: employed", "PT": "estado: empregado"},
    {"property": "header-title", "EN": "im rúben cipriano, <br>a <span>software developer</span>", "PT": "eu rúben cipriano trabalho como <br> <span>desenvolvedor de software</span>"},
    {"property": "header-subtitle", "EN": "I'm a motivated and passionate professional in the technology industry. <br><br>My expertise includes C, C#, Java and JavaScript programming languages, on top of that I've already gained some experience with JavaScript, TypeScript, C# and Java Frameworks in both back and front end development. </h2>", "PT": "Sou um profissional motivado e apaixonado pela indústria de tecnologia. <br><br> Minha experiência inclui as linguagens de programação C, C#, Java e JavaScript, além disso já ganhei alguma experiência com JavaScript, TypeScript, C# e Java Frameworks tanto no desenvolvimento back quanto front end.</h2>"},
    {"property": "button inverted talk-to-me-button", "EN": "TALK TO ME", "PT": "FALA COMIGO"}
]

var professionalExperienceArray = [
    {"property": "professional-experience-text", "EN":"Worked has a full stack developer making backend, frontend and helping the mobile team using Xamarin.","PT":"Trabalhou como desenvolvedor full stack, lidando com o backend, frontend e ajudando a equipa móvel usando Xamarin."},
    {"property": "professional-experience-text", "EN":"Worked has a frontend developer, fixing bugs and implementing new features in a Atomic Design using Angular.","PT":"Trabalhou como desenvolvedor frontend, corrigindo bugs e implementando novas funcionalidades num Design Atómico usando Angular."},
    {"property":"professional-experience-text", "EN":"Working has a Backend developer using C# and Java has main programming languages","PT":"Trabalhou como desenvolvedor de backend utilizando C# e Java como principais linguagens de programação."}
]

var educationArray = [
    {"property": "education-text", "EN":"Vocational School where I learn a lot about the fundamentals about programming languages and how to create some performance apps using C and C#","PT":"Escola Profissional onde aprendi muito sobre os fundamentos das linguagens de programação e como criar algumas aplicações de alto desempenho utilizando C e C#."},
    {"property": "education-text", "EN":"Superior Education Institute persued CTeSP course for creating better looking websites, I learn a lot about structuring and design patterns for better looking websites.","PT":"Instituto de Ensino Superior onde cursei o curso CTeSP para criar websites mais atrativos, aprendi muito sobre estruturação e padrões de design para websites mais atraentes."},
    {"property": "education-text", "EN":"Students learn advanced programming and mathematics concepts at the Superior Institute of Engineering to improve their logic and problem-solving skills.","PT":"Os alunos aprendem conceitos avançados de programação e matemática no Instituto Superior de Engenharia para melhorar suas habilidades lógicas e de resolução de problemas."}
]



function changeLanguange(lng) { 

    languageValues.forEach(language => {

        var element = document.getElementsByClassName(language.property)[0];


        element.innerHTML = language[lng];
    })

    professionalExperienceArray.forEach((language, index) => {

        var element = document.getElementsByClassName(language.property)[index];

        element.innerHTML = language[lng];
    })

    educationArray.forEach((language, index) => {

        var element = document.getElementsByClassName(language.property)[index];

        element.innerHTML = language[lng];
    })
}