import { CreateEventoDTO } from "../dto/EventoDTO.js";
import { eventoService } from "../services/EventoService.js";

export const eventoController = {
  async getEvento(req, res){
    try {
      const eventos = await eventoService.listAllEventos();
      
      if (!eventos || eventos.length === 0) {
        return res.status(404).json({ message: "Nenhum evento encontrado." });
      }

      return res.status(200).json(eventos);
    } catch (error) {
      return res.status(500).json({ error: error.message, func: "getEvento()" });
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
      return res.status(200).json({ message: "Evento criado com sucesso"})
    }catch(err){
      throw new Error('erro no evento controler')
      return res.status(500).json({ error: error.message, func: "postEvento()"});
    }
  }
}
