import React from 'react'
import type { Country } from '../types/common.interface'

const CountryCard: React.FC<Country> = ({ name, region, flag }) => {
  return (
    <div className="col-md-6 country-wrapper" >
      <div className="country-card">
        <img
          src={flag}
          alt={name}
          className="img-fluid country-img"
        />
        <div className='text-start'>
          <div className="country-name">{name}</div>
          <div className="country-region">{region}</div>
        </div>
      </div>
    </div>
  )
}

export default CountryCard