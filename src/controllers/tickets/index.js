/**
 * Nomenclaturas para criação de rotas/arquivos de identificação
 * CREATE - criar
 * INDEX - lista
 * UPDATE - atualizar
 * REMOVE - remover
 * SHOW - para exibir um único registro
 */

export function index({ request, response, database }) {
    const { status } = request.query
    const filters = status ? { status } : null
    const tickets = database.select("tickets", filters)
    return response.end(JSON.stringify(tickets))
}