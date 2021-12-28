import moment from 'moment';
import dynamic from 'next/dynamic';
import React, { useEffect, useState } from 'react';
import tw from 'twin.macro';
import CurrencyFormatter from '../utils/CurrencyFormatter';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const Sparkline = ({ sevenDres: { prices } }) => {
   const [isPrice] = useState({
      options: {
         xaxis: {
            type: 'datetime',
            tooltip: {
               enabled: false,
            },
         },
         yaxis: [
            {
               tickAmount: 5,
               axisTicks: {
                  show: false,
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
               data: prices.map((pri) => [
                  pri[0],
                  parseFloat(pri[1]).toFixed(2),
               ]),
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
            toolbar: {
               show: true,
               offsetX: 0,
               offsetY: 0,
               tools: {
                  download: '<img src= "/Camera.png" width= "20">',
                  selection: false,
                  zoom: false,
                  zoomin: false,
                  zoomout: false,
                  pan: false,
                  reset: false,
               },
            },
         },
         tooltip: {
            fixed: {
               enabled: false,
            },
            x: {
               show: true,
               formatter: function (x) {
                  if (typeof x !== 'undefined') {
                     return (
                        '<p class="chartWrapper">' +
                        '<span class="">' +
                        moment(x).format('L') +
                        '</span>' +
                        '<span>' +
                        moment(x).format('LTS') +
                        '</span>' +
                        '</p>'
                     );
                  }
                  return x;
               },
            },
            y: {
               formatter: function (y) {
                  if (typeof y !== 'undefined') {
                     return `${CurrencyFormatter(y)}`;
                  }
                  return y;
               },
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
            height={500}
            // children={<p>What the </p>}
            // width= {300}
         />
      </div>
   );
};

export default Sparkline;
