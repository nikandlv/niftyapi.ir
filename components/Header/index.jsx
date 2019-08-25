export default function Header() {
    return (
        <header>
            <span className="title" >NiftyAPI</span>
            <span className="description" >A fast, reliable API gateway</span>
            <div className="list">
            <div className="link-list">
                <span className="services">Services</span>
                <ul>
                    <li><a>Authentication</a></li>
                    <li><a>Analytics</a></li>
                    <li><a>Metrics</a></li>
                    <li><a>Crash reports</a></li>
                </ul>
            </div>
            <div className="link-list">
                <span className="services">Learn more</span>
                <ul>
                    <li><a>Blog</a></li>
                    <li><a>Downloads</a></li>
                    <li><a>Documents</a></li>
                    <li><a>Github</a></li>
                </ul>
            </div>
            <div className="link-list">
                <span className="services">Links</span>
                <ul>
                    <li><a href="https://nikandlv.ir">nikandlv.ir</a></li>
                    <li><a href="https://twitter.com/nikandlv">Nikandlv Twitter</a></li>
                    <li><a href="https://instagram.com/nikandlv">Instagram</a></li>
                    <li><a href="">Telegram</a></li>
                </ul>
            </div>
            <div className="link-list">
                <span className="services">Contact</span>
                <ul>
                    <li><a href="mailto:info@niftyapi.ir">info@niftyapi.ir</a></li>
                    <li><a>Twitter</a></li>
                    <li><a>Instagram</a></li>
                    <li><a>Facebook</a></li>
                </ul>
            </div>
            </div>
        </header>
    )
}