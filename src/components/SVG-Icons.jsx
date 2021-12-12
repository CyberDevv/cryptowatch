import { SvgIcon } from '@mui/material';

export const Logo = () => {
   return (
      <SvgIcon
         viewBox='0 0 105 20'
         sx={{
            color: '#333333',
            width: '105px',
            height: '20px',
         }}
      >
         <path d='M12.4316 10.2637C12.321 11.7936 11.7546 12.998 10.7324 13.877C9.7168 14.7559 8.37565 15.1953 6.70898 15.1953C4.88607 15.1953 3.45052 14.5833 2.40234 13.3594C1.36068 12.1289 0.839844 10.4427 0.839844 8.30078V7.43164C0.839844 6.06445 1.08073 4.86003 1.5625 3.81836C2.04427 2.77669 2.73112 1.97917 3.62305 1.42578C4.52148 0.865885 5.56315 0.585938 6.74805 0.585938C8.38867 0.585938 9.71029 1.02539 10.7129 1.9043C11.7155 2.7832 12.2949 4.01693 12.4512 5.60547H9.52148C9.44987 4.6875 9.19271 4.02344 8.75 3.61328C8.3138 3.19661 7.64648 2.98828 6.74805 2.98828C5.77148 2.98828 5.03906 3.33984 4.55078 4.04297C4.06901 4.73958 3.82161 5.82357 3.80859 7.29492V8.36914C3.80859 9.9056 4.03971 11.0286 4.50195 11.7383C4.9707 12.4479 5.70638 12.8027 6.70898 12.8027C7.61393 12.8027 8.28776 12.5977 8.73047 12.1875C9.17969 11.7708 9.43685 11.1296 9.50195 10.2637H12.4316ZM19.1074 7.08008C18.7233 7.02799 18.3848 7.00195 18.0918 7.00195C17.0241 7.00195 16.3242 7.36328 15.9922 8.08594V15H13.1699V4.43359H15.8359L15.9141 5.69336C16.4805 4.72331 17.265 4.23828 18.2676 4.23828C18.5801 4.23828 18.873 4.2806 19.1465 4.36523L19.1074 7.08008ZM23.5957 11.0059L25.5488 4.43359H28.5762L24.3281 16.6406L24.0938 17.1973C23.4622 18.5775 22.4206 19.2676 20.9688 19.2676C20.5586 19.2676 20.1419 19.2057 19.7188 19.082V16.9434L20.1484 16.9531C20.6823 16.9531 21.0794 16.8717 21.3398 16.709C21.6068 16.5462 21.8151 16.276 21.9648 15.8984L22.2969 15.0293L18.5957 4.43359H21.6328L23.5957 11.0059ZM38.2012 9.81445C38.2012 11.4421 37.8301 12.7474 37.0879 13.7305C36.3522 14.707 35.3561 15.1953 34.0996 15.1953C33.0319 15.1953 32.1693 14.8242 31.5117 14.082V19.0625H28.6895V4.43359H31.3066L31.4043 5.46875C32.0879 4.64844 32.9798 4.23828 34.0801 4.23828C35.3822 4.23828 36.3945 4.72005 37.1172 5.68359C37.8398 6.64714 38.2012 7.97526 38.2012 9.66797V9.81445ZM35.3789 9.60938C35.3789 8.6263 35.2031 7.86784 34.8516 7.33398C34.5065 6.80013 34.002 6.5332 33.3379 6.5332C32.4525 6.5332 31.8438 6.87174 31.5117 7.54883V11.875C31.8568 12.5716 32.472 12.9199 33.3574 12.9199C34.7051 12.9199 35.3789 11.8164 35.3789 9.60938ZM42.3379 1.83594V4.43359H44.1445V6.50391H42.3379V11.7773C42.3379 12.168 42.4128 12.4479 42.5625 12.6172C42.7122 12.7865 42.9987 12.8711 43.4219 12.8711C43.7344 12.8711 44.0111 12.8483 44.252 12.8027V14.9414C43.6986 15.1107 43.1289 15.1953 42.543 15.1953C40.5638 15.1953 39.5547 14.196 39.5156 12.1973V6.50391H37.9727V4.43359H39.5156V1.83594H42.3379ZM43.9844 9.61914C43.9844 8.57096 44.1862 7.63672 44.5898 6.81641C44.9935 5.99609 45.5729 5.36133 46.3281 4.91211C47.0898 4.46289 47.972 4.23828 48.9746 4.23828C50.4004 4.23828 51.5625 4.67448 52.4609 5.54688C53.3659 6.41927 53.8704 7.60417 53.9746 9.10156L53.9941 9.82422C53.9941 11.4453 53.5417 12.7474 52.6367 13.7305C51.7318 14.707 50.5176 15.1953 48.9941 15.1953C47.4707 15.1953 46.2533 14.707 45.3418 13.7305C44.4368 12.7539 43.9844 11.4258 43.9844 9.74609V9.61914ZM46.8066 9.82422C46.8066 10.8268 46.9954 11.5951 47.373 12.1289C47.7507 12.6562 48.291 12.9199 48.9941 12.9199C49.6777 12.9199 50.2116 12.6595 50.5957 12.1387C50.9798 11.6113 51.1719 10.7715 51.1719 9.61914C51.1719 8.63607 50.9798 7.87435 50.5957 7.33398C50.2116 6.79362 49.6712 6.52344 48.9746 6.52344C48.2845 6.52344 47.7507 6.79362 47.373 7.33398C46.9954 7.86784 46.8066 8.69792 46.8066 9.82422ZM65.9922 10.8984L67.9062 0.78125H70.8262L67.6719 15H64.7227L62.4082 5.48828L60.0938 15H57.1445L53.9902 0.78125H56.9102L58.834 10.8789L61.1777 0.78125H63.6582L65.9922 10.8984ZM77.0234 15C76.8932 14.7461 76.7988 14.4303 76.7402 14.0527C76.0566 14.8145 75.168 15.1953 74.0742 15.1953C73.0391 15.1953 72.1797 14.8958 71.4961 14.2969C70.819 13.6979 70.4805 12.9427 70.4805 12.0312C70.4805 10.9115 70.8939 10.0521 71.7207 9.45312C72.554 8.85417 73.7552 8.55143 75.3242 8.54492H76.623V7.93945C76.623 7.45117 76.4961 7.06055 76.2422 6.76758C75.9948 6.47461 75.6009 6.32812 75.0605 6.32812C74.5853 6.32812 74.2109 6.44206 73.9375 6.66992C73.6706 6.89779 73.5371 7.21029 73.5371 7.60742H70.7148C70.7148 6.99544 70.9036 6.42904 71.2812 5.9082C71.6589 5.38737 72.1927 4.98047 72.8828 4.6875C73.5729 4.38802 74.3477 4.23828 75.207 4.23828C76.5091 4.23828 77.541 4.56706 78.3027 5.22461C79.071 5.87565 79.4551 6.79362 79.4551 7.97852V12.5586C79.4616 13.5612 79.6016 14.3197 79.875 14.834V15H77.0234ZM74.6895 13.0371C75.1061 13.0371 75.4902 12.946 75.8418 12.7637C76.1934 12.5749 76.4538 12.3242 76.623 12.0117V10.1953H75.5684C74.1556 10.1953 73.4036 10.6836 73.3125 11.6602L73.3027 11.8262C73.3027 12.1777 73.4264 12.4674 73.6738 12.6953C73.9212 12.9232 74.2598 13.0371 74.6895 13.0371ZM84.002 1.83594V4.43359H85.8086V6.50391H84.002V11.7773C84.002 12.168 84.0768 12.4479 84.2266 12.6172C84.3763 12.7865 84.6628 12.8711 85.0859 12.8711C85.3984 12.8711 85.6751 12.8483 85.916 12.8027V14.9414C85.3626 15.1107 84.793 15.1953 84.207 15.1953C82.2279 15.1953 81.2188 14.196 81.1797 12.1973V6.50391H79.6367V4.43359H81.1797V1.83594H84.002ZM90.7754 12.9199C91.2962 12.9199 91.7194 12.7767 92.0449 12.4902C92.3704 12.2038 92.5397 11.8229 92.5527 11.3477H95.1992C95.1927 12.0638 94.9974 12.7214 94.6133 13.3203C94.2292 13.9128 93.7018 14.375 93.0312 14.707C92.3672 15.0326 91.6315 15.1953 90.8242 15.1953C89.3138 15.1953 88.1224 14.7168 87.25 13.7598C86.3776 12.7962 85.9414 11.4681 85.9414 9.77539V9.58984C85.9414 7.96224 86.3743 6.66341 87.2402 5.69336C88.1061 4.72331 89.2943 4.23828 90.8047 4.23828C92.1263 4.23828 93.1842 4.61589 93.9785 5.37109C94.7793 6.11979 95.1862 7.11914 95.1992 8.36914H92.5527C92.5397 7.82227 92.3704 7.37956 92.0449 7.04102C91.7194 6.69596 91.2897 6.52344 90.7559 6.52344C90.0983 6.52344 89.6003 6.76432 89.2617 7.24609C88.9297 7.72135 88.7637 8.49609 88.7637 9.57031V9.86328C88.7637 10.9505 88.9297 11.7318 89.2617 12.207C89.5938 12.6823 90.0983 12.9199 90.7754 12.9199ZM98.5645 5.58594C99.3132 4.6875 100.254 4.23828 101.387 4.23828C103.678 4.23828 104.84 5.56966 104.873 8.23242V15H102.051V8.31055C102.051 7.70508 101.921 7.25911 101.66 6.97266C101.4 6.67969 100.967 6.5332 100.361 6.5332C99.5345 6.5332 98.9355 6.85221 98.5645 7.49023V15H95.7422V0H98.5645V5.58594Z' />
      </SvgIcon>
   );
};

export const SVGIcons = ({
   active,
   home,
   watchlist,
   priceAlerts,
   settings,
   logout,
}) => {
   if (home) {
      return (
         <SvgIcon
            viewBox='0 0 18 18'
            sx={{
               color: `${active === 'Home' ? '#3754DB' : '#999999'}`,
               width: '18px',
               height: '18px',
            }}
         >
            <g clipPath='url(#clip0_285_697)'>
               <path d='M9 10.4998C8.40326 10.4998 7.83097 10.7368 7.40901 11.1588C6.98705 11.5807 6.75 12.153 6.75 12.7498V18.0192H11.25V12.7498C11.25 12.153 11.0129 11.5807 10.591 11.1588C10.169 10.7368 9.59674 10.4998 9 10.4998Z' />
               <path d='M10.0035 0.624853C9.72806 0.37693 9.37059 0.239746 9 0.239746C8.62941 0.239746 8.27194 0.37693 7.9965 0.624853L0 7.82185V15.6219C0 16.2584 0.252856 16.8688 0.702944 17.3189C1.15303 17.769 1.76348 18.0219 2.4 18.0219H5.25V12.7501C5.25 11.7555 5.64509 10.8017 6.34835 10.0985C7.05161 9.39519 8.00544 9.0001 9 9.0001C9.99456 9.0001 10.9484 9.39519 11.6517 10.0985C12.3549 10.8017 12.75 11.7555 12.75 12.7501V18.0196H15.6C16.2365 18.0196 16.847 17.7668 17.2971 17.3167C17.7471 16.8666 18 16.2561 18 15.6196V7.8196L10.0035 0.624853Z' />
            </g>
            <defs>
               <clipPath id='clip0_285_697'>
                  <rect width='18' height='18' fill='white' />
               </clipPath>
            </defs>
         </SvgIcon>
      );
   }

   if (watchlist) {
      return (
         <SvgIcon
            viewBox='0 0 21 20'
            sx={{
               color: `${active === 'Watchlist' ? '#3754DB' : '#999999'}`,
               width: '21px',
               height: '20px',
            }}
         >
            <path d='M4.51542 19.3034C4.03237 19.5517 3.48541 19.1178 3.58266 18.5634L4.61982 12.6516L0.216907 8.45578C-0.194569 8.06366 0.0184315 7.34671 0.569668 7.2684L6.69276 6.39856L9.42291 0.990381C9.66885 0.503206 10.3351 0.503206 10.581 0.990381L13.3111 6.39856L19.4342 7.2684C19.9855 7.34671 20.1985 8.06366 19.787 8.45578L15.3841 12.6516L16.4212 18.5634C16.5185 19.1178 15.9715 19.5517 15.4885 19.3034L10.002 16.4835L4.51542 19.3034Z' />
         </SvgIcon>
      );
   }

   if (settings) {
      return (
         <SvgIcon
            viewBox='0 0 16 16'
            sx={{
               color: `${active === 'Settings' ? '#3754DB' : '#999999'}`,
               width: '16px',
               height: '16px',
            }}
         >
            <path
               fillRule='evenodd'
               clipRule='evenodd'
               d='M14.3018 9.18506C14.57 9.32756 14.777 9.55256 14.9226 9.77756C15.2062 10.2426 15.1832 10.8126 14.9073 11.3151L14.3707 12.2151C14.0871 12.6951 13.5583 12.9951 13.0141 12.9951C12.7458 12.9951 12.4469 12.9201 12.2016 12.7701C12.0024 12.6426 11.7724 12.5976 11.5271 12.5976C10.7683 12.5976 10.1322 13.2201 10.1092 13.9626C10.1092 14.8251 9.40403 15.5001 8.52259 15.5001H7.48019C6.59109 15.5001 5.88594 14.8251 5.88594 13.9626C5.87061 13.2201 5.23444 12.5976 4.47564 12.5976C4.2227 12.5976 3.99276 12.6426 3.80115 12.7701C3.55588 12.9201 3.24929 12.9951 2.98869 12.9951C2.43683 12.9951 1.90797 12.6951 1.62438 12.2151L1.09551 11.3151C0.811922 10.8276 0.796592 10.2426 1.08019 9.77756C1.20282 9.55256 1.43276 9.32756 1.69336 9.18506C1.90797 9.08006 2.04594 8.90756 2.17623 8.70506C2.55947 8.06006 2.32953 7.21256 1.67803 6.83006C0.919227 6.40256 0.673957 5.45006 1.11084 4.70756L1.62438 3.82256C2.06893 3.08006 3.01935 2.81756 3.78582 3.25256C4.45264 3.61256 5.31875 3.37256 5.70965 2.73506C5.83229 2.52506 5.90127 2.30006 5.88594 2.07506C5.87061 1.78256 5.95492 1.50506 6.10055 1.28006C6.38414 0.815061 6.89768 0.515061 7.4572 0.500061H8.53792C9.10511 0.500061 9.61864 0.815061 9.90223 1.28006C10.0402 1.50506 10.1322 1.78256 10.1092 2.07506C10.0938 2.30006 10.1628 2.52506 10.2855 2.73506C10.6764 3.37256 11.5425 3.61256 12.217 3.25256C12.9758 2.81756 13.9339 3.08006 14.3707 3.82256L14.8843 4.70756C15.3288 5.45006 15.0836 6.40256 14.3171 6.83006C13.6656 7.21256 13.4356 8.06006 13.8265 8.70506C13.9492 8.90756 14.0871 9.08006 14.3018 9.18506ZM5.83229 8.00756C5.83229 9.18506 6.8057 10.1226 8.00906 10.1226C9.21241 10.1226 10.1628 9.18506 10.1628 8.00756C10.1628 6.83006 9.21241 5.88506 8.00906 5.88506C6.8057 5.88506 5.83229 6.83006 5.83229 8.00756Z'
            />
         </SvgIcon>
      );
   }

   if (priceAlerts) {
      return (
         <SvgIcon
            viewBox='0 0 20 20'
            sx={{
               color: `${active === 'Price Alerts' ? '#3754DB' : '#999999'}`,
               width: '20px',
               height: '20px',
            }}
         >
            <path d='M16.4747 9.70447C15.8659 8.9936 15.5893 8.37757 15.5893 7.33098V6.97513C15.5893 5.6113 15.2754 4.73257 14.593 3.85385C13.5411 2.48918 11.7704 1.66669 10.0369 1.66669H9.96323C8.26621 1.66669 6.55097 2.45141 5.48091 3.76069C4.76119 4.65704 4.41085 5.57353 4.41085 6.97513V7.33098C4.41085 8.37757 4.15245 8.9936 3.52549 9.70447C3.06417 10.2282 2.91675 10.9013 2.91675 11.6298C2.91675 12.3591 3.1561 13.0498 3.63647 13.6113C4.26343 14.2844 5.1488 14.7141 6.05321 14.7888C7.36262 14.9382 8.67203 14.9944 10.0005 14.9944C11.3281 14.9944 12.6375 14.9004 13.9478 14.7888C14.8514 14.7141 15.7367 14.2844 16.3637 13.6113C16.8432 13.0498 17.0834 12.3591 17.0834 11.6298C17.0834 10.9013 16.936 10.2282 16.4747 9.70447Z' />
            <path
               opacity='0.4'
               d='M11.674 16.0236C11.2574 15.9347 8.71888 15.9347 8.30229 16.0236C7.94616 16.1059 7.56104 16.2972 7.56104 16.7169C7.58174 17.1172 7.81613 17.4705 8.14079 17.6946L8.13996 17.6955C8.55987 18.0228 9.05266 18.2309 9.56864 18.3056C9.8436 18.3434 10.1235 18.3417 10.4084 18.3056C10.9236 18.2309 11.4164 18.0228 11.8363 17.6955L11.8355 17.6946C12.1601 17.4705 12.3945 17.1172 12.4152 16.7169C12.4152 16.2972 12.0301 16.1059 11.674 16.0236Z'
            />
         </SvgIcon>
      );
   }

   if (logout) {
      return (
         <SvgIcon
            viewBox='0 0 17 16'
            sx={{
               color: '#E52F15',
               width: '17px',
               height: '16px',
            }}
         >
            <path
               fillRule='evenodd'
               clipRule='evenodd'
               d='M6.42151 7.4225C6.09339 7.4225 5.83394 7.6775 5.83394 8C5.83394 8.315 6.09339 8.5775 6.42151 8.5775H11V12.1625C11 14 9.48147 15.5 7.60429 15.5H3.88808C2.01853 15.5 0.5 14.0075 0.5 12.17V3.8375C0.5 1.9925 2.02616 0.5 3.89571 0.5H7.61955C9.48147 0.5 11 1.9925 11 3.83V7.4225H6.42151ZM13.7227 5.40516L15.9127 7.58766C16.0252 7.70016 16.0852 7.84266 16.0852 8.00016C16.0852 8.15016 16.0252 8.30016 15.9127 8.40516L13.7227 10.5877C13.6102 10.7002 13.4602 10.7602 13.3177 10.7602C13.1677 10.7602 13.0177 10.7002 12.9052 10.5877C12.6802 10.3627 12.6802 9.99516 12.9052 9.77016L14.1052 8.57766H11.0002V7.42266H14.1052L12.9052 6.23016C12.6802 6.00516 12.6802 5.63766 12.9052 5.41266C13.1302 5.18016 13.4977 5.18016 13.7227 5.40516Z'
            />
         </SvgIcon>
      );
   }
};

export const SearchSVG = () => {
   return (
      <SvgIcon
         viewBox='0 0 14 14'
         sx={{ width: '14px', height: '14px', fill: 'none' }}
      >
         <ellipse
            cx='6.86381'
            cy='6.86387'
            rx='5.24333'
            ry='5.24333'
            stroke='#929292'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
         />
         <path
            d='M10.5106 10.783L12.5663 12.8334'
            stroke='#929292'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
         />
      </SvgIcon>
   );
};

export const StarSVG = () => {
   return (
      <SvgIcon viewBox='0 0 21 20' sx={{ width: '21px', height: '20px' }}>
         <path
            d='M4.75151 19.3034C4.26846 19.5517 3.7215 19.1178 3.81875 18.5634L4.85591 12.6516L0.452991 8.45578C0.0415153 8.06366 0.254515 7.34671 0.805752 7.2684L6.92885 6.39856L9.659 0.990381C9.90493 0.503206 10.5711 0.503206 10.8171 0.990381L13.5472 6.39856L19.6703 7.2684C20.2216 7.34671 20.4346 8.06366 20.0231 8.45578L15.6202 12.6516L16.6573 18.5634C16.7546 19.1178 16.2076 19.5517 15.7246 19.3034L10.238 16.4835L4.75151 19.3034Z'
            fill='url(#paint0_linear_285_129)'
         />
         <defs>
            <linearGradient
               id='paint0_linear_285_129'
               x1='20.238'
               y1='0.625'
               x2='1.52702'
               y2='20.5834'
               gradientUnits='userSpaceOnUse'
            >
               <stop stopColor='#FFEF5E' />
               <stop offset='1' stopColor='#F7936F' />
            </linearGradient>
         </defs>
      </SvgIcon>
   );
};

export const StarOutlinedSVG = () => {
   return (
      <SvgIcon
         viewBox='0 0 17 17'
         sx={{ width: '17px', height: '17px', fill: 'none' }}
      >
         <path
            d='M3.61224 15.4427C3.2258 15.6413 2.78823 15.2942 2.86603 14.8508L3.69576 10.1213L0.173428 6.76462C-0.155753 6.45092 0.0146475 5.87737 0.455637 5.81472L5.35411 5.11885L7.53823 0.792305C7.73498 0.402565 8.26795 0.402565 8.4647 0.792305L10.6488 5.11885L15.5473 5.81472C15.9883 5.87737 16.1587 6.45092 15.8295 6.76462L12.3072 10.1213L13.1369 14.8508C13.2147 15.2942 12.7771 15.6413 12.3907 15.4427L8.00146 13.1868L3.61224 15.4427Z'
            stroke='#666666'
         />
      </SvgIcon>
   );
};

export const HamburgerSVG = () => {
   return (
      <SvgIcon
         viewBox='0 0 24 24'
         sx={{ width: '24px', height: '24px', fill: 'none' }}
      >
         <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M12 7C13.1046 7 14 6.10457 14 5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5C10 6.10457 10.8954 7 12 7Z'
            fill='#718096'
         />
         <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z'
            fill='#718096'
         />
         <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M12 21C13.1046 21 14 20.1046 14 19C14 17.8954 13.1046 17 12 17C10.8954 17 10 17.8954 10 19C10 20.1046 10.8954 21 12 21Z'
            fill='#718096'
         />
      </SvgIcon>
   );
};

export const CloseSVG = () => {
   return (
      <SvgIcon
         viewBox='0 0 14 14'
         sx={{ width: '14px', height: '14px', fill: 'none' }}
      >
         <path
            d='M12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41L12.59 0Z'
            fill='#2E3A59'
         />
      </SvgIcon>
   );
};

export const GoogleSVG = () => {
   return (
      <SvgIcon
         viewBox='0 0 32 32'
         sx={{ width: '32px', height: '32px', fill: 'none' }}
      >
         <path
            d='M29.074 13.3886H28V13.3333H16V18.6666H23.5353C22.436 21.7713 19.482 24 16 24C11.582 24 7.99996 20.418 7.99996 16C7.99996 11.582 11.582 7.99996 16 7.99996C18.0393 7.99996 19.8946 8.76929 21.3073 10.026L25.0786 6.25463C22.6973 4.03529 19.512 2.66663 16 2.66663C8.63663 2.66663 2.66663 8.63663 2.66663 16C2.66663 23.3633 8.63663 29.3333 16 29.3333C23.3633 29.3333 29.3333 23.3633 29.3333 16C29.3333 15.106 29.2413 14.2333 29.074 13.3886Z'
            fill='#FFC107'
         />
         <path
            d='M4.20398 9.79396L8.58465 13.0066C9.76998 10.072 12.6406 7.99996 16 7.99996C18.0393 7.99996 19.8946 8.76929 21.3073 10.026L25.0786 6.25463C22.6973 4.03529 19.512 2.66663 16 2.66663C10.8786 2.66663 6.43731 5.55796 4.20398 9.79396Z'
            fill='#FF3D00'
         />
         <path
            d='M16 29.3333C19.444 29.3333 22.5733 28.0153 24.9393 25.872L20.8127 22.38C19.429 23.4322 17.7383 24.0013 16 24C12.532 24 9.58734 21.7886 8.478 18.7026L4.13 22.0526C6.33667 26.3706 10.818 29.3333 16 29.3333Z'
            fill='#4CAF50'
         />
         <path
            d='M29.074 13.3887H28V13.3334H16V18.6667H23.5353C23.0095 20.1443 22.0622 21.4355 20.8107 22.3807L20.8127 22.3794L24.9393 25.8714C24.6473 26.1367 29.3333 22.6667 29.3333 16C29.3333 15.106 29.2413 14.2334 29.074 13.3887Z'
            fill='#1976D2'
         />
      </SvgIcon>
   );
};

export const FacebookSVG = () => {
   return (
      <SvgIcon
         viewBox='0 0 10 20'
         sx={{ width: '10px', height: '20px', fill: 'none' }}
      >
         <path
            d='M6.63999 6.80002V4.88002C6.63999 4.04802 6.83199 3.60002 8.17599 3.60002H9.83999V0.400024H7.27999C4.07999 0.400024 2.79999 2.51202 2.79999 4.88002V6.80002H0.23999V10H2.79999V19.6H6.63999V10H9.45599L9.83999 6.80002H6.63999Z'
            fill='white'
         />
      </SvgIcon>
   );
};

export const SettingsComponentSVG = () => {
   return (
      <SvgIcon
         viewBox='0 0 21 20'
         sx={{ width: '21px', height: '20px', fill: 'none' }}
      >
         <path
            d='M17.486 7.68336C15.9777 7.68336 15.361 6.6167 16.111 5.30836C16.5444 4.55003 16.286 3.58336 15.5277 3.15003L14.086 2.32503C13.4277 1.93336 12.5777 2.1667 12.186 2.82503L12.0944 2.98336C11.3444 4.2917 10.111 4.2917 9.35271 2.98336L9.26104 2.82503C8.88604 2.1667 8.03604 1.93336 7.37771 2.32503L5.93604 3.15003C5.17771 3.58336 4.91938 4.55836 5.35271 5.3167C6.11104 6.6167 5.49438 7.68336 3.98604 7.68336C3.11938 7.68336 2.40271 8.3917 2.40271 9.2667V10.7334C2.40271 11.6 3.11104 12.3167 3.98604 12.3167C5.49438 12.3167 6.11104 13.3834 5.35271 14.6917C4.91938 15.45 5.17771 16.4167 5.93604 16.85L7.37771 17.675C8.03604 18.0667 8.88604 17.8334 9.27771 17.175L9.36938 17.0167C10.1194 15.7084 11.3527 15.7084 12.111 17.0167L12.2027 17.175C12.5944 17.8334 13.4444 18.0667 14.1027 17.675L15.5444 16.85C16.3027 16.4167 16.561 15.4417 16.1277 14.6917C15.3694 13.3834 15.986 12.3167 17.4944 12.3167C18.361 12.3167 19.0777 11.6084 19.0777 10.7334V9.2667C19.0694 8.40003 18.361 7.68336 17.486 7.68336ZM10.736 12.7084C9.24438 12.7084 8.02771 11.4917 8.02771 10C8.02771 8.50836 9.24438 7.2917 10.736 7.2917C12.2277 7.2917 13.4444 8.50836 13.4444 10C13.4444 11.4917 12.2277 12.7084 10.736 12.7084Z'
            fill='url(#paint0_linear_478_380)'
         />
         <defs>
            <linearGradient
               id='paint0_linear_478_380'
               x1='19.0777'
               y1='2.13428'
               x2='3.37286'
               y2='18.781'
               gradientUnits='userSpaceOnUse'
            >
               <stop stop-color='#D665FF' />
               <stop offset='1' stop-color='#4C6FFF' />
            </linearGradient>
         </defs>
      </SvgIcon>
   );
};

export const WhiteStarSVG = () => {
   return (
      <SvgIcon
         viewBox='0 0 21 20'
         sx={{ width: '21px', height: '20px', fill: 'none' }}
      >
         <path
            d='M4.51538 19.3034C4.03233 19.5517 3.48537 19.1178 3.58262 18.5634L4.61978 12.6516L0.216861 8.45578C-0.194614 8.06366 0.0183857 7.34671 0.569622 7.2684L6.69272 6.39856L9.42287 0.990381C9.6688 0.503206 10.335 0.503206 10.5809 0.990381L13.3111 6.39856L19.4342 7.2684C19.9854 7.34671 20.1984 8.06366 19.787 8.45578L15.384 12.6516L16.4212 18.5634C16.5184 19.1178 15.9715 19.5517 15.4884 19.3034L10.0019 16.4835L4.51538 19.3034Z'
            fill='white'
         />
      </SvgIcon>
   );
}
