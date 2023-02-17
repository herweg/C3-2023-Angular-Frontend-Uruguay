import { Injectable } from '@angular/core';
import { TransferModel } from '../../interfaces/transfer.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TransferService {

  private url: string = 'http://localhost:3000/transfer'
  
  constructor(private http: HttpClient) { }

  createTransfer(transfer: TransferModel) {
    return this.http
      .post<TransferModel>(`${this.url}/create`, transfer)
  }
}
