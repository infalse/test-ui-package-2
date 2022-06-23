import * as React from 'react';
import classNames from 'classnames';
import { useSwipeable } from 'react-swipeable';

function getDataAttrs(props: any = {}): any {
  return Object.entries(props).reduce((dataAttrs: any, [key, value]) => {
    if (key.startsWith('data-')) {
      dataAttrs[key] = value;
    }
    return dataAttrs;
  }, {});
}

const themeStyle: any = {
  screens: {
    '2xl': 1536,
    xl: 1280,
    lg: 1024,
    md: 768,
    sm: 640,
    xs: 480
  }
};

export const DIRECTION_TYPE = {
  next: 'NEXT',
  prev: 'PREV'
};

export interface onCarouselScrollEndProps {
  firstVisibleIndex?: number;
  lastVisibleIndex?: number;
  direction?: string;
}

export const TakedaCarousel = (props: any) => {
  const items =
    props.items && props.items.length
      ? props.items.map((item: any, index: number) => {
          return { ...item, defaultIndex: index };
        })
      : [];
  const slidable = items.length > 1;

  const ItemComponent = props.ItemComponent;
  const isInfinite = props.isInfinite || false;
  const defaultPerPage = getCorrectPerPage(props.perPage, items.length, isInfinite);
  const defaultPerMove =
    Math.floor(props.perMove) > 0 && Math.floor(props.perMove) <= defaultPerPage
      ? Math.floor(props.perMove)
      : 1;
  const defaultSlidesGap =
    typeof props.slidesGap === 'number' && props.slidesGap >= 0 ? props.slidesGap : 10;
  const transitionTime = typeof props.transitionTime === 'number' ? props.transitionTime : 0.2;
  const hasAutoScroll = props.hasAutoScroll || false;
  const autoScrollDelay =
    typeof props.autoScrollDelay === 'number' && props.autoScrollDelay >= 1
      ? props.autoScrollDelay * 1000
      : 10000;
  const hasNavigation = Boolean(props.hasNavigation);
  const PrevComponent = props.PrevComponent;
  const NextComponent = props.NextComponent;

  const sliderRef = React.useRef(null);

  const breakpoints =
    props.breakpoints && props.breakpoints.length
      ? props.breakpoints.sort(
          (a: any, b: any) => themeStyle.screens[b.breakpoint] - themeStyle.screens[a.breakpoint]
        )
      : [];

  const onCarouselScrollEnd = props.onCarouselScrollEnd;

  const [slides, setSlides] = React.useState(() =>
    getInitialSlides(defaultPerPage, defaultPerMove)
  );
  const [activeIndex, setActiveIndex] = React.useState(
    isInfinite && slides.length > defaultPerPage ? defaultPerMove : 0
  );
  const [needTransition, setNeedTransition] = React.useState(isInfinite ? false : true);
  const [direction, setDirection] = React.useState('');
  const [sliderWidth, setSliderWidth] = React.useState(0);
  const [_, setTimeoutId] = React.useState(null);
  const [isScrolling, setIsScrolling] = React.useState(false);

  const [perPage, setPerPage] = React.useState(defaultPerPage);
  const [perMove, setPerMove] = React.useState(defaultPerMove);
  const [slidesGap, setSlidesGap] = React.useState(defaultSlidesGap);

  React.useEffect(() => {
    setSliderWidth((sliderRef.current as any).offsetWidth);
    setSlides((slides: any) => getSlides(defaultPerPage, defaultPerMove, slides));
    setParameters();
    window.removeEventListener('resize', setParameters);
    window.addEventListener('resize', setParameters);

    setAutoscrollTimer();

    return () => {
      window.removeEventListener('resize', setParameters);
      setTimeoutId(currentTimeoutId => {
        clearTimeout(currentTimeoutId as any);
        return null;
      });
    };
  }, [props]);

  function setAutoscrollTimer() {
    if (hasAutoScroll) {
      setTimeoutId(currentTimeoutId => {
        clearTimeout(currentTimeoutId as any);
        return null;
      });
      if (slides.length > 1) {
        let newTimeoutId = setTimeout(() => {
          slideNext();
        }, autoScrollDelay);
        setTimeoutId(newTimeoutId as any);
      }
    }
  }

  const handlers = useSwipeable({
    onSwipedLeft: () => slideNext(),
    onSwipedRight: () => slidePrev()
  });

  function getCorrectPerPage(perPage: any, itemsLength: any, isInfinite: any) {
    if (perPage && perPage >= 1) {
      if (isInfinite) {
        if (perPage <= itemsLength) {
          return perPage;
        } else {
          return itemsLength;
        }
      } else {
        return perPage;
      }
    }
  }

  function getInitialSlides(_: any, perMove: any) {
    if (isInfinite && items && items.length > 0) {
      return [...items.slice(-perMove), ...items, ...items.slice(0, perMove)];
    } else {
      return items;
    }
  }

  function getSlides(_: any, perMove: any, slides: any) {
    if (isInfinite && items && items.length > 0) {
      const defaultIndexOfActiveSlide = slides[activeIndex].defaultIndex;
      const movedItems = [
        ...items.slice(defaultIndexOfActiveSlide),
        ...items.slice(0, defaultIndexOfActiveSlide)
      ];

      return [...movedItems.slice(-perMove), ...movedItems, ...movedItems.slice(0, perMove)];
    } else {
      return items;
    }
  }

  function setParameters() {
    if ((sliderRef.current as any)?.offsetWidth) {
      setSliderWidth((sliderRef.current as any).offsetWidth);
    }

    if (!breakpoints || breakpoints.length <= 0) {
      return;
    }

    setPerPage(defaultPerPage);
    setPerMove(defaultPerMove);
    setSlidesGap(defaultSlidesGap);
    setSlides((slides: any) => getSlides(defaultPerPage, defaultPerMove, slides));

    const { innerWidth: width } = window;
    for (let i = 0; i < breakpoints.length; i++) {
      const breakpoint = themeStyle.screens[breakpoints[i].breakpoint];
      const perPage = Number(breakpoints[i].perPage);
      const perMove = Number(breakpoints[i].perMove);
      const slidesGap = Number(breakpoints[i].slidesGap);

      if (breakpoint && width <= breakpoint) {
        const newPerPage = getCorrectPerPage(perPage, items.length, isInfinite);
        const newPerMove =
          Math.floor(perMove) && Math.floor(perMove) > 0 && Math.floor(perMove) <= perPage
            ? Math.floor(perMove)
            : 1;
        const newSlidesGap = slidesGap ? slidesGap : defaultSlidesGap;
        setPerPage(newPerPage);
        setPerMove(newPerMove);
        setSlidesGap(newSlidesGap);

        setSlides((slides: any) => getSlides(newPerPage, newPerMove, slides));
      }
    }
  }

  function sliderStyle() {
    if (needTransition) {
      return {
        transform: `translateX(${transLateVal()})`,
        transition: `transform ${transitionTime}s ease-in-out`
      };
    }

    return {
      transform: `translateX(${transLateVal()})`
    };
  }

  function transLateVal() {
    if (!sliderWidth) {
      return '-100%';
    }
    return `calc( ( (${Number(perPage) -
      1} * ${slidesGap}px -  ${sliderWidth}px)/${perPage} - ${slidesGap}px ) * ${activeIndex})`;
  }

  function handleTranslateEnd() {
    if (isInfinite && slides.length > perPage) {
      switch (direction) {
        case DIRECTION_TYPE.next:
          vaildNextSlider();
          break;
        case DIRECTION_TYPE.prev:
          vaildPrevSlider();
          break;
        default:
          break;
      }
    }
    setIsScrolling(false);

    try {
      if (onCarouselScrollEnd) {
        onCarouselScrollEnd({
          firstVisibleIndex: slides[activeIndex].defaultIndex,
          lastVisibleIndex: slides[Math.floor(activeIndex + perPage - 1)].defaultIndex,
          direction: direction
        });
      }
    } catch (err) {
      console.log(err);
    }
  }

  function vaildNextSlider() {
    let _current = activeIndex;
    _current -= perMove;
    let clearSlides = slides.slice(Math.ceil(perMove), slides.length - Math.ceil(perMove));
    let _slides = [...clearSlides, ...clearSlides.slice(0, Math.ceil(perMove))].slice(
      Math.ceil(perMove)
    );
    _slides = [..._slides.slice(-perMove), ..._slides, ..._slides.slice(0, perMove)];
    setNeedTransition(false);
    setActiveIndex(_current);
    setSlides(_slides);
  }

  function vaildPrevSlider() {
    let _current = activeIndex;
    _current += perMove;
    let clearSlides = slides.slice(Math.ceil(perMove), slides.length - Math.ceil(perMove));
    let _slides = [...clearSlides.slice(-Math.ceil(perMove)), ...clearSlides].slice(
      0,
      clearSlides.length
    );
    _slides = [..._slides.slice(-perMove), ..._slides, ..._slides.slice(0, perMove)];
    setNeedTransition(false);
    setActiveIndex(_current);
    setSlides(_slides);
  }

  function slidePrev() {
    if (slides.length > perPage && !isScrolling && slidable) {
      let _current = activeIndex - perMove;
      if (_current < 0) {
        return;
      }
      setIsScrolling(true);
      setNeedTransition(true);
      setActiveIndex(_current);
      setDirection(DIRECTION_TYPE.prev);
      setAutoscrollTimer();
    }
  }

  function slideNext() {
    if (slides.length > perPage && !isScrolling && slidable) {
      let _current = activeIndex + perMove;
      if (_current > slides.length - 1) {
        return;
      }
      setIsScrolling(true);
      setNeedTransition(true);
      setActiveIndex(_current);
      setDirection(DIRECTION_TYPE.next);
      setAutoscrollTimer();
    }
  }

  function keyDownHandler(e: any) {
    if (e.keyCode == 37) {
      // left
      slidePrev();
    } else if (e.keyCode == 39) {
      // right
      slideNext();
    }
  }

  return (
    <div {...getDataAttrs(props)} className={classNames('w-[100%]', props.className)}>
      <div
        ref={sliderRef}
        tabIndex={0}
        onKeyDown={keyDownHandler}
        className="takeda-carousel-focus relative overflow-hidden w-[100%]"
      >
        {slides.length > 0 && (
          <ul
            role="region"
            aria-roledescription="carousel"
            className="w-full flex "
            {...handlers}
            style={sliderStyle()}
            onTransitionEnd={handleTranslateEnd}
          >
            {slides.map((item: any, index: any) => (
              <li
                data-default-index={item.defaultIndex}
                role="group"
                aria-roledescription="slide"
                aria-hidden={!(index >= activeIndex && index < activeIndex + perPage)}
                onTransitionEnd={e => e.stopPropagation()}
                key={index}
                className={classNames('flex items-center break-words justify-center ')}
                style={{
                  flexShrink: 0,
                  width: `calc((${sliderWidth ? `${sliderWidth}px` : '100%'} - ${Number(perPage) -
                    1} * ${slidesGap}px)/${perPage})`,
                  marginRight: slidesGap + 'px'
                }}
              >
                {ItemComponent && (
                  <ItemComponent
                    data-sb-field-path={`.${item.defaultIndex}`}
                    tabIndex={
                      index >= activeIndex && index < Math.floor(activeIndex + perPage) ? 0 : -1
                    }
                    {...item}
                  />
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
      {PrevComponent && slidable && (
        <PrevComponent onClick={slidePrev} isStart={activeIndex - perMove < 0} />
      )}
      {NextComponent && slidable && (
        <NextComponent
          onClick={slideNext}
          isEnd={activeIndex + perMove > slides.length - 1 || slides.length <= perPage}
        />
      )}
      {!isInfinite && hasNavigation && (
        <SliderNavigation
          slidesCount={items.length}
          perPage={perPage}
          perMove={perMove}
          activeIndex={activeIndex}
          onNavClick={(n: any) => {
            setActiveIndex(n);
          }}
        />
      )}
    </div>
  );
};
function SliderNavigation({ slidesCount, perPage, perMove, onNavClick, activeIndex }: any) {
  let navItems = [];
  for (let i = 0; i < Math.ceil((slidesCount - perPage) / perMove) + 1; i++) {
    navItems.push(
      <button
        key={i}
        className={classNames(
          'w-[9px] h-[9px] border-[1px] border-takeda-theme-light rounded-full mx-[4px] hover:bg-takeda-theme-light',
          {
            'bg-takeda-theme-light': activeIndex === i
          }
        )}
        onClick={() => onNavClick(i * perMove)}
      ></button>
    );
  }
  return <div className="m-[30px] flex justify-center">{navItems}</div>;
}
