    function pintaAtrasado (data,prazo) {
      console.log("sua data dentro da function é ",data);
      var limite = prazo;
      if (data >= limite * 0.70 && data < limite *1) {
        document.getElementById("oi").setAttribute("class","normal");
        }
      if(data >= limite * 0.30 && data < limite *0.70) {
        document.getElementById("oi").setAttribute("class","amarelo");
      }
      if(data >= limite * 0 && data < limite * 0.30) {
        document.getElementById("oi").setAttribute("class","aVencer");
      }else {
        document.getElementById("oi").setAttribute("class","vencido");
      }
  };

var prazo = 5;
var dataHoje = moment().format("DD/MM/YYYY");
console.log(dataHoje);
var dataPrazo = "30/11/2021";

var diff = moment(dataPrazo,"DD/MM/YYYY").diff(moment(dataHoje,"DD/MM/YYYY"));

var dias = moment.duration(diff).asDays();


pintaAtrasado(dias,prazo);
