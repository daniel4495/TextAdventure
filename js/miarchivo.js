let story = 0;
let form = document.getElementById('theAdventure');
let submit = document.getElementById('continueButton');
let answer = '';

// CLASE PLAYER //

class Player {

    constructor(name, profession, hp, mp) {
        this.nombre = name;
        this.profesion = profession;
        this.vida = parseInt(hp);
        this.mana = parseInt(mp);
    }

    ID() {
        const pjWelcome = document.querySelector('h1');
        pjWelcome.textContent = 'Welcome ' + $('#name').val() + '! ' + "Your profession will be: "+ $('.classes :selected').val();
        pjWelcome.textContent;
    }

    difficulty() {
        if ($('#easyMode').prop('checked')) {
            $('#afterForm').append('<p><h5 id="toHideIf">You choose to play in Easy mode</h5></p>');
            if ($('#continueButton').mouseup(function () {
                    $('#toHideIf').fadeOut("slow");
                }));
        } else if ($('#normalMode').prop('checked')) {
            $('#afterForm').append('<p><h5 id="toHideIf">You choose to play in Normal mode</h5></p>');
            if ($('#continueButton').mouseup(function () {
                    $('#toHideIf').fadeOut("slow");
                }));
        } else if ($('#hardMode').prop('checked')) {
            $('#afterForm').append('<p><h5 id="toHideIf">You choose to play in Hard mode</h5></p>');
            if ($('#continueButton').mouseup(function () {
                    $('#toHideIf').fadeOut("slow");
                }));
        }
    }
}

//Definimos a un personaje base para luego modificarlo con los datos del JSON//
let player1 = new Player('Unknown', 'Knight', 5, 10);

$(document).ready(function () {
    $('#btnContinue').mouseup(function () {
        player1.ID();
        player1.difficulty();
        //Agregamos a los 2 compañeros de equipo y les cambiamos los valores de vida y mana dependiendo de la dificultad//
        let groupNPC = [];

        if ($('#easyMode').prop('checked')) { //Dificultad facil//
            $('#afterForm').append('<p id="toHideIfOption">Were added two members to your team, Ari(Wizard) and Diego(Barbarian), the HP and MP with which they stats was increased</p>');
            groupNPC.push(new Player('Ari', 'Wizard', 6, 18));
            groupNPC.push(new Player('Diego', 'Barbarian', 10, 9));
            if ($('#continueButton').mouseup(function () {
                    $('#toHideIfOption').fadeOut("slow");
                    $('h1.visible').fadeOut('slow');
                }));

        } else if ($('#normalMode').prop('checked')) { //Dificultad normal/
            $('#afterForm').append('<p id="toHideIfOption">Were added two members to your team, Ari(Wizard) and Diego(Barbarian)</p>');
            groupNPC.push(new Player('Ari', 'Wizard', 4, 16));
            groupNPC.push(new Player('Diego', 'Barbarian', 8, 6));
            if ($('#continueButton').mouseup(function () {
                    $('#toHideIfOption').fadeOut("slow");
                    $('h1.visible').fadeOut('slow');
                }));

        } else if ($('#hardMode').prop('checked')) { //Dificultad dificil//
            $('#afterForm').append('<p id="toHideIfOption">Were added two members to your team, Ari(Wizard) and Diego(Barbarian)</p>');
            groupNPC.push(new Player('Ari', 'Wizard', 2, 10));
            groupNPC.push(new Player('Diego', 'Barbarian', 4, 4));
            if ($('#continueButton').mouseup(function () {
                    $('#toHideIfOption').fadeOut("slow");
                    $('h1.visible').fadeOut('slow');
                }));
        }

        $('form.visible').fadeOut('slow');
        $('.oculto').fadeIn('slow');
    })
})


//Cargamos las clases desde el JSON
$(document).ready(function () {
    $.get("data/tipos.JSON", (respuesta) => {
        console.log(respuesta);

        let selectedClass = "Knight";

        addImage();
        $(document).ready(() => {
            $(".classes").change(() => {
                $("#imageWrapper").empty();
                selectedClass = $('.classes :selected').val();
                addImage();

                player1.nombre = $('#name').val();
                player1.profesion = selectedClass;
                console.log("nombre:"+player1.nombre +" profesion:"+ player1.profesion+" hp:"+player1.vida+" mana:"+player1.mana);

            })
        })
        
        function addImage() {
            $.each(respuesta, function (index, value) {
                if (value.class == selectedClass) {
                    $("#imageWrapper").prepend('<img id="image" src="' + value.img + '">')
                }
            });
        }

        function minusVida() {
            player1.vida = player1.vida-1;
            console.log("perdiste vida :( te queda: "+player1.vida)
            $('.status').append('<h2>asdasd</h2>');
        }

        let story_telling = {
            "start": {
                "question": "You are an adventurer and you are leaving a town with your 2 new partners, where are you headed?",
                "answers": {
                    "a": "Forest",
                    "b": "Cave",
                    "c": "Mountain",
                }
            },
            // opcion del bosque 
            "1_a": {
                "question": "You decide to go to the forest, and you meet a kind fairy. Do you...",
                "answers": {
                    "d": "Ask her if she wants to join you on your adventure.",
                    "e": "Swat her away like a fly.",
                    "f": "Wave at her and continue on your way."
                }
            },
        
            "2_a": {
                "question": "The fairy glady accepts your offer and you two have a wonderful day! The End.",
            },
            "2_b": {
                "question": "The fairy turns into an angry lion and chases you out of the forest. The End.",
            },
            "2_c": {
                "question": "The fairy gives you some awesome new shoes. The End.",
            },
        
            // opcion de la cueva
        
            "1_b": {
                "question": "You go to the caves a run into a terrifying minotaur. What do you do?",
                "answers": {
                    "g": "Run away screaming.",
                    "h": "Stand your ground and fight!",
                    "i": "Ask them if they want to be in your band.",
                }
            },
            "2_d": {
                "question": "The minotaur stares at you in confusion as you run all the way home. The End.",
            },
            "2_e": {
                "question": "You defeat the minotaur and they turn into a cute puppy. The End.",
            },
            "2_f": {
                "question": "The minotaur eagerly agrees, and together you start a punk revival band. The End.",
                "end": "the end"
            },
        
            // Opcion de la montaña
        
            "1_c": {
                "question": "You decide to take the mountain path and meet a magic goat. What do you do?",
                "answers": {
                    "j": "Challenge the goat to a fiddle competition",
                    "k": "Teach the goat how to surf.",
                    "l": "Name the goat Gregorio and become best friends.",
                }
            },
            "2_g": {
                "question": "You become the national truco playing champion. The End.",
            },
            "2_h": {
                "question": "The goat becomes the best surfer in the universe. The End.",
            },
            "2_i": {
                "question": "You and Gregorio travel the world together. The End.",
            },
        
        };
        
        // Como se progresa en la historia
        submit.addEventListener('mouseup', function () {
            answer = form.querySelectorAll('input[type=radio]:checked')[0].value;
            if (answer) {
                story++; //incrementa o agrega 1
                populateForm(story + '_' + answer);
                console.log("Funcionando!"); // Console log para probar que todo ande bien
            }
        
            player1.nombre = $('#name').val();
            player1.profesion = selectedClass;
            console.log("nombre:"+player1.nombre +" profesion:"+ player1.profesion+" hp:"+player1.vida+" mana:"+player1.mana);
        
            if(answer =="a"){
                minusVida();
            }
        });
        // Genera la siguiente pregunta
        function populateForm(story) {
            let current_story = story_telling[story]; //toma los valores de story_telling story
            let text = '';
        
            for (let prop in current_story['answers']) {
                if (current_story['answers'].hasOwnProperty(prop)) { //retorna un boolean de True o False
                    text += '<label><input type="radio" name="answer" value="' + prop + '"/><span>' + current_story['answers'][prop] + '</span></label>'; // agrega otra question a story
                }
            }
            form.querySelector('p').innerHTML = current_story.question; //escribe preguntas en el html
            form.querySelector('fieldset').innerHTML = text; //escribe en el fieldset del form 

        }
        
        populateForm('start');
    })
})


/*let selectedClass = "Knight";
let classes = [{
        id: 1,
        class: "Knight",
        img: "img/Guerrero/Guerrero.png",
    },
    {
        id: 2,
        class: "Rogue",
        img: "img/Picaro/Picaro.png",
    },
    {
        id: 3,
        class: "Wizard",
        img: "img/Mago/Mago.png",
    },
    {
        id: 4,
        class: "Forest ranger",
        img: "img/Guardabosques/Guardabosques.png",
    },
    {
        id: 5,
        class: "Priest",
        img: "img/Clerigo/Clerigo.png",
    },
    {
        id: 6,
        class: "Barbarian",
        img: "img/Barbaro/Barbaro.png",
    },
    {
        id: 7,
        class: "Sword master",
        img: "img/Espadachin/Espadachin.png",
    },
    {
        id: 7,
        class: "Lancer",
        img: "img/Lanzero/Lanzero.png",
    },
    {
        id: 7,
        class: "Summoner",
        img: "img/Invocador/Invocador.png",
    }
];*/


// Para cargar las imagenes de las clases a elegir
/*addImage();
$(document).ready(() => {
    $(".classes").change(() => {
        $("#imageWrapper").empty();
        selectedClass = $('.classes :selected').val();
        addImage();
        console.log(selectedClass);

        player1.nombre = $('#name').val();
        player1.profesion = selectedClass;
        player1.vida = 
        console.log("nombre:"+player1.nombre +" profesion:"+ player1.profesion+" hp:"+player1.vida+" mana:"+player1.mana);
    })
})

function addImage() {
    console.log(classes);
    $.each(classes, function (index, value) {
        if (value.class == selectedClass) {
            $("#imageWrapper").prepend('<img id="image" src="' + value.img + '">')
        }
    });
}*/




//STORY GAME PART

