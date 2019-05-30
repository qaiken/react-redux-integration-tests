import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRandomPokemon } from '../../actions';

class ChooseYourPokemon extends Component {
  render() {
    const { handleClick } = this.props;
    return (
      <div>
        <p>
          Pokem ipsum dolor sit amet Mime Jr Mime Jr Watchog Nidoran Professor
          Oak Pichu. Thunder Badge Magmortar anim id est laborum Lileep Luvdisc
          Jellicent Reuniclus. Leech Life Tyrogue Squirtle Fuchsia City Jolteon
          Masquerain ut enim ad minim veniam. Silver Escape Rope Cloyster
          Roserade Cradily Feebas Youngster wants to fight. Cerulean City
          Tentacool gym Purugly Granbull Zweilous Celadon Department Store.
        </p>

        <p>
          Rage Vaporeon Solosis Makuhita Bill Lileep Jigglypuff. Volcano Badge
          Glaceon Octillery Harden Chandelure Starmie Gulpin. Quis nostrud
          exercitation ullamco laboris nisi Stunky Shuppet Pachirisu Swadloon
          Mawile anim id est laborum. Cerulean City Goldeen Water Bronzong
          Weedle Harden Swanna. Charizard Gorebyss Basculin Milotic Escape Rope
          Pikachu Gyarados.
        </p>

        <p>
          Anim id est laborum Poliwrath Shaymin Mineral Badge Chimchar Haunter
          Staravia. Dragon Rage Kricketot Growlithe what kind of Pokemon are you
          Pinsir Great Ball Oshawott. Pikachu Smoochum Raikou Cleffa Riolu
          Amoonguss Potion. Growl Abomasnow Blitzle Marill Flaaffy Tangela
          Smoochum. Gotta catch 'em all Bulbasaur Water Gun Sharpedo to catch
          them is my real test Poison Maractus.
        </p>

        <p>
          Pewter City Flaaffy Pinsir Riolu Xatu Hydro Pump Cherubi. Sed do
          eiusmod tempor incididunt Gible Darumaka Cascoon Ekans Haunter Dome
          Fossil. Bulbasaur Gible Slowpoke Archen Sewaddle Bayleef Celadon
          Department Store. Pewter City Vanillite Beautifly Alakazam grumpy old
          man who needs coffee Zangoose Clefable. Scratch Cascade Badge Trubbish
          Sceptile Shiftry Scizor Whimsicott.{' '}
        </p>
        <button data-test-id="choose-pokemon" onClick={handleClick}>
          Choose!
        </button>
      </div>
    );
  }
}

export default connect(
  null,
  { handleClick: fetchRandomPokemon }
)(ChooseYourPokemon);
