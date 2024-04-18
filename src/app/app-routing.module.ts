import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormProdutosComponent } from './form-produtos/form-produtos.component';
import { TabelaProdutosComponent } from './tabela-produtos/tabela-produtos.component';

const routes: Routes = [
  { path: 'tabela', component: TabelaProdutosComponent },
  { path: 'form', component: FormProdutosComponent },
  { path: '', redirectTo: '/tabela', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }