import http from "node:http"

//JS
import { jsonHandler } from "./middlewares/jsonHandler.js"

async function listener(request, response) {
    await jsonHandler(request, response)

}

http.createServer(listener).listen(3333) //uma forma mais simplificada de criar o servidor