import axios from "axios";

class Axios {
    static instance;

    constructor() {}

    static getInstance() {
        console.log(import.meta.env.VITE_SERVER_URL);

        // axios 인스턴스 생성
        Axios.instance = axios.create({
            baseURL: import.meta.env.VITE_SERVER_URL,
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: true,
        });

        // 인스턴스에 interceptors 설정
        Axios.instance.interceptors.response.use(
            (res) => res,
            async (error) => {
                return error;
            }
        );

        return Axios.instance;
    }

    get(url) {
        return Axios.instance.get(url);
    }

    post(url, data) {
        return Axios.instance.post(url, data);
    }

    put(url, data) {
        return Axios.instance.put(url, data);
    }

    delete(url) {
        return Axios.instance.delete(url);
    }
}

const axi = Axios.getInstance();
export default axi;
