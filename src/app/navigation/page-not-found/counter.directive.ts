import {Directive, Input, Output, EventEmitter, OnChanges, OnDestroy} from '@angular/core'

import {Subject, Subscription, timer} from 'rxjs'
import {switchMap, take, tap} from 'rxjs/operators'

@Directive({
    selector: '[counter]'
})
export class CounterDirective implements OnChanges, OnDestroy {

    private counterSource = new Subject<any>()
    private subscription = Subscription.EMPTY

    @Input() counter!: number
    @Input() interval!: number
    @Output() value = new EventEmitter<number>()

    constructor() {
        this.subscription = this.counterSource.pipe(
            switchMap(({interval, count}) =>
                timer(0, interval).pipe(
                    take(count),
                    tap(() => this.value.emit(--count))
                )
            )
        ).subscribe()
    }

    ngOnChanges() {
        this.counterSource.next({count: this.counter, interval: this.interval})
    }

    ngOnDestroy() {
        this.subscription.unsubscribe()
    }

}
