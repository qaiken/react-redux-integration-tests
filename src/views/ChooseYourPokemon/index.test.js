import history from '../../history';
import Routes from '../../Routes';
import apiService from '../../services/api-service';
import {
  makeMountRender,
  mocker,
  reduxify,
  snapshotify,
  ticks
} from '../../test-utils';
import ChooseYourPokemon from './';

describe('<ChooseYourPokemon />', function() {
  const apiMock = apiService.mock();

  beforeEach(() => {
    mocker(apiMock).fetchRandomPokemon();
  });

  afterEach(() => {
    apiMock.reset();
  });

  it('matches snapshot', function() {
    const wrapper = makeMountRender(reduxify(ChooseYourPokemon))();
    expect(snapshotify(wrapper)).toMatchSnapshot();
  });

  it('allows users to select a random pokemon', function(done) {
    const wrapper = makeMountRender(reduxify(Routes))();

    history.push('/choose-your-pokemon');

    wrapper.update();
    wrapper.find('[data-test-id="choose-pokemon"]').simulate('click');

    ticks([
      () => {
        wrapper.update();
        expect(window.location.href).toBe('http://localhost/selected');
        expect(snapshotify(wrapper)).toMatchSnapshot();
        done();
      }
    ]);
  });
});
