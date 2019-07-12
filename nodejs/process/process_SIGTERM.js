/**
 * Linux:
 * correr el servidor: `node server.js`
 * con el commando `netstat -pnltu` buscar el PID
 * y setear la variable pid,
 * terminará el servidor levantando en express
 */

pid = 9869;
console.log(process.pid);
process.kill(pid, 'SIGTERM');
