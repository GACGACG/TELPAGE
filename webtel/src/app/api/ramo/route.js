import { NextResponse } from "next/server";
import connection from "@/libs/mysql";

const ramos = {
    "I": [
        {
            "nombre": "EDUCACION FISICA I (DAMAS Y VARONES)",
            "sigla": "DEW100",
            "departamento": "DEFIDER",
            "credito": "2",
            "semestre": "I"
        },
        {
            "nombre": "HUMANISTICO I",
            "sigla": "HRW 1",
            "departamento": "ESTUDIOS HUMANÍSTICOS",
            "credito": "3",
            "semestre": "I"
        },
        {
            "nombre": "INICIACIÓN A LA PROGRAMACIÓN",
            "sigla": "TEL101",
            "departamento": "ELECTRÓNICA",
            "credito": "5",
            "semestre": "I"
        },
        {
            "nombre": "INTRODUCCION A LA FISICA",
            "sigla": "FIS100",
            "departamento": "FÍSICA",
            "credito": "6",
            "semestre": "I"
        },
        {
            "nombre": "INTRODUCCION A LA INGENIERIA",
            "sigla": "IWG101",
            "departamento": "DIRECCION GENERAL DE DOCENCIA",
            "credito": "3",
            "semestre": "I"
        },
        {
            "nombre": "MATEMATICA I",
            "sigla": "MAT021",
            "departamento": "MATEMÁTICA",
            "credito": "8",
            "semestre": "I"
        }
    ],
    "II": [
        {
            "nombre": "EDUCACION FISICA II (DAMAS Y VARONES)",
            "sigla": "DEW101",
            "departamento": "DEFIDER",
            "credito": "2",
            "semestre": "II"
        },
        {
            "nombre": "EXPRESIÓN ORAL Y ESCRITA",
            "sigla": "HFW144",
            "departamento": "ESTUDIOS HUMANÍSTICOS",
            "credito": "3",
            "semestre": "II"
        },
        {
            "nombre": "FISICA GENERAL I",
            "sigla": "FIS110",
            "departamento": "FÍSICA",
            "credito": "8",
            "semestre": "II"
        },
        {
            "nombre": "HUMANISTICO II",
            "sigla": "HRW 2",
            "departamento": "ESTUDIOS HUMANÍSTICOS",
            "credito": "3",
            "semestre": "II"
        },
        {
            "nombre": "MATEMATICA II",
            "sigla": "MAT022",
            "departamento": "MATEMÁTICA",
            "credito": "7",
            "semestre": "II"
        },
        {
            "nombre": "SEMINARIO DE PROGRAMACIÓN",
            "sigla": "TEL102",
            "departamento": "ELECTRÓNICA",
            "credito": "5",
            "semestre": "II"
        }
    ],
    "III": [
        {
            "nombre": "DEPORTES",
            "sigla": "DEW 0",
            "departamento": "DEFIDER",
            "credito": "2",
            "semestre": "III"
        },
        {
            "nombre": "ESTRUCTURAS DE DATOS Y ALGORITMOS",
            "sigla": "ELO320",
            "departamento": "ELECTRÓNICA",
            "credito": "5",
            "semestre": "III"
        },
        {
            "nombre": "FISICA GENERAL II",
            "sigla": "FIS120",
            "departamento": "FÍSICA",
            "credito": "8",
            "semestre": "III"
        },
        {
            "nombre": "INGLÉS 1",
            "sigla": "HCW100",
            "departamento": "ESTUDIOS HUMANÍSTICOS",
            "credito": "3",
            "semestre": "III"
        },
        {
            "nombre": "MATEMATICA III",
            "sigla": "MAT022",
            "departamento": "MATEMÁTICA",
            "credito": "7",
            "semestre": "III"
        },
        {
            "nombre": "REDES DE COMPUTADORES I",
            "sigla": "ELO322",
            "departamento": "ELECTRÓNICA",
            "credito": "5",
            "semestre": "III"
        }
    ],
    "IV": [
        {
            "nombre": "ELECTRÓNICA DIGITAL",
            "sigla": "TEL131",
            "departamento": "ELECTRÓNICA",
            "credito": "4",
            "semestre": "IV"
        },
        {
            "nombre": "INGLÉS 2",
            "sigla": "HCW101",
            "departamento": "ESTUDIOS HUMANÍSTICOS",
            "credito": "3",
            "semestre": "IV"
        },
        {
            "nombre": "LABORATORIO DE ELECTRÓNICA DIGITAL",
            "sigla": "TEL132",
            "departamento": "ELECTRÓNICA",
            "credito": "4",
            "semestre": "IV"
        },
        {
            "nombre": "PROBABILIDAD Y PROCESOS ALEATORIOS I",
            "sigla": "ELO204",
            "departamento": "ELECTRÓNICA",
            "credito": "6",
            "semestre": "IV"
        },
        {
            "nombre": "QUIMICA Y SOCIEDAD",
            "sigla": "QUI010",
            "departamento": "QUÍMICA",
            "credito": "5",
            "semestre": "IV"
        },
        {
            "nombre": "TEORÍA DE SISTEMAS OPERATIVOS",
            "sigla": "ELO321",
            "departamento": "ELECTRÓNICA",
            "credito": "5",
            "semestre": "IV"
        }
    ],
    "V": [
        {
            "nombre": "ANÁLISIS Y DISEÑO DE SOFTWARE",
            "sigla": "INF236",
            "departamento": "INFORMÁTICA",
            "credito": "5",
            "semestre": "V"
        },
        {
            "nombre": "DISEÑO Y PROGRAMACIÓN ORIENTADOS A OBJETOS",
            "sigla": "ELO329",
            "departamento": "ELECTRÓNICA",
            "credito": "5",
            "semestre": "V"
        },
        {
            "nombre": "FISICA GENERAL III",
            "sigla": "FIS130",
            "departamento": "FÍSICA",
            "credito": "8",
            "semestre": "V"
        },
        {
            "nombre": "FUNDAMENTOS DE TRANSMISIÓN DE SEÑALES",
            "sigla": "TEL222",
            "departamento": "ELECTRÓNICA",
            "credito": "5",
            "semestre": "V"
        },
        {
            "nombre": "LABORATORIO DE REDES DE COMPUTADORES I",
            "sigla": "TEL241",
            "departamento": "ELECTRÓNICA",
            "credito": "5",
            "semestre": "V"
        }
    ],
    "VI": [
        {
            "nombre": "BASES DE DATOS",
            "sigla": "INF239",
            "departamento": "INFORMÁTICA",
            "credito": "5",
            "semestre": "VI"
        },
        {
            "nombre": "DISPONIBILIDAD Y RENDIMIENTO DE SISTEMAS TIC",
            "sigla": "TEL211",
            "departamento": "ELECTRÓNICA",
            "credito": "5",
            "semestre": "VI"
        },
        {
            "nombre": "INGLÉS 3",
            "sigla": "HCW102",
            "departamento": "ESTUDIOS HUMANÍSTICOS",
            "credito": "3",
            "semestre": "VI"
        },
        {
            "nombre": "LABORATORIO DE COMUNICACIONES",
            "sigla": "ELO241",
            "departamento": "ELECTRÓNICA",
            "credito": "5",
            "semestre": "VI"
        },
        {
            "nombre": "MATEMATICAS IV",
            "sigla": "MAT024",
            "departamento": "MATEMÁTICA",
            "credito": "6",
            "semestre": "VI"
        },
        {
            "nombre": "SISTEMAS DE TELECOMUNICACIONES I",
            "sigla": "TEL231",
            "departamento": "ELECTRÓNICA",
            "credito": "5",
            "semestre": "VI"
        }
    ],
    "VII": [
        {
            "nombre": "ANALISIS NUMERICO",
            "sigla": "MAT270",
            "departamento": "MATEMÁTICA",
            "credito": "7",
            "semestre": "VII"
        },
        {
            "nombre": "INGENIERÍA DE SOFTWARE",
            "sigla": "INF225",
            "departamento": "INFORMÁTICA",
            "credito": "5",
            "semestre": "VII"
        },
        {
            "nombre": "INGLÉS 4",
            "sigla": "HCW200",
            "departamento": "ESTUDIOS HUMANÍSTICOS",
            "credito": "3",
            "semestre": "VII"
        },
        {
            "nombre": "LAB. SISTEMAS DIGITALES",
            "sigla": "ELO212",
            "departamento": "ELECTRÓNICA",
            "credito": "6",
            "semestre": "VII"
        },
        {
            "nombre": "PENSAMIENTO DE DISEÑO EN INGENIERÍA",
            "sigla": "TEL360",
            "departamento": "ELECTRÓNICA",
            "credito": "5",
            "semestre": "VII"
        },
        {
            "nombre": "SISTEMAS DIGITALES",
            "sigla": "ELO211",
            "departamento": "ELECTRÓNICA",
            "credito": "5",
            "semestre": "VII"
        }
    ],
    "VIII": [
        {
            "nombre": "ADMINISTRACIÓN DE REDES DE COMPUTADORES",
            "sigla": "TEL342",
            "departamento": "ELECTRÓNICA",
            "credito": "4",
            "semestre": "VIII"
        },
        {
            "nombre": "CRIPTOGRAFÍA Y SEGURIDAD EN LA INFORMACIÓN",
            "sigla": "TEL252",
            "departamento": "ELECTRÓNICA",
            "credito": "5",
            "semestre": "VIII"
        },
        {
            "nombre": "FISICA GENERAL IV",
            "sigla": "FIS140",
            "departamento": "FÍSICA",
            "credito": "8",
            "semestre": "VIII"
        },
        {
            "nombre": "INGLÉS 5",
            "sigla": "HCW201",
            "departamento": "ESTUDIOS HUMANÍSTICOS",
            "credito": "3",
            "semestre": "VIII"
        },
        {
            "nombre": "PROCESAMIENTO DIGITAL DE IMAGENES",
            "sigla": "ELO328",
            "departamento": "ELECTRÓNICA",
            "credito": "5",
            "semestre": "VIII"
        },
        {
            "nombre": "TEORIA DE COMUNICACIONES DIGITALES",
            "sigla": "ELO341",
            "departamento": "ELECTRÓNICA",
            "credito": "5",
            "semestre": "VIII"
        }
    ],
    "IX": [
        {
            "nombre": "DISEÑO DE APLICACIONES WEB Y MÓVILES",
            "sigla": "TEL335",
            "departamento": "ELECTRÓNICA",
            "credito": "5",
            "semestre": "IX"
        },
        {
            "nombre": "MINERÍA DE DATOS",
            "sigla": "TEL354",
            "departamento": "ELECTRÓNICA",
            "credito": "5",
            "semestre": "IX"
        },
        {
            "nombre": "REDES DE ACCESO Y COMUNICACIONES ÓPTICAS",
            "sigla": "TEL236",
            "departamento": "ELECTRÓNICA",
            "credito": "5",
            "semestre": "IX"
        },
        {
            "nombre": "REDES INALÁMBRICAS",
            "sigla": "TEL315",
            "departamento": "ELECTRÓNICA",
            "credito": "5",
            "semestre": "IX"
        },
        {
            "nombre": "SEGURIDAD EN REDES DE COMPUTADORES",
            "sigla": "TEL312",
            "departamento": "ELECTRÓNICA",
            "credito": "5",
            "semestre": "IX"
        },
        {
            "nombre": "SIMULACIÓN DE REDES",
            "sigla": "TEL341",
            "departamento": "ELECTRÓNICA",
            "credito": "5",
            "semestre": "IX"
        }
    ],
    "X": [
        {
            "nombre": "COMPLEMENTARIO I",
            "sigla": "TEL 11",
            "departamento": "ELECTRÓNICA",
            "credito": "5",
            "semestre": "X"
        },
        {
            "nombre": "ECONOMIA I-A",
            "sigla": "ICS733",
            "departamento": "INGENIERÍA COMERCIAL",
            "credito": "5",
            "semestre": "X"
        },
        {
            "nombre": "INGLÉS 6",
            "sigla": "HCW202",
            "departamento": "ESTUDIOS HUMANÍSTICOS",
            "credito": "3",
            "semestre": "X"
        },
        {
            "nombre": "PLANIF.Y DIMENSIONA.DE REDES DE COMP.",
            "sigla": "TEL343",
            "departamento": "ELECTRÓNICA",
            "credito": "5",
            "semestre": "X"
        },
        {
            "nombre": "REDES DE SENSORES",
            "sigla": "TEL329",
            "departamento": "ELECTRÓNICA",
            "credito": "5",
            "semestre": "X"
        },
        {
            "nombre": "REDES ÓPTICAS WDM",
            "sigla": "TEL317",
            "departamento": "ELECTRÓNICA",
            "credito": "5",
            "semestre": "X"
        }
    ],
    "XI": [
        {
            "nombre": "COMPLEMENTARIO II",
            "sigla": "TEL 12",
            "departamento": "ELECTRÓNICA",
            "credito": "5",
            "semestre": "XI"
        },
        {
            "nombre": "GESTIÓN DE INVESTIGACIÓN DE OPERACIONES",
            "sigla": "ILN250",
            "departamento": "INDUSTRIAS",
            "credito": "6",
            "semestre": "XI"
        },
        {
            "nombre": "MEMORIAS MULTIDISCIPLINARIAS: INNOVACIÓN",
            "sigla": "IWG397",
            "departamento": "DIRECCION GENERAL DE DOCENCIA",
            "credito": "6",
            "semestre": "XI"
        },
        {
            "nombre": "MEMORIAS MULTIDISCIPLINARIAS: TRANSVERSAL 1",
            "sigla": "IWG396",
            "departamento": "DIRECCION GENERAL DE DOCENCIA",
            "credito": "6",
            "semestre": "XI"
        },
        {
            "nombre": "TALLER DE MEMORIA MULTIDISCIPLINARIA I",
            "sigla": "IWG394",
            "departamento": "DIRECCION GENERAL DE DOCENCIA",
            "credito": "9",
            "semestre": "XI"
        }
    ],
    "XII": [
        {
            "nombre": "ADMINISTRACIÓN DE EMPRESAS",
            "sigla": "ICS111",
            "departamento": "INGENIERÍA COMERCIAL",
            "credito": "5",
            "semestre": "XII"
        },
        {
            "nombre": "COMPLEMENTARIO III",
            "sigla": "TEL 13",
            "departamento": "ELECTRÓNICA",
            "credito": "5",
            "semestre": "XII"
        },
        {
            "nombre": "MEMORIAS MULTIDISCIPLINARIAS: EMPRENDIMIENTO",
            "sigla": "IWG399",
            "departamento": "DIRECCION GENERAL DE DOCENCIA",
            "credito": "6",
            "semestre": "XII"
        },
        {
            "nombre": "MEMORIAS MULTIDISCIPLINARIAS: TRANSVERSAL 2",
            "sigla": "IWG398",
            "departamento": "DIRECCION GENERAL DE DOCENCIA",
            "credito": "6",
            "semestre": "XII"
        },
        {
            "nombre": "TALLER DE MEMORIA MULTIDISCIPLINARIA II",
            "sigla": "IWG395",
            "departamento": "DIRECCION GENERAL DE DOCENCIA",
            "credito": "12",
            "semestre": "XII"
        }
    ]
}

const semestres = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII"];

export async function GET() {
    try {
        return NextResponse.json(ramos);
    } catch (error) {
        return NextResponse.json({
            message: error.message
        }, {
            status: 500
        });
    }
}

export async function POST() {
    try {
        for (let index = 0; index < semestres.length; index++) {
            ramos[semestres[index]].forEach(async (asignatura) => {
                console.log(asignatura.nombre, asignatura.sigla, asignatura.departamento, asignatura.credito, asignatura.semestre);
                //const result = await connection.query("INSERT INTO ramo SET ?", asignatura);
                //console.log(result);
            });
        }
        return NextResponse.json({ "message": "Success" })
    } catch (error) {
        return NextResponse.json({
            message: error.message
        }, {
            status: 500
        });
    }
}