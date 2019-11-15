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
    },
    {
      id: 'UC-02',
      name: 'game toevoegen',
      description: 'Hiermee kan een user een game toevoegen die nog niet op de website beschikbaar is',
      scenario: ['ga naar games.', 'klik op voeg to.', 'vul formulier in.', 'klik op voeg toe.', 'De applicatie valideert de ingevoerde gegevens.', 'als de game valide is en nog niet bestaat word de user doorverwezen naar de game list.'],
      actor: this.PLAIN_USER,
      precondition: 'De actor is ingelogd.',
      postcondition: 'Het doel is bereikt.'
    },
    {
      id: 'UC-03',
      name: 'discussion toevoegen',
      description: 'Hiermee kan een user een discussie starten',
      scenario: ['ga naar games.', 'ga naar de gewenste game.', 'vul de gewenste velden in.', 'klik op start discussie.',  'De applicatie valideert de ingevoerde gegevens.', 'als de game valide is en nog niet bestaat word de user doorverwezen naar de discussie.'],
      actor: this.PLAIN_USER,
      precondition: 'De actor is ingelogd',
      postcondition: 'Het doel is bereikt.'
    },
    {
      id: 'UC-04',
      name: 'aan discussie deelnemen',
      description: 'Hiermee kan een user aan een discussie deelnemen',
      scenario: ['ga naar discussies.', 'ga naar de gewenste discussie.', 'plaats een comment om te reageren.', 'de comment wordt geplaatst.'],
      actor: this.PLAIN_USER,
      precondition: 'De actor is ingelogd',
      postcondition: 'Het doel is bereikt.'
    },

    {
      id: 'UC-05',
      name: 'op reacties reageren',
      description: 'Hiermee kan een user reageren op wat er in de discussie geplaatst word',
      scenario: ['ga naar discussies.', 'ga naar de gewenste discussie.', 'klik op "reageer" bij de gewenste comment.', 'plaats je comment.', 'de comment wordt geplaatst.'],
      actor: this.PLAIN_USER,
      precondition: 'De actor is ingelogd',
      postcondition: 'Het doel is bereikt.'
    },
    {
      id: 'UC-06',
      name: 'regristreren',
      description: 'Hiermee kan kan iemand een account aanmaken',
      scenario: [        
      'Gebruiker vult email en password in en klikt op Login knop.',
      'De applicatie valideert de ingevoerde gegevens.',
      'Indien gegevens correct zijn, en niet bij een bestaande user horen, dan redirect de applicatie naar het startscherm.'],
      actor: this.PLAIN_USER,
      precondition: 'De actor is ingelogd',
      postcondition: 'Het doel is bereikt.'
    },
    
  ]

  constructor() {}

  ngOnInit() {}
}
