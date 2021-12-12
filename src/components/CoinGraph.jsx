import dynamic from 'next/dynamic';
import React, { useEffect, useState } from 'react';
import tw from 'twin.macro';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const Sparkline = ({ sevenDres: { prices } }) => {
   const [isPrice] = useState({
      options: {
         xaxis: {
            categories: ['Sun', 'Sat', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
         },
         yaxis: [
            {
               categories: ['Sun', 'Sat', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
               tickAmount: 5,
               //  min: '10k',
               //  max: '100m',
               axisTicks: {
                  show: true,
               },
               labels: {
                  style: {
                     colors: '#666666',
                  },
               },
            },
         ],
         series: [
            {
               name: 'Price',
               data: prices,
            },
         ],
         stroke: {
            show: true,
            lineCap: 'butt',
            colors: '#00D578',
            width: 2,
            dashArray: 0,
         },
         chart: {
            type: 'line',
         },
         tooltip: {
            fixed: {
               enabled: false,
            },
            x: {
               show: false,
            },
            y: {
               show: false,
            },
            marker: {
               show: false,
            },
         },
      },
   });

   return (
      <div css={[tw`max-w-[100%] mt-[22px] bg-white p-6`]}>
         <Chart
            options={isPrice.options}
            series={isPrice.options.series}
            height={430}
            // width= {300}
         />
      </div>
   );
};


export default Sparkline;
