import { useLayoutEffect, useState } from 'react';
import { fromEvent, timer } from 'rxjs';
import { map, takeUntil, tap, switchMap, distinctUntilChanged, skipUntil } from 'rxjs/operators';

const useDragAndDrop = (selector, initialPosition) => {
  const [currentPosition, setCurrentPosition] = useState(initialPosition);

  const getInitialPosition = target => ({
    x: window.innerWidth / 2 - target.offsetWidth / 2,
    y: window.innerHeight / 2 - target.offsetHeight / 2,
  });

  const setInitialPosition = (initial, target) => {
    const el = target;
    const position = initial || getInitialPosition(target);

    if (position.reversed) {
      el.style.bottom = `${position.y}px`;
      el.style.right = `${position.x}px`;
    } else {
      el.style.top = `${position.y}px`;
      el.style.left = `${position.x}px`;
    }
  };

  const removeFocus = target => {
    const focused = document.querySelectorAll(`.rx-focus`);
    if (focused) {
      focused.forEach(item => {
        if (item.id !== target.id) {
          item.classList.remove(`rx-focus`);
        }
      });
    }
  };

  useLayoutEffect(() => {
    const target = document.querySelector(`${selector}`);

    if (target) {
      setInitialPosition(initialPosition, target);

      const mouseDown$ = fromEvent(target, `mousedown`);
      const mouseMove$ = fromEvent(document, `mousemove`);
      const mouseUp$ = fromEvent(document, `mouseup`);
      const mouseClick$ = fromEvent(document, `click`);

      const mousedrag = mouseDown$.pipe(
        skipUntil(timer(250)),
        distinctUntilChanged(),
        switchMap(md => {
          md.preventDefault();
          const startX = md.offsetX;
          const startY = md.offsetY;
          removeFocus(target);
          target.classList.add(`rx-focus`);
          return mouseMove$.pipe(
            map(mm => {
              mm.preventDefault();
              return {
                left: mm.clientX - startX,
                top: mm.clientY - startY,
              };
            }),
            takeUntil(
              mouseUp$.pipe(
                tap(mu => {
                  mu.preventDefault();
                  target.classList.remove(`rx-focus`);
                }),
              ),
            ),
          );
        }),
      );

      mousedrag.subscribe(pos => {
        target.style.top = `${pos.top}px`;
        target.style.left = `${pos.left}px`;
        target.style.bottom = ``;
        target.style.right = ``;
        setCurrentPosition(pos);
      });

      mouseClick$.subscribe(e => {
        e.stopPropagation();
      });
    }
  }, [selector]);

  return [currentPosition];
};

export default useDragAndDrop;
