import { memo, useState } from 'react';
import PropTypes from 'prop-types';
import { Box, makeStyles, useMediaQuery, useTheme, TextField, Button } from '@material-ui/core';

import MaxWidthContainer from './MaxWidthContainer';

const ComposeBox = ({ onSend }) => {
  const [message, setMessage] = useState('');
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));

  const handleSend = () => {
    onSend?.(message);
    setMessage('');
  };

  return (
    <Box position="relative" width="100vw" className={classes.container}>
      <MaxWidthContainer>
        <Box display="flex" py={4} px={matches ? 4 : 12}>
          <TextField
            variant="outlined"
            fullWidth
            multiline
            rows={1}
            rowsMax={5}
            value={message}
            onChange={(evt) => setMessage(evt.target.value)}
            placeholder="Message"
            className={classes.messageBox}
          />
          <Box ml={4}>
            <Button
              size="large"
              variant="contained"
              color="secondary"
              disableElevation
              onClick={handleSend}>
              Send
            </Button>
          </Box>
        </Box>
      </MaxWidthContainer>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    background: theme.palette.primary.main,
  },
  messageBox: {
    '& .MuiInputBase-root.MuiOutlinedInput-root': {
      background: theme.palette.common.white,
    },
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderWidth: 3,
      borderColor: theme.palette.primary.dark,
    },
  },
}));

ComposeBox.propTypes = {
  onSend: PropTypes.func.isRequired,
};

export default memo(ComposeBox);
