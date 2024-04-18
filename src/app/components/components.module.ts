import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { Question13 } from './question13/question13.component'
import { FeatureCard3 } from './feature-card3/feature-card3.component'
import { FeatureCard } from './feature-card/feature-card.component'
import { FeatureCard1 } from './feature-card1/feature-card1.component'
import { Question12 } from './question12/question12.component'
import { Question14 } from './question14/question14.component'
import { FeatureCard4 } from './feature-card4/feature-card4.component'
import { FeatureCard2 } from './feature-card2/feature-card2.component'
import { NavigationLinks } from './navigation-links/navigation-links.component'
import { Question1 } from './question1/question1.component'
import { Question11 } from './question11/question11.component'

@NgModule({
  declarations: [
    Question13,
    FeatureCard3,
    FeatureCard,
    FeatureCard1,
    Question12,
    Question14,
    FeatureCard4,
    FeatureCard2,
    NavigationLinks,
    Question1,
    Question11,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    Question13,
    FeatureCard3,
    FeatureCard,
    FeatureCard1,
    Question12,
    Question14,
    FeatureCard4,
    FeatureCard2,
    NavigationLinks,
    Question1,
    Question11,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule {}
