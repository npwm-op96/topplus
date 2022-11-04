import imgAPI from '~/static/images/imgAPI'
import link from '~/static/text/link'


const sample = [
  // {
  //   name: 'company',
  //   thumb: imgAPI.ui[3],
  //   child: [
  //     {
  //       name: 'about',
  //       link: link.medical.about
  //     },
  //     {
  //       name: 'team',
  //       link: link.medical.team
  //     },
  //     {
  //       name: 'blog',
  //       link: link.medical.blog
  //     },
  //     {
  //       name: 'blog detail',
  //       link: link.medical.blogDetail
  //     }
  //   ]
  // },
  // {
  //   name: 'Form',
  //   thumb: imgAPI.ui[1],
  //   child: [
  //     {
  //       name: 'login',
  //       link: link.medical.login
  //     },
  //     {
  //       name: 'register',
  //       link: link.medical.register
  //     },
  //     {
  //       name: 'contact',
  //       link: link.medical.contact
  //     },
  //     {
  //       name: 'contact map',
  //       link: link.medical.contactMap
  //     }
  //   ]
  // },
  {
    name: 'Academy',
    thumb: imgAPI.ui[0],
    child: [
      {
        name: 'course',
        link: link.academy.course
      },
      // {
      //   name: 'product',
      //   link: link.medical.product
      // },
      // {
      //   name: 'product detail',
      //   link: link.medical.productDetail
      // }
    ]
  },
  {
    name: 'knowleage & know how',
    thumb: imgAPI.ui[2],
    child: [
      {
        name: 'knowlage',
        link: link.community.knowlage
      },
      {
        name: 'knowhow',
        link: link.community.knowhow
      },

    ]
  }
]

export default sample
