import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { RegistrationsModule } from './registrations/registrations.module';
import { RolesModule } from './roles/roles.module';
import { QuestionsModule } from './questions/questions.module';
import { DocumentsModule } from './documents/documents.module';
import { EventsModule } from './events/events.module';


@Module({
  imports: [UsersModule, RegistrationsModule, RolesModule, QuestionsModule, DocumentsModule, EventsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
