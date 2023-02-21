const net = require('net');

const server = net.createServer((socket) => {
  console.log('Novo cliente conectado');

  socket.on('data', (data) => {
    console.log(`Dados recebidos do cliente: ${data}`);

    socket.write(`Olá, cliente! Recebi seus dados: ${data}`);
  });

  socket.on('close', () => {
    console.log('Conexão fechada');
  });

  socket.on('error', (err) => {
    console.error(err);
  });
});

server.listen(3000, () => {
  console.log('Servidor de socket iniciado na porta 3000');
});
