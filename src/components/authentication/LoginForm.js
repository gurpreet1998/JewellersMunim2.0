import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import Divider from 'components/common/Divider';
import Flex from 'components/common/Flex';

import { AuthContext } from 'context/Context';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.setState({ hasLabel: props.hasLabel });
    this.setState({ layout: props.layout });
  }

  render() {
    const auth = this.context;

    // Handler
    const handleSubmit = e => {
      e.preventDefault();
      toast.success(`Redirecting to Jeweller's Munim Secure Login`);
    };

    return (
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Button
            type="primary"
            color="primary"
            className="my-3 w-100"
            onClick={() => auth.onSignIn()}
          >
            Lets go!
          </Button>
        </Form.Group>
        <Divider className="mt-4">Need something else?</Divider>
        <Col as={Flex} alignItems="center" justifyContent="center">
          <Link
            className="fs-0 mb-0 flex align-self-center"
            to={{ pathname: 'https://choicepays.com/contact/' }}
            target="_blank"
          >
            Contact us!
          </Link>
        </Col>
      </Form>
    );
  }
}

LoginForm.propTypes = {
  layout: PropTypes.string,
  hasLabel: PropTypes.bool
};

LoginForm.defaultProps = {
  layout: 'simple',
  hasLabel: false
};

LoginForm.contextType = AuthContext;
export default LoginForm;
