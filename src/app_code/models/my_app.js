import apisauce from 'apisauce'


class my_class_app {

    // Some variables
    url_api = "https://api.thecatapi.com/v1/images/search";
    text_hi = "this is sparta!!";
    
    api = apisauce.create({
        baseURL: 'https://api.thecatapi.com/v1/images/search',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        timeout: 10000
    });


    

    async getCats() {
       // send the request

        let vars_query = {
            limit: 10,
            page: 1,
            Border: 'Desc',
        }
        let data = await this.api
                .get('/', vars_query)
                .then(response => response)
                .catch(response => response);
        console.log(data);

        return data.data;
    }

} 

export default new my_class_app();
