import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Pagination = ({ total_page, page }) => {
    let pages = []
    for (var i = 1; i <= total_page; i++) {
        pages.push(i)
    }

    const router = useRouter()

    let params = []
    if (router.query) {
        for (var x in router.query) {
            console.log(x)
            if (x != 'page') params.push(`${x}=${router.query[x]}`)
        }
    }

    console.log(params)

    return (
        <div className="blog-pagination">
            <ul className="justify-content-center">
                {
                    pages.map((item, key) => {
                        // console.log('awowow', page, item)
                        let link = `${router.pathname}`
                        if (params.length > 0) link += `?${params.join('&')}&page=${item}`
                        else link += `?page=${item}`
                        if (page === item) link = '#'

                        return (
                            <li className={page === item ? `active` : ``} key={key}>
                                <Link href={link}><a>{item}</a></Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Pagination
