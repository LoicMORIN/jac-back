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

@Module({
  imports: [UsersModule, RegistrationsModule, RolesModule, QuestionsModule, DocumentsModule, EventsModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3000,
      username: "test",
      password: "test",
      database: "test",
      entities: ["entities/*.js"],
      migrationsTableName: "custom_migration_table",
      migrations: ["migration/*.js"],
      cli: {
          "migrationsDir": "migration"
      }}),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
