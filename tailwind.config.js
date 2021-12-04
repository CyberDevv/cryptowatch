module.exports = {
   purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
   darkMode: false, // or 'media' or 'class'
   theme: {
      extend: {
         primary: {
            softblue: '#C7D3FF',
            bluee: '#7895FF',
            default: '#4C6FFF',
            blue: '#3754DB',
          gradient: {
              1: '#D665FF',
              2: '#4C6FFF',
            },
         },
         secondary: {
           gradient: {
              1: '#FF92AE',
              2: '#FF3D9A',
            },
            'style': '#E52F15',
            2: '#FF385C',
            4: '#F6ACA2',
            3: '#FFE5EA',
         },
         dark: {
            gray: '#999999',
            black: '#666666',
            darker: '#333333',
         },
      },
   },
   variants: {
      extend: {},
   },
   plugins: [],
};
