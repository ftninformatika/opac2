import { animate, query, stagger, style, transition } from '@angular/animations';

export function fadeOut(selector = ':leave', duration = 300) {
  return [
    transition('* => *', [
      query(selector, [
        style({ opacity: 1 }),
        stagger('50ms', [
          animate(duration, style({
            opacity: 0
          }))
        ])
      ], { optional: true })
    ])
  ];
}
