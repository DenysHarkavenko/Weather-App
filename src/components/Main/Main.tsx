import { Card } from "../Card/Card";

export function Main({city}: any) {
    return(
        <main className='main'>
            <Card city={city} />
        </main>
    )
}