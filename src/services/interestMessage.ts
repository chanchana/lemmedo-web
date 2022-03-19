import axios, { AxiosResponse } from "axios";

export interface InterestMessage {
    full_name: string;
    email: string;
    message: string;
}

const SERVER_URL = process.env.REACT_APP_SERVER_URL

const send = (interestMessage: InterestMessage): Promise<AxiosResponse> => {
    return axios.post(`${SERVER_URL}/messages`, interestMessage)
}

export const interestMessageService = {
    send,
}