const DB = {
  oracionPatria: {
    t: "ORACIÓN PATRIA",
    p: [
      "Colombia PATRIA mía: <br> Te llevo con amor en mi corazón, <br> creo en tu destino y espero verte siempre grande, respetada y libre.",
      "En ti amo todo lo que me es querido; <br> tus glorias, tu hermosura, mi hogar, <br> las tumbas de mis mayores, mis creencias, <br> el fruto de mis esfuerzos y la realización de mis sueños.",
      "Ser soldado tuyo es la mayor de mis glorias. <br> Mi ambición más grande es la de llevar con honor <br> el título de colombiano y, llegado el caso, <br> morir por defenderte."
    ]
  },

  himnoNacional: {
    t: "HIMNO NACIONAL",
    p: [
      "CORO <br> ¡Oh gloria inmarcesible! <br> ¡Oh júbilo inmortal! <br> En surcos de dolores <br> el bien germina ya.",
      "I ESTROFA <br><br> Cesó la horrible noche, la libertad sublime <br> derrama las auroras de su invencible luz. <br> La humanidad entera, que entre cadenas gime, <br> comprende las palabras del que murió en la cruz.",
      "II ESTROFA <br><br> ¡Independencia! grita el mundo americano; <br> se baña en sangre de héroes la tierra de Colón. <br> Pero este gran principio: el rey no es soberano, <br> resuena, y los que sufren bendicen su pasión.",
      "III ESTROFA <br><br> Del Orinoco el cauce se colma de despojos; <br> de sangre y llanto un río se mira allí correr. <br> En Bárbula no saben las almas ni los ojos, <br> si admiración o espanto sentir o padecer.",
      "IV ESTROFA <br><br> A orillas del Caribe hambriento un pueblo lucha, <br> horrores prefiriendo a pérfida salud. <br> ¡Oh, sí! De Cartagena la abnegación es mucha, <br> y escombros de la muerte desprecia su virtud.",
      "V ESTROFA <br><br> De Boyacá en los campos el genio de la gloria <br> con cada espiga un héroe invicto coronó. <br> Soldados sin coraza ganaron la victoria; <br> su varonil aliento de escudo les sirvió.",
      "VI ESTROFA <br><br> Bolívar cruza el Ande que riegan dos océanos; <br> espadas cual centellas fulguran en Junín. <br> Centauros indomables combaten en los llanos, <br> y empieza a presentirse de la epopeya el fin.",
      "VII ESTROFA <br><br> La trompa victoriosa en Ayacucho truena; <br> que en cada triunfo crece su formidable son. <br> En su expansivo empuje la libertad se estrena, <br> del cielo americano formando un pabellón.",
      "VIII ESTROFA <br><br> La virgen sus cabellos arranca en agonía <br> y de su amor viuda los cuelga del ciprés. <br> Lamenta su esperanza que cubre losa fría, <br> pero un glorioso orgullo circunda su esbeltez.",
      "IX ESTROFA <br><br> La patria así se forma, termópilas brotando; <br> constelación de cíclopes su noche iluminó. <br> La flor estremecida, mortal el viento hallando, <br> debajo de los laureles seguridad buscó.",
      "X ESTROFA <br><br> Mas no es completa gloria vencer en la batalla, <br> que el brazo que combate lo anima la verdad. <br> Para el que lucha, el porvenir es la sonora malla <br> que su alma envuelve en flores de eterna libertad.",
      "XI ESTROFA <br><br> Del hombre los derechos Nariño predicando, <br> el alma de la lucha profético enseñó. <br> Ricaurte en San Mateo en átomos volando, <br> deber antes que vida con llamas escribió.",
      "nada"
    ]
  },

  himnoEjercito: {
    t: "HIMNO DEL EJÉRCITO",
    p: [
      "CORO <br> ¡Gloria, gloria al soldado! <br> Y que su fama corra por el solar nativo, en crónica y cantar, <br> y que solo a la recia medida de su pecho <br> la patria del mañana se pueda edificar.",
      "I ESTROFA <br> ¡Soldados de Colombia! La luz de vuestras armas <br> es un reflejo heroico del sol de Boyacá; <br> que, al proyectarse en medio de espadas y banderas, <br> las sendas de la patria por siempre alumbrará.",
      "II ESTROFA <br> Si en cada acero vibra el temple de otros siglos, <br> si son nuestros fusiles herencia de otra edad, <br> la empresa es hoy la misma: regar con nuestra sangre <br> las cruces de los próceres y el árbol de la paz."
    ]
  },

  codigoHonor: {
    t: "CÓDIGO DE HONOR",
    p: [
      "1. Soy el soldado del Ejército de Colombia y me siento orgulloso de mi profesión.",
      "2. Soy leal a mi patria, a mi institución y a mi familia.",
      "3. Respeto y defiendo los Derechos Humanos y el Derecho Internacional Humanitario.",
      "4. Mi honor militar es mi mayor tesoro; lo defenderé hasta la muerte.",
      "5. Soy disciplinado y cumplo las órdenes de mis superiores con eficiencia y agrado."
    ]
  },

  escudoEjercito: {
    t: "ESCUDO DE ARMAS DEL EJÉRCITO",
    p: [
      "<img src='img/Escudo.png' class='insignia-rango'><div class='texto-rango'>Escudo Oficial</div>",
    ]
  },

  inf_himno: { t: "HIMNO INFANTERÍA", p: ["CORO: <br> A la lid, a la lid, Infantes, vuestro paso es la paz y el honor..."] },
  inf_oracion: { t: "ORACIÓN INFANTE", p: ["Señor, tú que eres el Dios de los ejércitos...", "Hazme un infante valeroso y fiel."] },
  inf_brindis: { t: "BRINDIS INFANTE", p: ["¡Infante! Un brindis quiero elevar...", "por el que con paso de vencedores, la tierra hace temblar."] },

oficiales: {
    t: "OFICIALES",
    p: [
      "<img src='img/Subteniente.jpg' class='insignia-rango'><div class='texto-rango'>Subteniente</div>",
      "<img src='img/Teniente.jpg' class='insignia-rango'><div class='texto-rango'>Teniente</div>",
      "<img src='img/Capitan.jpg' class='insignia-rango'><div class='texto-rango'>Capitán</div>",
      "<img src='img/Mayor.jpg' class='insignia-rango'><div class='texto-rango'>Mayor</div>",
      "<img src='img/Teniente Coronel.jpg' class='insignia-rango'><div class='texto-rango'>Teniente Coronel</div>",
      "<img src='img/Coronel (Full).jpg' class='insignia-rango'><div class='texto-rango'>Coronel</div>",
      "<img src='img/Brigadier General.jpg' class='insignia-rango'><div class='texto-rango'>Brigadier General</div>",
      "<img src='img/Mayor General.jpg' class='insignia-rango'><div class='texto-rango'>Mayor General</div>",
      "<img src='img/General.jpg' class='insignia-rango'><div class='texto-rango'>General</div>"
    ]
  },
  suboficiales: {
    t: "SUBOFICIALES",
    p: [
      "<img src='img/Cabo Tercero.png' class='insignia-rango'><div class='texto-rango'>Cabo Tercero</div>",
      "<img src='img/Cabo Segundo.png' class='insignia-rango'><div class='texto-rango'>Cabo Segundo</div>",
      "<img src='img/Cabo Primero.png' class='insignia-rango'><div class='texto-rango'>Cabo Primero</div>",
      "<img src='img/Sargento Segundo.png' class='insignia-rango'><div class='texto-rango'>Sargento Segundo</div>",
      "<img src='img/Sargento Viceprimero.png' class='insignia-rango'><div class='texto-rango'>Sargento Viceprimero</div>",
      "<img src='img/Sargento Primero.png' class='insignia-rango'><div class='texto-rango'>Sargento Primero</div>",
      "<img src='img/Sargento Mayor.png' class='insignia-rango'><div class='texto-rango'>Sargento Mayor</div>",
      "<img src='img/Sargento Mayor de Comando.png' class='insignia-rango'><div class='texto-rango'>Sargento Mayor de Comando</div>",
      "<img src='img/Sargento Mayor del Ejercito.png' class='insignia-rango'><div class='texto-rango'>Sargento Mayor del Ejército</div>",
      "<img src='img/Sargento Mayor de Comando Conjunto.png' class='insignia-rango'><div class='texto-rango'>Sargento Mayor de Comando Conjunto</div>",
    ]
  },
  soldados: {
    t: "SOLDADOS",
    p: [
      "<img src='img/Dragoneante.jpg' class='insignia-rango'><div class='texto-rango'>Dragoneante</div><div class='tiempo-rango'>* Durante el servicio militar</div>",
      "<img src='img/Soldado Profesional.png' class='insignia-rango'><div class='texto-rango'>Soldado Profesional</div><div class='tiempo-rango'>* Hasta la asignación de retiro</div>"
    ]
  }
};

const armas = [
  { nombre: "INFANTERÍA", id: "inf", clase: "bg-infanteria" },
  { nombre: "CABALLERÍA", id: "cab", clase: "bg-caballeria" },
  { nombre: "ARTILLERÍA", id: "art", clase: "bg-artilleria" },
  { nombre: "INGENIEROS", id: "ing", clase: "bg-ingenieros" },
  { nombre: "COMUNICACIONES", id: "com", clase: "bg-comunicaciones" },
  { nombre: "INTELIGENCIA", id: "int", clase: "bg-inteligencia" },
  { nombre: "AVIACIÓN", id: "avi", clase: "bg-aviacion" },
  { nombre: "LOGÍSTICA", id: "log", clase: "bg-logistica" }
];

let pagActual = 0;
let seccionActual = "";

function init() {
  const lista = document.getElementById('lista-armas');
  if(!lista) return;
  lista.innerHTML = ""; 
  armas.forEach(arma => {
    lista.innerHTML += `
      <div class="arma-item">
        <div class="arma-header ${arma.clase}" onclick="toggleArma('${arma.id}')">${arma.nombre}</div>
        <div id="content-${arma.id}" class="arma-content">
          <button class="btn-secundario" onclick="estudiar('${arma.id}_himno')">1. Himno</button>
          <button class="btn-secundario" onclick="estudiar('${arma.id}_oracion')">2. Oración</button>
          <button class="btn-secundario" onclick="estudiar('${arma.id}_brindis')">3. Brindis</button>
        </div>
      </div>
    `;
  });
}

function toggleArma(id) {
  const contents = document.querySelectorAll('.arma-content');
  contents.forEach(c => {
    c.style.display = (c.id === 'content-'+id && c.style.display !== 'flex') ? 'flex' : 'none';
  });
}

function navegar(idPantalla) {
  const todas = document.querySelectorAll('.pantalla, #pantalla-inicio');
  todas.forEach(p => { p.style.display = 'none'; p.classList.remove('active'); });
  const elegida = document.getElementById(idPantalla);
  if(elegida) { elegida.style.display = 'block'; elegida.classList.add('active'); }
}

function estudiar(key) {
  if(!DB[key]) return alert("Contenido en desarrollo...");
  seccionActual = key;
  pagActual = 0;
  navegar('visor-estudio');
  renderVisor();
}

function renderVisor() {
  const data = DB[seccionActual];
  document.getElementById('titulo-visor').innerText = data.t;
  document.getElementById('area-texto').innerHTML = data.p[pagActual];
}

function cambiarPagina(dir) {
  const total = DB[seccionActual].p.length;
  pagActual += dir;
  if(pagActual < 0) pagActual = 0;
  if(pagActual >= total) pagActual = total - 1;
  renderVisor();
}

function cerrarVisor() {
  if (seccionActual === 'oficiales' || seccionActual === 'suboficiales' || seccionActual === 'soldados') {
    navegar('pantalla-mando');
  } else if (seccionActual.includes('_')) {
    navegar('escudo-armas');
  } else {
    navegar('submenu-alba');
  }
}

let mazoQuiz = [];
let totalEnMazo = 0;

function configurarQuiz(modo) {
    // 1. Cargamos todos los rangos
    mazoQuiz = [
        ...DB.oficiales.p,
        ...DB.suboficiales.p,
        ...DB.soldados.p
    ];

    // 2. Si es al azar, mezclamos. Si es orden, lo dejamos como está (Oficiales -> Sub -> Sol)
    if (modo === 'azar') {
        mazoQuiz.sort(() => Math.random() - 0.5);
    } else {
        // En tu DB ya están en orden, así que no hacemos nada
    }

    totalEnMazo = mazoQuiz.length;
    
    // 3. Cambiamos de vista
    document.getElementById('quiz-setup').style.display = 'none';
    document.getElementById('quiz-juego').style.display = 'block';
    
    actualizarBarra(0);
    generarPregunta();
}

function generarPregunta() {
    if (mazoQuiz.length === 0) {
        alert("¡FELICITACIONES! Has completado todo el mazo.");
        navegar('pantalla-mando');
        return;
    }

    // Actualizar progreso
    const respondidos = totalEnMazo - mazoQuiz.length;
    actualizarBarra(respondidos);

    const rangoActual = mazoQuiz.shift(); // Tomamos el primero de la lista
    const partes = rangoActual.split("<div");
    const soloImagen = partes[0]; 
    const soloNombre = partes[1] ? "<div" + partes[1] : "";

    // 50% de probabilidad de modo
    const modoNombreAPictograma = Math.random() > 0.5;

    if (modoNombreAPictograma) {
        document.getElementById('imagen-quiz').innerHTML = `<h3 class="titulo-oro">¿CÓMO ES LA INSIGNIA?</h3><br>${soloNombre}`;
        document.getElementById('nombre-quiz').innerHTML = soloImagen;
    } else {
        document.getElementById('imagen-quiz').innerHTML = `<h3 class="titulo-oro">¿QUÉ RANGO ES?</h3><br>${soloImagen}`;
        document.getElementById('nombre-quiz').innerHTML = soloNombre;
    }
    
    document.getElementById('nombre-quiz').style.display = 'none';
    document.getElementById('btn-revelar').style.display = 'block';
    document.getElementById('btn-otro').style.display = 'none';
}

function actualizarBarra(completados) {
    const porcentaje = Math.round((completados / totalEnMazo) * 100);
    document.getElementById('progreso-azul').style.width = porcentaje + "%";
    document.getElementById('porcentaje-texto').innerText = `${porcentaje}% completado (${completados} de ${totalEnMazo})`;
}

function revelarQuiz() {
    document.getElementById('nombre-quiz').style.display = 'block';
    document.getElementById('btn-revelar').style.display = 'none';
    document.getElementById('btn-otro').style.display = 'block';
}

// Modificar navegar para resetear el menú del quiz al entrar
function navegar(id) {
    document.querySelectorAll('.pantalla, #pantalla-inicio').forEach(p => p.style.display = 'none');
    const destino = document.getElementById(id);
    if (destino) {
        destino.style.display = 'block';
        // Si volvemos al quiz, mostramos el menú de elección de nuevo
        if(id === 'pantalla-quiz') {
            document.getElementById('quiz-setup').style.display = 'block';
            document.getElementById('quiz-juego').style.display = 'none';
            document.getElementById('progreso-azul').style.width = "0%";
        }
    }
}

init();