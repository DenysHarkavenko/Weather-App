import { Card } from '../Card/Card'

export function Main({ city }: any) {
    return (
        <main className="main">
            {Object.keys(city).length !== 0 && <Card city={city} />}
        </main>
    )
}
