import { makeMountRender, reduxify, snapshotify } from '../test-utils';
import App from './';

describe('<App />', function() {
  it('matches snapshot', function() {
    const wrapper = makeMountRender(reduxify(App))();
    expect(snapshotify(wrapper)).toMatchSnapshot();
  });
});
