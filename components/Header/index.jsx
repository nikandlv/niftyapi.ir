export default function Header() {
    return (
        <header>
            <span className="title" >NiftyAPI</span>
            <span className="description" >A fast, reliable API gateway</span>
            <span className="services_title">Services</span>
            <ul class="services">
                <li>Authentication</li>
                <li>Analytics</li>
                <li>Metrics</li>
                <li>Crash reports</li>
            </ul>
        </header>
    )
}