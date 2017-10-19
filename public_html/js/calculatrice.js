/**
 * 
 * @returns {Element}
 * Juste pour retourner notre afficheur puisque nous allons beacoup l'utiliser
 */
function id (){
    return document.getElementById('calc_resultat');
}


/**
 * 
 * @param {type} caractere
 * Pour pouvoir concatener nos symboles
 */
function clavier(caractere){
    if (id().value == '0') {
        id().value = caractere;
    }
    else{
        id().value += caractere;
    }
}


function calcul(){
    id().value = eval(id().value);
}

/**
 * 
 * @returns {undefined}
 * Pour remettre l'afficheur a 0
 */
function initialiser(){
    id().value = 0;
}

/**
 * 
 * @returns {undefined}
 * Pour supprimer un caractere de notre afficheur
 */
function retourArriere(){
    if(id().value.toString().length == 1)
        initialiser();
    else
        id().value = id().value.toString().substring(0, id().value.toString().length - 1);
}


/**
 * 
 * @param {type} evt
 * @returns {undefined}
 * Pour gerer les entrees du clavier
 */
function KeyDetect(evt)
{
    if((evt.keyCode > 95) && (evt.keyCode < 106))
    {
        var nbr = evt.keyCode - 96;
        clavier(nbr);
    }
    else if((evt.keyCode > 47) && (evt.keyCode < 58))
    {
        var nbr = evt.keyCode - 48;
        clavier(nbr);
    }
    else if(evt.keyCode  ==  107 || (evt.keyCode == 187 && evt.shiftKey))
    {
        clavier('+');
    }
    else if(evt.keyCode == 109 || evt.keyCode == 189)
     {
        clavier('-');
    }
    else if(evt.keyCode == 106)
    {
        clavier('*');
    }
    else if(evt.keyCode == 111 || evt.keyCode == 191)
    {
        clavier('/');
    }
    else if(evt.keyCode == 110 || evt.keyCode == 190)
    {
        clavier('.');
    }
    else if(evt.keyCode == 13)
    {
        calcul();
    }
    else if(evt.keyCode == 8)
    {
        retourArriere();
    }
    else if(evt.keyCode == 82)
    {
        initialiser();
    }
}