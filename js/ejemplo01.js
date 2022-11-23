
function f01(){
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.moveTo(0, 0);
    ctx.lineTo(200, 100);
    ctx.stroke();
}

//lista de cursos
var cursos = [
    {nombre: "HTML", duracion: 10},
    {nombre: "CSS", duracion: 20},
    {nombre: "JavaScript", duracion: 30},
    {nombre: "PHP", duracion: 40},
    {nombre: "MySQL", duracion: 50},
    {nombre: "Python", duracion: 60},
    {nombre: "Java", duracion: 70},
    {nombre: "C#", duracion: 80},
    {nombre: "C++", duracion: 90},
    {nombre: "Ruby", duracion: 100}
];

// llenar el tcursos con los datos de la lista de cursos
function f02(){
    var tcursos = document.getElementById("tcursos");
    for(var i = 0; i < cursos.length; i++){
        console.log(cursos[i].nombre);
        var fila = tcursos.insertRow(i);
        var celda1 = fila.insertCell(0);
        var celda2 = fila.insertCell(1);
        celda1.innerHTML = cursos[i].nombre;
        celda2.innerHTML = cursos[i].duracion;
    }
}
   
