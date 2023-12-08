import './_Header.css'

export function Header() {
    return(
        <header className='header'>
            <h1 className='header__title'>My Weather</h1>
            <form>
                <input type="text" placeholder="Enter the name of your city" />
                <button type="submit">Show</button>
            </form>
        </header>
    )
}