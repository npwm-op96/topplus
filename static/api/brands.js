// import imgAPI from '~/static/images/imgAPI'
// import brands from '~/static/api/brands.js'

// console.log('brands.js')

const brands = [
  {
    img: 'data:image/png;base64,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',
    name: 'ธนชาติประกันภัย',
    phone: '#',
    email: 'mail.insure@thanachart.co.th',
    address: 'Lorem ipsum street Block C - Vestibullum Building',
    color:'FE5101'
  },
  {
    img: 'data:image/png;base64,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',
    name: 'ทิพยประกันภัย',
    phone: '1737 กด 4',
    email: 'info@dhipaya.com',
    address: 'Lorem ipsum street no.14 Block A',
    color:'20468F'

  },
  {
    img: 'data:image/jpeg;base64,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',
    name: 'วิริยะประกันภัย',
    phone: '1557 หรือ 0-2239-1557',
    email: 'info@viriyah.com',
    address: 'Lorem ipsum street Block C - Vestibullum Building',
    color:'1E4494'
  },
  {
    img: 'https://www.muangthaiinsurance.com/upload/LOGO.jpg',
    name: 'เมืองไทย ประกันชีวิต',
    phone: '1484',
    email: 'info@muangthaiinsurance.com',
    address: 'Lorem ipsum street no.14 Block A',
    color:'1395D4'
  },
  {
    img: 'https://play-lh.googleusercontent.com/N9Ia-gR07gPRGvL4momE0mYQ3d3Ey2uhYWGaXcJaFLQ_NAGap55LtRWQkVIHzXnmKw',
    name: 'สิ่นมั่นคง',
    phone: '1596 หรือ 0-2377-3322 ',
    email: '0-2378-7000',
    address: 'Lorem ipsum street Block C - Vestibullum Building',
    color:'034695'

  },
  {
    img: 'data:image/jpeg;base64,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',
    name: 'AYUDHYA',
    phone: '1373',
    email: 'customercare@azay.co.th',
    address: 'Lorem ipsum street no.14 Block A',
    color:'FFFFFF'
  },
  {
    img: 'https://www.aia.co.th/content/dam/aia/apple-touch-icon.png',
    name: 'AIA',
    phone: '1373',
    email: 'customercare@azay.co.th',
    address: 'Lorem ipsum street no.14 Block A',
    color:'D51D47'
  },

]

export default brands;
