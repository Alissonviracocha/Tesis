import mongoose, { Schema, model } from 'mongoose'

const calificacionSchema = new Schema({
    estudiante: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Estudiante',
        required: true
    },
    doente: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Docente',
        required: true
    },
    materia: {
        type: String,
        required: true,
    },
    parcial1: {
        deberes: {
            type: Number,
            default: 0
        },
        examenes: {
            type: Number,
            default: 0
        },
        trabajosClase: {
            type: Number,
            default: 0
        },
        proyectos: {
            type: Number,
            default: 0
        },
        promedio: {
            type: Number,
            default: 0
        }
    },
    parcial2: {
        deberes: {
            type: Number,
            default: 0
        },
        examenes: {
            type: Number,
            default: 0
        },
        trabajosClase: {
            type: Number,
            default: 0
        },
        proyectos: {
            type: Number,
            default: 0
        },
        promedio: {
            type: Number,
            default: 0
        }
    },
    parcial3: {
        deberes: {
            type: Number,
            default: 0
        },
        examenes: {
            type: Number,
            default: 0
        },
        trabajosClase: {
            type: Number,
            default: 0
        },
        proyectos: {
            type: Number,
            default: 0
        },
        promedio: {
            type: Number,
            default: 0
        }
    },
    promedioFinal: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true
});

//Calculo del promedio final 
calificacionSchema.pre('save', function (next) {
    const calcularPromedio = (p) => {
        return ((p.deberes + p.examenes + p.trabajosClase + p.proyectos) / 4).toFixed(2);
    };

    this.parcial1.promedio = calcularPromedio(this.parcial1);
    this.parcial2.promedio = calcularPromedio(this.parcial2);
    this.parcial3.promedio = calcularPromedio(this.parcial3);

    this.promedioFinal = ((+this.parcial1.promedio + +this.parcial2.promedio + 
        +this.parcial3.promedio) / 3).toFixed(2);

    next();
});

export default mongoose.model('Calificacion', calificacionSchema);