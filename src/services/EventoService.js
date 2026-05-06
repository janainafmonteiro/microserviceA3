const eventoService = {

  async addEvento(responsavelid, endereco, dataini, datafim, nome, descricao, capacidade, dispo, status){
    try{
      const query = 'INSERT INTO eventos (responsavelid, endereco, dataini, datafim, nome, descricao, capacidade, dispo, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)'
      const [result] = await db.query(query,[responsavelid, endereco, dataini, datafim, nome, descricao, capacidade, dispo, status])
      return{id: result.id_evento, responsavelid, endereco, dataini, datafim, nome, descricao, capacidade, dispo, status}
    }catch(err){
      console.log('erro ao criar eventoService ', err)
      throw new Error('erro ao criar evento')
    }
  }
}