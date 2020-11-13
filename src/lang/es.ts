import { es } from 'vuetify/src/locale';
/* export default {
  es: {
    $vuetify:{
      ...es,
    },
    tos: 'Term of Service',
  }
} */

export default {
  ...es,
  close: 'Cancelar',
  guardar:'Guardar',
  cerrar: 'Cerrar',
  eliminar: 'Eliminar',
  applicatta: 'Applicatta',
  sinbienios: 'Sin Próximo Cumplimiento',
  pagenotfound: 'Página no encontrada.',
  sinmovimientoshistoria: 'Sin movimientos de historia',
  dataIterator: {
    noResultsText: 'Ningún elemento coincide con la búsqueda',
    loadingText: 'Cargando...',
  },
  dataTable: {
    itemsPerPageText: 'Filas por página:',
    ariaLabel: {
      sortDescending: ': Orden descendente. Pulse para quitar orden.',
      sortAscending: ': Orden ascendente. Pulse para ordenar descendente.',
      sortNone: ': Sin ordenar. Pulse para ordenar ascendente.',
    },
    sortBy: 'Ordenado por',
  },
  dataFooter: {
    itemsPerPageText: 'Elementos por página:',
    itemsPerPageAll: 'Todos',
    nextPage: 'Página siguiente',
    prevPage: 'Página anterior',
    firstPage: 'Primer página',
    lastPage: 'Última página',
    pageText: '{0}-{1} de {2}',
  },
  datePicker: {
    itemsSelected: '{0} seleccionados',
  },
  noDataText: 'No existen datos.',
  carousel: {
    prev: 'Visual anterior',
    next: 'Visual siguiente',
    ariaLabel: {
      delimiter: 'Carousel slide {0} of {1}',
    },
  },
  calendar: {
    moreEvents: '{0} más',
  },
  fileInput: {
    counter: '{0} archivos',
    counterSize: '{0} archivos ({1} en total)',
  },
  timePicker: {
    am: 'AM',
    pm: 'PM',
  },
  appName: 'Sistema Bienios',
  appCliente: 'GORE Coquimbo',
  bienios: 'Bienios',
  exit: 'Salir',
  search: 'Buscar',
  procesar: 'Procesar',
  historyOf: 'Historia de',
  accomplishment: 'Cumplimiento',
  Payment: 'Pago',
  date: 'Fecha',
  menu:{
    home: 'Inicio'
  },
  subMenu:{
    tab00 : 'Próximos Cumplimientos',
    tab01 : 'Nuevos Funcionarios',
    tab02 : 'Movimientos de Historia',
    tab03 : 'Movimientos Procesados',
    tab04 : 'Funcionarios Sin Próximo Cumplimiento',
  },
  bandejas:{
    tab00: 'Por Procesar',
    tab01: 'Cambio de Bienios',
    tab02: 'Todos'
  },
  tablas:{
    options: 'Acciones',
    rut: 'RUT',
    names: 'Nombres',
    fullName: 'Nombre Completo',
    firstSurname: 'Apellido Paterno',
    secondSurname: 'Apellido Materno',
    fechaCumplimiento: 'Fecha Cumplimiento',
    id: 'ID',
    history: 'Historia',
    historyDetail: 'Detalle Historia',
    detalleBienio: 'Detalle de Bienios',
    detalle: 'Detalle',
    afecta: 'Afecta',
    noafecta: 'No Afecta',
    infocambiobienios: 'Información del Cambio de Bienios',
  },
  form:{
    causeOfChange: 'Causal de Cambio',
    dayAccomplishment: 'Día Cumplimiento', 
    monthAccomplishment: 'Mes Cumplimiento',
    yearNextAccomplishment: 'Año Próximo Cumplimiento',
    dateNextPayment: 'Fecha Próximo Pago',
    observations: 'Observaciones',
    lastPayment: 'Último Pago',
    required: 'Campo requerido',
    fechaProximoCumplimiento: 'Fecha Próximo Cumplimiento'
  },
  message:{
    noRegisterBienios:'Sin registro de Bienios'
  },
}
