const areas = ['Radiología', 'Traumatología', 'Dental']

const radiologia = [{
        hora: '11:00',
        especialista: 'IGNACIO SCHULZ',
        paciente: 'FRANCISCA ROJAS',
        rut: '9878782-1',
        prevision: 'FONASA',

    },
    {
        hora: '11:30',
        especialista: 'FEDERICO SUBERCASEAUX',
        paciente: 'PAMELA ESTRADA',
        rut: '15345241-3',
        prevision: 'ISAPRE',

    },
    {
        hora: '15:00',
        especialista: 'FERNANDO WURTHZ',
        paciente: 'ARMANDO LUNA',
        rut: '16445345-9',
        prevision: 'ISAPRE',

    },
    {
        hora: '15:30',
        especialista: 'ANA MARIA GODOY',
        paciente: 'MANUEL GODOY',
        rut: '17666419-0',
        prevision: 'FONASA',

    },
    {
        hora: '16:00',
        especialista: 'PATRICIA SUAZO',
        paciente: 'RAMÓN ULLOA',
        rut: '14989389-K',
        prevision: 'FONASA',

    }
];

const traumatologia = [{
        hora: '8:00',
        especialista: 'MARIA PAZ ALTUZARRA',
        paciente: 'PAULA SANCHEZ',
        rut: '15554774-5',
        prevision: 'FONASA',
    },
    {
        hora: '10:00',
        especialista: 'RAUL ARAYA',
        paciente: 'ANGÉLICA NAVAS',
        rut: '15444147-9',
        prevision: 'ISAPRE',
    },
    {
        hora: '10:30',
        especialista: 'MARIA ARRIAGADA',
        paciente: 'ANA KLAPP',
        rut: '17879423-9',
        prevision: 'ISAPRE',
    },
    {
        hora: '11:00',
        especialista: 'ALEJANDRO BADILLA',
        paciente: 'FELIPE MARDONES',
        rut: '1547423-6',
        prevision: 'ISAPRE',
    },
    {
        hora: '11:30',
        especialista: 'CECILIA BUDNIK',
        paciente: 'DIEGO MARRE',
        rut: '16554741-K',
        prevision: 'FONASA',
    },
    {
        hora: '12:00',
        especialista: 'ARTURO CAVAGNARO',
        paciente: 'CECILIA MENDEZ',
        rut: '9747535-8',
        prevision: 'ISAPRE',
    },
    {
        hora: '12:30',
        especialista: 'ANDRES KANACRI',
        paciente: 'MARCIAL SUAZO',
        rut: '11254785-5',
        prevision: 'ISAPRE',
    }
]

const dental = [{
        hora: '8:30',
        especialista: 'ANDREA ZUÑIGA',
        paciente: 'MARCELA RETAMAL',
        rut: '11123425-6',
        prevision: 'ISAPRE',
    },
    {
        hora: '11:00',
        especialista: 'MARIA PIA ZAÑARTU',
        paciente: 'ANGEL MUÑOZ',
        rut: '9878789-2',
        prevision: 'ISAPRE',
    },
    {
        hora: '11:30',
        especialista: 'SCARLETT WITTING',
        paciente: 'MARIO KAST',
        rut: '7998789-5',
        prevision: 'FONASA',
    },
    {
        hora: '13:00',
        especialista: 'FRANCISCO VON TEUBER',
        paciente: 'KARIN FERNANDEZ',
        rut: '18887662-K',
        prevision: 'FONASA',
    },
    {
        hora: '13:30',
        especialista: 'EDUARDO VIÑUELA',
        paciente: 'HUGO SANCHEZ',
        rut: '17665461-4',
        prevision: 'FONASA',
    },
    {
        hora: '14:00',
        especialista: 'RAQUEL VILLASECA',
        paciente: 'ANA SEPULVEDA',
        rut: '14441281-0',
        prevision: 'ISAPRE',
    }
]

const createCard = (array, title) => {
    let firstAttention = `Primera atención: ${array[0].paciente} - ${array[0].prevision} |`
    let lastAttention = ` Última atención: ${array[1].paciente} - ${array[1].prevision}`
    let firsAndLastAttention = firstAttention + lastAttention
    document.write(
        /*HTML*/
        `
<div class="card mt-2 text-center">
    <div class="card-header">
        ${title}
    </div>
  <div class="card-body">
    <h5 class="card-title"></h5>
    <p class="card-text">${firsAndLastAttention}</p>
  </div>
</div>`
    );
}

const createTable = (array, title) => {
    document.write(
        /*HTML*/
        `
        <h1 class ="text-center my-3">${title}</h1>
        <table class="table ">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Hora</th>
      <th scope="col">Especialista</th>
      <th scope="col">Paciente</th>
      <th scope="col">Rut</th>
      <th scope="col">Previsión</th>
    </tr>
  </thead>

        `)

    array.forEach((element, index) => {
        document.write(
            /*HTML*/
            `
    <tbody>
    <tr>
      <td>${index+1}</td>
      <td>${element.hora}</td>
      <td>${element.especialista}</td>
      <td>${element.paciente}</td>
      <td>${element.rut}</td>
      <td>${element.prevision}</td>
    </tr>
  </tbody>
                `)
    });
    document.write('</table>')
}

const getMaxMinHour = (array) => {
    let maxHour = new Date().setHours(0);
    let minHour = new Date().setHours(23);
    let indexMax = 0;
    let indexMin = 0;
    array.forEach((element, index) => {
        let hour = new Date().setHours(parseInt(element.hora));
        if (maxHour < hour) {
            maxHour = hour;
            indexMax = index
        }
        if (maxHour > hour) {
            maxHour = hour;
            indexMin = index
        }
    });
    return ([array[indexMin], array[indexMax]])
}

createCard(getMaxMinHour(radiologia), 'Radiología');
createCard(getMaxMinHour(traumatologia), 'Traumatología');
createCard(getMaxMinHour(dental), 'Dental');
createTable(radiologia, 'Radiología');
createTable(traumatologia, 'Traumatología');
createTable(dental, 'Dental');