import React, { useRef, useState, useEffect } from 'react';
//import PropTypes from 'prop-types';
import { Button, OverlayTrigger, Popover, Form } from 'react-bootstrap';
import Flex from 'components/common/Flex';
import { faSitemap } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { Typeahead } from 'react-bootstrap-typeahead';
import './NavbarTop.css';
import { merchantService } from '_services/merchantService';
import { getItemFromStore, setItemToStore } from 'helpers/utils';

const MerchantHierarchy = () => {
  const initValues = {
    inputId: '0'
  };
  //const [merchant, setMerchant] = useState('');
  //const [dropdownValue, setDropdownValue] = useState('');
  const [top, setTop] = useState('');
  const [tops, setTops] = useState([]);
  const [district, setDistrict] = useState(null);
  const [region, setRegion] = useState(null);
  const [location, setLocation] = useState(null);
  const [districtVal, setDistrictVal] = useState('');
  const [regionVal, setRegionVal] = useState('');
  const [locationVal, setLocationVal] = useState('');
  const [inputVal, setinputVal] = useState('');
  const [inputId, setInputId] = useState();

  // Reference of Button
  const btnEl = useRef(null);

  const reset = () => {
    btnEl.current.click();
  };
  const MerchantHierarchyHandler = () => {
    btnEl.current.click();
    // if (merchant !== '') {
    //   btnEl.current.click();
    // } else {
    //   window.alert('Merchant Not Selected');
    // }
  };
  useEffect(() => {
    const formData = getItemFromStore('limit-search', initValues);
    // console.log(formData);
    setInputId(formData.inputId);
  }, []);

  useEffect(() => {
    const valuesToSave = { inputId };
    setItemToStore('limit-search', valuesToSave);
  });

  const ResetSelection = () => {
    console.log('Resetting Selection..');
    setTop('');
    setDistrictVal('');
    setRegionVal('');
    // setMerchantVal('');
    setLocationVal('');
    setDistrict([]);
    setRegion([]);
    // setMerchantVal('');
    setLocation([]);
  };

  useEffect(() => {
    merchantService.getMerchantHierarchy().then(res => setTops(res));
  }, []);

  const getNameById = (Id, objArray) => {
    const objArr = [...objArray];
    const obj = objArr.find(elem => elem.id?.toString() === Id?.toString());
    return obj?.name || 'Name';
  };

  const Done = () => {
    const isCorporateAvailabe = tops.length !== 0 && tops !== [];
    const isLocationAvailable = location.length !== 0 && location !== null;
    const isDistrictAvailable = district.length !== 0 && district !== null;
    const isRegionAvailable = region.length !== 0 && region !== null;
    // const istAvailable = region.length !== 0 && region !== null;
    if (isCorporateAvailabe && top !== '') {
      setinputVal(getNameById(top, tops));
      setInputId(top);
      // console.log(top);
      // console.log(inputId);
      if (isRegionAvailable && regionVal !== '') {
        setinputVal(getNameById(regionVal, region));
        setInputId(regionVal);
      }
      if (isDistrictAvailable && districtVal !== '') {
        setinputVal(getNameById(districtVal, district));
        setInputId(districtVal);
      }
      if (isLocationAvailable && locationVal !== '') {
        setinputVal(getNameById(locationVal, location));
        setInputId(locationVal);
      }

      reset();
    } else {
      window.alert('Please Select Corporate');
    }
  };

  const GetChildren = id => {
    const MerchantId = id;
    merchantService.getMerchantChildrenDetails(MerchantId).then(res => {
      const data = res;
      setRegion(data?.regionalMerchants || []);
      setLocation(data?.locationMerchants || []);
      setDistrict(data?.districtMerchants || []);
    });
  };

  return (
    <Flex>
      <div>
        <span>Merchant Hierarchy</span>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          {/* <Form.Label>Email address</Form.Label> */}
          <Form.Control
            readOnly={true}
            type="text"
            value={inputVal}
            placeholder="Select Merchant"
          />
        </Form.Group>

        {/* <Form.Group>
          {location === '' ? (
            <Form.Select
              onChange={e => setMerchant(e.target.value)}
              aria-label="Default select example"
            >
              <option disabled selected value="">
                Select Merchant
              </option>
              {MerchantOpts.map((elem, index) => (
                <option key={index} value={`${elem}`}>
                  {elem}
                </option>
              ))}
            </Form.Select>
          ) : (
            <Typeahead
              // clearButton
              id="basic-typeahead-single"
              labelKey="Merchant Hierarchy"
              onChange={setMerchant}
              onFocus={ResetSelection}
              options={MerchantOpts}
              //disabled={true}
              size="lg"
              // disabled={location !== ''}
              placeholder="Choose a Merchant."
              selected={location !== '' ? [location] : merchant}
            />
          )}
        </Form.Group> */}
      </div>
      <OverlayTrigger
        trigger="click"
        key="bottom"
        placement="bottom"
        overlay={
          <Popover
            placement="bottom"
            id={`merchant-hierarchy-popover`}
            style={{
              maxWidth: '50vw',
              transform: 'translate3d(601px, 61px, 0px)',

              marginLeft: '42vw',
              marginTop: '10.5vh'
            }}
          >
            <Popover.Header as="h3">{`Merchant Hierarchy`}</Popover.Header>
            <Popover.Body style={{ height: '35vh', width: '35vw' }}>
              {/* <Row> */}
              {/* <Col> */}
              {true && (
                <Form.Select
                  size="sm"
                  value={top}
                  onChange={e => {
                    GetChildren(e.target.value);
                    setTop(e.target.value);
                  }}
                  className="me-2 mb-3"
                >
                  <option value="" selected disabled>
                    Select Corporate
                  </option>
                  {tops.map((top, index) => (
                    <option value={top.id} key={index}>
                      {top.name}
                    </option>
                  ))}
                </Form.Select>
              )}
              {/* </Col> */}
              {/* <Col> */}
              {region !== null && region.length !== 0 && (
                <Form.Select
                  size="sm"
                  value={regionVal}
                  onChange={e => setRegionVal(e.target.value)}
                  className="me-2 mb-3"
                >
                  <option value=""> Select Region</option>
                  {region.map((elem, index) => (
                    <option key={index} value={elem?.id}>
                      {elem?.name}
                    </option>
                  ))}
                </Form.Select>
              )}
              {/* </Col> */}
              {/* <Col> */}
              {district !== null && district.length !== 0 && (
                <Form.Select
                  size="sm"
                  value={districtVal}
                  onChange={e => setDistrictVal(e.target.value)}
                  className="me-2 mb-3"
                  style={{ overflowY: 'scroll', maxHeight: '2rem' }}
                >
                  <option value="" selected disabled>
                    Select District
                  </option>
                  {district.map((elem, index) => (
                    <option key={index} value={elem?.id}>
                      {elem?.name}
                    </option>
                  ))}
                </Form.Select>
              )}
              {/* </Col> */}

              {/* <Col> */}
              {location !== null && location.length !== 0 && (
                <Form.Select
                  size="sm"
                  value={locationVal}
                  onChange={e => {
                    setLocationVal(e.target.value);
                  }}
                  className="me-2"
                >
                  <option value="" selected disabled>
                    Select Location
                  </option>
                  {location.map((elem, index) => (
                    <option key={index} value={elem?.id}>
                      {elem?.name}
                    </option>
                  ))}
                </Form.Select>
              )}
              {/* </Col> */}
              {/* </Row> */}
            </Popover.Body>
            <Popover.Header style={{ textAlign: 'right' }}>
              <Button onClick={Done}>Done</Button>
            </Popover.Header>
          </Popover>
        }
      >
        <Button ref={btnEl} style={{ display: 'none', visibility: 0 }}></Button>
      </OverlayTrigger>
      <Button
        onClick={() => {
          ResetSelection();
          MerchantHierarchyHandler();
        }}
        style={{
          padding: '6.5px 6px',
          height: 'max-content',
          marginTop: '22px',
          borderRadius: '0px'
        }}
      >
        <FontAwesomeIcon icon={faSitemap} />
      </Button>
    </Flex>
  );
};

MerchantHierarchy.propTypes = {};

export default MerchantHierarchy;
