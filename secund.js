function calcularValorDeCadaArtefacto(nombre, artefactosMagicos){
  switch(nombre){
    case 'mike':
      if(artefactosMagicos == "rama"){
        return 50;
      }else if(artefactosMagicos == "pelota"){
        return 100;
      }else if(artefactosMagicos == "anillo"){
        return 100;
      }else{
        return 0;
      }
      break;
      case 'lucas':
      if(artefactosMagicos == "rama"){
        return 50;
      }else if(artefactosMagicos == "pelota"){
        return 100;
      }else if(artefactosMagicos == "anillo"){
        return 100;
      }else{
        return 0;
      }
      break;
      case 'dustin':
      if(artefactosMagicos == "rama"){
        return 50;
      }else if(artefactosMagicos == "pelota"){
        return 100;
      }else if(artefactosMagicos == "anillo"){
        return 100;
      }else{
        return 0;
      }
      break;
      case 'eleven':
      if(artefactosMagicos == "rama"){
        return 50;
      }else if(artefactosMagicos == "pelota"){
        return 100;
      }else if(artefactosMagicos == "anillo"){
        return 100;
      }else{
        return 0;
      }
      break;
      case 'max':
      if(artefactosMagicos == "rama"){
        return 50;
      }else if(artefactosMagicos == "pelota"){
        return 100;
      }else if(artefactosMagicos == "anillo"){
        return 100;
      }else{
        return 0;
      }
      break;
  }
}



function calcularValorDeCadaArtefacto(artefactosMagicos){
    if(artefactosMagicos == "anillo"){
        return 50;
    }else if(artefactosMagicos == "corona"){
        return 100;
    }else if(artefactosMagicos == "craneo"){
        return 100;
    }else{
        return 0;
    }
}

nombre = nombreDeAmigos(nombre);
function nombreDeAmigos(nombre){
    if(nombre == "mike"){
        return "mike";
    }else if(nombre == "lucas"){
        return "lucas";
    }else if(nombre == "dustin"){
        return "dustin";
    }else if(nombre == "eleven"){
        return "eleven";
    }else if(nombre == "max"){
        return "max";
    }
}