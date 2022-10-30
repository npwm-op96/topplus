import moment from 'moment';

export  const Mevent = () => {
    const GetEvent  =   () => {
        console.log('Mevents')
        // localStorage.setItem("CART", JSON.stringify(data));
        return  'Hi'
    }
    const SetEvent = async (data)=>{
        console.log(data);
          const groups = data.reduce((groups, item) => {
            var check = moment(item.date).format("DD/MM/yyyy");
            var month = check.substring(1,2)
            console.log(month)
            // const month = month
            if (!groups[month]) {
              groups[month] = [];
            }
            groups[month].push(item);
            return groups;
          }, {});
          
          // Edit: to add it in the array format instead
          const groupArrays = Object.keys(groups).map((month) => {
            return {
              month,
              events: groups[month]
            };
          });
          
          console.log(groupArrays);


        return groupArrays
    }
    return {
        GetEvent,
        SetEvent
    }

}
