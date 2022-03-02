import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Card, Row, Col } from 'react-bootstrap';
import Flex from 'components/common/Flex';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import BasicCardHeader from 'components/common/BasicCardHeader';
import IconItem from 'components/common/icon/IconItem';

// Placeholder Data
import { accountingStatsData } from 'data/accounting/landing';

const StatsItem = ({ stat }) => {
  const { icon, color, title, amount, caret, caretColor, target } = stat;
  return (
    <>
      <Flex justifyContent="center" alignItems="center" className="my-3">
        <IconItem
          tag="div"
          icon={icon}
          bg={`soft-${color}`}
          color={color}
          size="sm"
          iconClass="fs--2"
          className="me-2 shadow-none"
        />
        <h6 className="mb-0 flex-1">{title}</h6>
      </Flex>
      <Flex className="my-3">
        <p className="font-sans-serif lh-1 fs-4 fs-sm-5 pe-2">{amount}</p>
        <div className="d-flex flex-column">
          <FontAwesomeIcon
            icon={caret}
            className={`me-1 mb-0 text-${caretColor}`}
          />
          <p className="fs-lg--2 fs--1 mb-0 mt-0 text-nowrap">{target}</p>
        </div>
      </Flex>
    </>
  );
};

const AccountingStats = () => {
  const [stats] = useState(accountingStatsData);
  return (
    <Card className={'h-lg-100'}>
      <BasicCardHeader name={'Loan Stats'} />
      <Card.Body className={'pt-0'}>
        <Row>
          {stats.map((stat, index) => (
            <Col
              lg={2}
              sm={4}
              xs={6}
              key={stat.id}
              className={classNames({
                'border-end': index % 2 === 0, // end border only even items
                'border-sm-end': index,
                'border-sm-end-0': index % 3 === 2,
                'border-lg-end': index % 5 !== 0,
                'border-bottom': index < stats.length - 2, // bottom border for all but last 2 items
                'border-sm-bottom-0': index >= stats.length - 3, // remove bottom border on last 3 items
                'border-lg-bottom-0': index <= 3, // remove bottom border on first 4 items
                'pt-2 pt-lg-0': index >= 0
              })}
            >
              <StatsItem stat={stat} />
            </Col>
          ))}
        </Row>
      </Card.Body>
    </Card>
  );
};

StatsItem.propTypes = {
  stat: PropTypes.shape({
    amount: PropTypes.number.isRequired,
    caret: PropTypes.string.isRequired,
    caretColor: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired,
    icon: PropTypes.string.isRequired,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    target: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  })
};

AccountingStats.propTypes = {
  stats: PropTypes.arrayOf(PropTypes.shape(StatsItem.propTypes.stat))
};

export default AccountingStats;
