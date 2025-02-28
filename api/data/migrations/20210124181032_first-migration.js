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
      tbl.increments('company_id')
      tbl.string('company_name').notNullable().unique()
      tbl.string('company_password').notNullable()
      tbl.integer('role_id')
      .unsigned()
      .notNullable()
      .defaultTo(3)
      .references('role_id').inTable('roles')
      .onDelete('RESTRICT')
      .onUpdate('RESTRICT')
    })
    
    .createTable('companies_users', (tbl) =>{
      tbl.increments('companies_users_id')
      tbl.integer('company_id')
      .unsigned()
      .notNullable()
      .references('company_id').inTable('companies')
      .onDelete('RESTRICT')
      .onUpdate('RESTRICT')
      tbl.integer('user_id')
      .unsigned()
      .notNullable()
      .references('user_id').inTable('users')
      .onDelete('RESTRICT')
      .onUpdate('RESTRICT')
    })

    .createTable('projects', tbl => {
      tbl.increments('project_id')
      tbl.string('project_name').unique()
      tbl.integer('project_likes').notNullable()
      tbl.text('project_content')
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
  await knex.schema.dropTableIfExists('projects')
  await knex.schema.dropTableIfExists('companies_users')
  await knex.schema.dropTableIfExists('companies')
  await knex.schema.dropTableIfExists('users')
  await knex.schema.dropTableIfExists('roles')
}
