class movies extends Api
{
    constructor() {
        super("movies");
    }

    async getMovies(queryParams) {
        return await this.get(queryParams);
    }
}