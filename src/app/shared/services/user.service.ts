import { Injectable } from '@angular/core';

export class User{
  constructor(public userId: number,
    public name: string,
    public avatarUrl: string,
  ) {}
}

@Injectable()
export class UserService{
  constructor() {}

  private KEY: string = 'user'

  getUser(): User{
    return JSON.parse(localStorage.getItem(this.KEY))
  }

  setUser(user){
    localStorage.setItem(this.KEY, JSON.stringify(user));
  }
}