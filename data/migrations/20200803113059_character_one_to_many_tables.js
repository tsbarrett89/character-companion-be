
exports.up = function(knex) {
    return knex.schema
        .createTable('skill_proficiences', tbl => {
            tbl.increments()
            tbl.integer('character_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('characters')
                .onDelete('CASCADE')
                .onUpdate('CASCADE')
            tbl.string('skill')
                .notNullable()
        })
        .createTable('language_proficiencies', tbl => {
            tbl.increments()
            tbl.integer('character_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('characters')
                .onDelete('CASCADE')
                .onUpdate('CASCADE')
            tbl.string('language')
                .notNullable()
        })
        .createTable('tool_proficiencies', tbl => {
            tbl.increments()
            tbl.integer('character_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('characters')
                .onDelete('CASCADE')
                .onUpdate('CASCADE')
            tbl.string('tool')
                .notNullable()
        })
        .createTable('armor_proficiencies', tbl => {
            tbl.increments()
            tbl.integer('character_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('characters')
                .onDelete('CASCADE')
                .onUpdate('CASCADE')
            tbl.string('armor')
                .notNullable()
        })
        .createTable('weapon_proficiencies', tbl => {
            tbl.increments()
            tbl.integer('character_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('characters')
                .onDelete('CASCADE')
                .onUpdate('CASCADE')
            tbl.string('weapon')
                .notNullable()
        })
        .createTable('character_feats', tbl => {
            tbl.increments()
            tbl.integer('character_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('characters')
                .onDelete('CASCADE')
                .onUpdate('CASCADE')
            tbl.string('feat')
                .notNullable()
        })
        .createTable('character_equipment', tbl => {
            tbl.increments()
            tbl.integer('character_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('characters')
                .onDelete('CASCADE')
                .onUpdate('CASCADE')
            tbl.string('equipment')
                .notNullable()
            tbl.string('type')
                .notNullable()
            tbl.boolean('equipped')
                .defaultTo(false)
        })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('character_equipment')
        .dropTableIfExists('character_feats')
        .dropTableIfExists('weapon_proficiencies')
        .dropTableIfExists('armor_proficiencies')
        .dropTableIfExists('tool_proficiencies')
        .dropTableIfExists('language_proficiencies')
        .dropTableIfExists('skill_proficiencies')
};