import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Pagination from './Pagination';
import { useRouter } from 'next/router';

const Blogs = ({ post, sub }) => {
  const router = useRouter();
  const params = router.query;
  const page = params.page ? parseInt(params.page) : 1;
  return (
    <div className=''>
      {post?.rows?.map((item, key) => {
        const tanggal = item.created_at.split('T')[0];
        return (
          // <div className="col-lg-6">
          <article className='entry' key={key}>
            <div className='entry-img'>
              <Image
                src={item.image}
                alt={item.title}
                layout='fill'
                objectFit='cover'
              />
            </div>

            <h2 className='entry-title'>
              <Link href={`/${sub}/${item.slug}`}>{item.title}</Link>
            </h2>

            <div className='entry-meta'>
              <ul>
                <li className='d-flex align-items-center'>
                  <i className='bi bi-person'></i>{' '}
                  <a href='#'>{item.user.name}</a>
                </li>
                <li className='d-flex align-items-center'>
                  <i className='bi bi-clock'></i>{' '}
                  <a href='#'>
                    <time dateTime={tanggal}>{tanggal}</time>
                  </a>
                </li>
                {/* <li className="d-flex align-items-center"><i className="bi bi-chat-dots"></i> <a href="blog-single.html">12 Comments</a></li> */}
              </ul>
            </div>

            <div className='entry-content'>
              <p>{item.excerpt}</p>
              <div className='read-more'>
                <Link href={`/${sub}/${item.slug}`}>
                  <a>Read More</a>
                </Link>
              </div>
            </div>
          </article>
          // </div>
        );
      })}

      <Pagination total_page={post.total_page} page={page} />
    </div>
  );
};

export default Blogs;
