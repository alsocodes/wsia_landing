import React from 'react'
import { useRouter } from 'next/router'

const Index = (props) => {
    const router = useRouter()
    const { pid } = router.query
    return (
        <div>
            I am heres {pid}
        </div>
    )
}

export default Index
