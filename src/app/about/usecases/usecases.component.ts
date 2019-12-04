import { Component, OnInit } from '@angular/core'
import { UseCase } from '../usecase.model'

@Component({
  selector: 'app-about-usecases',
  templateUrl: './usecases.component.html',
  styleUrls: ['./usecases.component.scss']
})
export class UsecasesComponent implements OnInit {
  readonly PLAIN_USER = 'Reguliere gebruiker'
  readonly ADMIN_USER = 'Administrator'

  useCases: UseCase[] = [
    {
      id: 'UC-01',
      name: 'Inloggen',
      description: 'Hiermee logt een bestaande gebruiker in.',
      scenario: [
        'Gebruiker vult email en password in en klikt op Login knop.',
        'De applicatie valideert de ingevoerde gegevens.',
        'Indien gegevens correct zijn dan redirect de applicatie naar het startscherm.'
      ],
      actor: this.PLAIN_USER,
      precondition: 'Geen',
      postcondition: 'De actor is ingelogd'
    },    {
      id: 'UC-02',
      name: 'regristreren',
      description: 'Hiermee kan kan iemand een account aanmaken',
      scenario: [        
      'Gebruiker vult email en password in en klikt op Login knop.',
      'De applicatie valideert de ingevoerde gegevens.',
      'Indien gegevens correct zijn, en niet bij een bestaande user horen, dan redirect de applicatie naar het startscherm.'],
      actor: this.PLAIN_USER,
      precondition: 'De actor is ingelogd en geregistreerd',
      postcondition: 'Het doel is bereikt.'
    },
    {
      id: 'UC-03',
      name: 'game toevoegen',
      description: 'Hiermee kan een user een game toevoegen die nog niet op de website beschikbaar is',
      scenario: ['ga naar games.', 'klik op voeg to.', 'vul formulier in.', 'klik op voeg toe.', 'De applicatie valideert de ingevoerde gegevens.', 'als de game valide is en nog niet bestaat word de user doorverwezen naar de game list.'],
      actor: this.PLAIN_USER,
      precondition: 'De actor is ingelogd.',
      postcondition: 'Het doel is bereikt.'
    },
    {
      id: 'UC-04',
      name: 'discussion toevoegen',
      description: 'Hiermee kan een user een discussie starten',
      scenario: ['ga naar games.', 'ga naar de gewenste game.', 'vul de gewenste velden in.', 'klik op start discussie.',  'De applicatie valideert de ingevoerde gegevens.', 'als de game valide is en nog niet bestaat word de user doorverwezen naar de discussie.'],
      actor: this.PLAIN_USER,
      precondition: 'De actor is ingelogd',
      postcondition: 'Het doel is bereikt.'
    },
    {
      id: 'UC-05',
      name: 'aan discussie deelnemen',
      description: 'Hiermee kan een user aan een discussie deelnemen',
      scenario: ['ga naar discussies.', 'ga naar de gewenste discussie.', 'plaats een comment om te reageren.', 'de comment wordt geplaatst.'],
      actor: this.PLAIN_USER,
      precondition: 'De actor is ingelogd',
      postcondition: 'Het doel is bereikt.'
    },

    {
      id: 'UC-06',
      name: 'op reacties reageren',
      description: 'Hiermee kan een user reageren op wat er in de discussie geplaatst word',
      scenario: ['ga naar discussies.', 'ga naar de gewenste discussie.', 'klik op "reageer" bij de gewenste comment.', 'plaats je comment.', 'de comment wordt geplaatst.'],
      actor: this.PLAIN_USER,
      precondition: 'De actor is ingelogd',
      postcondition: 'Het doel is bereikt.'
    },

    {
      id: 'UC-07',
      name: 'de details van een game zien',
      description: 'Hiermee kan iemand een game in detail bekijken',
      scenario: [
      'Gebruiker gaat naar het overzicht van games.',
      'de gebruiker kiest een game en klikt erop.',
      'de gebruiker krijgt een pagina te zien met daarop alle beschikbare gegevens van een game.'],
      actor: this.PLAIN_USER,
      precondition: 'De actor is ingelogd',
      postcondition: 'Het doel is bereikt.'
    },
    {
      id: 'UC-08',
      name: 'een discussie aanpassen',
      description: 'Hiermee kan iemand een discussie aanpassen',
      scenario: [
      'Gebruiker gaat naar de discussie.',
      'de gebruiker klikt op de wijzig knop.',
      'de applicatie past aan wat hij/zij aangepast wilt hebben.',
      'de gebruiker bevestigd deze wijzigingen.',
      'de gebruiker slaat de gegevens op.'],
      actor: this.PLAIN_USER,
      precondition: 'De actor is ingelogd en is de eigenaar van de discussie',
      postcondition: 'Het doel is bereikt.'
    },
    {
      id: 'UC-09',
      name: 'een comment aanpassen',
      description: 'Hiermee kan iemand een comment aanpassen',
      scenario: [
      'Gebruiker gaat naar de discussie.',
      'Gebruiker zoekt de comment op.',
      'de gebruiker klikt op de wijzig link.',
      'de gebruiker past aan wat hij/zij aangepast wilt hebben.',
      'de gebruiker bevestigd deze wijzigingen.',
      'de applicatie slaat de gegevens op.'],
      actor: this.PLAIN_USER,
      precondition: 'De actor is ingelogd en is de eigenaar van de comment',
      postcondition: 'Het doel is bereikt.'
    },
    {
      id: 'UC-10',
      name: 'een discussie verwijderen',
      description: 'Hiermee kan iemand een discussie verwijderen',
      scenario: [
      'Gebruiker gaat naar de discussie.',
      'de gebruiker klikt op de verwijderen knop.',
      'de applicatie laat een bevestigings veld zien.',
      'de gebruiker accepteert deze bevestiging.',
      'de applicatie verwijderd de discussie.',
      'de applicatie redujrect de user door naar het discussie overzicht'],
      actor: this.PLAIN_USER,
      precondition: 'De actor is ingelogd en is de eigenaar van de discussie',
      postcondition: 'Het doel is bereikt.'
    },
    {
      id: 'UC-11',
      name: 'een comment verwijderen',
      description: 'Hiermee kan iemand een comment verwijderen',
      scenario: [
      'Gebruiker gaat naar de discussie.',
      'Gebruiker zoekt de comment op.',
      'de gebruiker klikt op de verwijder link.',
      'de applicatie laat een bevestigings veld zien.',
      'de gebruiker accepteert deze bevestiging.',
      'de applicatie verwijderd de discussie.'],
      actor: this.PLAIN_USER,
      precondition: 'De actor is ingelogd en is de eigenaar van de comment',
      postcondition: 'Het doel is bereikt.'
    },
    {
      id: 'UC-12',
      name: 'een discussie upvoten',
      description: 'Hiermee kan iemand een discussie upvoten',
      scenario: [
      'Gebruiker gaat naar de discussie.',
      'de gebruiker klikt het upvote icoon.',
      'de applicatie slaat de upvote op.'],
      actor: this.PLAIN_USER,
      precondition: 'De actor is ingelogd',
      postcondition: 'Het doel is bereikt.'
    },
    {
      id: 'UC-13',
      name: 'een upvote cancelen',
      description: 'Hiermee kan iemand een upvote op een discussie weghalen',
      scenario: [
      'Gebruiker gaat naar de discussie.',
      'de gebruiker klikt het upvote icoon.',
      'de applicatie haalt de upvote weg.'],
      actor: this.PLAIN_USER,
      precondition: 'De actor is ingelogd en de gebruiker heeft de discussie al geupvoted',
      postcondition: 'Het doel is bereikt.'
    },
    {
      id: 'UC-14',
      name: 'een comment upvoten',
      description: 'Hiermee kan iemand een comment upvoten',
      scenario: [
      'Gebruiker gaat naar de discussie.',
      'de gebruiker gaat naar de comment',
      'de gebruiker klikt het upvote icoon.',
      'de applicatie slaat de upvote op.'],
      actor: this.PLAIN_USER,
      precondition: 'De actor is ingelogd',
      postcondition: 'Het doel is bereikt.'
    },
    {
      id: 'UC-15',
      name: 'een upvote cancelen op een comment',
      description: 'Hiermee kan iemand een upvote op een comment weghalen',
      scenario: [
      'Gebruiker gaat naar de discussie.',
      'de gebruiker gaat naar de comment',
      'de gebruiker klikt het upvote icoon.',
      'de applicatie haalt de upvote weg.'],
      actor: this.PLAIN_USER,
      precondition: 'De actor is ingelogd en de gebruiker heeft de comment al geupvoted',
      postcondition: 'Het doel is bereikt.'
    },
    {
      id: 'UC-16',
      name: 'een discussie downvoten',
      description: 'Hiermee kan iemand een discussie downvoten',
      scenario: [
      'Gebruiker gaat naar de discussie.',
      'de gebruiker klikt het downvote icoon.',
      'de applicatie slaat de downvoten op.'],
      actor: this.PLAIN_USER,
      precondition: 'De actor is ingelogd',
      postcondition: 'Het doel is bereikt.'
    },
    {
      id: 'UC-17',
      name: 'een downvote cancelen',
      description: 'Hiermee kan iemand een downvote op een discussie weghalen',
      scenario: [
      'Gebruiker gaat naar de discussie.',
      'de gebruiker klikt het downvote icoon.',
      'de applicatie haalt de downvote weg.'],
      actor: this.PLAIN_USER,
      precondition: 'De actor is ingelogd en de gebruiker heeft de discussie al gedownvoted',
      postcondition: 'Het doel is bereikt.'
    },
    {
      id: 'UC-18',
      name: 'een comment downvoten',
      description: 'Hiermee kan iemand een comment downvoten',
      scenario: [
      'Gebruiker gaat naar de discussie.',
      'de gebruiker gaat naar de comment',
      'de gebruiker klikt het downvote icoon.',
      'de applicatie slaat de downvoten op.'],
      actor: this.PLAIN_USER,
      precondition: 'De actor is ingelogd',
      postcondition: 'Het doel is bereikt.'
    },
    {
      id: 'UC-19',
      name: 'een downvote cancelen',
      description: 'Hiermee kan iemand een downvote op een comment weghalen',
      scenario: [
      'Gebruiker gaat naar de discussie.',
      'de gebruiker gaat naar de comment',
      'de gebruiker klikt het downvote icoon.',
      'de applicatie haalt de downvote weg.'],
      actor: this.PLAIN_USER,
      precondition: 'De actor is ingelogd en de gebruiker heeft de comment al gedownvoted',
      postcondition: 'Het doel is bereikt.'
    },
  ]

  constructor() {}

  ngOnInit() {}
}
