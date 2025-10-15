import { trigger, transition, style, query, group, animate } from '@angular/animations';

export const slideInAnimation =
  trigger('routeAnimations', [
    transition('* <=> *', [
      query(':enter, :leave', [
        style({ position: 'fixed', width: '100%' })
      ], { optional: true }),
      group([
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(10%)' }),
          animate('400ms cubic-bezier(0.25, 0.8, 0.25, 1)',
            style({ opacity: 1, transform: 'translateY(0%)' }))
        ], { optional: true }),
        query(':leave', [
          animate('300ms ease-out',
            style({ opacity: 0, transform: 'translateY(-10%)' }))
        ], { optional: true })
      ])
    ])
  ]);