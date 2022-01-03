import React from 'react'
import Link from 'next/link'

const Pagination = ({ total_page, page }) => {
    let pages = []
    for (var i = 1; i <= total_page; i++) {
        pages.push(i)
    }

    return (
        <div className="blog-pagination">
            <ul className="justify-content-center">
                {
                    pages.map((item, key) => {
                        console.log('awowow', page, item)
                        return (
                            <li className={page === item ? `active` : ``} key={key}>
                                <Link href={`?page=${item}`}><a>{item}</a></Link>
                            </li>
                        )
                    })
                }
                {/* <li><a href="#">1</a></li>
                <li className="active"><a href="#">2</a></li>
                <li><a href="#">3</a></li> */}
            </ul>
        </div>
    )
}

export default Pagination
