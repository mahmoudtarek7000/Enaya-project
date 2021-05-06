import React from "react";
import { Link } from "react-router-dom";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import img4 from "../assets/images/img12.png"
function Footer() {
  return (
    <footer className="section-cont">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <h4 className="mb-4">Enaya</h4>
            <ul className="list-unstyled">
              <li className="mb-3">
                <Link to="/about">About Us</Link>{" "}
              </li>
              <li className="mb-3">
                <Link to="">Out Teams</Link>{" "}
              </li>
              <li className="mb-3">
                <Link to="">Careers</Link>{" "}
              </li>
              <li className="mb-3">
                <Link to="">Press</Link>{" "}
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6">
            <h4 className="mb-4">Are you a Hospital?</h4>
            <ul className="list-unstyled">
              <li className="mb-3">
                <Link to="/signhospital">Join To Enaya.com</Link>{" "}
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6">
            <h4 className="mb-4">Need Help</h4>
            <ul className="list-unstyled">
              <li className="mb-3">
                <Link to="/contact">Contact us </Link>
              </li>
              <li className="mb-3">
                <Link to="/terms">Terms Of Use</Link>{" "}
              </li>
              <li className="mb-3">
                <Link to="/privacypolicy">Privacy Policy</Link>{" "}
              </li>
              <li className="mb-3">
                <Link to="/drprivacypolicy">Doctors Privacy Policy</Link>{" "}
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6">
            <ul className="list-unstyled">
              <li className="mb-4">
                <Link to="">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAAAnCAYAAADD0pCgAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MjE1OEMzNDM4NEI5MTFFNkIwRDA5MkNCNzI5NjNCMjQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MjE1OEMzNDQ4NEI5MTFFNkIwRDA5MkNCNzI5NjNCMjQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoyMTU4QzM0MTg0QjkxMUU2QjBEMDkyQ0I3Mjk2M0IyNCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoyMTU4QzM0Mjg0QjkxMUU2QjBEMDkyQ0I3Mjk2M0IyNCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pi/+kE0AAA8GSURBVHja7FwJVFVV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"
                    alt=""
                  />
                </Link>
              </li>
              <li className="mb-4">
                <Link to="">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAAAmCAYAAAAIjkMFAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MjhCMERBRTQ4NEI5MTFFNjhGMkJBMTNBM0MxQTE5OUMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MjhCMERBRTU4NEI5MTFFNjhGMkJBMTNBM0MxQTE5OUMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoyOEIwREFFMjg0QjkxMUU2OEYyQkExM0EzQzFBMTk5QyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoyOEIwREFFMzg0QjkxMUU2OEYyQkExM0EzQzFBMTk5QyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PrKpRDgAABQlSURBVHja7FwJmI9V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"
                    alt=""
                  />
                </Link>
              </li>
              <li className="mb-4">
                <Link to="" className="mr-3">
                  <FacebookIcon />
                </Link>{" "}
                <Link to="" className="mr-3">
                  <InstagramIcon />
                </Link>
                <Link to="" className="mr-3">
                  <TwitterIcon />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
