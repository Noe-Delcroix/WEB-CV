import React from 'react';

function GridElement({ softwareName, imageUrl }) {
    return (
        <div className='shadow-xl bg-[#F4F0F0] hover:scale-110 duration-500 py-4'>
            <img className='w-20 mx-auto' src={imageUrl} alt={`${softwareName} icon`} />
            <p className='mt-4'>{softwareName}</p>
        </div>
    );
}

export default GridElement;