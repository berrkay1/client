import React from 'react'

const Catogories = () => {


    const catagoryArr = ['kitap','içeçek','yemek','kitap','içeçek','yemek','kitap','içeçek','yemek','kitap','içeçek','yemek',];

    return (
        <ul className='flex gap-4 flex-col '>
            {
                catagoryArr.map((item,idx)=>(
                    <li className='text-white bg-green-700 px-6 py-10 cursor-pointer hover:bg-pink-600 transition-all text-center min-w-[145px]'>{item}</li>
                ))
            }
           
        </ul>
    )
}

export default Catogories