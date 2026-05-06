const { CreateEventoDTO } = require("../dto/EventoDTO");
const eventoService = require("../services/EventoService");

const eventoController = {
  async getEvento(req, res){
    try {
      const eventos = await eventoService.listAllEventos();
      
      if (!eventos || eventos.length === 0) {
        return res.status(404).json({ message: "Nenhum evento encontrado." });
      }

      return res.status(200).json(users);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
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
module.exports = eventoController