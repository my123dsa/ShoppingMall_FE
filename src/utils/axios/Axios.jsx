import axios from "axios";

class Axios {
    static instance = null;
    // constructor() {}

    static getInstance() {
        if (!Axios.instance) {
            console.log("📦 axios instance created:", process.env.REACT_APP_SERVER_URL);

            Axios.instance = axios.create({
                baseURL: process.env.REACT_APP_SERVER_URL,
                headers: {
                    "Content-Type": "application/json",
                },
                withCredentials: true,
            });

            // 인터셉터 한 번만 등록
            Axios.instance.interceptors.response.use(
                (response) => response,
                async (error) => {
                    // 공통 에러 처리도 여기에 추가 가능
                    console.error("❌ axios response error:", error);
                    return Promise.reject(error);
                }
            );
        }

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
