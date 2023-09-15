import React from 'react'

type Props = {
  id: string
}

const page = (props: Props) => {
  return (
    <div>
        <h1>{props.id}</h1>
    </div>
  )
}

export default page