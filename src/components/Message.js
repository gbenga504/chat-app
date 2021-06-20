import { memo } from 'react';
import PropTypes from 'prop-types';
import { Box, makeStyles, Paper, Typography } from '@material-ui/core';
import { format } from 'date-fns';
import classNames from 'classnames';

const Message = ({ name, body, date, isSender }) => {
  const classes = useStyles();

  return (
    <Box display="flex" width="100%" justifyContent={isSender ? 'flex-end' : 'flex-start'}>
      <Box
        pt={8}
        pl={8}
        pb={4}
        pr={4}
        component={Paper}
        elevation={0}
        maxWidth="45%"
        className={classNames(classes.messageContentBox, { messageOut: isSender })}>
        {!isSender && (
          <Typography variant="body2" color="textSecondary">
            {name}
          </Typography>
        )}
        <Typography variant="body2" color="textPrimary">
          {body}
        </Typography>
        <Box display="flex" width="100%" justifyContent={isSender ? 'flex-end' : 'flex-start'}>
          <Typography variant="caption" color="textSecondary">
            {format(new Date(date), 'dd LLL yyyy HH:mm')}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  messageContentBox: {
    border: `1px solid ${theme.palette.grey[100]}`,
    background: theme.palette.common.white,
    '&.messageOut': {
      background: theme.palette.warning.main,
    },
  },
}));

Message.propTypes = {
  name: PropTypes.string,
  body: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  isSender: PropTypes.bool,
};

export default memo(Message);
