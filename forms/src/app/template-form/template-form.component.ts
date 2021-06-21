import { Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/operators';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {


  usuario: any = {
    nome: null,
    email: null
  }
  httpClient: any;

  onSubmit(form: any){
    console.log(form);
    
  }

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  consultaCEP(cep: any){
    
    cep = cep.replace(/\D/g, '');

    if(cep != ""){

      var validacep = /^[0-9]{8}$/;

      if(validacep.test(cep)){
        this.httpClient.get(`https://viacep.com.br/ws/${cep}/json`)
          .map((data: { json: () => any; }) => data.json())
          .subscribe((data: any) => { console.log(data); });
      }

    }

  }

}
