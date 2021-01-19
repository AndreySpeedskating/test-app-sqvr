import { User } from '../generate/users';

export type UserType = {
  name: string
  lastName: string
  email: string
  address: string
  phone: string
  id: number
  [key: string]: string | number;
}

class Service {
  data!: UserType[];

  async getData() {
    this.data = User;
  }
}

export default new Service();
