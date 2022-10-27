import sample from './sample-pages'

const menu = [
  {
    name: 'หน้าแรก',
    // child: [
    //   {
    //     name: 'การขอรับใบอนุญาต',
    //     link: '/'
    //   },
    // ]
    link: '/'

  },
  {
    name: 'วินาศภัย',
    child: [
      {
        name: 'การขอรับใบอนุญาต',
        link: '/'
      },
      {
        name: 'การขอสอบรับใบอนุญาต',
        link: '/'
      },
      {
        name: 'การขอรับใบอนุญาต(ต่ออายุ)',
        link: '/'
      },
    ]
  },
  {
    name: 'ประกันชีวิต',
    child: [
      {
        name: 'การขอรับใบอนุญาต',
        link: '/'
      },
      {
        name: 'การขอสอบรับใบอนุญาต',
        link: '/'
      },
      {
        name: 'การขอรับใบอนุญาต(ต่ออายุ)',
        link: '/'
      },
    ]
  },
  {
    name: 'เทเลเซลล์',
    child: [
      {
        name: 'เตรียมความพร้อม',
        link: 'course/telesales'
      },
    ]
  },
  // {
  //   name: 'Sample Pages',
  //   child: sample
  // }
]

export default menu
