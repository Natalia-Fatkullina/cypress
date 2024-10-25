import * as autorization from '../helpers/authorization_pokemons.json';
import * as card from '../helpers/card.json';
import * as login from '../locators/login_pokemons.json';
import * as main from '../locators/main_pokemons.json';
import * as trainer from '../locators/trainer_pokemons.json';
import * as shop from '../locators/shop_pokemons.json';
import * as pay from '../locators/pay_pokemons.json';


describe('Покупка аватара', function () {

    it('з сайт', function () {
         cy.visit('https://pokemonbattle.ru');
         cy.get(login.email).type(autorization.login);
         cy.get(login.password).type(autorization.password);
         cy.get(login.login_button).click();
         cy.get(main.profile).click();
         cy.get(trainer.new_avatar).click();
         cy.get(shop.button).first().click({ force: true });
         cy.get(pay.card_number).type(card.number);
         cy.get(pay.date).type(card.date);
         cy.get(pay.cvv).type(card.cvv);
         cy.get(pay.name).type(card.name);
         cy.get(pay.pay).click();
         cy.get(pay.sms_code).type(card.sms_code);
         cy.get(pay.paymet).click();
         cy.contains('Покупка прошла успешно').should('be.visible');  
       
     })
 }) 
