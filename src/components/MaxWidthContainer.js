import { memo } from 'react';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';

const MaxWidthContainer = ({ children, className }) => (
  <Box height="100%" maxWidth={640} margin="auto" className={className}>
    {children}
  </Box>
);

MaxWidthContainer.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default memo(MaxWidthContainer);
