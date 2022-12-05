import quotationRepository from '~/services/api/quotation';
import filesRepository from '~/services/api/files';
import customerRepository from '~/services/api/customer';
import messagesRepository from '~/services/api/message';



export default (ctx, inject) => {
    // console.log(ctx.x$axios)
    // inject the repository in the context (ctx.app.$repository)
    // And in the Vue instances (this.$repository in your components)
    const repositoryQuoWithAxios = quotationRepository(ctx.$axios)
    const repositoryFilesWithAxios = filesRepository(ctx)
    const repositoryMessage = messagesRepository(ctx)

    const repositoryCustomerWithAxios = customerRepository(ctx.$axios)


    inject('messagesRepository', repositoryMessage('LineMessage'))
    inject('quotationRepository', repositoryQuoWithAxios('/Quotation'))
    inject('filesRepository', repositoryFilesWithAxios('/Files'))
    inject('customersRepository', repositoryCustomerWithAxios('/Customer'))


    // You can reuse the repositoryWithAxios object:
    // inject("userRepository", repositoryWithAxios('/users'));
}