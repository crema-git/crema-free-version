import React from 'react';
import { styled } from '@mui/material/styles';
import AppCard from '@crema/components/AppCard';
import Box from '@mui/material/Box';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import IconButton from '@mui/material/IconButton';
import AppList from '@crema/components/AppList';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import { AiOutlineMail, AiOutlineUser } from 'react-icons/ai';
import { BiErrorCircle, BiPhone } from 'react-icons/bi';
import { FiThumbsUp } from 'react-icons/fi';
import { MdPublic } from 'react-icons/md';

const AboutItemRoot = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  '&:not(:last-of-type)': {
    marginBottom: 16,
  },
  '&:first-of-type': {
    alignItems: 'flex-start',
  },
  '&:hover $editBtnRoot': {
    opacity: 1,
    visibility: 'visible',
  },
  '&:hover a, &:focus a': {
    color: theme.palette.primary.main,
  },
  '& a': {
    textDecoration: 'none',
    wordBreak: 'break-all',
    color: theme.palette.text.primary,
  },
  '& .material-icons': {
    display: 'block',
  },
}));

const getIconByName = (iconName) => {
  switch (iconName) {
    case 'person':
      return <AiOutlineUser />;
    case 'phone':
      return <BiPhone />;
    case 'email':
      return <AiOutlineMail />;
    case 'error':
      return <BiErrorCircle />;
    case 'thumb':
      return <FiThumbsUp />;
    case 'public':
      return <MdPublic />;
    default:
      return <AiOutlineUser />;
  }
};

const AboutItem = ({ item }) => {
  const getLinkAddress = () => {
    switch (item.linkType) {
      case 'link': {
        return <a href={item.text}>{item.text}</a>;
      }
      case 'phone': {
        return <a href={`tel:${item.text}`}>{item.text}</a>;
      }
      case 'email': {
        return <a href={`mailto:${item.text}`}>{item.text}</a>;
      }
      default:
        return <Box component="p">{item.text}</Box>;
    }
  };

  return (
    <AboutItemRoot>
      <Box component="span" sx={{ mr: 3.5, fontSize: 20 }}>
        {getIconByName(item.icon)}
      </Box>
      {getLinkAddress()}
      <Box component="span" ml="auto" mr={-2} mt={-2}>
        <IconButton
          sx={{
            color: 'primary.main',
            padding: 2,
            opacity: 0,
            visibility: 'hidden',
            '& .MuiSvgIcon-root': {
              fontSize: 20,
            },
          }}
          size="large"
        >
          <EditOutlinedIcon />
        </IconButton>
      </Box>
    </AboutItemRoot>
  );
};

const About = ({ about }) => {
  const { messages } = useIntl();
  return (
    <AppCard
      sxStyle={{ mb: 8 }}
      title={messages['wall.about']}
      action={messages['wall.editPageInfo']}
    >
      <AppList
        animation="transition.slideRightBigIn"
        data={about}
        renderRow={(data, index) => <AboutItem key={index} item={data} />}
      />
    </AppCard>
  );
};

export default About;

About.propTypes = {
  about: PropTypes.array.isRequired,
};
AboutItem.propTypes = {
  item: PropTypes.object.isRequired,
};
