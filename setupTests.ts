import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import toJson from 'enzyme-to-json';

Enzyme.configure({ adapter: new Adapter() });

const globalAny: any = global;

globalAny.shallow = shallow;
globalAny.render = render;
globalAny.mount = mount;
globalAny.toJson = toJson;

console.error = (message: string | undefined) => {
  throw new Error(message);
};
