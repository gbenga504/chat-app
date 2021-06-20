import { memo } from 'react';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';
import Message from './Message';

const MessageList = ({ messages }) => {
  return (
    <Box height="100%" position="relative" display="flex" flexDirection="column">
      {messages?.map((message) => (
        <Box pb={8} key={message.id}>
          <Message {...message} />
        </Box>
      ))}
    </Box>
  );
};

MessageList.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      ...Message.propTypes,
    }),
  ),
};

export default memo(MessageList);
