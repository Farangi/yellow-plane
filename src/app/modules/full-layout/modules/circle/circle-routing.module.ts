import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CircleComponent } from './pages/circle/circle.page';
import { CirclesComponent } from './pages/circles/circles.page';
import { CircleCategoriesComponent } from './pages/circle-categories/circle-categories.page';
import { CircleOpenCircleComponent } from './pages/circle-open-circle/circle-open-circle.page';
import { CircleOpenTopicComponent } from './pages/circle-open-topic/circle-open-topic.page';
import { CircleCreateTopicComponent } from './pages/circle-create-topic/circle-create-topic.page';
import { CircleCreateCircleComponent } from './pages/circle-create-circle/circle-create-circle.page';

const routes: Routes = [
  {
    path: '',
    component: CircleComponent,
    children: [
      {
        path: '',
        component: CirclesComponent
      },
      {
        path: 'categories',
        component: CircleCategoriesComponent
      },
      {
        path: 'circle',
        children: [
          {
            path: ':id',
            children: [
              {
                path: '',
                component: CircleOpenCircleComponent
              },
              {
                path: 'topic',
                children: [
                  {
                    path: ':topicId',
                    component: CircleOpenTopicComponent
                  },
                  {
                    path: 'create',
                    component: CircleCreateTopicComponent
                  }
                ]
              }
            ]
          },
          {
            path: 'create',
            component: CircleCreateCircleComponent
          }
        ]
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CircleRoutingModule { }
