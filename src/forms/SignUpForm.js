import React from "react";
import DropList from "./DropList";
import { withFormik } from "formik";
import SimpleForm from "./SimpleForm";

const formikWrapper = withFormik({
    mapPropsToValues: () => ({
        username: '',
        email: '',
        topics: []
    })
})
const SignUpForm = props => {

    return (
        <form className="p-5">
            <h1>
                Sign up Form
            </h1>
            <div className="form-group">
                <label>Username:</label>
                <input name="username" type="text" placeholder="Enter username" className="form-control" />
            </div>
            <div className="form-group">
                <label>Email:</label>
                <input type="email" name="email" placeholder="Enter yout email" className="form-control" />
            </div>
            <div className="form-group">
                <label>Favorite topics</label>
                <DropList />
            </div>
            <span className="p-1">
                <button className="btn btn-secondary">Reset</button>
            </span>
            <span>
                <button type="submit" className="btn btn-primary">Submit</button>
            </span>
        </form>

    )
}

const EnhancedForm = formikWrapper(SimpleForm);
export default SignUpForm;