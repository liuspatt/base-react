class my_class_app {

    // Some variables
    url_api = "https://api.thecatapi.com/v1/images/search";
    text_hi = "this is sparta!!";


    // constructor() {

    // }

    async getCats() {
        // vars 
        let vars_query = {
            limit: 5,
            page: 1,
            Border: 'Desc',
        }

        // set vars into the url 
        let request_url = new URL(this.url_api);
        Object.keys(vars_query).forEach(key => request_url.searchParams.append(key, vars_query[key]))

        // send the request
        const data = await fetch(request_url.href, {
            method: "GET",
            cache: "no-cache",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },

        })
        // Debug fetch 
        // .then(function(response) {
        //     response.status     //=> number 100–599
        //     response.statusText //=> String
        //     response.headers    //=> Headers
        //     response.url        //=> String
        //     console.log(response);
        //     return response.text()
        //   }, function(error) {
        //     error.message //=> String
        //   })
            .then(res => res.json());

        return data;
    }

}

export default new my_class_app();

// #examples api 
// async setCats(){
//     const query = await fetch(BASE_API, {
//         method: "POST",
//         cache: "no-cache",
//         headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json"
//         },
//         // for post methods
//         body: JSON.stringify({
//              email: email,
//              id_device: "456564564645"
//         })
//     });
//     const data = await query.json();
//     return data;
// }