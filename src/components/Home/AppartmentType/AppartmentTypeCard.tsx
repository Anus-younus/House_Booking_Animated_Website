import React from 'react'

type AppartmentTypeCardPropType = {
    data: {
        id: number
        icon: string
        type: string
        number: number
    }
}

const AppartmentTypeCard = ({ data }: AppartmentTypeCardPropType) => {
    return (
        <div className='rounded-lg shadow-lg p-6 hover:scale-110 transition-all duration-300'>
            <img src={data.icon} alt={data.type} width={50} height={50} />
            <div className='mt-12'>
                <h1 className='text-lg font-bold'>{data.type}</h1>
                <p className='mt-2 text-sm text-gray-800'>{data.number} Properties</p>
            </div>
        </div>
    )
}

export default AppartmentTypeCard