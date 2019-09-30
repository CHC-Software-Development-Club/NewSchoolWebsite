const { Database } = require('idk'); //Im trying to find what to put here.
const store = new Database('./data');

module.exports = {
    members:store.collection('members')
};