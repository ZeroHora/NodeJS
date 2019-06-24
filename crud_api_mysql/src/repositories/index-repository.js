'use strict';

const knex = require('../adaptersDB/connectionDB')

exports.get = async() => {

    const res = await knex
                    .select('*')
                    .from('users')
                    .orderBy('Login', 'asc')
    return res;
}

  
exports.getById = async(id) => {
    const res = await knex
                    .select('*')
                    .from('users')
                    .where('id', id)
                    .first()
    return res;
}

exports.create = async(data) => {
   // console.log(data);
    await knex('users')
          .insert(data)
}

exports.update = async(id, data) => {
    await knex('users') 
          .where('id', id)
          .update(data)
}

exports.delete = async(id) => {
    await knex('users') 
            .where('id', id)
            .delete(id)
}