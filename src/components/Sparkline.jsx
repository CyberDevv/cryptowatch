import dynamic from 'next/dynamic';
import React, { useState } from 'react';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const Sparkline = ({ price }) => {
   const [isPrice] = useState({
      options: {
         series: [
            {
               name: 'Price',
               data: price,
            },
         ],
         stroke: {
            show: true,
            curve: 'smooth',
            lineCap: 'butt',
            colors: '#FF9800',
            width: 2,
            dashArray: 0,
         },
         chart: {
            type: 'line',
            sparkline: {
               enabled: true,
            },
         },
         tooltip: {
            enabled: false,
         },
      },
   });
   
   return (
      <div className='app'>
         <div className='row'>
            <div className='mixed-chart'>
               <Chart
                  options={isPrice.options}
                  series={isPrice.options.series}
                  height={50}
               />
            </div>
         </div>
      </div>
   );
};

export default Sparkline;
