import "react";

function FooterPage() {
  return (
    <div>
      <footer className="footer bg-dark text-white">
        <div className="row p-3 mx-5">
          <div className="col-md-3 col-lg-3 col-sm-12 col-12">
            <h3 className="fw-bold">Shop and Learn</h3>
            <ul className="list-unstyled">
              <a href="" className="text-white fw-semibold  d-block">
                Store
              </a>
              <a href="" className="text-white fw-semibold  d-block">
                Mac
              </a>
              <a href="" className="text-white fw-semibold  d-block">
                iPad
              </a>
              <a href="" className="text-white fw-semibold  d-block">
                iPhone
              </a>
              <a href="" className="text-white fw-semibold  d-block">
                Watch
              </a>
              <a href="" className="text-white fw-semibold  d-block">
                AirPods
              </a>
              <a href="" className="text-white fw-semibold  d-block">
                TV & Home
              </a>
              <a href="" className="text-white fw-semibold  d-block">
                AirTags
              </a>
              <a href="" className="text-white fw-semibold  d-block">
                Accessories
              </a>
              <a href="" className="text-white fw-semibold  d-block">
                Gift Cards
              </a>
            </ul>
          </div>
          <div className="col-md-3 col-lg-3 col-sm-12 col-12">
            <h3 className="fw-bold">Account</h3>
            <ul className="list-unstyled">
              <a href="" className="text-white fw-semibold  d-block">
                Manage your Apple account
              </a>
              <a href="" className="text-white fw-semibold  d-block">
                Apple Store Account
              </a>
              <a href="" className="text-white fw-semibold  d-block">
                iCloud.com
              </a>
            </ul>
            <h3 className="fw-bold">Entertainment</h3>
            <ul className="list-unstyled">
              <a href="" className="text-white fw-semibold  d-block">
                Apple One
              </a>
              <a href="" className="text-white fw-semibold  d-block">
                Apple TV+
              </a>
              <a href="" className="text-white fw-semibold  d-block">
                Apple Music
              </a>
              <a href="" className="text-white fw-semibold  d-block">
                Apple Arcade
              </a>
              <a href="" className="text-white fw-semibold  d-block">
                Apple Podcast
              </a>
              <a href="" className="text-white fw-semibold  d-block">
                Apple Books
              </a>
              <a href="" className="text-white fw-semibold  d-block">
                Gift Store
              </a>
            </ul>
          </div>
          <div className="col-md-3 col-lg-3 col-sm-12 col-12">
            <h3 className="fw-bold">Apple Store</h3>
            <ul className="list-unstyled">
              <a href="" className="text-white fw-semibold  d-block">
                Find Apple Store
              </a>
              <a href="" className="text-white fw-semibold  d-block">
                Genius Bar
              </a>
              <a href="" className="text-white fw-semibold  d-block">
                Today at Apple
              </a>
              <a href="" className="text-white fw-semibold  d-block">
                Group Reservations
              </a>
              <a href="" className="text-white fw-semibold  d-block">
                Apple Camps
              </a>
              <a href="" className="text-white fw-semibold  d-block">
                Apple Trade In
              </a>
              <a href="" className="text-white fw-semibold  d-block">
                Ways to Buy
              </a>
              <a href="" className="text-white fw-semibold  d-block">
                Recycling Programs
              </a>
              <a href="" className="text-white fw-semibold  d-block">
                Order Status
              </a>
              <a href="" className="text-white fw-semibold  d-block">
                Shopping Help
              </a>
            </ul>
          </div>
          <div className="col-md-3 col-lg-3 col-sm-12 col-12">
            <h3 className="fw-bold">For Business</h3>
            <ul className="list-unstyled">
              <a href="" className="text-white fw-semibold  d-block">
                Apple & Business
              </a>
              <a href="" className="text-white fw-semibold  d-block">
                Shop & Business
              </a>
            </ul>
            <h3 className="fw-bold">For Education</h3>
            <ul className="list-unstyled">
              <a href="" className="text-white fw-semibold  d-block">
                Apple & Education
              </a>
              <a href="" className="text-white fw-semibold  d-block">
                Shop for Education
              </a>
              <a href="" className="text-white fw-semibold  d-block">
                Shop for University
              </a>
            </ul>
            <h3 className="fw-bold">For Healthcare</h3>
            <ul className="list-unstyled">
              <a href="" className="text-white fw-semibold  d-block">
                Apple in Healthcare
              </a>
              <a href="" className="text-white fw-semibold  d-block">
                Mac in Healthcare
              </a>
              <a href="" className="text-white fw-semibold  d-block">
                Health on Apple Watch
              </a>
            </ul>
          </div>
        </div>
        <hr className="w-100" />
        <div className="container text-center py-3">
          <p className="mb-2">
            © {new Date().getFullYear()} Your Company Name. All rights reserved.
          </p>
          <div className="d-flex justify-content-center align-items-center gap-3">
            <p className="m-0">Privacy Policy</p>
            <p className="m-0 border-start ps-3">Terms of Use</p>
            <p className="m-0 border-start ps-3">Sales Policy</p>
            <p className="m-0 border-start ps-3">Legal</p>
            <p className="m-0 border-start ps-3">Site Maps</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default FooterPage;
