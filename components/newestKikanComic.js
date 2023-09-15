import { linkList } from "./kikanComics";
import getSanitizeHtml from '../lib/getSanitizeHTML';
import New from './global/new';

export default function NewestKikanComic({ ad }) {
  const item = linkList[linkList.length - 1];

  return (
    <div>
      <p className="bold">最新刊</p>
      <div style={{ paddingBottom: '0.5rem' }}>
          <New />
      </div>
      <div
          dangerouslySetInnerHTML={{
              __html: getSanitizeHtml(ad ? item.html : ''),
          }}
      ></div>
      {ad ? (
        <a
          href={item.url}
          className="underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {item.title}(Amazon)
        </a>
      ) : (
        <span>{item.title}</span>
      )}
    </div>
  )
}