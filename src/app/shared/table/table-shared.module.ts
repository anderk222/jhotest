import { NgModule } from '@angular/core';
import { QueryParamsTableComponent } from './query-params-table/query-params-table.component';
import { CommonModule } from '@angular/common';


@NgModule({
    imports: [CommonModule],
    exports: [QueryParamsTableComponent],
    declarations: [QueryParamsTableComponent],
    providers: [],
})
export class TableSharedModule { }
