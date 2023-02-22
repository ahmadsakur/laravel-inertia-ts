import React from 'react';
import { truncateString } from '@/utils/useStringFormatter';
import { formatCurrency, setLiraPrice, setRupiahPrice } from '@/utils/useCurrencyUtils';

const Product = ({ data }: any) => {
    console.log(data);
    const { name, id, price, media } = data;
    const coverImage = media.find((item: any) => item.role === 'MASTER').url;
    // const router = useRouter();
    // const region = router.pathname.split('/')[2];

    const region = 'id';

    const getDiscount = (price: any) => {
        if (region === 'id') {
            return setRupiahPrice(price);
        } else if (region === 'tr') {
            return setLiraPrice(price);
        } else return;
    };

    // const goToGameDetail = () => {
    //   router.push(`/product/${region}/${id}`);
    // };
    return (
        <div
            className='w-full min-w-[8rem] snap-start'
            // onClick={goToGameDetail}
        >
            <div
                className='group group relative aspect-square w-full rounded-md bg-cover bg-center shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:bg-contain'
                style={{
                    backgroundImage: `url(${coverImage})`,
                }}>
                <div className='absolute top-2 left-2 right-2 flex flex-col gap-2'>
                    {price.discountText && (
                        <div className='w-fit rounded-sm bg-blue-600 p-2 text-xs' color='blue'>
                            {price.discountText}
                        </div>
                    )}

                    {price.upsellText && (
                        <div className='w-fit rounded-sm bg-yellow-400 p-2 text-xs' color='yellow'>
                            <div>{price.upsellText}</div>
                        </div>
                    )}
                </div>

                <div className='absolute bottom-0 left-0 h-full w-full group-hover:hidden xl:bg-black xl:bg-opacity-30'></div>
            </div>
            <div className='flex flex-col justify-between py-2 md:min-h-[8rem]'>
                <div className='text-xs font-semibold text-white md:text-sm'>{truncateString(name, 40)}</div>
                {price ? (
                    <div className='item-center flex justify-between py-2'>
                        <div className='flex flex-col items-start justify-between'>
                            <div className='text-xs text-gray-400 line-through'>{price.basePrice}</div>
                            <div className='text-xs font-semibold text-white'>
                                {getDiscount(formatCurrency(price.discountedPrice))}
                            </div>
                            <div></div>
                        </div>
                    </div>
                ) : (
                    <div className='flex items-center text-xs text-white'>Not Available</div>
                )}
            </div>
        </div>
    );
};

export default Product;
