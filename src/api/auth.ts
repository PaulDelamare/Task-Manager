import { api } from "./client";

export class AuthService {
    private api = api;

    /**
     * Permet de connecter un utilisateur avec son email et son mot de passe.
     */
    async login(data: { email: string; password: string; }) {
        const res = await this.api.post('/api/login', data);
        return res.data;
    }

    /**
     * Permet de créer un nouvel utilisateur avec son email, son mot de passe et son nom.
     */
    async register(data: { email: string; password: string; name: string; }) {
        const res = await this.api.post('/api/register', data);
        return res.data;
    }

    /**
     * Permet de récupérer les informations de l'utilisateur si son token est encore valide.
     */
    async fetchMe() {
        const res = await this.api.get('/api/verify');
        return res.data;
    }


}

export const authService = new AuthService();
