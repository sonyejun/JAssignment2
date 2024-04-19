function Visual({pageTitle, pageType}) {
  return (
        <div className={`visual ${pageType}`}>
            <div className="visualBg"></div>
            <h1 className="visualText">{pageTitle}</h1>
        </div>
    );
}

export default Visual;