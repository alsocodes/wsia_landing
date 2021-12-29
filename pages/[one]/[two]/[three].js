import React from 'react'
import { useRouter } from 'next/router'

const Index = (props) => {
    const router = useRouter()
    const { one, two, three } = router.query
    return (
        <div>
            I am heres {one}, {two}, {three}
        </div>
    )
}

export default Index
