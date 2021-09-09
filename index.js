class Usuario {
    constructor(nombre, apellido, libros, mascotas) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }

    getFullName() {
        console.log(`${this.nombre} ${this.apellido}`)
    }

    addMascota(mascota) {
        this.mascotas.push(mascota)
        console.log(this.mascotas)
    }

    countMascotas() {
        console.log(this.mascotas.length)
    }

    addBook(nombre, autor) {
        this.libros.push({ nombre: nombre, autor: autor })
        console.log(this.libros)
    }

    getBook() {
        const nombresLibros = [];

        this.libros.forEach(libro => {
            nombresLibros.push(libro.nombre)
        });

        console.log(nombresLibros);
    }
}

let usuario = new Usuario('Pedro', 'Martinez', [{ nombre: 'Rayuela', autor: 'Julio Cortázar' }, { nombre: 'Mi planta de naranja lima', autor: 'José Mauro de Vasconcelos' }], ['gato', 'perro'])

usuario.getFullName();
usuario.countMascotas();
usuario.addMascota('loro');
usuario.addBook('Crónicas Marcianas', 'Ray Bradbury');
usuario.getBook();