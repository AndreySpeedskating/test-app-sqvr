import { makeAutoObservable } from 'mobx';
import service, { UserType } from '../service/service';

function filterByText(user: UserType, searchedValue: string) {
  const fieldToSort = Object.keys(user);
  const arr: (string | number)[] = [];
  fieldToSort.forEach((field: string) => {
    if (field !== 'id') {
      arr.push(user[field]);
    }
  });
  return arr.some((field: string | number) => field!.toString()?.toLocaleLowerCase()
    .replace(/ё/g, 'е').includes(searchedValue.toLocaleLowerCase().replace(/ё/g, 'е')));
}

class UserData {
  user!: (UserType | null)[];

  data: UserType[];

  info: boolean;

  userInfo: UserType | null;

  isLoad: boolean;

  search: string;

  constructor() {
    makeAutoObservable(this);
    this.data = [];
    this.info = false;
    this.isLoad = true;
    this.userInfo = null;
    this.search = '';
  }

  userSet(item: (UserType | null)[]) {
    this.user = item;
  }

  closeModal() {
    this.info = false;
    this.userInfo = null;
  }

  getUserInfo(item: UserType) {
    this.userInfo = item;
    this.info = true;
  }

  getLog() {
    const timeout = 800; // иматация запроса на сервер
    setTimeout(() => {
      const arr: (UserType | null)[] = [];
      service.data.forEach((user: UserType) => {
        if (filterByText(user, this.search)) {
          arr.push(user);
        }
      });
      this.userSet(arr);
      this.isLoad = false;
    }, timeout);
  }

  getUsers() {
    service.getData().then((res: void) => res);
    this.getLog();
  }

  setSearch(value: string) {
    this.search = value;
  }
}

export default new UserData();
