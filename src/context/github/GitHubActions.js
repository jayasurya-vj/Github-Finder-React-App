import axios from 'axios';


const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

const github = axios.create({
    baseURL: GITHUB_URL,
    headers : {
        Authorization: `token ${GITHUB_TOKEN}`
    }
})

export const searchUsers = async (text) => {
    const params = new URLSearchParams({
        q: text
    })

    const response = await github.get(`/search/users?${params}`)

   
   return response && response.data && response.data.items;
}

export const getUserAndRepos = async (loginid) => {
    const params = new URLSearchParams({
        sort: "created",
        per_page: "10"
    })
    const [user,repos] = await Promise.all([
        github.get(`/users/${loginid}?${params}`),
        github.get(`/users/${loginid}/repos`)
    ])

    return {user:user.data, repos: repos.data}
    
}

export const getSingleUser = async (loginid) => {
   
  console.log(loginid);

  const params = new URLSearchParams({
    sort: "created",
    per_page: "10"
})


    const response = await fetch(`${GITHUB_URL}/users/${loginid}?${params}`,{
        headers : {
            Authorization: `token ${GITHUB_TOKEN}`
        }
    })

    const data = await response.json();

    if(response.status==404){
        window.location= "/notfound";
    }

    return data;
 
  
}

export const getUserRepos = async (loginid) => {
    

    const response = await fetch(`${GITHUB_URL}/users/${loginid}/repos`,{
        headers : {
            Authorization: `token ${GITHUB_TOKEN}`
        }
    })

    const data = await response.json();

    return data;
 
  
}