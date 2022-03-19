const Texts = [
    'HTML', 'CSS', 'JAVASCRIPT',
    'TYPESCRIPT', 'ASP.NET', 'ANGULAR',
    '.NET CORE', 'MATERIAL',
    'BLENDER', 'NODEJS', 'API','BOOTSTRAP',
    'C#', 'SQL SERVER', 'LINQ', 'POSTMAN'
];

var tagCloud = TagCloud('.Sphere', Texts, {

    // Sphere radius in px
    radius: 250,

    // animation speed
    // slow, normal, fast
    maxSpeed: 'slow',
    initSpeed: 'fast',

    // Rolling direction [0 (top) , 90 (left), 135 (right-bottom)] 
    direction: 135,

    // interaction with mouse or not [Default true (decelerate to rolling init speed, and keep rolling with mouse).]
    keep: true

});

// Giving color to each text in sphere
var color = '#000 ';
document.querySelector('.Sphere').style.color = color;
