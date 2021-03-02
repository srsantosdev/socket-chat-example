const app = require('express')()
const http = require('http').Server(app)

const io = require('socket.io')(http)

app.get('/', (request, response) => {
  response.sendFile(__dirname + '/index.html')
})

io.on('connection', (socket) => {
  console.log('Usuário conectado!')

  socket.on('chat', (chat) => {
    console.log('Mensagem: ', chat)
  })

  socket.on('chat', (chat) => {
    io.emit('chat', chat);
  });

  socket.on('disconnect', () => {
    console.log('Usuário desconectado!')
  })
})


http.listen(3333, () => console.log('Listening on port 3333'))