/* Un objeto que representa a los obstaculos. Recibe un sprite que tendra la
imagen que lo representa y una potencia indicando cuando danio hace al chocar
al jugador, ademas de los parametros comunes x, y, ancho y alto*/
var Obstaculo = function (sprite, x, y, ancho, alto, potencia) {
  this.sprite = sprite;
  this.x = x;
  this.y = y;
  this.ancho = ancho;
  this.alto = alto;
  this.potencia = potencia;
  // si [puedeChocar == true] el obstaculo hace daño a jugador
  this.puedeChocar = true;

  // Implementar el metodo chocar(jugador) para que al chocar con un obstaculo
  // el jugador pierda vidas
  Obstaculo.prototype.chocar = function(jugador){
    if (this.puedeChocar){
      jugador.perderVidas(this.potencia);
      this.puedeChocar = false;   //cambia a false para que haga dalo solo una vez.
    }
  };
}
