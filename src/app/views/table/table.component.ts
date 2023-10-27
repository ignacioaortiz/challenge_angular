import { Component, HostBinding, ViewChild } from '@angular/core';
import { IgxGridComponent } from 'igniteui-angular';
import { DATA } from '../../data/nwindData';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  @ViewChild('grid1', { read: IgxGridComponent, static: true })
  public grid1!: IgxGridComponent;

  public data!: any[];

  public size = 'large';

  constructor(private router: Router) {}
  public ngOnInit(): void {
    this.data = DATA;
  }

  @HostBinding('style.--ig-size')
  protected get sizeStyle() {
    return `var(--ig-size-${this.size})`;
  }

  public selectSize(event: any) {
    this.grid1.reflow();
  }

  public formatDate(val: any) {
    if (val !== 'Select All') {
      return new Intl.DateTimeFormat('en-US').format(val);
    } else {
      return val;
    }
  }

  public formatCurrency(val: string) {
    return parseInt(val, 10).toFixed(2);
  }

  back() {
    this.router.navigate(['/home']);
  }
}
