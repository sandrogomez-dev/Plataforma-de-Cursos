// Base de datos de cursos
const courses = [
    {
        title: "HTML y CSS Profesional",
        icon: "fab fa-html5",
        lessons: [
            {
                title: "1.1 Introducción a HTML",
                content: `
                    <h3>Estructura Básica</h3>
                    <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Mi Página&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;Hola Mundo&lt;/h1&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
                    <h3>Semántica HTML5</h3>
                    <p>Usa etiquetas como <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;article&gt;</code>.</p>
                `,
                points: 100,
                completed: false
            },
            {
                title: "1.2 Formularios HTML",
                content: `
                    <h3>Creación de formularios</h3>
                    <pre><code>&lt;form action="/submit" method="POST"&gt;
    &lt;label for="nombre"&gt;Nombre:&lt;/label&gt;
    &lt;input type="text" id="nombre" name="nombre" required&gt;
    
    &lt;label for="email"&gt;Email:&lt;/label&gt;
    &lt;input type="email" id="email" name="email" required&gt;
    
    &lt;button type="submit"&gt;Enviar&lt;/button&gt;
&lt;/form&gt;</code></pre>
                `,
                points: 150,
                completed: false
            },
            {
                title: "1.3 Estilos con CSS",
                content: `
                    <h3>Selectores Básicos</h3>
                    <pre><code>/* Selector de etiqueta */
p {
    color: blue;
}

/* Selector de clase */
.parrafo {
    font-size: 16px;
}

/* Selector de ID */
#parrafo-especial {
    font-weight: bold;
}</code></pre>
                    <h3>Box Model</h3>
                    <p>Entiende el modelo de caja: <code>margin</code>, <code>border</code>, <code>padding</code>, <code>content</code>.</p>
                `,
                points: 200,
                completed: false
            },
            {
                title: "1.4 Flexbox y Grid",
                content: `
                    <h3>Flexbox</h3>
                    <pre><code>.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}</code></pre>
                    <h3>CSS Grid</h3>
                    <pre><code>.container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
}</code></pre>
                `,
                points: 250,
                completed: false
            },
            {
                title: "1.5 Animaciones y Transiciones",
                content: `
                    <h3>Transiciones</h3>
                    <pre><code>.elemento {
    transition: background-color 0.5s ease;
}

.elemento:hover {
    background-color: yellow;
}</code></pre>
                    <h3>Animaciones</h3>
                    <pre><code>@keyframes slidein {
    from {
        transform: translateX(100%);
    }
    to {
        transform: translateX(0);
    }
}

.elemento {
    animation: slidein 1s ease-in-out;
}</code></pre>
                `,
                points: 300,
                completed: false
            }
        ]
    },
    {
        title: "JavaScript Avanzado",
        icon: "fab fa-js",
        lessons: [
            {
                title: "1.1 Sintaxis Básica",
                content: `
                    <h3>Variables y Tipos</h3>
                    <pre><code>let nombre = "Ana";
const PI = 3.1416;
var edad = 25;</code></pre>
                    <h3>Funciones tradicionales</h3>
                    <pre><code>function sumar(a, b) {
    return a + b;
}</code></pre>
                `,
                points: 150,
                completed: false
            },
            {
                title: "1.2 Funciones Flecha y Callbacks",
                content: `
                    <h3>Funciones Flecha</h3>
                    <pre><code>const sumar = (a, b) => a + b;</code></pre>
                    <h3>Callbacks</h3>
                    <pre><code>function procesarDatos(datos, callback) {
    // Procesar datos
    callback(datos);
}</code></pre>
                `,
                points: 200,
                completed: false
            },
            {
                title: "1.3 Promesas y Async/Await",
                content: `
                    <h3>Promesas</h3>
                    <pre><code>const promesa = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Éxito"), 1000);
});

promesa.then(resultado => console.log(resultado));</code></pre>
                    <h3>Async/Await</h3>
                    <pre><code>async function obtenerDatos() {
    const respuesta = await fetch('https://api.ejemplo.com/datos');
    const datos = await respuesta.json();
    return datos;
}</code></pre>
                `,
                points: 250,
                completed: false
            },
            {
                title: "1.4 Manipulación del DOM",
                content: `
                    <h3>Selección de Elementos</h3>
                    <pre><code>const elemento = document.getElementById('miElemento');</code></pre>
                    <h3>Creación de Elementos</h3>
                    <pre><code>const nuevoElemento = document.createElement('div');
nuevoElemento.textContent = 'Hola Mundo';
document.body.appendChild(nuevoElemento);</code></pre>
                `,
                points: 300,
                completed: false
            },
            {
                title: "1.5 Eventos y Listeners",
                content: `
                    <h3>Eventos</h3>
                    <pre><code>elemento.addEventListener('click', () => {
    console.log('Elemento clickeado');
});</code></pre>
                    <h3>Event Bubbling</h3>
                    <p>Entiende cómo los eventos se propagan a través del DOM.</p>
                `,
                points: 350,
                completed: false
            }
        ]
    },
    {
        title: "Python para Todos",
        icon: "fab fa-python",
        lessons: [
            {
                title: "1.1 Sintaxis Básica",
                content: `
                    <h3>Tipos de datos</h3>
                    <pre><code># Enteros
edad = 25

# Flotantes
precio = 19.99

# Cadenas
nombre = "Ana"

# Listas
numeros = [1, 2, 3]</code></pre>
                `,
                points: 120,
                completed: false
            },
            {
                title: "1.2 Funciones y Módulos",
                content: `
                    <h3>Funciones</h3>
                    <pre><code>def saludar(nombre):
    return f"Hola, {nombre}"</code></pre>
                    <h3>Módulos</h3>
                    <pre><code>import math
print(math.sqrt(16))</code></pre>
                `,
                points: 150,
                completed: false
            },
            {
                title: "1.3 Manejo de Archivos",
                content: `
                    <h3>Lectura de Archivos</h3>
                    <pre><code>with open('archivo.txt', 'r') as archivo:
    contenido = archivo.read()</code></pre>
                    <h3>Escritura de Archivos</h3>
                    <pre><code>with open('archivo.txt', 'w') as archivo:
    archivo.write('Hola Mundo')</code></pre>
                `,
                points: 180,
                completed: false
            },
            {
                title: "1.4 Programación Orientada a Objetos",
                content: `
                    <h3>Clases y Objetos</h3>
                    <pre><code>class Persona:
    def __init__(self, nombre):
        self.nombre = nombre

    def saludar(self):
        return f"Hola, {self.nombre}"</code></pre>
                    <h3>Herencia</h3>
                    <pre><code>class Estudiante(Persona):
    def __init__(self, nombre, curso):
        super().__init__(nombre)
        self.curso = curso</code></pre>
                `,
                points: 200,
                completed: false
            },
            {
                title: "1.5 Manejo de Excepciones",
                content: `
                    <h3>Try/Except</h3>
                    <pre><code>try:
    resultado = 10 / 0
except ZeroDivisionError:
    print("No se puede dividir por cero")</code></pre>
                    <h3>Finally</h3>
                    <pre><code>try:
    archivo = open('archivo.txt', 'r')
except FileNotFoundError:
    print("Archivo no encontrado")
finally:
    archivo.close()</code></pre>
                `,
                points: 220,
                completed: false
            }
        ]
    }
];

// Estado del usuario
let user = {
    points: 0,
    completedLessons: 0,
    badges: []
};

// Variables globales
let currentCourse = null;  // Curso actual
let currentLessonIndex = 0;  // Índice de la lección actual

// Elementos del DOM
const courseGrid = document.getElementById("course-grid");
const lessonSection = document.getElementById("lesson");
const profileSection = document.getElementById("profile");
const navLinks = document.querySelectorAll(".nav-link");

// Cargar cursos
function loadCourses() {
    courseGrid.innerHTML = courses.map(course => `
        <div class="course-card">
            <h3><i class="${course.icon}"></i> ${course.title}</h3>
            <p>${course.lessons.length} lecciones - ${course.lessons.reduce((sum, l) => sum + l.points, 0)} puntos</p>
            <div class="course-meta">
                <button class="btn btn-primary" onclick="startCourse('${course.title}')">
                    <i class="fas fa-play"></i> Empezar
                </button>
            </div>
        </div>
    `).join("");
}

// Mostrar lecciones de un curso
function startCourse(courseTitle) {
    currentCourse = courses.find(c => c.title === courseTitle);
    currentLessonIndex = 0;  // Reiniciar el índice
    document.getElementById("courses").classList.add("hidden");
    lessonSection.classList.remove("hidden");
    profileSection.classList.add("hidden");
    showLesson(currentCourse, currentLessonIndex);
}

// Mostrar contenido de la lección
function showLesson(course, lessonIndex) {
    const lesson = course.lessons[lessonIndex];
    document.getElementById("lesson-title").textContent = lesson.title;
    document.getElementById("lesson-text").innerHTML = lesson.content;

    // Actualizar botón de completar
    const completeBtn = document.getElementById("complete-lesson-btn");
    completeBtn.textContent = lesson.completed ? "Lección Completada" : "Completar Lección";
    completeBtn.disabled = lesson.completed;
    completeBtn.onclick = () => completeLesson(course, lessonIndex);

    // Actualizar botones de navegación
    document.getElementById("prev-lesson-btn").disabled = lessonIndex === 0;
    document.getElementById("next-lesson-btn").disabled = lessonIndex === course.lessons.length - 1;

    updateProgress(course);
}

// Navegar a la lección anterior
function prevLesson() {
    if (currentLessonIndex > 0) {
        currentLessonIndex--;
        showLesson(currentCourse, currentLessonIndex);
    }
}

// Navegar a la siguiente lección
function nextLesson() {
    if (currentLessonIndex < currentCourse.lessons.length - 1) {
        currentLessonIndex++;
        showLesson(currentCourse, currentLessonIndex);
    }
}

// Marcar lección como completada
function completeLesson(course, lessonIndex) {
    const lesson = course.lessons[lessonIndex];
    lesson.completed = true;
    user.points += lesson.points;
    user.completedLessons++;

    // Actualizar UI
    document.getElementById("points").textContent = user.points;
    document.getElementById("completed-lessons").textContent = user.completedLessons;

    // Actualizar botón
    const completeBtn = document.getElementById("complete-lesson-btn");
    completeBtn.textContent = "Lección Completada";
    completeBtn.disabled = true;

    updateProgress(course);
}

// Volver a la lista de cursos
function backToCourses() {
    lessonSection.classList.add("hidden");
    document.getElementById("courses").classList.remove("hidden");
    loadCourses();
}

// Actualizar barra de progreso
function updateProgress(course) {
    const completed = course.lessons.filter(l => l.completed).length;
    const progress = (completed / course.lessons.length) * 100;
    document.getElementById("progress-fill").style.width = `${progress}%`;
}

// Navegación
navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelector(".nav-link.active").classList.remove("active");
        link.classList.add("active");

        if (link.getAttribute("href") === "#courses") {
            backToCourses();
        } else {
            document.getElementById("courses").classList.add("hidden");
            lessonSection.classList.add("hidden");
            profileSection.classList.remove("hidden");
        }
    });
});

// Inicializar
loadCourses();