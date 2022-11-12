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
    name: 'แสดงผลสถิติ',
    // child: [
    //   {
    //     name: 'แสดงผลสถิติ',
    //     link: 'system/dashboard'
    //   },
    // ],
    link: 'systems/dashboard'
  },
  {
    name: 'ตั้งค่าเว็บไซต์',
    child: [
      {
        name: 'เปิดปิดหน้า',
        link: 'systems/'
      },
      // {
      //   name: 'ประกันวินาศภัย',
      //   link: 'systems/'
      // },
      // {
      //   name: '',
      //   link: 'systems/'
      // },
    ]
  },
  {
    name: 'งานสมาชิก',
    child: [
      {
        name: 'เอเจน',
        link: 'systems/'
      },
      {
        name: 'ประกันวินาศภัย',
        link: 'systems/'
      },
      {
        name: '',
        link: 'systems/'
      },
    ]
  },
  {
    name: 'งานประกัน',
    child: [
      {
        name: 'ประกันชีวิต',
        link: 'systems/'
      },
      {
        name: 'ประกันวินาศภัย',
        link: 'systems/'
      },
      {
        name: '',
        link: 'systems/'
      },
    ]
  },
  {
    name: 'ตั้งค่าการแชร์',
    child: [
      {
        name: 'จัดการงานกิจกรรม',
        link: 'systems/'
      },
      {
        name: 'เรียกรายงานกิจกรรม',
        link: 'systems/'
      },
      {
        name: '',
        link: 'systems/'
      },
    ]
  }, 
  {
    name: 'โปรโมชั่น',
    child: [
      {
        name: 'จัดการงานกิจกรรม',
        link: 'systems/'
      },
      {
        name: 'เรียกรายงานกิจกรรม',
        link: 'systems/'
      },
      {
        name: '',
        link: 'systems/'
      },
    ]
  },
  {
    name: 'การขอเปิดเว็บไซต์',
    child: [
      {
        name: 'จัดการงานกิจกรรม',
        link: 'systems/'
      },
      {
        name: 'เรียกรายงานกิจกรรม',
        link: 'systems/'
      },
      {
        name: '',
        link: 'systems/'
      },
    ]
  },
  {
    name: 'งานกิจกรรม',
    child: [
      {
        name: 'จัดการงานกิจกรรม',
        link: 'systems/'
      },
      {
        name: 'เรียกรายงานกิจกรรม',
        link: 'systems/'
      },
      {
        name: '',
        link: 'systems/'
      },
    ]
  },
  {
    name: 'งานกิจหลักสูตร',
    child: [
      {
        name: 'จัดการงานหลักสูตร',
        link: 'systems/'
      },
      {
        name: 'เรียกรายงานหลักสูตร',
        link: 'systems/'
      },
      {
        name: '',
        link: 'systems/'
      },
    ]
  },
]

export default menu
