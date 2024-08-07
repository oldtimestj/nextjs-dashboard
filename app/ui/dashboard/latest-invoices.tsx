/*
 * @Author: oldtimestj 85237486@qq.com
 * @Date: 2024-07-07 00:56:38
 * @LastEditors: oldtimestj 85237486@qq.com
 * @LastEditTime: 2024-08-07 16:35:35
 * @FilePath: /nextjs-dashboard/app/ui/dashboard/latest-invoices.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { ArrowPathIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Image from 'next/image';
import { lusitana } from '@/app/ui/fonts';
import { fetchLatestInvoices } from '@/app/lib/data';
export default async function LatestInvoices() {
  const latestInvoices = await fetchLatestInvoices();
  return (
    <div className='flex w-full flex-col md:col-span-4'>
      <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Latest Invoices
      </h2>
      <div className='flex grow flex-col justify-between rounded-xl bg-gray-50 p-4'>
        {/* NOTE: Uncomment this code in Chapter 7 */}

        {
          <div className='bg-white px-6'>
            {latestInvoices.map((invoice, i) => {
              return (
                <div
                  key={invoice.id}
                  className={clsx(
                    'flex flex-row items-center justify-between py-4',
                    {
                      'border-t': i !== 0,
                    }
                  )}
                >
                  <div className='flex items-center'>
                    <Image
                      src={invoice.image_url}
                      alt={`${invoice.name}'s profile picture`}
                      className='mr-4 rounded-full'
                      width={32}
                      height={32}
                    />
                    <div className='min-w-0'>
                      <p className='truncate text-sm font-semibold md:text-base'>
                        {invoice.name}
                      </p>
                      <p className='hidden text-sm text-gray-500 sm:block'>
                        {invoice.email}
                      </p>
                    </div>
                  </div>
                  <p
                    className={`${lusitana.className} truncate text-sm font-medium md:text-base`}
                  >
                    {invoice.amount}
                  </p>
                </div>
              );
            })}
          </div>
        }
        <div className='flex items-center pb-2 pt-6'>
          <ArrowPathIcon className='h-5 w-5 text-gray-500' />
          <h3 className='ml-2 text-sm text-gray-500 '>Updated just now</h3>
        </div>
      </div>
    </div>
  );
}
