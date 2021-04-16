export default function validateInfo(values) {
    let errors = {}

    if (!values.firstNameAndLastName.trim()) {
        errors.firstNameAndLastName = 'Your Name is required';
    }

    if (!values.MobileNumber) {
        errors.MobileNumber = 'Mobile Number is required';
    }

    if (!values.email) {
        errors.email = 'Email Address is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Email Address is invalid';
    }

    if (!values.comment) {
        errors.comment = 'Comment is required';
    }
    return errors;
}