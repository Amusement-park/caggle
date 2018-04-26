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

  getUser(): User{
    return JSON.parse(localStorage.getItem('user'))
  }

  setUser(user){
    localStorage.setItem('token', JSON.stringify(user));
  }
}