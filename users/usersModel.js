const db = require('../data/dbConfig')

module.exports = {
    add,
    findBy,
    updateUser,
    removeUser
}

function add(creds){
    return db('users').insert(creds, "id")
}

function findBy(username){
    return db('users').where(username)
}

function updateUser(updates, username){
    return db('users').where({ username }).update(updates)
}

function removeUser(id){
    return db('users').where({ id }).del()
}