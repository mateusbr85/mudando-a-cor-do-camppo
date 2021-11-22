    function pintaAtrasado (data,prazo) {
      console.log("sua data dentro da function é ",data);
      var limite = prazo;
      if (data >= limite * 0 && data < limite *0.30) {
        document.getElementById("oi").setAttribute("class","vermelho");
        }
      if(data >= limite * 0.30 && data < limite *0.70) {
        document.getElementById("oi").setAttribute("class","amarelo");
      }
      if(data >= limite * 0.70) {
        document.getElementById("oi").setAttribute("class","teste");
      }
  };

var prazo = 5;
var dataHoje = "22/11/2021";//moment().format("DD/MM/YYYY");
console.log(dataHoje);
var dataPrazo = "22/11/2021";

var diff = moment(dataPrazo,"DD/MM/YYYY").diff(moment(dataHoje,"DD/MM/YYYY"));

var dias = moment.duration(diff).asDays();


pintaAtrasado(dias,prazo);
