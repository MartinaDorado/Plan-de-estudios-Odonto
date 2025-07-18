const cursos = {
  "Introducción a la Odontología": [],
  "Anatomía I": ["Introducción a la Odontología"],
  "Biología General I": ["Introducción a la Odontología"],
  "Bioquímica Estomatológica I": ["Introducción a la Odontología"],
  "Biofísica I": ["Introducción a la Odontología"],
  "OPS I": ["Introducción a la Odontología"],
  "Dimensión Psicológica de la Atención Odontológica": ["Introducción a la Odontología"],
  "Anatomía II": ["Anatomía I"],
  "Biología General II": ["Biología General I"],
  "Histología y Embriología I": ["Biología General I"],
  "Biofísica II": ["Biofísica I"],
  "Fisiología I": ["Anatomía II", "Histología y Embriología I", "Biofísica II"],
  "Histología II": ["Biología General II"],
  "Bioquímica Estomatológica II": ["Bioquímica Estomatológica I"],
  "Microbiología y Parasitología I": ["Biología General II", "Bioquímica Estomatológica I", "Biofísica II"],
  "Patología y Clínica Estomatológica I": ["Biología General II", "Histología II", "Microbiología y Parasitología I"],
  "Biomateriales I": ["Anatomía II", "Biofísica II", "Bioquímica Estomatológica I"],
  "OPS II": ["OPS I"],
  "Fisiología II": ["Fisiología I"],
  "Microbiología y Parasitología II": ["Microbiología y Parasitología I"],
  "Biomateriales II": ["Biomateriales I"],
  "Operatoria Dental I": ["Histología II", "Biomateriales I"],
  "Farmacología y Terapéutica I": ["Fisiología II", "Patología y Clínica Estomatológica I", "Bioquímica Estomatológica II"],
  "Prótesis I": ["Fisiología II", "Biomateriales II"],
  "Diagnóstico por Imágenes I": ["Biofísica II", "Patología y Clínica Estomatológica I"],
  "Patología y Clínica Estomatológica II": ["Patología y Clínica Estomatológica I"],
  "OPS III": ["OPS II", "Microbiología y Parasitología I", "Patología y Clínica Estomatológica I", "Biomateriales II"],
  "Cirugía I": ["Fisiología II", "Microbiología y Parasitología I"],
  "Diagnóstico por Imágenes II": ["Diagnóstico por Imágenes I", "Patología y Clínica Estomatológica II"],
  "Operatoria Dental II": ["Operatoria Dental I", "Patología y Clínica Estomatológica II"],
  "Prótesis II": ["Prótesis I"],
  "Cirugía II": ["Cirugía I", "Farmacología y Terapéutica I", "Patología y Clínica Estomatológica II"],
  "Farmacología y Terapéutica II": ["Farmacología y Terapéutica I", "Patología y Clínica Estomatológica II"],
  "Patología y Clínica Estomatológica III": ["Patología y Clínica Estomatológica II"],
  "Endodoncia I": ["Farmacología y Terapéutica II", "Patología y Clínica Estomatológica III", "Diagnóstico por Imágenes II"],
  "Periodoncia I": ["OPS III", "Patología y Clínica Estomatológica III", "Diagnóstico por Imágenes II"],
  "Operatoria Dental III": ["Operatoria Dental II", "Farmacología y Terapéutica II", "Patología y Clínica Estomatológica III", "Diagnóstico por Imágenes II"],
  "Prótesis III": ["Prótesis II", "Patología y Clínica Estomatológica III"],
  "OPS IV": ["OPS III"],
  "Cirugía III": ["Cirugía II", "Farmacología y Terapéutica II", "Patología y Clínica Estomatológica III"],
  "Endodoncia II": ["Endodoncia I"],
  "Periodoncia II": ["Periodoncia I"],
  "Operatoria Dental IV": ["Operatoria Dental III", "Periodoncia I"],
  "Prótesis IV": ["Prótesis III", "Periodoncia I"],
  "Cirugía IV": ["Cirugía III"],
  "Patología y Clínica Estomatológica IV": ["Patología y Clínica Estomatológica III"],
  "OPS V": ["OPS IV", "Cirugía IV", "Periodoncia II", "Endodoncia II", "Operatoria Dental IV"],
  "Odontología Integral Niños I": ["OPS IV", "Periodoncia II", "Endodoncia II", "Operatoria Dental IV", "Prótesis IV", "Patología y Clínica Estomatológica V", "Cirugía IV"],
  "Patología y Clínica Estomatológica V": ["Patología y Clínica Estomatológica IV"],
  "Odontología Integral Niños II": ["Prótesis I"],
  "Cirugía V": ["Cirugía IV", "Patología y Clínica Estomatológica V"],
  "Odontología Legal y Forense": ["Patología y Clínica Estomatológica V", "Cirugía IV", "Periodoncia II", "Operatoria Dental IV", "Prótesis IV"],
  "Operatoria Dental V": ["Operatoria Dental IV"],
  "Prótesis V": ["Prótesis IV"],
  "Odontología Integral Niños III": ["Odontología Integral Niños I", "Odontología Integral Niños II"],
  "Cirugía VI": ["Cirugía V"],
  "Bioética": ["Odontología Integral Niños I", "Odontología Integral Niños II", "Odontología Legal y Forense"],
  "Operatoria Dental VI": ["Endodoncia II", "Operatoria Dental V"],
  "Prótesis VI": ["Prótesis V"],
  "PPS": [
    "OPS V", "Odontología Integral Niños III", "Cirugía VI", "Bioética",
    "Operatoria Dental VI", "Prótesis VI"
  ]
};

const estadoCursos = {};
const contenedor = document.getElementById("malla");

function render() {
  contenedor.innerHTML = "";

  Object.keys(cursos).forEach((nombre) => {
    const btn = document.createElement("div");
    btn.className = "curso";

    const requisitos = cursos[nombre];
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

    contenedor.appendChild(btn);
  });
}

render();
