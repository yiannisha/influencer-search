import React from 'react'

interface InstagramEmbedProps extends React.HTMLProps<HTMLDivElement> {
    username: string;
}

export default function InstagramEmbed(props: InstagramEmbedProps) {
  return (
    <div  className={props?.className}>
        {/* @ts-expect-error ingore */}
        <iframe className={`instagram-media instagram-media-rendered`} id="instagram-embed-0" src={`https://www.instagram.com/${props.username}/embed/`} allowtransparency="true" allowfullscreen="true" frameborder="0" height="581" data-instgrm-payload-id="instagram-media-payload-0" scrolling="no" style={{background: 'white', maxWidth: '540px', width: '99.375%', maxHeight: '100%', borderRadius: '3px', border: '1px solid rgb(219, 219, 219)', boxShadow: 'none', display: 'block', margin: '0px 0px 12px', minWidth: '326px', padding: '0px'}}></iframe>
    </div>
  )
}
