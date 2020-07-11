import axios from "axios";

/**
 * API동작하는 내용을 정의한다.
 */
const instance = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
});

/** file Info 목록 */
function getFileInfoList() {
    return instance.post('/api/campaign/loadCompaignFileList')
}


export { 
    getFileInfoList 
};
