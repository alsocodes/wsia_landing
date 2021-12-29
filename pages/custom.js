import React from 'react'
import { useRouter } from 'next/router'

const Index = (props) => {
    const router = useRouter()
    const { custom } = router.query
    return (
        <div>
            I am cutom {custom}
        </div>
    )
}

export default Index
