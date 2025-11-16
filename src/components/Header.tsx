import { resetPageCount, setRegion } from "../redux/features/countrySlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import type { RootState } from "../redux/store";

const Header: React.FC = () => {
    const { selectedRegion } = useAppSelector((state: RootState) => state.country);
    const dispatch = useAppDispatch()
    const regions = ["All", "Asia", "Africa", "Europe", "Americas", "Oceania"]

    const selectRegion = (region: string) => {
        dispatch(setRegion(region.toLowerCase()))
        dispatch(resetPageCount())
        document.getElementById('country-cards')?.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <header>
            <nav className="navbar navbar-expand-md mb-4">
                <div className="container-fluid">

                    <h3 className="fw-bold m-0 fs-24">Countries</h3>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#countryNav"
                        aria-controls="countryNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-end" id="countryNav">
                        <ul className="navbar-nav ms-auto mt-3 mt-md-0">

                            {regions.map((region, index) => (
                                <li className="nav-item ms-md-3">
                                    <a className={`nav-link ps-0 fw-semibold  ${selectedRegion === region.toLowerCase() ? 'border-bottom border-dark pb-1 region-active' : 'text-mute'}`} key={index} role="button" onClick={() => selectRegion(region)}>
                                        {region}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header