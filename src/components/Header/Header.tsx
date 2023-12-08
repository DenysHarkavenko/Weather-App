import './_Header.css'

export function Header() {
    return(
        <header className='header'>
            <div className="header-wrapper">
                <h1 className='header__title'>My Weather</h1>
                <form className='header__form'>
                    <input className='header__form-input' type="text" placeholder="Enter the name of your city" />
                    <button className='header__form-btn' type="submit">Show</button>
                </form>
            </div>
        </header>
    )
}