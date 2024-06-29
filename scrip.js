function esconderProyectos () {
    document.querySelector('.proyecto1').style.display = 'none'
    document.querySelector('.proyecto2').style.display = 'none'
    document.querySelector('.proyecto3').style.display = 'none'

}
esconderProyectos();

document.querySelector('.proyecto1-button').onclick = function(){
    esconderProyectos();
    document.querySelector('.proyecto1').style.display = 'block';
}

document.querySelector('.proyecto2-button').onclick = function(){
    esconderProyectos();
    document.querySelector('.proyecto2').style.display = 'block';
}

document.querySelector('.proyecto3-button').onclick = function(){
    esconderProyectos();
    document.querySelector('.proyecto3').style.display = 'block';
}























