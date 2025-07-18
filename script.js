const materias = [
  {
    nombre: "Introducción a la Odontología",
    id: "intro",
    anio: 1,
    requisitos: [],
  },
  {
    nombre: "Anatomía I",
    id: "anat1",
    anio: 1,
    requisitos: ["intro"],
  },
  // Agregar más materias aquí...
];

function crearMalla() {
  const contenedor = document.getElementById("malla");
  const anios = {};

  // Organizar por año
  materias.forEach((materia) => {
    if (!anios[materia.anio]) {
      anios[materia.anio] = [];
    }
    anios[materia.anio].push(materia);
  });

  for (const anio in anios) {
    const columna = document.createElement("div");
    columna.className = "columna-ano";
    const titulo = document.createElement("h2");
    titulo.textContent = Año ${anio};
    columna.appendChild(titulo);

    anios[anio].forEach((materia) => {
      const boton = document.createElement("div");
      boton.className = "curso bloqueado";
      boton.textContent = materia.nombre;
      boton.id = materia.id;

      boton.onclick = () => {
        if (boton.classList.contains("bloqueado")) return;
        boton.classList.toggle("aprobado");
        actualizarMalla();
      };

      columna.appendChild(boton);
    });

    contenedor.appendChild(columna);
  }
}

function actualizarMalla() {
  materias.forEach((materia) => {
    const boton = document.getElementById(materia.id);
    if (materia.requisitos.length === 0) {
      boton.classList.remove("bloqueado");
      return;
    }
    const aprobados = materia.requisitos.every((req) =>
      document.getElementById(req).classList.contains("aprobado")
    );
    if (aprobados) {
      boton.classList.remove("bloqueado");
    } else {
      boton.classList.add("bloqueado");
    }
  });
}

crearMalla();
actualizarMalla();
