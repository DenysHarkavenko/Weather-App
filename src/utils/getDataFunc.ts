import axios from "axios"

export function getDataFunc(country: string, apiKey: string, setCity: any, setCountry:any){

    return async function getData(e:React.FormEvent): Promise<void> {
        e.preventDefault()
    
        try{
          if(country.trim().length !== 0){
            const response = await axios.get(`http://api.weatherapi.com/v1/current.json?aqi=no`, {
                params:{
                  key: apiKey,
                  q: country
                }
            })
            setCity(response.data)
            setCountry('')
          } else{
            window.alert('You have not entered the name of the city!')
          }
        } 
        catch(e: any){
          console.error(`ERROR: ${e}`)
          window.alert('Wrong city name!')
        }
      }
}

