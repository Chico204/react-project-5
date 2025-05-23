import React from 'react';

const Menu = ({ items }) => {
  return (
    <div className='section-center w-[90vw] my-0 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {items.map((menuItem)=> {
            const {id, title, img, desc, price} = menuItem
            return(
                <article key={id} className='menu-item grid gap-1 '>
                    <img src={img} alt={title} className='object-cover h-[200px] w-[100%] border-4 border-yellow-600' />
                    <div className='item-info'>
                        <header className='flex justify-between items-center'>
                            <h4 className='mb-0.5 text-transform: capitalize'>{title}</h4>
                            <h4 className='price text-yellow-600'>${price}</h4>
                        </header>
                          <p className='item-text pt-1 text-gray-600'>{desc}</p>
                    </div>

                </article>
            )
        })}
    </div>
  );
};

export default Menu;