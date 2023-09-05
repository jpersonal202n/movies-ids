class api {

    constructor(endpoint) {
        this.domain = "http://localhost:8000/api/v1";
        this.endpoint = endpoint;
    }

    async get(queryParams) {
        return await fetch(this.domain+this.endpoint+queryParams);
    }

}