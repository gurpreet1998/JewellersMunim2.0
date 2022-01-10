import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Button, Form, Col } from 'react-bootstrap';
import Divider from 'components/common/Divider';
import Flex from '../common/Flex';
import { AuthContext } from '../../api/authentication/auth-context';

class LoginForm extends React.Component {
  // State
  state = {
    hasLabel: {},
    layout: {},
    email: '',
    password: '',
    remember: false
  };
  constructor(props) {
    super(props);
    this.setState({ hasLabel: props.hasLabel });
    this.setState({ layout: props.layout });
  }

  render() {
    const auth = this.context;
    console.log(auth);
    // Handler
    const handleSubmit = e => {
      e.preventDefault();
      toast.success(`Logged in as ${this.state.email}`);
    };

    // const handleFieldChange = e => {
    //   this.setState({
    //     [e.target.name]: e.target.value
    //   });
    // };
    return (
      <Form onSubmit={handleSubmit}>
        {/* <Form.Group className="mb-3">
          {this.state.hasLabel && <Form.Label>Email address</Form.Label>}
          <Form.Control
            placeholder={!this.state.hasLabel ? 'Email address' : ''}
            value={this.state.email}
            name="email"
            onChange={handleFieldChange}
            type="email"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          {this.state.hasLabel && <Form.Label>Password</Form.Label>}
          <Form.Control
            placeholder={!this.state.hasLabel ? 'Password' : ''}
            value={this.state.password}
            name="password"
            onChange={handleFieldChange}
            type="password"
          />
        </Form.Group>
        <Row className="justify-content-between align-items-center">
          <Col xs="auto">
            <Form.Check type="checkbox" id="rememberMe">
              <Form.Check.Input
                type="checkbox"
                name="remember"
                checked={this.state.remember}
                onChange={e =>
                  this.setState({
                    remember: e.target.checked
                  })
                }
              />
              <Form.Check.Label className="ms-2 mb-0">
                Remember Me
              </Form.Check.Label>
            </Form.Check>
          </Col>

          <Col xs="auto">
            <Link
              className="fs--1 mb-0"
              to={`/authentication/${this.state.layout}/forgot-password`}
            >
              Forget Password?
            </Link>
          </Col>
        </Row> */}
        <Form.Group>
          <Button
            type="primary"
            color="primary"
            className="mt-3 w-100"
            // disabled={!this.state.email || !this.state.password}
            onClick={() => auth.onSignIn()}
          >
            Log in
          </Button>
        </Form.Group>
        <Divider className="mt-4">Need something else?</Divider>
        <Col as={Flex} alignItems="center" justifyContent="center">
          <Link
            className="fs-0 mb-0 flex align-self-center"
            to={`/authentication/${this.state.layout}/forgot-password`}
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
