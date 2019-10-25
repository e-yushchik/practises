import { mount } from '@vue/test-utils';
import index from '@/pages/index';

describe('Home page', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(index);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
