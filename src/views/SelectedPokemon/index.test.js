import {
  makeMountRender,
  mockData,
  reduxify,
  snapshotify
} from '../../test-utils';
import SelectedPokemon from './';

describe('<SelectedPokemon />', function() {
  it('matches snapshot', function() {
    const mockPokemonData = mockData.pokemon;
    const mockPokemonId = mockPokemonData.id;

    const wrapper = makeMountRender(
      reduxify(
        SelectedPokemon,
        {},
        {
          data: { pokemon: { [mockPokemonId]: mockData.pokemon } },
          session: { selectedPokemonId: mockPokemonId }
        }
      )
    )();

    expect(snapshotify(wrapper)).toMatchSnapshot();
  });

  it('redirects to homepage if there is no selected pokemon', function() {
    const wrapper = makeMountRender(reduxify(SelectedPokemon))();

    wrapper.update();
    expect(window.location.href).toBe('http://localhost/');
  });
});
