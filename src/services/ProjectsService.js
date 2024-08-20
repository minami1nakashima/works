import axios from 'axios'

const Axios = axios.create({
    baseURL: "https://airtable.com/appOwOOW3ChtQqFk1/tblRGDonw0w48PBlo/viwnVxtkG30phl89G?blocks=show"
});

// Axios.defaults.headers.common = { 'Authorization': `Bearer ` + import.meta.env.VITE_APP_AIRTABLEKEY }

export default {
    getProjects() {
        return Axios.get()
    }
}
