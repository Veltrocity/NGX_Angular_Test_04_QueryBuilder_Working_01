import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { QueryBuilderModule } from 'angular2-query-builder';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';

@NgModule({
  imports: [CommonModule, TranslateModule, AboutRoutingModule, QueryBuilderModule],
  declarations: [AboutComponent]
})
export class AboutModule {}
