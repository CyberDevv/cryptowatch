import moment from 'moment';
import tw from 'twin.macro';
import millify from 'millify';
import dynamic from 'next/dynamic';
import React, { useState } from 'react';
import CurrencyFormatter from '../utils/CurrencyFormatter';
import { Button } from '@mui/material';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const Sparkline = ({ sevenDres, oneMonthRes, oneDayRes }) => {
   const [currentData, setCurrentData] = useState('sevenDays');

   const [isSevenDays] = useState({
      options: {
         noData: {
            text: 'No data available for this period',
         },
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
                     fontSize: '14px',
                  },
                  formatter: function (val) {
                     return `$${millify(val, { precision: 6 })}`;
                  },
               },
            },
         ],
         series: [
            {
               name: 'Price',
               data: sevenDres.prices.map((pri) => [pri[0], pri[1]]),
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
               offsetY: -20,
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
                     return `$${parseFloat(y).toFixed(6)}`;
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

   const [isOneDay] = useState({
      options: {
         noData: {
            text: 'No data available for this period',
         },
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
                     fontSize: '14px',
                  },
                  formatter: function (val) {
                     return `$${millify(val, { precision: 6 })}`;
                  },
               },
            },
         ],
         series: [
            {
               name: 'Price',
               data: oneDayRes.prices.map((pri) => [pri[0], pri[1]]),
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
               offsetY: -20,
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
                     return `$${parseFloat(y).toFixed(6)}`;
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

   const [isOneMonth] = useState({
      options: {
         noData: {
            text: 'No data available for this period',
         },
         xaxis: {
            type: 'datetime',
            tooltip: {
               enabled: false,
            },
         },
         yaxis: [
            {
               tickAmount: 8,
               axisTicks: {
                  show: false,
               },
               labels: {
                  style: {
                     colors: '#666666',
                     fontSize: '14px',
                  },
                  formatter: function (val) {
                     return `$${millify(val, { precision: 6 })}`;
                  },
               },
            },
         ],
         series: [
            {
               name: 'Price',
               data: oneMonthRes.prices.map((pri) => [pri[0], pri[1]]),
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
               offsetY: -20,
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
                     return `$${parseFloat(y).toFixed(6)}`;
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

   const handleChangeChart = (days) => {
      days === 1 && setCurrentData('oneDay');
      days === 7 && setCurrentData('sevenDays');
      days === 30 && setCurrentData('oneMonth');
   };

   return (
      <MainWrapper>
         <TimePanelWrapper>
            <P>Time</P>
            <div>
               <CustomButton
                  sx={{
                     color: currentData === 'oneDay' ? 'primary' : '#666666',
                  }}
                  onClick={() => handleChangeChart(1)}
               >
                  1d
               </CustomButton>

               <CustomButton
                  sx={{
                     color: currentData === 'sevenDays' ? 'primary' : '#666666',
                  }}
                  onClick={() => handleChangeChart(7)}
               >
                  7d
               </CustomButton>

               <CustomButton
                  sx={{
                     color: currentData === 'oneMonth' ? 'primary' : '#666666',
                  }}
                  onClick={() => handleChangeChart(30)}
               >
                  30d
               </CustomButton>
            </div>
         </TimePanelWrapper>
         {currentData === 'oneDay' ? (
            <Chart
               options={isOneDay.options}
               series={isOneDay.options.series}
               height={500}
            />
         ) : currentData === 'sevenDays' ? (
            <Chart
               options={isSevenDays.options}
               series={isSevenDays.options.series}
               height={500}
            />
         ) : (
            <Chart
               options={isOneMonth.options}
               series={isOneMonth.options.series}
               height={500}
            />
         )}
      </MainWrapper>
   );
};

// Tailwind styles
const MainWrapper = tw.div`max-w-[100%] mt-[22px] bg-white px-2 py-6 lg:px-6`;
const TimePanelWrapper = tw.div`flex items-center ml-4`;
const P = tw.p`text-dark-black text-sm mr-4`;
const CustomButton = tw(Button)`normal-case`;

export default Sparkline;
