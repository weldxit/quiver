import React from 'react'
import Image from 'next/image'

export default function SingleArticle() {
   
  return (
    <div>
        <h1> This is the Full headline for the news, An outstanding perfomance delivered by ruturaj gaikward</h1>
        <div> Social Link Sharings </div>
        <div>
            <Image src={'/images/mr-robot.jpg'} height={500} width={600} alt="image"/>
            <p>Some image metadata</p>
        </div>
        <iframe src={`https://www.youtube.com/embed/${code}`} frameborder="0"></iframe>
    </div>
  )
}
