import {trigger, stagger, animate, style, group, query, transition} from '@angular/animations';

// slideIn is a transition animation to allow a page or element to "slide in" from a side of the screen
// direction is a placeholder for which side of the screen the page will slide in from (either left or right)
// placeholders are defined for each path in routeTransition
const slideIn = direction => [
    query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
    group([
        query(':enter', [
            style({ transform: `translateX(${direction === 'left' ? '-' : ''}100%)` }),
            animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
        ], { optional: true }),
        query(':leave', [
            style({ transform: 'translateX(0%)' }),
            animate('0.5s ease-in-out', style({ transform: `translateX(${direction === 'left' ? '' : '-'}100%)` }))
        ], { optional: true }),
        // stagger allows the elements with the class .delay to slide in with a bit of a delay from the page
        query(':enter .delay', stagger(1, [
            style({ transform: `translateX(${direction === 'left' ? '-' : ''}100%)` }),
            animate('1s ease-in-out', style({ transform: 'translateX(0%)', opacity: 1 })),
        ]), { optional: true }),
        query(':leave .delay', stagger(1, [
            style({ transform: 'translateX(0%)' }),
            animate('1s ease-in-out', style({ transform: `translateX(${direction === 'left' ? '' : '-'}100%)`, opacity: 1 })),
        ]), { optional: true })
    ])
];

// specifies the direction each page will slide in from depending on the path
export const routerTransition = trigger('routerTransition', [
    transition('gradients => presets', slideIn('right')),
    transition('presets => colors', slideIn('right')),
    transition('colors => presets', slideIn('left')),
    transition('presets => gradients', slideIn('left')),
    transition('* => gradients', slideIn('right'))
]);
