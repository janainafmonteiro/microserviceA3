const { CreateEventoDTO } = require("../dto/EventoDTO")

const eventoController = {
  async postEvento(req, res){
    try{
      const eventoData = CreateEventoDTO(req.body)
      const eventoCreate = await eventoService.addEvento(
        eventoData.responsavelid,
        eventoData.endereco,
        eventoData.dataini,
        eventoData.datafim,
        eventoData.nome,
        eventoData.descricao,
        eventoData.capacidade,
        eventoData.dispo,
        eventoData.status

      )
    }catch(err){
      throw new Error('erro no evento controler')
    }
  }
}