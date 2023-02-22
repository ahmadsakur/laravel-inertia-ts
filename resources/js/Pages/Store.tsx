import { Head, Link } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';
import ApplicationLogo from '@/Components/ApplicationLogo';
import { IconBrandGithub } from '@tabler/icons-react';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import Header from '@/Components/Header';
import Container from '@/Components/Container';
import { useState } from 'react';
import Product from '@/Components/ProductCard';
import route from 'ziggy-js';

export default function Store({ data }: any) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const { pageInfo, products } = data;

    // const handlePreviousNavigation = () => {
    //     router.push(`/all-deals/${countryId}/${parseInt(page) - 1}`);
    // };

    // const handleNextNavigation = () => {
    //     router.push(`/all-deals/${countryId}/${parseInt(page) + 1}`);
    // };

    return (
        <>
            <Head title='Welcome to Laravel' />
            <div className='mx-auto min-h-screen max-w-7xl px-4 py-10 sm:px-6 lg:px-8 bg-gray-900 static z-0'>
                <div className='flex justify-between'>
                    <Link href={'/store'}>
                        <div className='group mb-4 flex w-20 cursor-pointer justify-start rounded-full border p-2 hover:border-blue-500'>
                            <BsArrowLeft className='group-hover:text-blue-400' />
                        </div>
                    </Link>
                    <div className='flex flex-col items-end'>
                        <div className='text-xl font-bold lg:text-2xl'>Latest Deals | {pageInfo.totalCount}</div>
                        <div className='hidden text-sm text-gray-500 lg:block'>
                            browse the latest deals on PlayStation Store
                        </div>
                    </div>
                </div>
                {loading ? (
                    <div className='flex h-screen items-center justify-center'>
                        <div className='h-32 w-32 animate-spin rounded-full border-b-2 border-white'></div>
                    </div>
                ) : error ? (
                    <div className='flex h-screen items-center justify-center'>
                        <h1 className='text-2xl font-bold'>Deals not available</h1>
                    </div>
                ) : (
                    <div className='flex items-start justify-between gap-4 '>
                        {/* <div className="hidden md:block w-1/5">
              <div className="p-4">
                <ProductFilter
                  sortOptions={sortingOptions}
                  handleSortChange={handleSortChange}
                />
              </div>
            </div> */}
                        <div className='w-full'>
                            <div className='grid grid-cols-2 justify-items-center gap-4 py-4 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6'>
                                {products
                                    .filter((item: any) => item.price)
                                    .map((item: any) => {
                                        return (
                                            <div key={item.id} className='w-full cursor-pointer'>
                                                <Product data={item} />
                                            </div>
                                        );
                                    })}
                            </div>
                            {/* <div className='flex w-full justify-center p-4 md:justify-end'>
                                <div className='flex items-center gap-8'>
                                    <BsArrowLeft
                                        className={`text-darker-200 cursor-pointer text-2xl hover:text-white ${
                                            pageInfo.offset === 0 ? 'hidden' : 'block'
                                        }`}
                                        onClick={handlePreviousNavigation}
                                    />
                                    <BsArrowRight
                                        className={`text-darker-200 cursor-pointer text-2xl hover:text-white ${
                                            pageInfo.isLast ? 'hidden' : 'block'
                                        }`}
                                        onClick={handleNextNavigation}
                                    />
                                </div>
                            </div> */}
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

Store.layout = (page: any) => <AppLayout children={page} />;
