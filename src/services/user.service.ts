import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

// Model
import { HttpClient } from './httpClient';
import { UserInterface } from '@/models/user.interface';

export class PokemonService extends HttpClient {
    [props: string]: any;

    public constructor(config?: AxiosRequestConfig) {
        super(config);

        this.signin = this.signing.bind(this);
    }

    public signin(name: string, eyes: string, nose: string, mouth: string, color: string): Promise<UserInterface> {

        const user = {name, eyes, nose, mouth, color};
        return this.post<UserInterface, UserInterface>('/signin', user)
        .then(this.success);
    }

    public refresh(): Promise<UserInterface> {
        return this.post<UserInterface, null>('/refresh')
        .then(this.success);
    }
}
