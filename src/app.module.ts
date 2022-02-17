import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { RegistrationsModule } from './registrations/registrations.module';
import { RolesModule } from './roles/roles.module';
import { QuestionsModule } from './questions/questions.module';
import { DocumentsModule } from './documents/documents.module';

@Module({
  imports: [UserModule, RegistrationsModule, RolesModule, QuestionsModule, DocumentsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
