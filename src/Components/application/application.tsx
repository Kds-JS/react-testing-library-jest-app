import React from 'react';

const Application = () => {



    return (
        <form >
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" id="name"/>
            </div>

            <div>
                <label htmlFor="job-location">Job location</label>
                <select id="job-location">
                    <option value="">Select a country</option>
                    <option value="US">United States</option>
                    <option value="GB">United Kingdom</option>
                    <option value="CA">Canada</option>
                    <option value="IN">India</option>
                    <option value="AU">Australia</option>
                </select>
            </div>

            <div>
                <label >
                    <input type="checkbox" id="teras" /> I agree to the terms and conditions 
                </label>
                
            </div>

            <button type="submit">Submit</button>
        </form>
    );
};

export default Application;