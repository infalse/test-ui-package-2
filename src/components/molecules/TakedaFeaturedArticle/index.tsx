import classNames from 'classnames';
import * as React from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '../../atoms/Icon';

export interface TakedaFeaturedArticleProps {
  /**
   * Card link url
   * @default undefined
   */
  url?: string;
  /**
   * Card title
   * @default undefined
   */
  title?: string;
  /**
   * Media url
   * @default undefined
   */
  media?: string;
}

export function PrevComponent({ onClick, isStart }: { onClick: () => {}; isStart: boolean }) {
  return (
    <button
      onClick={onClick}
      className={classNames('absolute top-[calc(50%-20px)] left-[-10px] m-[10px]', {
        'cursor-default text-medium-grey': isStart
      })}
    >
      <ChevronLeftIcon className="w-[12px] h-[21px]" />
    </button>
  );
}

export function NextComponent({ onClick, isEnd }: { onClick: () => {}; isEnd: boolean }) {
  return (
    <button
      className={classNames('absolute top-[calc(50%-20px)] right-[-10px] m-[10px]', {
        'cursor-default text-medium-grey': isEnd
      })}
      onClick={onClick}
    >
      <ChevronRightIcon className="w-[12px] h-[21px]" />
    </button>
  );
}

export const TakedaFeaturedArticle: React.FC<TakedaFeaturedArticleProps> = props => {
  const media = props.media;
  const title = props.title;
  const titleUrl = props.url;
  const date = '05.11.2022';
  const category = {};

  return (
    <div className="relative w-full h-full pb-[60px] max-md:pb-80px group">
      <header className="overflow-hidden block h-52 lg:h-72 xl:h-80 header-takeda-featured-article">
        <img
          src={media}
          title="Title of image"
          alt="alt text here"
          className="w-full h-full transition-all group-hover:scale-105 object-cover"
        />
      </header>
      <div className="absolute bg-[#EDF2F4] bottom-0 left-0 right-0 mx-[5%] p-[25px] max-sm:p-[15px]  max-lg:p-[15px] min-h-[100px] flex flex-col">
        {date || category ? (
          <div className="flex flex-wrap text-medium-grey mb-[10px] break-all">
            <p
              className="max-sm:text-[12px] max-lg:text-[12px] text-[14px] leading-tight"
              data-sb-field-path=".date"
            >
              {date}
            </p>
          </div>
        ) : null}
        <h3 className="text-[18px] max-sm:text-[15px] max-lg:text-[14px] min-h-[40px] flex items-center tracking-normal">
          {titleUrl ? (
            <a
              data-sb-field-path=".titleUrl#@href"
              className="hover:text-takeda-red line-clamp-3"
              href={titleUrl}
            >
              {title}
            </a>
          ) : (
            <span data-sb-field-path=".title" className="line-clamp-3">
              {title}
            </span>
          )}
        </h3>
      </div>
    </div>
  );
};
