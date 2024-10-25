import * as  data from "../helpers/default_data.json"
import * as  main from "../locators/main_page.json"
import * as  recovery from "../locators/recovery_password_page.json"
import * as  result from "../locators/result_page.json"


describe('Проверка авторизации', function () {

    beforeEach ('Начало теста', function (){
        cy.visit('/');
        cy.get(main.fogot_pass_btn).should('have.css', 'color', 'rgb(0, 85, 152)');
    });

    afterEach ('Конец теста', function() {
        cy.get(result.close).should('be.visible');
     });


    it('Верный логин и верный пароль', function () {
         
        
         cy.get(main.email).type(data.login);
         cy.get(main.password).type(data.password);
         cy.get(main.login_button).click();
         cy.get(result.title).should('be.visible');
         cy.get(result.title).contains('Авторизация прошла успешно');
        
     });
 
     it('Восстановление пароля', function () {
             
        cy.get(main.fogot_pass_btn).click();
        cy.get(recovery.email).type(data.login);
        cy.get(recovery.send_button).click();
        cy.get(result.title).should('be.visible');
        cy.get(result.title).contains('Успешно отправили пароль на e-mail');
        
     });

     it('Верный логин и неверный пароль', function () {
        
        cy.get(main.email).type(data.login);
        cy.get(main.password).type('iLoveqastudio');
        cy.get(main.login_button).click();
        cy.get(result.title).should('be.visible');
        cy.get(result.title).contains('Такого логина или пароля нет');
       
    });
    it('Неверный логин и верный пароль', function () {
        
        cy.get(main.email).type('germa@dolnikov.ru');
        cy.get(main.password).type(data.password);
        cy.get(main.login_button).click();
        cy.get(result.title).should('be.visible');
        cy.get(result.title).contains('Такого логина или пароля нет');
       
    });

    it('Логин без @ и верный пароль', function () {
        
        cy.get(main.email).type('germandolnikov.ru');
        cy.get(main.password).type(data.password);
        cy.get(main.login_button).click();
        cy.get(result.title).should('be.visible');
        cy.get(result.title).contains('Нужно исправить проблему валидации');
       
    });

    it('Регистр в логине', function () {
        
        cy.get(main.email).type('GerMan@Dolnikov.ru');
        cy.get(main.password).type(data.password);
        cy.get(main.login_button).click();
        cy.get(result.title).should('be.visible');
        cy.get(result.title).contains('Авторизация прошла успешно');
       
    });
   
  })