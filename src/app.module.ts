import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { RegistrationsModule } from './registrations/registrations.module';
import { RolesModule } from './roles/roles.module';
import { QuestionsModule } from './questions/questions.module';
import { DocumentsModule } from './documents/documents.module';
import { EventsModule } from './events/events.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriesModule } from './categories/categories.module';

@Module({
  imports: [UsersModule, RegistrationsModule, RolesModule, QuestionsModule, DocumentsModule, EventsModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      driver: 'postgres',
      host: 'localhost',
      port: 5432,
      username: "postgres",
      password: "Cleloieli@94",
      database: "jac",
      entities: ["entities/*.js"],
      migrationsTableName: "custom_migration_table",
      migrations: ["migrations/*.js"],
      cli: {
          "migrationsDir": "migrations"
      }}),
    CategoriesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
