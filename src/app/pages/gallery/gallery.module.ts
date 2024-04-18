import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../components/components.module'
import { Gallery } from './gallery.component'

const routes = [
  {
    path: '',
    component: Gallery,
  },
]

@NgModule({
  declarations: [Gallery],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [Gallery],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class GalleryModule {}
