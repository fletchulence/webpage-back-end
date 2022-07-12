exports.up = async (knex) => {
  await knex.schema
    .createTable('roles', (tbl) => {
      tbl.increments('role_id')
      tbl.string('role_name').notNullable().unique()
    })

    .createTable('users', (tbl) => {
      tbl.increments('user_id')
      tbl.string('username', 200).notNullable().unique()
      tbl.string('password', 200).notNullable()
      tbl.timestamps(false, true)
      tbl.integer('role_id')
      .unsigned()
      .notNullable()
      .references('role_id').inTable('roles')
      .onDelete('RESTRICT')
      .onUpdate('RESTRICT')
    })
    
    .createTable('companies', (tbl) =>{
      tbl.increments('companies_id')
      tbl.string('companies_name').notNullable().unique()
      tbl.string('companies_person_name').defaultTo('')
      tbl.integer('user_id')
      .unsigned()
      .notNullable()
      .references('user_id').inTable('users')
      .onDelete('RESTRICT')
      .onUpdate('RESTRICT')
    })

    .createTable('genus', tbl => {
      tbl.increments('genus_id')
      tbl.string('genus_name').notNullable().unique()
      // tbl.string('genus_habitat').notNullable()
      tbl.float('genus_water_frequency').notNullable()
    })

    .createTable('plants', (tbl) => {
      tbl.increments('plant_id')
      tbl.string('plant_name').notNullable().unique()
      tbl.string('plant_nickname').notNullable().unique()
      tbl.boolean('water_now').defaultTo(false)
      tbl.float('plant_picture')
      tbl.integer('genus_id')
        .unsigned()
        .notNullable()
        .references('genus_id').inTable('genus')
        .onDelete('RESTRICT')
        .onUpdate('RESTRICT')
    })

    .createTable('users_plants', tbl => {
      tbl.increments('users_plants_id')
      tbl.string('users_plants_nickname').defaultTo( 'New Plant' + `${Math.round(Math.random() * 10)}` )
      tbl.integer('plant_id')
        .unsigned()
        .notNullable()
        .references('plant_id').inTable('plants')
        .onDelete('RESTRICT')
        .onUpdate('RESTRICT')
      tbl.integer('user_id')
        .unsigned()
        .notNullable()
        .references('user_id').inTable('users')
        .onDelete('RESTRICT')
        .onUpdate('RESTRICT')
    })

    //! use for the relationship between company and user
    // .createTable('users_company', tbl => {
    //   tbl.increments('users_company_id')
    //   tbl.string('users_company_person').defaultTo( 'New User from' + 'users_company_name' + `${Math.round(Math.random() * 10)}` )
    //   tbl.integer('user_id')
    //     .unsigned()
    //     .notNullable()
    //     .references('user_id').inTable('users')
    //     .onDelete('RESTRICT')
    //     .onUpdate('RESTRICT')
    //   tbl.integer('companies_id')
    //     .unsigned()
    //     .notNullable()
    //     .references('companies_id').inTable('companies')
    //     .onDelete('RESTRICT')
    //     .onUpdate('RESTRICT')
    // })
}

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists('users_plants')
  await knex.schema.dropTableIfExists('plants')
  await knex.schema.dropTableIfExists('genus')
  await knex.schema.dropTableIfExists('users')
  await knex.schema.dropTableIfExists('roles')
}
