exports.up = async (knex) => {
   await knex.schema
      .createTable('fishtanks', tbl => {
        tbl.increments('fishtanks_id')
        tbl.string('fishtanks_name').notNullable().unique()
      })

     .createTable('fed_history', (tbl) => {
        tbl.increments('fed_history_id')
        tbl.datetime('fishtank_day_fed', { useTz: true }, { precision: 6 }).defaultTo(knex.fn.now(6))
        tbl.boolean('fishtanks_fed').defaultTo(false)
        tbl.integer('user_id') // 'fed_by'
          .unsigned()
          .notNullable()
          .references('user_id').inTable('users')
          .onDelete('RESTRICT')
          .onUpdate('RESTRICT')
        tbl.integer('fishtanks_id') // 'which tank fed'
          .unsigned()
          .notNullable()
          .references('fishtanks_id').inTable('fishtanks')
          .onDelete('RESTRICT')
          .onUpdate('RESTRICT')
     })
 
 }
 
 exports.down = async (knex) => {
   // await knex.schema.dropTableIfExists('plants')
   await knex.schema.dropTableIfExists('fed_history')
   await knex.schema.dropTableIfExists('fishtanks')
 }
 