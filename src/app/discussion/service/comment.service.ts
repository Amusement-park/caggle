import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


export class Comment{
  constructor(public commentId: number
    ,public relationId: string
    ,public commentType: string
    ,public comment: string
    ,public author: string
    ,public regDate: Date
    ,public editDate: Date) {}
}