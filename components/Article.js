import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Article = ({ article }) => {
  return (
    <div>
      <h3 className='section-title-front cl-sec mb-4'>
        <Link href={`/artikel`}>
          <a>
            <i className='bi bi-calendar-check'></i> Artikel
          </a>
        </Link>
      </h3>
      <div className='agenda'>
        {article?.map((item, key) => {
          // const tanggal = item.created_at.split("T")[0]
          return (
            <div className='post-item clearfix mb-2' key={key}>
              <div className='img'>
                <Image
                  src={item.image}
                  alt={item.title}
                  layout='fill'
                  objectFit='cover'
                />
              </div>
              <div className='agenda-text'>
                <h5>
                  <Link href={`/artikel/${item.slug}`}>
                    <a>{item.title}</a>
                  </Link>
                </h5>
                <p>{item.title.substring(0, 65)}</p>
              </div>
              {/* <time dateTime={tanggal}>{tanggal}</time> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Article;
