import './_Footer.css'

export function Footer() {
    return(
        <footer className="footer">
            <h2 className="footer__title">Author:</h2>
            <nav className="footer__nav">
                <ol className="footer__nav-list">
                    <li className="footer__nav-list-link">
                        <a href="https://t.me/de0nn1s" target="_blank">
                            <i className='bx bxl-telegram'></i>
                        </a>
                    </li>
                    <li className="footer__nav-list-link">
                        <a href="https://www.linkedin.com/in/denys-harkavenko-52234a251/" target="_blank">
                            <i className='bx bxl-linkedin'></i>
                        </a>
                    </li>
                    <li className="footer__nav-list-link">
                        <a href="https://github.com/DenysHarkavenko" target="_blank">
                        <i className='bx bxl-github' ></i>
                        </a>
                    </li>
                </ol>
            </nav>
        </footer>
    )
}