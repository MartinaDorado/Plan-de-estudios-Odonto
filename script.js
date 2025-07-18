const materias = [
  // Primer Año
  { nombre: "Introducción a la Odontología", requisitos: [], grupo: "Primer Año" },
  { nombre: "Anatomía I", requisitos: ["Introducción a la Odontología"], grupo: "Primer Año" },
  { nombre: "Biología General I", requisitos: ["Introducción a la Odontología"], grupo: "Primer Año" },
  { nombre: "Bioquímica Estomatológica I", requisitos: ["Introducción a la Odontología"], grupo: "Primer Año" },
  { nombre: "Biofísica I", requisitos: ["Introducción a la Odontología"], grupo: "Primer Año" },
  { nombre: "OPS I", requisitos: ["Introducción a la Odontología"], grupo: "Primer Año" },
  { nombre: "Dimensión Psicológica de la Atención Odontológica", requisitos: ["Introducción a la Odontología"], grupo: "Primer Año" },
  { nombre: "Anatomía II", requisitos: ["Anatomía I"], grupo: "Primer Año" },
  { nombre: "Biología General II", requisitos: ["Biología General I"], grupo: "Primer Año" },
  { nombre: "Histología y Embriología I", requisitos: ["Biología General I"], grupo: "Primer Año" },
  { nombre: "Biofísica II", requisitos: ["Biofísica I"], grupo: "Primer Año" },

  // Segundo Año
  { nombre: "OPS II", requisitos: ["OPS I"], grupo: "Segundo Año" },
  { nombre: "Fisiología I", requisitos: ["Anatomía II", "Histología y Embriología I", "Biofísica II"], grupo: "Segundo Año" },
  { nombre: "Histología II", requisitos: ["Biología General II"], grupo: "Segundo Año" },
  { nombre: "Microbiología y Parasitología I", requisitos: ["Biología General II", "Bioquímica Estomatológica I", "Biofísica II"], grupo: "Segundo Año" },
  { nombre: "Biomateriales I", requisitos: ["Anatomía II", "Biofísica II", "Bioquímica Estomatológica I"], grupo: "Segundo Año" },
  { nombre: "Fisiología II", requisitos: ["Fisiología I"], grupo: "Segundo Año" },
  { nombre: "Patología y Clínica Estomatológica I", requisitos: ["Biología General II", "Histología II", "Microbiología y Parasitología I"], grupo: "Segundo Año" },
  { nombre: "Bioquímica Estomatológica II", requisitos: ["Bioquímica Estomatológica I"], grupo: "Segundo Año" },
  { nombre: "Biomateriales II", requisitos: ["Biomateriales I"], grupo: "Segundo Año" },

  // Tercer Año
  { nombre: "OPS III", requisitos: ["OPS II", "Microbiología y Parasitología I", "Patología y Clínica Estomatológica I", "Biomateriales II"], grupo: "Tercer Año" },
  { nombre: "Cirugía I", requisitos: ["Fisiología II", "Microbiología y Parasitología I"], grupo: "Tercer Año" },
  { nombre: "Farmacología y Terapéutica I", requisitos: ["Fisiología II", "Patología y Clínica Estomatológica I", "Bioquímica Estomatológica II"], grupo: "Tercer Año" },
  { nombre: "Patología y Clínica Estomatológica II", requisitos: ["Patología y Clínica Estomatológica I"], grupo: "Tercer Año" },
  { nombre: "Diagnóstico por Imágenes I", requisitos: ["Biofísica II", "Patología y Clínica Estomatológica I"], grupo: "Tercer Año" },
  { nombre: "Operatoria Dental I", requisitos: ["Histología II", "Biomateriales I"], grupo: "Tercer Año" },
  { nombre: "Prótesis I", requisitos: ["Fisiología II", "Biomateriales II"], grupo: "Tercer Año" },
  { nombre: "Cirugía II", requisitos: ["Cirugía I", "Farmacología y Terapéutica I", "Patología y Clínica Estomatológica II"], grupo: "Tercer Año" },
  { nombre: "Farmacología y Terapéutica II", requisitos: ["Farmacología y Terapéutica I", "Patología y Clínica Estomatológica II"], grupo: "Tercer Año" },
  { nombre: "Patología y Clínica Estomatológica III", requisitos: ["Patología y Clínica Estomatológica II"], grupo: "Tercer Año" },
  { nombre: "Operatoria Dental II", requisitos: ["Operatoria Dental I", "Patología y Clínica Estomatológica II"], grupo: "Tercer Año" },
  { nombre: "Prótesis II", requisitos: ["Prótesis I"], grupo: "Tercer Año" },
  { nombre: "Diagnóstico por Imágenes II", requisitos: ["Diagnóstico por Imágenes I", "Patología y Clínica Estomatológica II"], grupo: "Tercer Año" },

  // Cuarto Año
  { nombre: "OPS IV", requisitos: ["OPS III"], grupo: "Cuarto Año" },
  { nombre: "Endodoncia I", requisitos: ["Farmacología y Terapéutica II", "Patología y Clínica Estomatológica III", "Diagnóstico por Imágenes II"], grupo: "Cuarto Año" },
  { nombre: "Periodoncia I", requisitos: ["OPS III", "Patología y Clínica Estomatológica III", "Diagnóstico por Imágenes II"], grupo: "Cuarto Año" },
  { nombre: "Cirugía III", requisitos: ["Cirugía II", "Farmacología y Terapéutica II", "Patología y Clínica Estomatológica III"], grupo: "Cuarto Año" },
  { nombre: "Operatoria Dental III", requisitos: ["Operatoria Dental II", "Farmacología y Terapéutica II", "Patología y Clínica Estomatológica III", "Diagnóstico por Imágenes II"], grupo: "Cuarto Año" },
  { nombre: "Prótesis III", requisitos: ["Prótesis II", "Patología y Clínica Estomatológica III"], grupo: "Cuarto Año" },
  { nombre: "Patología y Clínica Estomatológica IV", requisitos: ["Patología y Clínica Estomatológica III"], grupo: "Cuarto Año" },
  { nombre: "Endodoncia II", requisitos: ["Endodoncia I"], grupo: "Cuarto Año" },
  { nombre: "Periodoncia II", requisitos: ["Periodoncia I"], grupo: "Cuarto Año" },
  { nombre: "Cirugía IV", requisitos: ["Cirugía III"], grupo: "Cuarto Año" },
  { nombre: "Operatoria Dental IV", requisitos: ["Operatoria Dental III", "Periodoncia I"], grupo: "Cuarto Año" },
  { nombre: "Prótesis IV", requisitos: ["Prótesis III", "Periodoncia I"], grupo: "Cuarto Año" },
  { nombre: "Patología y Clínica Estomatológica V", requisitos: ["Patología y Clínica Estomatológica IV"], grupo: "Cuarto Año" },

  // Quinto Año
  { nombre: "OPS V", requisitos: ["OPS IV", "Cirugía IV", "Periodoncia II", "Endodoncia II", "Operatoria Dental IV"], grupo: "Quinto Año" },
  { nombre: "Odontología Integral Niños I", requisitos: ["OPS IV", "Periodoncia II", "Endodoncia II", "Operatoria Dental IV", "Prótesis IV", "Patología y Clínica Estomatológica V", "Cirugía IV"], grupo: "Quinto Año" },
  { nombre: "Odontología Integral Niños II", requisitos: ["Prótesis I"], grupo: "Quinto Año" },
  { nombre: "Cirugía V", requisitos: ["Cirugía IV", "Patología y Clínica Estomatológica V"], grupo: "Quinto Año" },
  { nombre: "Odontología Legal y Forense", requisitos: ["Patología y Clínica Estomatológica V", "Cirugía IV", "Periodoncia II", "Operatoria Dental IV", "Prótesis IV"], grupo: "Quinto Año" },
  { nombre: "Operatoria Dental V", requisitos: ["Operatoria Dental IV"], grupo: "Quinto Año" },
  { nombre: "Prótesis V", requisitos: ["Prótesis IV"], grupo: "Quinto Año" },
  { nombre: "Odontología Integral Niños III", requisitos: ["Odontología Integral Niños I", "Odontología Integral Niños II"], grupo: "Quinto Año" },
  { nombre: "Cirugía VI", requisitos: ["Cirugía V"], grupo: "Quinto Año" },
  { nombre: "Bioética", requisitos: ["Odontología Integral Niños I", "Odontología Integral Niños II", "Odontología Legal y Forense"], grupo: "Quinto Año" },
  { nombre: "Operatoria Dental VI", requisitos: ["Endodoncia II", "Operatoria Dental V"], grupo: "Quinto Año" },
  { nombre: "Prótesis VI", requisitos: ["Prótesis V"], grupo: "Quinto Año" },
  { nombre: "PPS", requisitos: ["OPS V", "Odontología Integral Niños III", "Cirugía VI", "Bioética", "Operatoria Dental VI", "Prótesis VI"], grupo: "Quinto Año" },
];

const aprobadas = new Set();

function crearBoton(materia) {
  const btn = document.createElement("div");
  btn.textContent = materia.nombre;
  btn.className = "curso";
  const requisitosOK = materia.requisitos.every(r => aprobadas.has(r));
  btn.classList.toggle("bloqueado", !requisitosOK && materia.requisitos.length > 0);
  btn.classList.toggle("aprobado", aprobadas.has(materia.nombre));
  btn.onclick = () => {
    if (btn.classList.contains("bloqueado")) return;
    aprobadas.has(materia.nombre) ? aprobadas.delete(materia.nombre) : aprobadas.add(materia.nombre);
    render();
  };
  return btn;
}

function render() {
  const cont = document.getElementById("malla");
  cont.innerHTML = "";
  const grupos = {};
  materias.forEach(m => {
    grupos[m.grupo] = grupos[m.grupo] || [];
    grupos[m.grupo].push(m);
  });
  for (const [grupo, lista] of Object.entries(grupos)) {
    const col = document.createElement("div");
    col.className = "columna-ano";
    const h2 = document.createElement("h2");
    h2.textContent = grupo;
    col.appendChild(h2);
    lista.forEach(m => col.appendChild(crearBoton(m)));
    cont.appendChild(col);
  }
}

render();
