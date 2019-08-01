export default function Header() {
    return (
        <header>
            <span className="title" >NiftyAPI</span>
            <span className="description" >A fast, reliable API gateway</span>
            <span className="services_title">Services</span>
            <ul class="services">
                <li><a href="#">Authentication</a></li>
                <li><a href="#">Analytics</a></li>
                <li><a href="#">Metrics</a></li>
                <li><a href="#">Crash reports</a></li>
            </ul>
        </header>
    )
}