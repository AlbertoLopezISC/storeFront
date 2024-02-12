import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleItemComponent } from './article-item/article-item.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AlertComponent } from './alert/alert.component';



@NgModule({
  declarations: [ArticleItemComponent, AlertComponent],
  imports: [
    CommonModule, MatCardModule, MatButtonModule, MatIconModule
  ],
  exports: [ArticleItemComponent]
})
export class ComponentsModule { }
