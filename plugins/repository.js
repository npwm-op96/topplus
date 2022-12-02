import quoatationRepository from '~/services/api/quotation';
import filesRepository from '~/services/api/files';
import customerRepository from '~/services/api/customer';


export default (ctx, inject) => {
    // console.log(ctx.x$axios)
    // inject the repository in the context (ctx.app.$repository)
    // And in the Vue instances (this.$repository in your components)
    const repositoryQuoWithAxios = quoatationRepository(ctx.$axios)
    const repositoryFilesWithAxios = filesRepository(ctx.$axios)
    const repositoryCustomerWithAxios = customerRepository(ctx.$axios)


    inject('quotationRepository', repositoryQuoWithAxios('/Quotation'))
    inject('filesRepository', repositoryFilesWithAxios('/Files'))
    inject('customersRepository', repositoryCustomerWithAxios('/Customer'))


    // You can reuse the repositoryWithAxios object:
    // inject("userRepository", repositoryWithAxios('/users'));
}