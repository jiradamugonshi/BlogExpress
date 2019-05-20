let mongoose = require('mongoose');
const server = 'msaghrouni:A123456@ds021771.mlab.com:21771'; 
const database = 'blogueexpress';
class Database {
  constructor() {
    this._connect()
  }
_connect() {
     mongoose.connect(`mongodb://${server}/${database}`, { useNewUrlParser: true })
       .then(() => {
         console.log('Database connection successful');
       })
       .catch(err => {
         console.error('Database connection error');
       })
  }
}
module.exports = new Database()