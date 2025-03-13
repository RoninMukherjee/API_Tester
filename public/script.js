const queryParamsContainer = document.getElementById('query-params-container')
const queryParamsAddBtn = document.getElementById('add-query-param-btn')
const headersContainer = document.getElementById('request-headers-container')
const headersAddBtn = document.getElementById('add-header-btn')

queryParamsAddBtn.addEventListener('click', () => {
    const newQueryParamElement = document.getElementById('query-key-value-template').content.cloneNode(true)
    newQueryParamElement.querySelector('#data-remove-btn').addEventListener('click', (e) => {
        e.target.parentElement.remove()
    })
    queryParamsContainer.appendChild(newQueryParamElement)
})

headersAddBtn.addEventListener('click', () => {
    const newHeaderElement = document.getElementById('header-key-value-template').content.cloneNode(true)
    newHeaderElement.querySelector('#data-remove-btn').addEventListener('click', (e) => {
        e.target.parentElement.remove()
    })
    headersContainer.appendChild(newHeaderElement)
})

document.getElementById('authTypeSelector').addEventListener("change", (e)=>{
    const selectedValue = e.target.value
    let authElement;
    switch(selectedValue) {
        case 'none':
            authElement = ''
            break
        case 'basic':
            authElement = document.getElementById('basic-auth-template').content.cloneNode(true)
            break
        case 'bearer':
            authElement = document.getElementById('bearer-auth-template').content.cloneNode(true)
            break
        case 'apikey':
            authElement = document.getElementById('apikey-auth-template').content.cloneNode(true)
            break
    }
    document.getElementById('auth-section-container').replaceChildren(authElement)
    
});

document.getElementById('main-form').addEventListener('submit', (e) => {
    e.preventDefault()
    const reqmethod = document.getElementById('req_method').value
    const endpoint = document.getElementById('req_endpoint').value
    const querykeys = document.getElementsByClassName('query-key form-control')
    const queryvalues = document.getElementsByClassName('query-value form-control')
    const headerkeys = document.getElementsByClassName('header-key')
    const headervalues = document.getElementsByClassName('header-value')
    const body = document.getElementById('req_body').value
    let params = {}
    let headers = {}
    for(let i = 0; i < querykeys.length; i++) {
        params[querykeys[i].value] = queryvalues[i].value
    }
    for(let i = 0; i < headerkeys.length; i++) {
        headers[headerkeys[i].value] = headervalues[i].value
    }
    let auth = {}
    const authType = document.getElementById('authTypeSelector').value
    switch(authType) {
        case 'basic':
            auth = {
                type: 'basic',
                username: document.getElementById('basic_auth_username').value,
                password: document.getElementById('basic_auth_password').value
            }
            break
        case 'bearer':
            auth = {
                type: 'bearer',
                token: document.getElementById('bearer_auth_token').value
            }
            break
        case 'apikey':
            auth = {
                type: 'apikey',
                key: document.getElementById('apikey_auth_key').value,
                value: document.getElementById('apikey_auth_value').value,
                addto: document.getElementById('apikey_authtype').value
            }
            break
    }
    axios({
        method:'POST',
        url: '/apireq',
        data: {
            reqmethod,
            endpoint,
            params,
            headers,
            auth,
            body
        }
    }).then((res) => {
        document.getElementById('api_response_displayer').innerText = JSON.stringify(res.data , null , 2)
        document.getElementById('api_responseheaders_displayer').innerText = JSON.stringify(res.headers, null, 2)
    }).catch((err) => {
        console.log(err)
    })
})