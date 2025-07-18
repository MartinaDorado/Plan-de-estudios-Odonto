// Agrupamos las materias por año (según tu listado)
const anos = {
  "Primer Año": [
    "Introducción a la Odontología", "Anatomía I", "Biología General I", "Bioquímica Estomatológica I",
    "Biofísica I", "OPS I", "Dimensión Psicológica de la Atención Odontológica",
    "Anatomía II", "Biología General II", "Histología y Embriología I", "Biofísica II"
  ],
  "Segundo Año": [
    "OPS II", "Fisiología I", "Histología II", "Microbiología y Parasitología I", "Biomateriales I",
    "Fisiología II", "Patología y Clínica Estomatológica I", "Bioquímica Estomatológica II", "Biomateriales II"
  ],
  "Tercer Año": [
    "OPS III", "Cirugía I", "Farmacología y Terapéutica I", "Patología y Clínica Estomatológica II",
    "Diagnóstico por Imágenes I", "Operatoria dental I", "Prótesis I", "Cirugía II",
    "Farmacología y Terapéutica II", "Patología y Clínica Estomatológica III",
    "Operatoria Dental II", "Prótesis II", "Diagnóstico por Imágenes II"
  ],
  "Cuarto Año": [
    "OPS IV", "Endodoncia I", "Periodoncia I", "Cirugía III", "Operatoria Dental III",
    "Prótesis III", "Patología y Clínica Estomatológica IV", "Endodoncia II",
    "Periodoncia II", "Cirugía IV", "Operatoria Dental IV", "Prótesis IV",
    "Patología y Clínica Estomatológica V"
  ],
  "Quinto Año": [
    "OPS V", "Odontología Integral Niños I", "Odontología Integral Niños II", "Cirugía V",
    "Odontología Legal y Forense", "Operatoria Dental V", "Prótesis V", "Odontología Integral Niños III",
    "Cirugía VI", "Bioética", "Operatoria Dental VI", "Prótesis VI", "PPS"
  ]
};

function render() {
  contenedor.innerHTML = "";

  for (const [ano, materias] of Object.entries(anos)) {
    const col = document.createElement("div");
    col.className = "columna-ano";

    const titulo = document.createElement("h2");
    titulo.textContent = ano;
    col.appendChild(titulo);

    materias.forEach(nombre => {
      const btn = document.createElement("div");
      btn.className = "curso";

      const requisitos = cursos[nombre] || [];
      const aprobado = estadoCursos[nombre];
      const requisitosAprobados = requisitos.every(r => estadoCursos[r]);

      if (!aprobado && requisitos.length && !requisitosAprobados) {
        btn.classList.add("bloqueado");
      } else if (aprobado) {
        btn.classList.add("aprobado");
      }

      btn.textContent = nombre;

      if (!btn.classList.contains("bloqueado")) {
        btn.onclick = () => {
          estadoCursos[nombre] = !estadoCursos[nombre];
          render();
        };
      }

      col.appendChild(btn);
    });

    contenedor.appendChild(col);
  }
}
