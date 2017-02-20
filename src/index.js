//import Observable from 'rxjs/Observable';
//import 'rxjs/add/observable/fromEvent';
//import Rx from 'rxjs/Rx'
//import { Observable } from 'rxjs/Observable';
//import 'rxjs/add/observable/fromEvent';

console.log("READY");
//console.log('READY in ' + (parseInt((Date.now() - window.startTime)/100)/10));

// const Observable = Rx.Observable;
import { Observable } from 'rxjs/Rx';

console.log(Observable);

const startButton = document.querySelector('#start');
const stopButton = document.querySelector('#stop');
const resetButton = document.querySelector('#reset');
const halfButton = document.querySelector('#half');
const quarterButton = document.querySelector('#quarter');

const start$ = Observable.fromEvent(startButton, 'click');
const stop$ = Observable.fromEvent(stopButton, 'click');
const reset$ = Observable.fromEvent(resetButton, 'click');
const half$ = Observable.fromEvent(halfButton, 'click');
const quarter$ = Observable.fromEvent(quarterButton, 'click');



const interval$ = Observable.interval(1000);
const intervalThatStops$ = interval$.takeUntil(stop$);

const data = {count: 10};
const inc = (acc) => ({count: acc.count + 1});
const reset = acc => data;

const intervalActions = (time) =>
    Observable.merge(
        Observable.interval(time)
            .takeUntil(stop$)
            .mapTo(inc),
        reset$.mapTo(reset));

const starter$ = Observable.merge(
    start$.mapTo(1000),
    half$.mapTo(500),
    quarter$.mapTo(250));

const incOrReset$ = Observable.merge(
    intervalThatStops$.mapTo(inc),
    reset$.mapTo(reset)
);

starter$
    .switchMap(intervalActions)
    .startWith(data) // set accumulator
    //.scan(acc=> { return { count: acc.count + 2}}, {count: 0})
    .scan((acc, curr) => curr(acc))
    .subscribe(x => console.log(x));

/*
 const startInterval$ = start$.switchMap(() => interval$)
 .takeUntil(Rx.Observable.fromEvent(stopButton, 'click'));
 //const startInterval$ = start$.switchMapTo(interval$);
 startInterval$.subscribe((x)=> console.log(x));
 */

