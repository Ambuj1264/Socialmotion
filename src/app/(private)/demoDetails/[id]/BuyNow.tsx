"use client"
import { Button } from '@/components/ui/moving-border'
import { useRouter } from 'next/navigation'
import React from 'react'

const BuyNow = () => {
    const router = useRouter();
    const handler =()=>{
        router.push("/buy")
    }
  return (
    <>
     <Button
        borderRadius="1.75rem"
        className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
        onClick={handler}
        style={{
            height:"40px",
            borderRadius:"1.7rem"
        }}
      >
       Buy Now
      </Button>

    </>
  )
}

export default BuyNow