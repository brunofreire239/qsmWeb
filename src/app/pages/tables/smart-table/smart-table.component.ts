import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { SmartTableService } from '../../../@core/data/smart-table.service';
import { Funcionario } from '../../../model/Funcionario';

import { MotoqueiroService } from '../../../providers/motoqueiro.service';
import { OperadoraService } from '../../../providers/operadora.service';

@Component({
  selector: 'ngx-smart-table',
  templateUrl: './smart-table.component.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})
export class SmartTableComponent {

  motoqueiro: Funcionario = new Funcionario();
  operadora: Funcionario = new Funcionario();


  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmCreate:true,
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmSave:true,
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      id: {
        title: 'ID',
        type: 'number',
      },
      name: {
        title: 'Nome',
        type: 'string',
      },
    
    },
  };

  motoqueiros: LocalDataSource = new LocalDataSource();
  operadoras: LocalDataSource = new LocalDataSource();



  constructor(private service: SmartTableService 
              , private motoqueiroService: MotoqueiroService 
              , private operadoraService: OperadoraService) {

    motoqueiroService.listar().subscribe(data =>{
      this.motoqueiros.load(data);
    })
    
    operadoraService.listar().subscribe(data =>{
      this.operadoras.load(data);
    })

  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
  salvarMotoqueiro(event):void{
    this.motoqueiro.name = event.newData.name;
    this.motoqueiro.id = event.newData.id;
    this.motoqueiroService.salvar(this.motoqueiro).subscribe(data =>{
      console.log(data)
    })
    event.confirm.resolve();
    console.log(event)
  }

  salvarOperadora(event):void{
    this.operadora.name = event.newData.name;
    this.operadora.id = event.newData.id;
    this.operadoraService.salvar(this.operadora).subscribe(data =>{
      console.log(data)
    })
    event.confirm.resolve();
    console.log(event)
  }

}
