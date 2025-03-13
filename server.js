import express from 'express'
import 'dotenv/config'
import axios from 'axios'

const app = express()
const port = process.env.PORT || 3000

app.use (express.static('public'))
app.use (express.json())
app.use (express.urlencoded({ extended: true }))

/*
{
  reqmethod: 'GET',
  endpoint: 'https://example.com',
  params: { '23': '43', sdf: '1' },
  headers: { '123': '312', '234': '234' },
  auth: { type: 'basic', username: 'asdf', password: '675' },
  body: '{\n "this":"this"\n}'
}
*/ 

app.post('/apireq', async (req,res) => {
    let axiosConfig = {
        method: req.body.reqmethod,
        url: req.body.endpoint,
    }
    if(req.body.params) 
    {
        axiosConfig.params = req.body.params
    }
    if(req.body.headers) 
    {
        axiosConfig.headers = req.body.headers
    }
    if(req.body.body) 
    {
        axiosConfig.data = JSON.parse(req.body.body)
    }
    if(req.body.auth.type === 'basic') 
    {
        axiosConfig.auth = {
            username: req.body.auth.username,
            password: req.body.auth.password
        }
    } 
    else if(req.body.auth.type === 'bearer') 
    {
        axiosConfig.headers['Authorization'] = `Bearer ${req.body.auth.token}`
    } 
    else if(req.body.auth.type === 'apikey' && req.body.auth.addto === 'addToHeader') 
    {
        axiosConfig.headers[req.body.auth.key] = req.body.auth.value
    } 
    else if(req.body.auth.type === 'apikey' && req.body.auth.addto === 'addToQueryParams') 
    {
        axiosConfig.params[req.body.auth.key] = req.body.auth.value
    }

    try 
    {
        let response = await axios(axiosConfig)
        res.json(response.data)
    } 
    catch(err) 
    {
        res.json(err)
    }
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})