const CreateEventoDTO = (body) => {
  return{
    responsavelid: body.responsavelid,
    endereco: body.endereco,
    dataini: body.dataini,
    datafim: body.datafim,
    nome: body.nome,
    descricao: body.descricao,
    capacidade: body.capacidade,
    dispo: body.dispo,
    status: body.status
  }
}

module.exports = { CreateEventoDTO }