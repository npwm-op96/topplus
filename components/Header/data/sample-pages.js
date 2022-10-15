import imgAPI from '~/static/images/imgAPI'
import link from '~/static/text/link'


const sample = [
  {
    name: 'company',
    thumb: imgAPI.ui[3],
    child: [
      {
        name: 'about',
        link: link.medical.about
      },
      {
        name: 'team',
        link: link.medical.team
      },
      {
        name: 'blog',
        link: link.medical.blog
      },
      {
        name: 'blog detail',
        link: link.medical.blogDetail
      }
    ]
  },
  {
    name: 'Form',
    thumb: imgAPI.ui[1],
    child: [
      {
        name: 'login',
        link: link.medical.login
      },
      {
        name: 'register',
        link: link.medical.register
      },
      {
        name: 'contact',
        link: link.medical.contact
      },
      {
        name: 'contact map',
        link: link.medical.contactMap
      }
    ]
  },
  {
    name: 'Academy',
    thumb: imgAPI.ui[0],
    child: [
      {
        name: 'course',
        link: link.academy.course
      },
      {
        name: 'product',
        link: link.medical.product
      },
      {
        name: 'product detail',
        link: link.medical.productDetail
      }
    ]
  },
  {
    name: 'community',
    thumb: imgAPI.ui[2],
    child: [
      {
        name: 'pricing',
        link: link.medical.pricing
      },
      {
        name: 'faq',
        link: link.medical.faq
      },
      {
        name: 'maintenance',
        link: link.medical.maintenance
      },
      {
        name: 'coming soon',
        link: link.medical.comingSoon
      },
      {
        name: 'error',
        link: '/error'
      }
    ]
  }
]

export default sample
