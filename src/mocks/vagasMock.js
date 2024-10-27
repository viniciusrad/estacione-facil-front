const vagasMock = [
  {
    id: 1,
    tipoVaga: 'coberta',
    tipoContratacao: 'hora',
    precoHora: '15.00',
    horaInicio: '08:00',
    horaFim: '18:00',
    endereco: 'Rua das Flores, 123 - Centro',
    descricao: 'Vaga coberta em prédio comercial com segurança 24h',
    fotos: [
      'https://exemplo.com/foto1.jpg',
      'https://exemplo.com/foto2.jpg'
    ]
  },
  {
    id: 2,
    tipoVaga: 'descoberta',
    tipoContratacao: 'diaria',
    precoDiaria: '50.00',
    diasDisponiveis: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex'],
    endereco: 'Av. Principal, 456 - Jardins',
    descricao: 'Vaga descoberta em condomínio residencial',
    fotos: [
      'https://exemplo.com/foto3.jpg'
    ]
  },
  {
    id: 3,
    tipoVaga: 'ambas',
    tipoContratacao: 'hora',
    precoHora: '20.00',
    horaInicio: '07:00',
    horaFim: '19:00',
    endereco: 'Rua Comercial, 789 - Shopping Center',
    descricao: 'Vagas cobertas e descobertas disponíveis no shopping',
    fotos: [
      'https://exemplo.com/foto4.jpg',
      'https://exemplo.com/foto5.jpg',
      'https://exemplo.com/foto6.jpg'
    ]
  },
  {
    id: 4,
    tipoVaga: 'coberta',
    tipoContratacao: 'diaria',
    precoDiaria: '45.00',
    diasDisponiveis: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
    endereco: 'Rua do Estacionamento, 321 - Centro Empresarial',
    descricao: 'Vaga coberta em edifício comercial com câmeras de segurança',
    fotos: [
      'https://exemplo.com/foto7.jpg',
      'https://exemplo.com/foto8.jpg'
    ]
  }
];

export default vagasMock;
