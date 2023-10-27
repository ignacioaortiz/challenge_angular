import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./views/home/home.module').then((m) => m.HomeModule),
    data: { title: 'Inicio' },
  },
  {
    path: 'form',
    loadChildren: () =>
      import('./views/form/form.module').then((m) => m.FormModule),
  },
  {
    path: 'table',
    loadChildren: () =>
      import('./views/table/table.module').then((m) => m.TableModule),
    data: { title: 'Tabla' },
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
