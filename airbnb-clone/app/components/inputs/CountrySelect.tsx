'use client'

import Select from 'react-select'

import useCountries from '@/app/hooks/useCountries'

export type CountrySelectValue = {
  flag: string
  label: string
  latlng: number[]
  region: string
  value: string
}

interface CountrySelectProps {
  value?: CountrySelectValue
  onChange: (value: CountrySelectValue) => void
  placeholder?: string
}

const CountrySelect: React.FC<CountrySelectProps> = ({
  value,
  onChange,
  placeholder
}) => {

  const { getAll } = useCountries()

  return (
    <div>CountrySelect</div>
  )
}

export default CountrySelect