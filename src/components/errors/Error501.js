import React, { useContext } from 'react';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { AuthContext } from 'api/authentication/auth-context';
const Error501 = () => {
    const auth = useContext(AuthContext);
    return (
        <Card className="text-center">
            <Card.Body className="p-5">
                <div className="display-1 text-300 fs-error">501</div>
                <p className="lead mt-4 text-800 font-sans-serif fw-semi-bold">
                    Whoops, something went wrong!
                </p>
                <hr />
                <p>
                    Try refreshing the page, or going back and attempting the action again.
                    If this problem persists,
                    {/*todo: update with correct email */}
                    <Link
                        className="ms-1"
                        to={{ pathname: 'mailto:info@exmaple.com' }}
                        target="_blank"
                    >
                        contact us
                    </Link>
                </p>
                <Link className="btn btn-primary btn-sm mt-3" to="/authentication/logout" onClick={() => auth.onSignOut()}>
                    <FontAwesomeIcon icon={faHome} className="me-2" />
                    Switch Account
                </Link>
            </Card.Body>
        </Card>
    );
};
export default Error501;