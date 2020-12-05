import React from 'react';
import { DetailComponent } from '../../components'

export default function Detail(locatin) {
  const id = locatin.match.params.id
  console.log(id)
  return (
    <div>
      <DetailComponent id={id} />
    </div>
  )
}