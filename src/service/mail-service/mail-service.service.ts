import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { KeyAccess, MainWelcome, TemplateHTML } from 'src/template-email/default.html';
import { UserKeyEvent, UserRegisteredEvent } from 'src/user/event/user-registered.event';

@Injectable()
export class MailService {
  constructor(private readonly mailerService: MailerService) {}

  @OnEvent('user.registered')
  async handleUserRegisteredEvent(event: UserRegisteredEvent) {
    await this.sendEmail(event.email, 'Bem-vindo(a) à nossa plataforma!', MainWelcome(event.name, `Seu cadastro foi realizado com sucesso!`));
  }

  @OnEvent('user.key')
  async handleUserKeyEvent(event: UserKeyEvent) {
    await this.sendEmail(event.email, 'Chave de criação de conta.', KeyAccess(event.name, event.key));
  }

  async sendEmail(to: string, subject: string, text: string) {
    try {
      await this.mailerService.sendMail({
      to,
      subject,
      html: TemplateHTML(text),
    });
    } catch (error) {
      console.log('sendEmail',error);
      
    }
    
  }
} 
