import React from "react";
import { Link } from "react-router-dom";
import icon from "../../imgs/icon.png"
function Post() {
  return (
    <div className="post container">
      <div className="post-left">
        <h2 className="postl-title">EMPLOYERS DASHBOARD</h2>
        <Link className="post-links">Overview</Link>
        <Link className="post-links">Employers Profile</Link>
        <Link className="post-links">Post a Job</Link>
        <Link className="post-links">Saved Candidate</Link>
        <Link className="post-links">Plans & Billing</Link>
        <Link className="post-links">All Companies</Link>
        <Link className="post-links">Settings</Link>
      </div>
      <div className="post-right">
        <h2 className="post-title">Post a job</h2>
        <div className="inp-boxes">
          <div className="inp-box">
            <label htmlFor="" className="inp-label">
              Job tittle
            </label>
            <input
              type="text"
              placeholder="Add job tittle,role,vacancies etc"
              name=""
              id=""
              className="post-inps"
            />
          </div>
          <div className="inp-row">
            <div className="inp-box">
              <label htmlFor="" className="inp-label">
                Tags
              </label>
              <input
                type="text"
                placeholder="Job keyword,tags etc..."
                name=""
                id=""
                className="post-inps"
              />
            </div>
            <div className="inp-box">
              <label htmlFor="" className="inp-label">
                Job Role
              </label>
              <select className="countries post-inps">
                <option value="">Select...</option>
                <option value="dog">Select...</option>
                <option value="cat">Select...</option>
              </select>
            </div>
          </div>
          <h2 className="post-title2">Salery</h2>
          <div className="inp-row3">
            <div className="inp-box">
              <label htmlFor="" className="inp-label">
                Min Salery{" "}
              </label>
              <input
                type="text"
                placeholder="Minimum salery..."
                name=""
                id=""
                className="post-inps"
              />
            </div>
            <div className="inp-box">
              <label htmlFor="" className="inp-label">
                Max Salery
              </label>
              <input
                type="text"
                placeholder="Maximum salery..."
                name=""
                id=""
                className="post-inps"
              />
            </div>
            <div className="inp-box">
              <label htmlFor="" className="inp-label">
                Salery Type
              </label>
              <select className="countries post-inps">
                <option value="">Select...</option>
                <option value="dog">Select...</option>
                <option value="cat">Select...</option>
              </select>
            </div>
          </div>
          <h2 className="post-title2">Advance Information</h2>
          <div className="inp-row3">
            <div className="inp-box">
              <label htmlFor="" className="inp-label">
                Education
              </label>
              <select className="countries post-inps">
                <option value="">Select...</option>
                <option value="dog">Select...</option>
                <option value="cat">Select...</option>
              </select>
            </div>
            <div className="inp-box">
              <label htmlFor="" className="inp-label">
                Experience
              </label>
              <select className="countries post-inps">
                <option value="">Select...</option>
                <option value="dog">Select...</option>
                <option value="cat">Select...</option>
              </select>
            </div>
            <div className="inp-box">
              <label htmlFor="" className="inp-label">
                Job Type
              </label>
              <select className="countries post-inps">
                <option value="">Select...</option>
                <option value="dog">Select...</option>
                <option value="cat">Select...</option>
              </select>
            </div>
            <div className="inp-box">
              <label htmlFor="" className="inp-label">
                Vacancies
              </label>
              <select className="countries post-inps">
                <option value="">Select...</option>
                <option value="dog">Select...</option>
                <option value="cat">Select...</option>
              </select>
            </div>
            <div className="inp-box">
              <label htmlFor="" className="inp-label">
                Expiration Date
              </label>
              <input
                type="date"
                placeholder="DD/MM/YYYY"
                name=""
                id=""
                className="post-inps"
              />
            </div>
            <div className="inp-box">
              <label htmlFor="" className="inp-label">
                Job Level
              </label>
              <select className="countries post-inps">
                <option value="">Select...</option>
                <option value="dog">Select...</option>
                <option value="cat">Select...</option>
              </select>
            </div>
          </div>
          <div className="loc">
            <h2 className="loc-title">Location</h2>
            <div className="loc-row">
              <div className="inp-box">
                <label htmlFor="" className="inp-label">
                  Country
                </label>
                <input
                  type="text"
                  placeholder="Select..."
                  name=""
                  id=""
                  className="post-inps"
                />
              </div>
              <div className="inp-box">
                <label htmlFor="" className="inp-label">
                  City
                </label>
                <input
                  type="text"
                  placeholder="Select..."
                  name=""
                  id=""
                  className="post-inps"
                />
              </div>
            </div>
            <div className="inp-check">
              <input type="checkbox" className="ch" name="" id="" />
              <h2 className="check">Fully Remote Positions-Worldwide</h2>
            </div>
          </div>
          <h2 className="post-title2">Job Benefits</h2>
          <div className="btn-box">
            <button className="post-btns">401K Salary</button>
            <button className="post-btns">Distributed Team</button>
            <button className="post-btns">Async</button>
            <button className="post-btns">Vision Insurance</button>
            <button className="post-btns">Medical Insurance</button>
            <button className="post-btns">Unlimited vocation</button>
            <button className="post-btns">4 day workweek</button>
            <button className="post-btns">401k matcging</button>
            <button className="post-btns">company retrears</button>
            <button className="post-btns">Learning budget</button>
            <button className="post-btns">Free gym membership</button>
            <button className="post-btns">Pay in crypto</button>
            <button className="post-btns">Profit Sharing</button>
            <button className="post-btns">Equity Compensation</button>
            <button className="post-btns">No whiteboard interview</button>
            <button className="post-btns">No politica at work</button>
            <button className="post-btns">We hire old (and young)</button>
          </div>
          <h2 className="post-title2">Job Description</h2>
          <textarea
            className="post-inps"
            name=""
            placeholder="Add your job description..."
            id=""
          ></textarea>
          <div className="loc">
            <h2 className="post-title3">Apply Job on:</h2>
            <div className="p-cards">
              <div className="p-card card-active">
                <input type="checkbox" name="" id="" className="chek" />
                <div className="p-card-texts">
                  <h2 className="p-card-title">On Jobpilot</h2>
                  <p className="p-card-text">
                    Candidate will apply job using jobpilot & all application
                    will show on your dashboard.
                  </p>
                </div>
              </div>
              <div className="p-card">
                <input type="checkbox" name="" id="" className="chek" />
                <div className="p-card-texts">
                  <h2 className="p-card-title">External Platform</h2>
                  <p className="p-card-text">
                    Candidate will apply job using jobpilot & all application
                    will show on your dashboard.
                  </p>
                </div>
              </div>
              <div className="p-card">
                <input type="checkbox" name="" id="" className="chek" />
                <div className="p-card-texts">
                  <h2 className="p-card-title">On your Email</h2>
                  <p className="p-card-text">
                    Candidate will apply job using jobpilot & all application
                    will show on your dashboard.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <button className="post-btn">Post Job <img src={icon} alt="" /></button>
        </div>
      </div>
    </div>
  );
}

export default Post;
