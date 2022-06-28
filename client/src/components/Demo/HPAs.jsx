import React from 'react'

export const HPAs = ({hpas}) => {
  return (
    <ul>
    {hpas.map((hpas, index) =>
                <li key={index}>{hpas}</li>)}
</ul>
  )
}
