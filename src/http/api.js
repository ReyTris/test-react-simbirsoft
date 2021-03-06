import axios from "axios";

export const $axios = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        'X-Auth-Token': process.env.REACT_APP_API_TOKEN,
    }
})

export default class ApiService {
    static async getAllCompetitions() {
        const response = await $axios.get('competitions')
        return response
    }
    static async getAllTeams() {
        const response = await $axios.get('teams')
        return response
    }
    static async getCompetitionMatches(id) {
        const response = await $axios.get(`competitions/${id}/matches`)
        return response
    }
    static async getTeamMatches(id) {
        const response = await $axios.get(`teams/${id}/matches`)
        return response
    }
}
