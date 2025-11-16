
const SkeletonCardLoader = () => {
    return (
        <>
            {Array.from({ length: 10 }).map((_, index: number) => (
                <div className="col-md-6 country-wrapper" key={index} >
                    <div className="country-card d-flex align-items-center gap-3">
                        <div className="skeleton-img rounded"></div>
                        <div className="flex-grow-1">
                            <div className="skeleton-line w-50 mb-2"></div>
                            <div className="skeleton-line w-25"></div>
                        </div>
                    </div>
                </div>
            ))}

        </>
    )
}

export default SkeletonCardLoader