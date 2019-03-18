import apisauce from 'apisauce';

class my_class_app {

    /*
    * Set / get dispatch needs init in app root 
    */
    dispatch = null;
    get_dispatch = () => {return this.dispatch==null?false:this.dispatch;}
    set_dispatch = (n_dispatch) => {this.dispatch=n_dispatch;}    
    /* End dispatch set */

    api = apisauce.create({
        baseURL: 'https://api.thecatapi.com/v1/images/search',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        timeout: 10000
    });

    /***** HEADERS *****/
    setHeaderImages = () => {
        this.api.setHeader('Content-type', 'multipart/form-data')
    }

    setHeaderJson = () => {
        this.api.setHeader('Content-type', 'application/json')
    }

    setToken = (token) => {
        this.api.setHeader('Authorization', `Bearer ${token}`)
    }


    updateDataAction = async () => {
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

        console.log(this.dispatch);
        return this.dispatch({
            type: 'SET_DATA',
            payload: data.data
        });
    }


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
