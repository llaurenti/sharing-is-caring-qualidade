export default (time: string, showSec: boolean) => {
  let retorno = new String();
  let auxHoras = time;
  let horas = "0";
  let minutos = "0";
  let segundos = "0";

  if (auxHoras.indexOf(".") > 0) {
    let auxMinutos = auxHoras.substring(
      auxHoras.indexOf(".") + 1,
      auxHoras.length
    );
    horas = auxHoras.substring(0, auxHoras.indexOf("."));
    let aux = Number.parseFloat("0." + auxMinutos) * 60;
    minutos = "" + aux;
    segundos = minutos.substring(minutos.indexOf(".") + 1);
    aux = Number.parseFloat("0." + segundos) * 60;
    segundos = "" + aux;
    const nf = new Intl.NumberFormat("pt-BR", {
      maximumFractionDigits: 0,
    });
    // NumberFormat nf = NumberFormat.getNumberInstance();
    // nf.setMinimumFractionDigits(2);
    // nf.setMaximumFractionDigits(0);
    segundos = nf.format(Number.parseFloat(segundos));
    if (minutos.indexOf(".") > 0) {
      minutos = minutos.substring(0, minutos.indexOf("."));
    }
    if (segundos.indexOf(".") > 0) {
      segundos = segundos.substring(0, segundos.indexOf("."));
    }
  } else {
    horas = auxHoras.substring(0, auxHoras.length);
  }

  horas = horas.replace("-", "");
  if (horas.length == 1) {
    horas = "0" + horas;
  }
  if (minutos.length == 1) {
    minutos = "0" + minutos;
  }
  if (segundos.length == 1) {
    segundos = "0" + segundos;
  }
  let prefix = "";
  if (Number.parseFloat(time) < 0) {
    prefix = "- ";
  }
  retorno = prefix + horas + ":" + minutos;
  retorno += ":" + segundos;
  return retorno;
};
