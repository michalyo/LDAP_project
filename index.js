const ldap = require('ldapjs');

const server = ldap.createServer();

server.listen(1389, () => {
  console.log('well done!!!!', server.url);
});