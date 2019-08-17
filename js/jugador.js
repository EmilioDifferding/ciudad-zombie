/* El objeto jugador es un objeto literal que se encuentra incompleto.
 Solo tiene asignadas algunas de sus propiedades y ningun metodo */
var Jugador = {
  /* el sprite contiene la ruta de la imagen
  */
  sprite: 'imagenes/auto_rojo_abajo.png', //representacion grafica del jugador
  x: 130, //a menor valor, mas a la izquierda en la pantalla
  y: 160, //a menor valor más arriba en la pantalla
  ancho: 15,
  alto: 30,
  velocidad: 10, //vel de movimiento
  vidas: 5, //si es menor a cero = Jugador muerto
  // Hay que agregar lo que falte al jugador: movimientos, perdida de vidas,
  // y todo lo que haga falta para que cumpla con sus responsabilidades
  perderVidas(damage){
    this.vidas -= damage;
  },
  mover(posX, posY, tecla){
    this.x += posX;
    this.y += posY;

    switch (tecla) {
      case 'izq':
        this.sprite = "imagenes/auto_rojo_izquierda.png";
        this.alto = 15;
        this.ancho = 30;
        break;

      case 'der':
        this.sprite = "imagenes/auto_rojo_derecha.png";
        this.alto = 15;
        this.ancho = 30;
        break;

      case 'arriba':
        this.sprite = "imagenes/auto_rojo_arriba.png";
        this.alto = 30;
        this.ancho = 15;
        break;

      case 'abajo':
        this.sprite = "imagenes/auto_rojo_abajo.png";
        this.alto = 30;
        this.ancho = 15;
        break;
      default:
        break;
    }
  },
}
